/* eslint-disable max-len */

import React from 'react';

import { PosterSection } from '../../../components';
import { WEBP_URL, PNGS_URL } from '../../../constants/AssetConstants';

const FeesPosterSection = () => (
    <PosterSection
        title='Account Fees'
        description={(
            <>
                Fi helps you manage your money smartly through a bunch of cool features. We try and reduce the overall amount of fees you are charged.
                <br />
                <br />
                However, certain facilities are charged via our partner bank. Scroll down to read all about them.
            </>
        )}
        mobilePoster={`${WEBP_URL}panda-mobile-poster.webp`}
        desktopPoster={`${WEBP_URL}panda-desktop-poster.webp`}
        fallbackMobilePoster={`${PNGS_URL}panda-mobile-poster.png`}
        fallbackDesktopPoster={`${PNGS_URL}panda-desktop-poster.png`}
    />
);

export default FeesPosterSection;
