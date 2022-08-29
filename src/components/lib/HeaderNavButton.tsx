import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

interface NavButtonProps {
    displayName: string;
    path: string;
    icon: IconDefinition;
    className?: string;
}

function NavButton(props: NavButtonProps) {
    const { displayName, icon, className, path } = props;

    return (
        <div
            className={
                `flex group cursor-pointer self-center align-middle` +
                (className ? ` ${className}` : "")
            }
        >
            <NavLink to={path} className={"block"}>
                <FontAwesomeIcon icon={icon} size={"lg"} className="mr-2 inline" />
            </NavLink>
        </div>
    );
}

export default NavButton;
