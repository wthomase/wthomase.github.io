import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "./components/lib/Nav";

import Experience from "./components/views/Experience";
import Home from "./components/views/Home";
import SlideMenu from "./components/lib/SlideMenu";

const observer = new IntersectionObserver(() => {}, {
    root: document.querySelector("html"),
});

function App() {
    const [textAnimPlayed, setTextAnimPlayed] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={"font-cascadiacode min-h-[600px] h-full w-full"}>
            <BrowserRouter>
                <Nav setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
                <SlideMenu
                    open={menuOpen}
                    onSelect={() => {
                        setMenuOpen(false);
                    }}
                />
                <div className="flex grow mt-16 md:mx-auto md:py-8 md:w-[720px]">
                    <div className="text-slate-100 relative flex flex-col min-h-[480px] w-full z-0 p-8 md:p-6 overflow-hidden md:min-h-[640px]">
                        <Routes>
                            <Route
                                index
                                element={
                                    <Home
                                        textAnimPlayed={textAnimPlayed}
                                        setTextAnimPlayed={setTextAnimPlayed}
                                    />
                                }
                            />
                            <Route path="experience" element={<Experience />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
