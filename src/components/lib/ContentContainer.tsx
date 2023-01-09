import { useState } from "react";
import uasHasBeenInViewPort from "../../hooks/useHasBeenInViewPort";

interface ContentContainerProps {
    startStr?: string;
    endStr?: string;
    title?: string;
    description?: string;
    children?: JSX.Element[] | JSX.Element;
}

export default function ContentContainer(props: ContentContainerProps) {
    const { startStr, endStr, title, description, children } = props;

    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const isVisible = uasHasBeenInViewPort(ref, 0.05);

    return (
        <div className={"inline-block mb-16 w-full"} ref={(newRef) => setRef(newRef)}>
            <div
                className={`opacity-0 flex flex-col bg-slate-800/50 text-slate-100 rounded-t-md px-4 py-2 ${
                    isVisible ? " animate-fadeBottomUp" : ""
                }`}
            >
                <div>
                    <div className="text-lg w-fit">{title}</div>
                    <div className="text-base w-fit">{description}</div>
                </div>
                {startStr || endStr ? (
                    <div className="inline-flex mt-6">
                        <div className="flex text-sm text-center mr-2">{startStr}</div>
                        {startStr && endStr && "-"}
                        <div className="flex text-sm text-center ml-2">{endStr}</div>
                    </div>
                ) : (
                    ""
                )}
            </div>

            <ul>{children}</ul>
        </div>
    );
}
