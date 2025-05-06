import React, { useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
    AppHeader, AppFooter, PosterContainer, StyledContainer,
    StyledLanding, Loader, SecureMoneySection,
} from '../../components';
import { LOADED_FAQ_WEBSITE, trackEvent } from '../../events';
import { FAQS_PAGE_TRACKING_PAYLOAD as trackingPayload } from '../../events/constants';
import { queryParams } from '../../utils/queryParams';

import FaqPosterSection from './FaqPosterSection';

const FaqPosterContainer = styled(PosterContainer)`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
`;

// eslint-disable-next-line no-var
declare var window: any;

interface LandingProps {
    children?: ReactNode;
}

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
        window.gtag('set', 'page', '/FAQs');
        window.gtag('send', 'pageview');
    }
};

const Landing = (props: LandingProps) => {
    const location = useLocation();

    const { children } = props;

    // track loaded page event
    useEffect(() => {
        const params: QueryParams = queryParams(location.search);
        const { ...utmParams } = params;

        trackEvent(LOADED_FAQ_WEBSITE, {
            ...trackingPayload,
            ...utmParams,
        });

        trackGtagEvent();
    }, [location.search]);

    useEffect(() => {
        window.scrollTo(0, 0);

        // just to check whether flow is properly plugged or not
        // dispatch(getCategoriesData());
        // dispatch(getFoldersAndArticlesForCategory({ categoryId: 82000196095 }));
        // dispatch(getRelatedFaqsData({ faqId: 82000352855 }));
    }, []);

    const isLoading = useSelector(
        (state: any) => state.faqReducer.isLoading,
    );

    // enable or disable scroll behaviour on window
    useEffect(() => {
        if (isLoading) { // disable scroll on document body
            document.body.style.overflow = 'hidden';
        } else { // enable scroll on document body
            document.body.style.overflow = 'auto';
        }
    }, [isLoading]);

    return (
        <>
            <Loader isLoading={isLoading} />
            <StyledContainer>
                <FaqPosterContainer>
                    <AppHeader
                        activeMenu='FAQ'
                        fontColor='SILVER_2'
                        menuColor='WHITE'
                        trackingPayload={trackingPayload}
                    />
                    <FaqPosterSection />
                </FaqPosterContainer>
                <StyledLanding>
                    {children}
                </StyledLanding>
                <SecureMoneySection />
                <AppFooter trackingPayload={trackingPayload} />
            </StyledContainer>
        </>
    );
};

Landing.defaultProps = {
    children: null,
};

export default Landing;
