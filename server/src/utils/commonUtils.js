/**
 * @file common utility methods we can add here so that we can resuse in different places.
 */

/**
 * Returns a device info object and will replace with web for not passed keys.
 * @param {Object} deviceInfo copatured and received from frontend
 */

const getDeviceInfo = ({
    device_id = 'web',
    app_version = 999999,
    hw_version = 'web',
    location_token = 'web',
    manufacturer = 'web',
    model = 'web',
    os_api_version = 'web',
    platform = 3,
    sw_version = 'web',
}) => ({
    app_version,
    device_id,
    hw_version,
    location_token,
    manufacturer,
    model,
    os_api_version,
    platform,
    sw_version,
});

const constructPayloadWithRequestHeader = (payload = {}, requestPayload = {}) => {
    const { deviceInfo, prospectId, accessToken = '' } = requestPayload;
    return {
        req: {
            auth: {
                device: getDeviceInfo(deviceInfo),
                access_token: accessToken,
            },
            prospect_id: prospectId,
        },
        ...payload,
    };
};

const constructPayloadWithRequestHeaderAndRefreshToken = (payload = {}, requestPayload = {}) => {
    const { deviceInfo, prospectId, accessToken = '' } = requestPayload;
    return {
        req: {
            auth: {
                device: getDeviceInfo(deviceInfo),
                refresh_token: accessToken,
            },
            prospect_id: prospectId,
        },
        ...payload,
    };
};

const extractNextActionsResponse = (response) => {
    const { resp_header: { status: { code } }, next_action } = response;

    if (!next_action) return {};
    const { screen, screen_options } = next_action;

    const modifiedResponse = {
        status: code,
        nextScreen: {
            name: screen,
            ...response?.next_action[screen_options],
        },
    };

    return modifiedResponse;
};

const base64ToArrayBuffer = (str) => Buffer.from(str, 'base64');

module.exports = {
    getDeviceInfo,
    constructPayloadWithRequestHeader,
    constructPayloadWithRequestHeaderAndRefreshToken,
    extractNextActionsResponse,
    base64ToArrayBuffer,
};
