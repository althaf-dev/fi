import { getCookie } from '../../events/CookieManager';
// eslint-disable-next-line no-var
declare var window: any;

const redirectBackToNativeApp = (platform, success) => {
    try {
        const result = success === 'true';
        const payload = { result };
        const stringifiedPayload = JSON.stringify(payload);

        if (platform === 'ANDROID') {
            window?.fiAndroidApp?.gmailConsentCallback(stringifiedPayload);
        }

        if (platform === 'IOS') {
            window?.webkit?.messageHandlers?.fiIosApp?.postMessage(stringifiedPayload);
        }
    } catch (error) {
        console.error('error in redirectBackToNativeApp: ', error);
    }
};

const isNativeAppFlow = () => {
    let platform = getCookie('platform');
    if (platform) platform = platform.toUpperCase();
    // Check if user is coming from android or ios app
    // access status check is needed only for web flow
    return (platform === 'ANDROID' || platform === 'IOS');
};

export {
    redirectBackToNativeApp,
    isNativeAppFlow,
};
