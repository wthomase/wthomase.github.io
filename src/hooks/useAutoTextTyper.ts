import { useReducer, useRef } from "react";
import useCursorBlink from "./useCursorBlink";
import useInterval from "./useInterval";

interface TypingTextOptions {
    changeIntervalMs: number;
    cursorBlinkMs: number;
    delayDeletionMs: number;

    startIndex: number;
}

interface TypingTextState {
    words: string[];
    wordIndex: number;
    cycled: boolean;
    strIndex: number;
    dir: ActionTypes.FORWARD | ActionTypes.BACKWARD;
    completed: boolean;

    delayMs: number;
    changeIntervalMs: number;
    delayDeletionMs: number;
}

enum ActionTypes {
    BACKWARD = 0,
    FORWARD = 1,
    NEXT_WORD = 2,
    MARK_COMPLETE = 3,
    TOGGLE_DIR = 4,
    DELAY = 5,
}

function typingTextReducer(state: TypingTextState, action: { type: number }): TypingTextState {
    switch (action.type) {
        case ActionTypes.FORWARD:
            return {
                ...state,
                strIndex: state.strIndex + 1,
                dir: ActionTypes.FORWARD,
                delayMs: state.changeIntervalMs,
            };
        case ActionTypes.BACKWARD:
            return {
                ...state,
                strIndex: state.strIndex - 1,
                dir: ActionTypes.BACKWARD,
                cycled: state.dir === ActionTypes.BACKWARD && state.strIndex - 1 === -1,
                delayMs: state.changeIntervalMs,
            };
        case ActionTypes.NEXT_WORD:
            return {
                ...state,
                wordIndex: state.wordIndex + 1,
                strIndex: -1,
                cycled: false,
                delayMs: state.changeIntervalMs,
            };
        case ActionTypes.DELAY:
            return {
                ...state,
                delayMs: state.delayDeletionMs,
            };
        case ActionTypes.MARK_COMPLETE:
            return {
                ...state,
                completed: true,
            };
        default:
            throw Error("Fatal: Action type did not match.");
    }
}

export default function useAutoTextTyper(words: string[], options: TypingTextOptions) {
    const initialState: TypingTextState = {
        words,
        wordIndex: 0,
        cycled: false,
        strIndex: options.startIndex && words.length > 0 ? words[0].length - 1 : -1,
        dir: ActionTypes.FORWARD,
        completed: false,
        delayMs: options.changeIntervalMs,
        changeIntervalMs: options.changeIntervalMs,
        delayDeletionMs: options.delayDeletionMs,
    };

    const [state, dispatch] = useReducer(typingTextReducer, initialState);
    const actionQueue = useRef<ActionTypes[]>([]);

    const cursorVisible = useCursorBlink(state.strIndex, options.cursorBlinkMs);

    const enqueueAction = (type: ActionTypes) => actionQueue.current?.push(type);

    useInterval(
        () => {
            const lastWord = state.wordIndex === words.length - 1;
            const endOfWord = state.strIndex === state.words[state.wordIndex].length - 1;
            const startOfWord = state.strIndex === -1;

            // Don't step while enqueued, may requeue stale state
            if (actionQueue.current.length === 0) {
                if (lastWord && endOfWord) {
                    enqueueAction(ActionTypes.MARK_COMPLETE);
                } else if (startOfWord && state.cycled) {
                    enqueueAction(ActionTypes.NEXT_WORD);
                } else if (endOfWord && !state.cycled) {
                    enqueueAction(ActionTypes.DELAY);
                    enqueueAction(ActionTypes.BACKWARD);
                } else if (startOfWord && !state.cycled) {
                    enqueueAction(ActionTypes.DELAY);
                    enqueueAction(ActionTypes.FORWARD);
                } else {
                    enqueueAction(state.dir);
                }
            }

            dispatch({ type: actionQueue.current?.shift() as number });
        },
        !state.completed ? state.delayMs : null
    );

    const buildStr = state.words[state.wordIndex].substring(0, state.strIndex + 1);

    return {
        currentString: buildStr,
        cursorVisible,
    };
}
