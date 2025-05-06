/**
 * @file Util functions for Salary Account SignUp
 */
import { getDeviceInfo } from '../../device';
import { getCookieId } from '../../events';

// construct common request with common info
export const constructPayloadWithCommonInfo = (payload: Object) => ({
    ...payload,
    deviceInfo: getDeviceInfo(), // device info
    prospectId: getCookieId('prospectId'), // prospectId for sever events
});

export default {
    constructPayloadWithCommonInfo,
};
