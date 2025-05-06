/**
 * @file Manages the Analytics code injection related functions
 */

const replaceAnalyticsIds = (data) => {
    let updatedData = data.replace(
        /__ANALYTICS_GTAG_ID__/g,
        process.env.ANALYTICS_GTAG_ID,
    );

    updatedData = updatedData.replace(
        /__ANALYTICS_GTM_ID__/g,
        process.env.ANALYTICS_GTM_ID,
    );

    updatedData = updatedData.replace(
        /__APPS_FLYER_SMART_BANNERS_WEB_KEY__/g,
        process.env.APPS_FLYER_SMART_BANNERS_WEB_KEY,
    );

    return updatedData;
};

module.exports = {
    replaceAnalyticsIds,
};
