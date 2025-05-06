// react-router-dom migration => need more testing
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const useNavigate = () => {
    const router = useRouter();
    return router.push;
};
type Any = any;
const useLocation: Any = () => {
    const locationRef = useRef<Any>();

    useEffect(() => {
        locationRef.current = window.location;
    }, []);
    return [locationRef.current];
};

export {
    useNavigate,
    useLocation,
    Link
};
