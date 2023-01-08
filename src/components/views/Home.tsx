import { useEffect, useRef } from "react";
import useAutoTextTyper from "../../hooks/useAutoTextTyper";
import Divider from "../lib/Divider";

interface HomeProps {
    textAnimPlayed: boolean;
    setTextAnimPlayed: (played: boolean) => void;
}

export default function Home(props: HomeProps) {
    const { textAnimPlayed, setTextAnimPlayed } = props;

    const hasPlayedRef = useRef(textAnimPlayed);

    useEffect(() => {
        return () => setTextAnimPlayed(true);
    }, []);

    const titleText = !hasPlayedRef.current ? ["Hello!", "こんにちは！", "Hello!"] : ["Hello!"];

    const { currentString, cursorVisible } = useAutoTextTyper(titleText, {
        cursorBlinkMs: 500,
        delayDeletionMs: 1500,
        changeIntervalMs: 125,
        startIndex: titleText[0].length - 1,
    });

    return (
        <div>
            <div className="text-4xl animate-fade shadow-neutral-200 h-9 md:h-12">
                <div className="flex h-full items-center">
                    {currentString}
                    <div
                        className={`h-full bg-slate-50 w-[2px] ${
                            cursorVisible ? "visible" : "invisible"
                        }`}
                    ></div>
                </div>
            </div>
            <Divider />
            <p className="text-lg animate-fadeLeftIn ease-in-out">
                I'm a Software Engineer currently living in the Seattle area. In my short time in
                the industry I've primarily worked in full-stack web development.
            </p>
            <p className="opacity-0 text-lg animate-fadeLeftIn ease-in-out animationDelay-[150ms] mt-4">
                I'm always happy to connect with others, please feel free to reach out to me on
                LinkedIn!
            </p>
            <p className="opacity-0 text-lg animate-fadeLeftIn ease-in-out animationDelay-300 mt-4">
                If you're looking for a brief overview of my work experience please check out the
                Experience tab. A full resume is available upon request.
            </p>
        </div>
    );
}
