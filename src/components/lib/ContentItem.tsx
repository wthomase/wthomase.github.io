import React, { useState } from "react";
import uasHasBeenInViewPort from "../../hooks/useHasBeenInViewPort";

interface ContentItemProps {
    children: React.ReactNode[] | React.ReactNode;
}

export default function ContentItem(props: ContentItemProps) {
    const { children } = props;

    const [ref, setRef] = useState<HTMLLIElement | null>(null);

    const isVisible = uasHasBeenInViewPort(ref, 0.25);

    return (
        <li
            ref={(newRef) => setRef(newRef)}
            className={`opacity-0 p-5 bg-slate-800/30 last:rounded-b-md even:bg-slate-800/50 ${
                isVisible && "animate-fadeBottomUp"
            }`}
        >
            {children}
        </li>
    );
}
