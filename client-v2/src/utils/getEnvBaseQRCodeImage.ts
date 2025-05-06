/* eslint-disable import/prefer-default-export */
import { PNGS_URL } from '../constants/AssetConstants';

export const getEnvBaseQRCodeImage = () => {
    if (process.env.APP_ENV === 'development') return `${PNGS_URL}devQRCode.png`;
    if (process.env.APP_ENV === 'demo') return `${PNGS_URL}demoQRCode.png`;
    if (process.env.APP_ENV === 'qa') return `${PNGS_URL}qaQRCode.png`;
    if (process.env.APP_ENV === 'staging') return `${PNGS_URL}stagingQRCode.png`;
    if (process.env.APP_ENV === 'uat') return `${PNGS_URL}uatQRCode.png`;

    return `${PNGS_URL}prodQRCode.png`;
};
