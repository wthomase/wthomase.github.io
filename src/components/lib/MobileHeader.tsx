import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    menuOpen: boolean;
    setMenuOpen: (newVal: boolean) => void;
}

function Header(props: HeaderProps) {
    const { menuOpen, setMenuOpen } = props;

    return (
        <>
            <div className="flex sticky top-0 bg-slate-800/90 h-16 w-full px-6 py-2 z-20 drop-shadow-lg select-none md:hidden">
                <img className="h-12 w-12 rounded-full self-center" src="/portrait.png" />
                <div className="text-xl text-slate-200 self-center ml-4">Thomas Woodward</div>
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
        </>
    );
}

export default Header;
