import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import ContentCard from "./components/lib/ContentCard";

import MobileHeader from "./components/lib/MobileHeader";
import Experience from "./components/views/Experience";
import Home from "./components/views/Home";

const location = new ReactLocation();

function App() {
    return (
        <div className="font-cascadiacode h-screen w-screen bg-slate-600 flex">
            <Router
                location={location}
                routes={[
                    {
                        path: "/",
                        element: (
                            <ContentCard>
                                <Home />
                            </ContentCard>
                        ),
                    },
                    {
                        path: "/experience",
                        element: (
                            <ContentCard>
                                <Experience />
                            </ContentCard>
                        ),
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
