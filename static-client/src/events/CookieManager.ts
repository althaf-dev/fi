import { getUUID } from './UuidUtils';

declare let window: any;

const cookiesObj: any = {
    prospectId: { name: 'prospect_id', expiryHours: 60 * 24 }, // 2 months expiry
    sessionId: { name: 'session_id', expiryHours: 0.5 }, // half hour expiry
    deviceId: { name: 'device_id', expiryHours: 730 * 24 }, // 2 years expiry
};

type cookieIds = 'prospectId' | 'sessionId' | 'deviceId' | 'platform';

const setCookie = (cname: string, cvalue: string, exhours: number) => {
    const d = new Date();
    d.setTime(d.getTime() + exhours * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

const getCookie = (cname: string) => {
    // this block of code runs for browser
    if (typeof window !== 'undefined') {
        const name = `${cname}=`;
        const ca = window.document?.cookie?.split(';');

        if (!ca) {
            return null;
        }

        for (let i = 0; i < ca.length; i += 1) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
    }

    // this block of code runs for server
    return null;
};

const updateProspectId = (prospectId: string) => {
    const rudderanalytics = (globalThis.window as any)?.rudderanalytics;

    if (rudderanalytics) {
        rudderanalytics.setAnonymousId(prospectId);
    }

    setCookie(
        cookiesObj.prospectId.name,
        prospectId,
        cookiesObj.prospectId.expiryHours
    );
};

const getCookieId = (id: cookieIds) => {
    const cookieObj = cookiesObj[id];
    const cookieId = getCookie(cookieObj.name);
    const newCookieId = cookieId || getUUID();

    if (!cookieId) {
        setCookie(
            cookieObj.name,
            newCookieId,
            cookieObj.expiryHours
        );
    }

    return newCookieId;
};

const refreshSessionId = () => {
    const sessionId = getCookie(cookiesObj.sessionId.name);
    const id = sessionId || getUUID();

    setCookie(
        cookiesObj.sessionId.name,
        id,
        cookiesObj.sessionId.expiryHours
    );
};

export {
    refreshSessionId, updateProspectId, getCookieId, getCookie,
};
