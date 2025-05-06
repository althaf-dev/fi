import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
    if (typeof globalThis.window !== 'undefined') {
        // here `window` is available
        const { innerWidth: width, innerHeight: height } = globalThis.window;
        return {
            width,
            height,
        };
    }

    return {};
};

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        globalThis.window?.addEventListener('resize', handleResize);
        return () => globalThis.window?.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;
