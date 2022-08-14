import { Outlet, ReactLocation, Router } from "@tanstack/react-location";

import MobileHeader from "./components/lib/Header";
import Experience from "./components/views/Experience";
import Home from "./components/views/Home";

const location = new ReactLocation();

function App() {
    return (
        <div className="h-screen w-screen bg-slate-600 flex">
            <Router
                location={location}
                routes={[
                    {
                        path: "/",
                        element: <Home />,
                    },
                    {
                        path: "/experience",
                        element: <Experience />,
                    },
                ]}
            >
                <MobileHeader />
                <Outlet />
            </Router>
        </div>
    );
}

export default App;
