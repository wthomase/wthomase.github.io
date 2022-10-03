import React, { useState } from "react";
import uasHasBeenInViewPort from "../../hooks/useHasBeenInViewPort";

interface TimelineCrumbProps {
    children: React.ReactNode[] | React.ReactNode;
}

function TimelineCrumb(props: TimelineCrumbProps) {
    const { children } = props;

    const [ref, setRef] = useState<HTMLLIElement | null>(null);

    const isVisible = uasHasBeenInViewPort(ref, 0.25);

    return (
        <li
            ref={(newRef) => setRef(newRef)}
            className={`opacity-0 p-5 mb-4 bg-slate-800/30 rounded-md ${
                isVisible && "animate-fadeBottomUp"
            }`}
        >
            {children}
        </li>
    );
}

export default TimelineCrumb;
