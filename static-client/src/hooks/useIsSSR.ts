import { useEffect, useState } from 'react';

/**
 * this custom hook tells us whether the client code is being executed
 * on the server side(for SSR) or on the client side.
 * If it returns true, this code is getting executed on the client side
 * Else if it returns false, this code is getting executed on the server side(for SSR)
 */
const useIsSSR = () => {
    // we always start off in "SSR mode", to ensure our initial browser render matches the SSR render
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        // `useEffect` never runs on the server, so we must be on the client if we hit this block
        setIsSSR(false);
    }, []);

    return isSSR;
};

export default useIsSSR;
