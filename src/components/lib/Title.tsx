import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAutoTextTyper from "../../hooks/useAutoTextTyper";
import Divider from "./Divider";

function getTitle(path: string) {
    switch (path) {
        case "/experience":
            return "Experience";
        case "/":
            return "Hello!";
        default:
            return "Not Found!";
    }
}

export default function Title() {
    const location = useLocation();

    const { text, cursorVisible, enqueueWord } = useAutoTextTyper(getTitle(location.pathname), {
        cursorBlinkMs: 500,
        changeIntervalMs: 85,
    });

    useEffect(() => {
        enqueueWord(getTitle(location.pathname));
    }, [location.pathname]);

    return (
        <>
            <div className="text-4xl animate-fade shadow-neutral-200 h-9 md:h-12">
                <div className="flex h-full items-center">
                    {text}
                    <div
                        className={`h-full bg-slate-50 w-[2px] ${
                            cursorVisible ? "visible" : "invisible"
                        }`}
                    ></div>
                </div>
            </div>
            <Divider />
        </>
    );
}
