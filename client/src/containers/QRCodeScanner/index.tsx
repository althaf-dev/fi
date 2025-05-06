import React, { useEffect } from 'react';
import { getDeviceOs, getDeviceType } from '../../device';
import { APP_PLAY_STORE_URL_V2, IOS_APP_STORE_URL } from '../../constants/AppConstant';
import {
    trackEvent,
    trackGTMEvent,
    SCANNED_QR_CODE,
} from '../../events';

// eslint-disable-next-line no-var
declare var window: any;

const QRCodeScanner = () => {
    const deviceOS = getDeviceOs();
    const deviceType = getDeviceType();

    const redirectToUrl = (URL) => {
        trackEvent(SCANNED_QR_CODE, { device_os: deviceOS, device_type: deviceType });
        trackGTMEvent(SCANNED_QR_CODE);

        if (deviceType === 'desktop') {
            window.location.href = URL;
        } else if (window.oneLinkCommonUrl) {
            window.location.href = window.oneLinkCommonUrl || URL;
        } else {
            window.location.href = URL;
        }
    };

    useEffect(() => {
        if (deviceOS === 'android') {
            redirectToUrl(APP_PLAY_STORE_URL_V2);
        } else if (deviceOS === 'ios') {
            redirectToUrl(IOS_APP_STORE_URL);
        } else {
            redirectToUrl(APP_PLAY_STORE_URL_V2);
        }
    }, [deviceOS]);

    return (
        <></>
    );
};

export default QRCodeScanner;
