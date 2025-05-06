import {
    refreshSessionId,
    updateProspectId,
    getCookieId,
} from './CookieManager';
import {
     CLICKED_GET_THE_FI_APP,
 CLICKED_GET_THE_FI_APP_IOS,
 HOME_PAGE_CLICKED_SOCIAL_LINK_EVENT
} from './EventName';
import { trackIdentity, trackEvent, trackGTMEvent } from './TrackingService';
import { getEventId, getUUID } from './UuidUtils';

export {
    HOME_PAGE_CLICKED_SOCIAL_LINK_EVENT,
    // Tracking Method
    trackIdentity,
    trackEvent,
    trackGTMEvent,
    // Cookie Method
    refreshSessionId,
    updateProspectId,
    getCookieId,
    // uuid utils
    getUUID,
    getEventId,
    CLICKED_GET_THE_FI_APP,
    CLICKED_GET_THE_FI_APP_IOS
};
