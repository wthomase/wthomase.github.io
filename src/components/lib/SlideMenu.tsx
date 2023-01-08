import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTimeline } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import useWindowResizeAnimFreeze from "../../hooks/useWindowResizeAnimFreeze";

interface SlideMenuProps {
    open: boolean;
    onSelect: () => void;
}

function SlideMenu(props: SlideMenuProps) {
    const { open, onSelect } = props;

    const [divRef, setDivRef] = useState<HTMLDivElement | null>(null);

    useWindowResizeAnimFreeze(divRef);

    const onSetRef = useCallback((ref: HTMLDivElement) => {
        setDivRef(ref);
    }, []);

    const onClick = () => onSelect();
    const selectedClassName = "border-b-slate-100 border-b-2 pb-2";

    return (
        <nav
            ref={onSetRef}
            className={`-translate-x-full ease-in-out duration-200
                ${open && `will-change-transform translate-x-0`}
                fixed top-16 left-0 right-0 bottom-0 bg-slate-800 backdrop-blur-md z-10 md:hidden`}
        >
            <ul className="flex flex-col h-full">
                <li className="text-slate-100 text-4xl m-auto cursor-pointer select-none">
                    <NavLink
                        to={"/"}
                        onClick={onClick}
                        className={({ isActive }) => (isActive ? selectedClassName : undefined)}
                    >
                        <FontAwesomeIcon icon={faHome} className="mr-5" />
                        Home
                    </NavLink>
                </li>
                <li className="text-slate-100 text-4xl m-auto cursor-pointer select-none">
                    <NavLink
                        to={"/experience"}
                        onClick={onClick}
                        className={({ isActive }) => (isActive ? selectedClassName : undefined)}
                    >
                        <FontAwesomeIcon icon={faTimeline} className="mr-5" />
                        Experience
                    </NavLink>
                </li>
                <li
                    className="text-slate-100 text-4xl m-auto cursor-pointer select-none"
                    onClick={onClick}
                >
                    <a href={"https://linkedin.com/in/thomas-woodward-571947117"} target={"_blank"}>
                        <FontAwesomeIcon icon={faLinkedin} className="mr-5" />
                        Contact
                    </a>
                </li>
                <li
                    className="text-slate-100 text-4xl m-auto cursor-pointer select-none"
                    onClick={onClick}
                >
                    日本語
                </li>
            </ul>
        </nav>
    );
}

export default SlideMenu;
