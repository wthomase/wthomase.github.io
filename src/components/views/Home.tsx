import { useEffect, useRef } from "react";
import AutoTypingText from "../lib/AutoTypingText";

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

    return (
        <div>
            <div className="text-4xl md:text-5xl animate-fade shadow-neutral-200 mb-10 h-9 md:h-12">
                <AutoTypingText
                    words={
                        !hasPlayedRef.current ? ["Hello!", "こんにちは！", "Hello!"] : ["Hello!"]
                    }
                />
            </div>
            <div className="text-lg animate-fadeBottomUp ease-in-out overflow-auto">
                I am a Software Engineer currently based in Seattle. In my short time in the
                industry I've primarily worked in web development.
            </div>
        </div>
    );
}
