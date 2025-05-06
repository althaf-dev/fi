/**
 * @file Util functions for features page
 */

import FeaturesPageJson from '../../assets/json/features-page.json';

const SINGLE_FEATURE_PAGE_URLS: string[] = Object.keys(FeaturesPageJson);

const isValidSingleFeaturePageUrl = (url: string): boolean => SINGLE_FEATURE_PAGE_URLS.indexOf(url) !== -1;

export {
    // Remove the ES lint comment when we have more than 1 export
    // eslint-disable-next-line import/prefer-default-export
    isValidSingleFeaturePageUrl,
};
