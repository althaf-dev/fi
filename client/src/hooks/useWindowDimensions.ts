import { useState, useEffect } from 'react';

declare let window: any;

const getWindowDimensions = () => {
    if (typeof window !== 'undefined') {
        // here `window` is available
        const { innerWidth: width, innerHeight: height } = window;
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

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;
