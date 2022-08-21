import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTimeline } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export default function CardHeader() {
    const navigate = useNavigate();

    const onNavigate = (path: string | null, external?: boolean) => {
        if (path) {
            if (external) {
                window.open(path, "_blank");
            } else {
                navigate(path);
            }
        }
    };

    return (
        <div className="hidden md:visible md:flex md:mb-16 md:relative">
            <img className="h-16 w-16 rounded-full self-center" src="/portrait.png" />
            <div
                className="text-slate-100 text-2xl m-auto ml-8 cursor-pointer select-none whitespace-nowrap"
                onClick={() => onNavigate("/")}
            >
                <FontAwesomeIcon icon={faHome} className="mr-5" />
                Home
            </div>
            <div
                className="text-slate-100 text-2xl m-auto cursor-pointer select-none whitespace-nowrap"
                onClick={() => onNavigate("/experience")}
            >
                <FontAwesomeIcon icon={faTimeline} className="mr-5" />
                Experience
            </div>
            <div
                className="text-slate-100 text-2xl m-auto cursor-pointer select-none whitespace-nowrap"
                onClick={() =>
                    onNavigate(`https://linkedin.com/in/thomas-woodward-571947117`, true)
                }
            >
                <FontAwesomeIcon icon={faLinkedin} className="mr-5" />
                Contact
            </div>
            <div
                className="text-slate-100 text-2xl m-auto cursor-pointer select-none whitespace-nowrap"
                onClick={() => onNavigate(null)}
            >
                日本語
            </div>
        </div>
    );
}
