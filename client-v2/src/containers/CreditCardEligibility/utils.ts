/**
 * @file Util functions for Credit Card Eligibility
 */
import { CREDIT_CARD_MAP } from '@/events/EventName';
import { getDeviceInfo } from '../../device';
import { getCookieId, trackGTMEvent } from '../../events';

// construct common request with common info
export const constructPayloadWithCommonInfo = (payload: Record<string, any>) => ({
    ...payload,
    deviceInfo: getDeviceInfo(), // device info
    prospectId: getCookieId('prospectId'), // prospectId for sever events
});

export const isValidDob = (date: string, years: number) => {
    try {
        const daysInYear = 365.25; // Accounting for leap years
        const days = years * daysInYear;
        const daysInMillis = 86400000;

        const birthdate = new Date(date);
        // Calculate today's date
        const today = new Date();

        // Calculate the age difference in years
        const totalDays = (today.getTime() - birthdate.getTime()) / daysInMillis;

        return totalDays - days >= 0;
    } catch (error: any) {
        console.error(error);
        return false;
    }
};

export const getPrevDateByYear = (year: number) => {
    const todayDateArr = (new Date().toLocaleDateString()).split('/');
    const validateDate = Number((parseInt(todayDateArr[2], 10) - year)).toString();
    todayDateArr[2] = validateDate;
    return todayDateArr.reverse().join('-');
};

/**
 * Todo: https://monorail.pointz.in/p/fi-app/issues/detail?id=75554
 * Descripition: Generic Event emitter to server : (in case any event failed to publish)
 */

export const fireCreditCardEvents = (pageType: string, eventName: string) => {
    try {
        if (CREDIT_CARD_MAP[pageType][eventName]) trackGTMEvent(CREDIT_CARD_MAP[pageType][eventName]);
    } catch (error: any) {
        console.error(error);
    }
};

export default {
    constructPayloadWithCommonInfo, fireCreditCardEvents
};
