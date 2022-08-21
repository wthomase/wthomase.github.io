import { useEffect, useRef, useState } from "react";

const INACTIVE_TIME_MS = 200;

export default function useCursorBlink(cursorIndex: number, blinkMs: number) {
    const [cursorVisible, setCursorVisible] = useState(true);
    const [active, setActive] = useState(true);

    const cursorInterval = useRef<number | undefined>();
    const cursorInactiveTimeout = useRef<number | undefined>();

    // word typed
    useEffect(() => {
        setActive(true);

        cursorInactiveTimeout.current = setTimeout(() => {
            setActive(false);
        }, INACTIVE_TIME_MS);

        return () => clearTimeout(cursorInactiveTimeout.current);
    }, [cursorIndex]);

    useEffect(() => {
        if (active && !cursorVisible) {
            setCursorVisible(true);
        }

        cursorInterval.current = setInterval(() => {
            if (!active) {
                setCursorVisible(!cursorVisible);
            }
        }, blinkMs);

        return () => clearInterval(cursorInterval.current);
    }, [active, blinkMs, cursorVisible]);

    return cursorVisible;
}
