import React from 'react';

import { PosterSection } from '../../../components';
import { WEBP_URL, PNGS_URL } from '../../../constants/AssetConstants';

const SecurityPosterSection = () => (
    <PosterSection
        title='Security'
        description={(
            <>
                Epifi Technologies Private Limited (epiFi or Company) is a fintech company providing financial
                solutions and services. We believe that our customers (You) should remain convinced their data is in
                safe hands. This page speaks about our security practices and how we maximise the safety of your data.
            </>
        )}
        mobilePoster={`${WEBP_URL}security-mobile-poster.webp`}
        desktopPoster={`${WEBP_URL}security-desktop-poster.webp`}
        fallbackMobilePoster={`${PNGS_URL}security-mobile-poster.png`}
        fallbackDesktopPoster={`${PNGS_URL}security-desktop-poster.png`}
        alignLeft
    />
);

export default SecurityPosterSection;
