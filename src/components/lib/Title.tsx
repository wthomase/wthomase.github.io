import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAutoTextTyper from "../../hooks/useAutoTextTyper";
import useLanguage from "../../hooks/useLanguage";
import { TranslationMap } from "../../util/translations";
import Divider from "./Divider";

function getTitle(path: string, translations: TranslationMap) {
    switch (path) {
        case "/experience":
            return translations.titles.experience;
        case "/":
            return translations.titles.home;
        default:
            return translations.titles.notFound;
    }
}

export default function Title() {
    const { translations, lang } = useLanguage();
    const location = useLocation();

    const { text, cursorVisible, enqueueWord } = useAutoTextTyper(
        getTitle(location.pathname, translations),
        {
            cursorBlinkMs: 500,
            changeIntervalMs: 85,
        }
    );

    useEffect(() => {
        enqueueWord(getTitle(location.pathname, translations));
    }, [location.pathname, lang]);

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
