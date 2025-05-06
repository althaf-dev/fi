'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { isBrowser, isMobile } from 'react-device-detect';

export default function Page() {
    const searchParams = useSearchParams();
    const data = searchParams.get('data');
    const loginRequired = searchParams.get('login_required');

    const [device, setDevice] = useState<string>();

    useEffect(() => {
        if (isBrowser) {
            setDevice('browser');
        }
        if (isMobile) {
            setDevice('mobile');
        }
    }, []);

    useEffect(() => {
        if (device && device === 'mobile') {
            const url = `fi://screen?data=${data}&login_required=${loginRequired}`;
            window.location.replace(url);
        }
    }, [device]);

    return (
        <div>
            {device === 'browser' && <div>Please use a mobile device</div>}
            {device === 'mobile' && <div>Redirecting to the Fi App...</div>}
            {!device && <div>Loading...</div>}
        </div>
    );
}
