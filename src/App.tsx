import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ContentCard from "./components/lib/ContentCard";
import MobileHeader from "./components/lib/MobileHeader";

import Experience from "./components/views/Experience";
import Home from "./components/views/Home";

function App() {
    const [textAnimPlayed, setTextAnimPlayed] = useState(false);

    return (
        <div className="flex font-cascadiacode min-h-[400px] h-screen w-screen bg-slate-600">
            <BrowserRouter>
                <MobileHeader />
                <Routes>
                    <Route
                        index
                        element={
                            <ContentCard>
                                <Home
                                    textAnimPlayed={textAnimPlayed}
                                    setTextAnimPlayed={setTextAnimPlayed}
                                />
                            </ContentCard>
                        }
                    />
                    <Route
                        path="experience"
                        element={
                            <ContentCard>
                                <Experience />
                            </ContentCard>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
