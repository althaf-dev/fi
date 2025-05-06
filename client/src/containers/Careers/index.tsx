import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { AppHeader, AppFooter, SecureMoneySection } from '../../components';
import { LOADED_CAREERS_WEBSITE, trackEvent } from '../../events';
import { CAREERS_PAGE_TRACKING_PAYLOAD as trackingPayload } from '../../events/constants';
import { queryParams } from '../../utils/queryParams';

import PosterSection from './PosterSection/PosterSection';
import SecondSection from './SecondSection/SecondSection';
import AboveBeyondSection from './AboveBeyondSection/AboveBeyondSection';
import HiringSection from './HiringSection/HiringSection';

// eslint-disable-next-line no-var
declare var window: any;

const PosterContainer = styled.div`
    background-color: ${(props) => props.theme.color.FI_LIGHT_BLUE};
`;

const FooterContainer = styled.div`
    background-color: ${(props) => props.theme.color.CHALK_GREY};
`;

/* eslint-disable camelcase */
interface QueryParams {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
}
/* eslint-enable camelcase */

const trackGtagEvent = () => {
    if (window.gtag) {
        window.gtag('set', 'page', '/careers');
        window.gtag('send', 'pageview');
    }
};

const Careers = () => {
    const location = useLocation();

    // track loaded page event
    useEffect(() => {
        const params: QueryParams = queryParams(location.search);
        const { ...utmParams } = params;

        trackEvent(LOADED_CAREERS_WEBSITE, {
            ...trackingPayload,
            ...utmParams,
        });

        trackGtagEvent();
    }, [location.search]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <PosterContainer>
                <AppHeader
                    activeMenu='CAREERS'
                    fontColor='GREY_2'
                    menuColor='GRAY'
                    trackingPayload={trackingPayload}
                />
                <PosterSection />
            </PosterContainer>

            <SecondSection />
            <AboveBeyondSection />
            <HiringSection />

            <FooterContainer>
                <SecureMoneySection />
                <AppFooter trackingPayload={trackingPayload} />
            </FooterContainer>
        </div>
    );
};

export default Careers;
