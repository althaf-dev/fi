import { getDeviceInfo } from '../device';

import { refreshSessionId, getCookieId } from './CookieManager';
import { getEventId } from './UuidUtils';

declare var window: any;

const getCommonEventAttribute = () => {
    return {
        event_id: getEventId(),
        session_id: getCookieId('sessionId'),
    };
};

const trackIdentity = (payload: object) => {
    const modifiedPayload = {
        ...getDeviceInfo(),
        event_id: getEventId(),
        ...payload
    };

    refreshSessionId();

    const rudderanalytics = window.rudderanalytics;

    const setIdentify = () => {
        /**
         * put an additional check as we don't have rudder config setup
         * for some envs like staging and qa.
         */
        if (rudderanalytics) {
            rudderanalytics.setAnonymousId(getCookieId('prospectId'));
            rudderanalytics.identify(modifiedPayload);
        }
    };

    if (rudderanalytics) {
        setIdentify();
    } else {
        setTimeout(() => {
            setIdentify();
        }, 400);
    }
};

const trackEvent = (eventName: string, payload: any) => {
    const eventData = {
        ...payload,
        ...getCommonEventAttribute(),
    };

    refreshSessionId();

    const rudderanalytics = window.rudderanalytics;

    if (rudderanalytics) {
        rudderanalytics.track(eventName, eventData);
    } else {
        setTimeout(() => {
            /**
             * put an additional check as we don't have rudder config setup
             * for some envs like staging and qa.
             */
            if (rudderanalytics) {
                rudderanalytics.track(eventName, eventData);
            }
        }, 400);
    }
};

const trackGTMEvent = (event: string, eventProps?: object) => {
    const eventData = {
        event,
        eventProps,
    };

    const dataLayer = window.dataLayer;

    if (dataLayer) {
        dataLayer.push(eventData);
    } else {
        setTimeout(() => {
            if (dataLayer) {
                dataLayer.push(eventData);
            }
        }, 400);
    }
};

export { trackIdentity, trackEvent, trackGTMEvent };
