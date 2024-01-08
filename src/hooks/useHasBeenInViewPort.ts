import { useEffect, useRef, useState } from "react";

export default function uasHasBeenInViewPort(
    ele: HTMLElement | null,
    threshold?: number | number[]
) {
    const [isVisible, setIsVisible] = useState(false);
    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                for (let entry of entries) {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            },
            {
                threshold: threshold || 0.01,
            }
        )
    );

    useEffect(() => {
        if (ele) {
            observer.current.observe(ele);
        }

        return () => {
            if (ele) {
                observer.current.unobserve(ele);
            }
        };
    }, [ele]);

    return isVisible;
}
