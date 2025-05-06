/* eslint-disable import/prefer-default-export */
import { APP_PLAY_STORE_URL, APP_PLAY_STORE_URL_V2 } from '../constants/AppConstant';
import { queryParams } from './queryParams';

const getURLFromUTMParams = (params: any) => {
    const queryString = Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
    const encodedURL = encodeURIComponent(queryString);

    return `${APP_PLAY_STORE_URL}${encodedURL}`;
};

export const getEncodedPlayStoreURL = (params: string) => {
    const utmParams:any = queryParams(params);

    if (utmParams.utm_source && utmParams.f) {
        delete utmParams.f;
        return getURLFromUTMParams(utmParams);
    }

    if (utmParams.utm_source && !utmParams.f) {
        return getURLFromUTMParams(utmParams);
    }

    return APP_PLAY_STORE_URL_V2;
};
