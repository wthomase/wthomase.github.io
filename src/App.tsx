import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ContentCard from "./components/lib/ContentCard";
import Header from "./components/lib/Header";

import Experience from "./components/views/Experience";
import Home from "./components/views/Home";
import DropdownMenu from "./components/lib/DropdownMenu";

function App() {
    const [textAnimPlayed, setTextAnimPlayed] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={"font-cascadiacode min-h-[600px] h-full w-full overflow-visible"}>
            <BrowserRouter>
                <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
                <DropdownMenu
                    open={menuOpen}
                    onSelect={() => {
                        setMenuOpen(false);
                    }}
                />
                <div className="flex grow px-4 py-8 md:mx-auto md:w-[768px]">
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
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
