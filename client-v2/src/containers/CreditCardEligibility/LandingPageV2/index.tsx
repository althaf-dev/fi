/**
 * @file Magnifi Eligibility Landing Page
 */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import CreditCardPosterSection from './CreditCardPosterSection';
import {
    POSTER_SECTION_DATA,
    BRANDS_SECTION,
    FEATURES_DATA,
    OTHER_FEATURES_DATA,
} from './constants';
import BrandSection from './BrandsSection';
import FeaturesSection from './FeaturesSection';
import { trackGTMEvent } from '../../../events';
import { LANDED_ON_INTRO_SCREEN, SCROLL_ON_INTRO_SCREEN } from '../../../events/EventName';

const MagnifiCreditCard = styled.div`
    background: #25130B;
`;

const LandingPage = () => {
    const debounce = (fn: () => void, delay: number) => {
        let timer: NodeJS.Timeout | null = null;

        function execute(this: any, ...args: []) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const context = this;
            clearTimeout(timer as NodeJS.Timeout);
            timer = setTimeout(() => fn.apply(context, args), delay);
        }
        return execute;
    };

    const handleScroll = () => {
        trackGTMEvent(SCROLL_ON_INTRO_SCREEN);
    };

    useEffect(() => {
        trackGTMEvent(LANDED_ON_INTRO_SCREEN);
        const debouncedHandleScroll = debounce(handleScroll, 2000);
        globalThis.window?.addEventListener('scroll', debouncedHandleScroll);
    }, []);

    return (
        <MagnifiCreditCard>
            <CreditCardPosterSection posterSectionData={POSTER_SECTION_DATA} />
            <BrandSection brandData={BRANDS_SECTION} />
            <FeaturesSection
                title={OTHER_FEATURES_DATA.title}
                subTitle={OTHER_FEATURES_DATA.subTitle}
                featuresData={OTHER_FEATURES_DATA.FI_DATA}
            />
            <FeaturesSection
                title={FEATURES_DATA.title}
                subTitle={FEATURES_DATA.subTitle}
                featuresData={FEATURES_DATA.FI_DATA}
            />
        </MagnifiCreditCard>
    );
};

export default LandingPage;
