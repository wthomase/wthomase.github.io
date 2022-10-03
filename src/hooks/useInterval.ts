import { useRef, useEffect } from "react";

// TSified verison of Dan Abramov's useInterval: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export default function useInterval(callback: () => any, delayMs: number | null) {
    const savedCallback = useRef<(() => any) | undefined>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            if (typeof savedCallback.current === "function") {
                savedCallback.current();
            }
        }
        if (delayMs !== null) {
            let id = setInterval(tick, delayMs);
            return () => {
                clearInterval(id);
            };
        }
    }, [delayMs]);
}
