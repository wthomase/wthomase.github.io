import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faHome, faTimeline } from "@fortawesome/free-solid-svg-icons";
import NavButton from "./HeaderNavButton";

interface HeaderProps {
    menuOpen: boolean;
    setMenuOpen: (newVal: boolean) => void;
}

function Header(props: HeaderProps) {
    const { menuOpen, setMenuOpen } = props;

    return (
        <div className="sticky text-slate-200 top-0 bg-slate-800/90 h-16 w-full px-6 py-2 z-20 drop-shadow-lg select-none">
            <div className="flex md:mx-auto md:w-[720px]">
                <img className="h-12 w-12 rounded-full self-center" src="/portrait.png" />
                <div className="text-xl self-center ml-4">Thomas Woodward</div>
                <div className="hidden md:flex ml-auto self-center align-middle">
                    <NavButton path="/" displayName="Home" icon={faHome} />
                    <NavButton
                        path="/experience"
                        displayName="Experience"
                        icon={faTimeline}
                        className={"ml-4"}
                    />
                </div>
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
        </div>
    );
}

export default Header;
