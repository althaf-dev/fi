import React from 'react';

import { PosterSection } from '../../../components';
import { WEBP_URL, PNGS_URL } from '../../../constants/AssetConstants';

const WealthTnCPosterSection = () => (
    <PosterSection
        title='Epifi Wealth Terms & Conditions'
        description={(
            <>
                You didn’t skip this section! As a gesture of our appreciation, here’s a one-liner description of
                epiFi’s Terms & Conditions:
                <br />
                <br />
                To establish what you can expect from us, as you use epiFi’s services, and what we require from you.
                <br />
                <br />
                We urge you to keep on reading, as it’s vital that you know, understand and comprehend our terms and
                conditions (“T&Cs”).
            </>
        )}
        mobilePoster={`${WEBP_URL}dog-mobile-poster.webp`}
        desktopPoster={`${WEBP_URL}dog-desktop-poster.webp`}
        fallbackMobilePoster={`${PNGS_URL}dog-mobile-poster.png`}
        fallbackDesktopPoster={`${PNGS_URL}dog-desktop-poster.png`}
        alignLeft
    />
);

export default WealthTnCPosterSection;
