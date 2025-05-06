import { ClientPlatform } from '../interfaces/mobile';

// eslint-disable-next-line no-var
declare var window: any;

/**
 * Calls mobile functions and passes the payload based on the event
 * @param platform The mobile platform to send the callback to
 * @param payload The payload that is sent to mobile device
 */
// eslint-disable-next-line import/prefer-default-export
export const callMobileClientFunction = (platform: ClientPlatform, payload, callbackFunc): void => {
    // eslint-disable-next-line no-console
    console.log('callMobileClientFunction invoked', JSON.stringify({
        payload,
        platform,
    }));
    try {
        const stringifiedPayload = JSON.stringify(payload);

        if (platform === ClientPlatform.ANDROID) {
            // Example: window?.fiAndroidApp?.fiMinutesWebCallback(stringifiedPayload);
            window?.fiAndroidApp?.[callbackFunc](stringifiedPayload);
            // eslint-disable-next-line no-console
            console.log(`callMobileClientFunction ~ successfully called ${platform} function`);
        }

        if (platform === ClientPlatform.IOS) {
            window?.webkit?.messageHandlers?.[callbackFunc]?.postMessage(stringifiedPayload);
            // eslint-disable-next-line no-console
            console.log(`callMobileClientFunction ~ successfully called ${platform} function`);
        }
    } catch (error) {
        console.error('error while passing data to mobile client in callMobileClientFunction: ', error);
    }
};
