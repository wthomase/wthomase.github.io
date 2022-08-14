import { useEffect, useRef } from "react";

export default function useWindowResizeAnimFreeze(htmlEle: HTMLDivElement | null) {
    const animTimeout = useRef<number | undefined>();

    useEffect(() => {
        function addStopper() {
            if (htmlEle) {
                htmlEle.classList.add("transition-none");

                clearTimeout(animTimeout.current);
                animTimeout.current = setTimeout(() => {
                    removeStopper();
                }, 100);
            }
        }

        function removeStopper() {
            if (htmlEle) {
                htmlEle.classList.remove("transition-none");
            }
        }

        window.addEventListener("resize", addStopper);

        return () => {
            window.removeEventListener("resize", addStopper);
        }
    }, [htmlEle]); 
}