import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <p className="mb-4">There's nothing here!</p>
            <Link to={"/"} className="text-blue-400">
                Go back to home.
            </Link>
        </div>
    );
}
