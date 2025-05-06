import { callMobileClientFunction } from "@/utils/Mobile";
import { DC_TRAVEL_FEST_FN_NAME, DC_TRAVEL_FEST_WINDOW_OBJECT_NAME } from "./constants";

enum ClientPlatform {
    ANDROID = 'ANDROID',
    IOS = 'IOS',
    WEB = 'WEB',
}

/**
 * Triggers mobile events using the Mobile utility function.
 * @param eventData - The event data containing the event name and optional data.
 * @param platform - The client platform (iOS or Android).
 * @example
 * triggerMobileEvents({ eventName: 'navigate', data: { screen: 'home' } }, 'iOS')
 * // Logs 'EVENT TRIGGERED: navigate'
 */
const triggerMobileEvents = (eventData: { eventName: string, data?: object }, platform: ClientPlatform) => {
    // eslint-disable-next-line no-console
    console.log(`EVENT TRIGGERED: ${eventData.eventName}`);
    callMobileClientFunction(platform, eventData, DC_TRAVEL_FEST_FN_NAME, DC_TRAVEL_FEST_WINDOW_OBJECT_NAME);
};

export {
    triggerMobileEvents,
    ClientPlatform,
}
