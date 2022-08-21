import useAutoTextTyper from "../../hooks/useAutoTextTyper";

interface TypingTextProps {
    words: Array<string>;
}

export default function AutoTypingText(props: TypingTextProps) {
    const { words } = props;

    const { currentString, cursorVisible } = useAutoTextTyper(words, {
        cursorBlinkMs: 500,
        delayDeletionMs: 1500,
        changeIntervalMs: 150,
        startIndex: words[0]?.length - 1 ?? 0,
    });

    return (
        <div className="flex h-full items-center">
            {currentString}
            <div
                className={`h-full bg-slate-50 w-[2px] ${cursorVisible ? "visible" : "invisible"}`}
            ></div>
        </div>
    );
}
