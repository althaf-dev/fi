import React from 'react';

import { PosterSection } from '../../../components';

import MobilePosterWebp from '../../../assets/webp/personfeet-mobile-poster.webp';
import DesktopPosterWebp from '../../../assets/webp/personfeet-desktop-poster.webp';
import MobilePosterPng from '../../../assets/pngs/personfeet-mobile-poster.png';
import DesktopPosterPng from '../../../assets/pngs/personfeet-desktop-poster.png';

const TnCPosterSection = () => (
    <PosterSection
        title='Terms of Waitlist'
        description={(
            <>
                Epifi Technologies Private Limited (epiFi or Company) is a fintech company providing financial
                solutions and services. We believe that our customers (You) deserve a ‘No Shenanigans’ approach to
                their personal data. By and large, these terms have minimised the usage of legal jargon – unless
                absolutely required on a lawful basis, and explains how we treat your information.
            </>
        )}
        mobilePoster={MobilePosterWebp}
        desktopPoster={DesktopPosterWebp}
        fallbackMobilePoster={MobilePosterPng}
        fallbackDesktopPoster={DesktopPosterPng}
    />
);

export default TnCPosterSection;
