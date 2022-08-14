import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import DropdownMenu from "./DropdownMenu";

function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="flex fixed bg-slate-800 h-16 w-full px-6 py-2 z-20 drop-shadow-lg select-none md:hidden">
                <img
                    className="h-12 w-12 rounded-full self-center"
                    src="/portrait.png"
                />
                <div className="text-xl text-slate-200 self-center ml-2">
                    Thomas Woodward
                </div>
                <div
                    className="text-slate-200 ml-auto self-center cursor-pointer"
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
            <DropdownMenu
                open={menuOpen}
                onSelect={() => {
                    setMenuOpen(false);
                }}
            />
        </>
    );
}

export default MobileHeader;
