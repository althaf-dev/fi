/* eslint-disable camelcase */
import {
    isMobile,
    isMobileOnly,
    osName,
    mobileVendor,
    isMacOs,
    isWindows,
    browserName,
    mobileModel,
} from 'react-device-detect';
import { getCookieId } from '../events';

// eslint-disable-next-line no-var
declare var window: any;

const getBrowserName = () => browserName.toLowerCase();

const getDeviceType = () => {
    if (isMobile) {
        return isMobileOnly ? 'mobile' : 'tablet';
    }
    return 'desktop';
};

const getDeviceOSFallback = () => {
    let deviceOS = 'unknown';

    if (globalThis.window?.navigator.appVersion.indexOf('Android') !== -1) { deviceOS = 'android'; }
    if (globalThis.window?.navigator.appVersion.indexOf('iPhone') !== -1) { deviceOS = 'ios'; }
    if (globalThis.window?.navigator.appVersion.indexOf('Windows') !== -1) { deviceOS = 'Windows'; }
    if (globalThis.window?.navigator.appVersion.indexOf('Win') !== -1) { deviceOS = 'Windows OS'; }
    if (globalThis.window?.navigator.appVersion.indexOf('Mac') !== -1) { deviceOS = 'MacOS'; }
    if (globalThis.window?.navigator.appVersion.indexOf('X11') !== -1) { deviceOS = 'UNIX OS'; }
    if (globalThis.window?.navigator.appVersion.indexOf('Linux') !== -1) { deviceOS = 'Linux OS'; }

    return deviceOS;
};

const getDeviceOs = () => (osName ? osName.toLowerCase() : getDeviceOSFallback());

const getDeviceBrand = () => {
    if (mobileVendor !== 'none') {
        return mobileVendor.toLowerCase();
    }

    if (isMacOs) {
        return 'apple';
    }

    if (isWindows) {
        return 'microsoft';
    }

    return 'unknown';
};

const getDeviceModel = () => {
    if (mobileVendor !== 'none') {
        return mobileModel.toLowerCase();
    }
    return 'unknown';
};

const getDeviceResolution = () => (
    `${window.screen.width * window.devicePixelRatio}, ${window.screen.height * window.devicePixelRatio}`
);

interface DeviceInfoProps {
    device_type: string;
    device_os: string;
    device_manufacturer: string;
    device_model: string;
    device_reso?: string;
    device_resolution?: string;
    browser_type: string;
    device_id?: string;
}

const getDeviceInfo = (isRequiredForBE = false): DeviceInfoProps => {
    const deviceInfo: DeviceInfoProps = {
        device_type: getDeviceType(),
        device_os: getDeviceOs(),
        device_manufacturer: getDeviceBrand(),
        device_model: getDeviceModel(),
        browser_type: getBrowserName(),
    };

    if (isRequiredForBE) {
        deviceInfo.device_resolution = getDeviceResolution();
    } else {
        deviceInfo.device_reso = getDeviceResolution();
        deviceInfo.device_id = getCookieId('deviceId');
    }

    return deviceInfo;
};

export {
    getDeviceInfo,
    getBrowserName,
    getDeviceType,
    getDeviceOs,
    getDeviceBrand,
    getDeviceModel,
    getDeviceResolution,
};
