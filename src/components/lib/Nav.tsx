import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faHome, faTimeline } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useWindowResizeAnimFreeze from "../../hooks/useWindowResizeAnimFreeze";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import useLanguage, { SupportedLanguages } from "../../hooks/useLanguage";

interface NavProps {
    menuOpen: boolean;
    setMenuOpen: (newVal: boolean) => void;
}

export default function Nav(props: NavProps) {
    const { menuOpen, setMenuOpen } = props;

    const [selWidth, setSelWidth] = useState<number | null>(null);
    const [selPos, setSelPos] = useState<number | null>(null);

    const selRef = useRef<HTMLDivElement | null>(null);
    const homeRef = useRef<HTMLLIElement | null>(null);
    const expRef = useRef<HTMLLIElement | null>(null);

    const location = useLocation();
    const { translations, lang, setLang } = useLanguage();

    useWindowResizeAnimFreeze(selRef.current);

    const selResizer = useCallback(() => {
        if (location.pathname !== "/" && location.pathname !== "/experience") {
            setSelWidth(0);
            setSelPos(0);
        } else {
            setSelWidth(
                location.pathname === "/"
                    ? homeRef?.current?.clientWidth!
                    : expRef?.current?.clientWidth!
            );
            setSelPos(
                location.pathname === "/"
                    ? homeRef?.current?.offsetLeft!
                    : expRef?.current?.offsetLeft!
            );
        }
    }, [location.pathname, homeRef.current, expRef.current]);

    useEffect(() => {
        selResizer();
    }, [location.pathname, lang]);

    useEffect(() => {
        window.addEventListener("resize", selResizer);
        // handles case where initial load pre-cache doesn't pick up changes to offsetLeft on Home ref
        window.addEventListener("load", selResizer);

        return () => {
            window.removeEventListener("resize", selResizer);
            window.removeEventListener("load", selResizer);
        };
    }, [selResizer]);

    return (
        <nav className="fixed text-slate-200 top-0 bg-slate-800/90 h-16 w-full px-6 py-2 z-20 drop-shadow-lg">
            <div className="flex md:mx-auto md:w-[720px]">
                <img className="h-12 w-12 rounded-full self-center" src="/portrait.png" />
                <div className="text-xl self-center ml-4">Thomas Woodward</div>
                <ul className="hidden md:flex ml-auto self-center align-middle">
                    <div
                        ref={selRef}
                        className={`absolute border-b-slate-50 border-b-2 rounded-xl bottom-2 transition-widthPos ease-in-out duration-150`}
                        style={{
                            display: !selWidth || !selPos ? "none" : "block",
                            width: selWidth || 0,
                            left: selPos || 0,
                        }}
                    />
                    <li
                        ref={homeRef}
                        className={`flex group cursor-pointer self-center align-middle select-none`}
                    >
                        <NavLink to={"/"} className={"block"}>
                            <FontAwesomeIcon icon={faHome} size={"lg"} className="inline mr-2" />
                            {translations.nav.home}
                        </NavLink>
                    </li>
                    <li
                        ref={expRef}
                        className={`flex group cursor-pointer self-center align-middle select-none ml-8`}
                    >
                        <NavLink to={"/experience"} className={"block"}>
                            <FontAwesomeIcon
                                icon={faTimeline}
                                size={"lg"}
                                className="inline mr-2"
                            />
                            {translations.nav.experience}
                        </NavLink>
                    </li>
                    <li className="flex group cursor-pointer self-center align-middle select-none ml-8">
                        <a
                            href={"https://linkedin.com/in/thomas-woodward-571947117"}
                            target={"_blank"}
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size={"lg"}
                                className="inline mr-2"
                            />
                            {translations.nav.contact}
                        </a>
                    </li>
                    <li className="flex group cursor-pointer self-center align-middle select-none ml-8">
                        <div
                            onClick={() => {
                                setLang(
                                    lang === SupportedLanguages.English
                                        ? SupportedLanguages.Japanese
                                        : SupportedLanguages.English
                                );
                            }}
                        >
                            {translations.nav.swap}
                        </div>
                    </li>
                </ul>
                <div
                    className="ml-auto self-center cursor-pointer md:hidden"
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}
                >
                    <FontAwesomeIcon
                        className={`transition ease-in-out select-none`}
                        icon={!menuOpen ? faBars : faX}
                        size="2x"
                    />
                </div>
            </div>
        </nav>
    );
}
