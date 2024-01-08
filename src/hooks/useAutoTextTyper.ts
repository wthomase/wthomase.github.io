import { useReducer, useRef } from "react";
import useCursorBlink from "./useCursorBlink";
import useInterval from "./useInterval";

interface TypingTextOptions {
    cursorBlinkMs: number;
    changeIntervalMs: number;
}

interface TypingTextState {
    curWord: string;
    words: string[];
    cycled: boolean;
    strIndex: number;
    dir: ActionTypes.FORWARD | ActionTypes.BACKWARD;
    idle: boolean;
    delayMs: number;
}

enum ActionTypes {
    BACKWARD = "BACKWARD",
    FORWARD = "FORWARD",
    NEXT_WORD = "NEXT_WORD",
    IDLE = "IDLE",
    ENQUEUE = "ENQUEUE",
}

function typingTextReducer(
    state: TypingTextState,
    action: { type: ActionTypes; word?: string }
): TypingTextState {
    switch (action.type) {
        case ActionTypes.FORWARD:
            return {
                ...state,
                curWord: state.words[0].substring(0, state.strIndex + 1),
                strIndex: state.strIndex + 1,
                dir: ActionTypes.FORWARD,
            };
        case ActionTypes.BACKWARD:
            return {
                ...state,
                curWord: state.words[0].substring(0, state.strIndex - 1),
                strIndex: state.strIndex - 1,
                dir: ActionTypes.BACKWARD,
                cycled: state.dir === ActionTypes.BACKWARD && state.strIndex - 1 === 0,
            };
        case ActionTypes.NEXT_WORD:
            return {
                ...state,
                curWord: "",
                words: state.words.length > 1 ? state.words.slice(1) : state.words,
                strIndex: 0,
                cycled: false,
            };
        case ActionTypes.ENQUEUE: {
            const words = state.words.length > 0 ? [state.words[0]] : [];

            if (action.word && state.words[0] !== action.word) {
                words.push(action.word);
            }

            return {
                ...state,
                dir:
                    state.words.length > 0 && state.words[0] !== action.word
                        ? ActionTypes.BACKWARD
                        : ActionTypes.FORWARD,
                strIndex: state.words.length > 0 ? state.strIndex : 0,
                cycled: state.words.length > 0,
                idle: false,
                words,
            };
        }
        case ActionTypes.IDLE:
            return {
                ...state,
                idle: true,
            };
        default:
            throw Error("Fatal: Action type did not match.");
    }
}

export default function useAutoTextTyper(startWord: string, options: TypingTextOptions) {
    const initialState: TypingTextState = {
        words: startWord ? [startWord] : [],
        cycled: false,
        curWord: "",
        strIndex: 0,
        dir: ActionTypes.FORWARD,
        idle: !startWord,
        delayMs: options.changeIntervalMs,
    };

    const [state, dispatch] = useReducer(typingTextReducer, initialState);
    const actionQueue = useRef<ActionTypes[]>([]);

    const cursorVisible = useCursorBlink(state.strIndex, options.cursorBlinkMs);

    const enqueueAction = (type: ActionTypes) => actionQueue.current?.push(type);

    useInterval(
        () => {
            const lastWord = state.words.length === 1;
            const endOfWord = state.strIndex === state.words[0].length;
            const startOfWord = state.strIndex === 0;

            // Don't step while enqueued, may requeue stale state
            if (actionQueue.current.length === 0) {
                if (lastWord && endOfWord) {
                    enqueueAction(ActionTypes.IDLE);
                } else if (startOfWord && state.cycled) {
                    enqueueAction(ActionTypes.NEXT_WORD);
                } else if (endOfWord && !state.cycled) {
                    enqueueAction(ActionTypes.BACKWARD);
                } else if (startOfWord && !state.cycled) {
                    enqueueAction(ActionTypes.FORWARD);
                } else {
                    enqueueAction(state.dir);
                }
            }

            const newAction = actionQueue.current?.shift();

            if (newAction) {
                dispatch({ type: newAction });
            }
        },
        !state.idle ? state.delayMs : null
    );

    return {
        text: state.curWord,
        cursorVisible,
        enqueueWord: (word: string) => {
            dispatch({ type: ActionTypes.ENQUEUE, word });
        },
    };
}
