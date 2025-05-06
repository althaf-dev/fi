import React from 'react';

import { PosterSection } from '../../../components';
import { WEBP_URL, PNGS_URL } from '../../../constants/AssetConstants';

const PrivacyPolicyPosterSection = () => (
    <PosterSection
        title='Privacy Policy'
        description={(
            <>
                Epifi Technologies Private Limited (epiFi, we, us or Company) is a fintech company providing
                financial solutions and services. We believe that our customers (You) deserve a ‘no shenanigans’
                approach to their Personal Data.
                <br />
                <br />
                By and large, this policy has minimized the usage of legal jargon – unless absolutely required on a
                lawful basis – and explains how we treat your information.
            </>
        )}
        mobilePoster={`${WEBP_URL}privacy-policy-mobile-poster.webp`}
        desktopPoster={`${WEBP_URL}privacy-policy-desktop-poster.webp`}
        fallbackMobilePoster={`${PNGS_URL}privacy-policy-mobile-poster.png`}
        fallbackDesktopPoster={`${PNGS_URL}privacy-policy-desktop-poster.png`}
        alignLeft
    />
);

export default PrivacyPolicyPosterSection;
