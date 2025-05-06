import { useRef, useEffect } from 'react';

export const useWindow = () => {
    const windowRef = useRef<any>();

    useEffect(() => {
        windowRef.current = window;
    }, []);

    return [windowRef.current];
};
