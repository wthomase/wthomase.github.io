import { useCallback, useState } from "react";
import { useNavigate } from "@tanstack/react-location";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import useWindowResizeAnimFreeze from "../../hooks/useWindowResizeAnimFreeze";

interface DropdownProps {
    open: boolean;
    onSelect: () => void;
}

function DropdownMenu(props: DropdownProps) {
    const { open, onSelect } = props;

    const [divRef, setDivRef] = useState<HTMLDivElement | null>(null);

    useWindowResizeAnimFreeze(divRef);

    const navigate = useNavigate();

    const onSetRef = useCallback((ref: HTMLDivElement) => {
        setDivRef(ref);
    }, []);

    const onNavigate = (path: string | null, external?: boolean) => {
        onSelect();

        if (path) {
            if (external) {
                window.open(path, "_blank");
            } else {
                navigate({ to: path });
            }
        }
    };

    return (
        <div
            ref={onSetRef}
            className={`-top-[calc(100vh_+_4rem)] transition ease-in-out duration-300
                ${open && ` translate-y-[calc(100vh_+_8rem)]`} 
                h-[calc(100vh_-_4rem)] w-full absolute bg-slate-800 backdrop-blur-md z-10 md:hidden`}
        >
            <ul className="flex flex-col h-full">
                <li
                    className="text-slate-100 text-4xl m-auto cursor-pointer select-none"
                    onClick={() => onNavigate("/")}
                >
                    <FontAwesomeIcon icon={faHome} className="mr-5" />
                    Home
                </li>
                <li
                    className="text-slate-100 text-4xl m-auto cursor-pointer select-none"
                    onClick={() => onNavigate("/experience")}
                >
                    Experience
                </li>
                <li
                    className="text-slate-100 text-4xl m-auto cursor-pointer select-none"
                    onClick={() =>
                        onNavigate(
                            `https://linkedin.com/in/thomas-woodward-571947117`,
                            true
                        )
                    }
                >
                    <FontAwesomeIcon icon={faLinkedin} className="mr-5" />
                    Contact
                </li>
                <li
                    className="text-slate-100 text-4xl m-auto cursor-pointer select-none"
                    onClick={() => onNavigate(null)}
                >
                    日本語
                </li>
            </ul>
        </div>
    );
}

export default DropdownMenu;
