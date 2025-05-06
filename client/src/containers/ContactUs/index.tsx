import React, { useEffect, memo } from 'react';
import styled from 'styled-components';

import {
    AppHeader, AppFooter, StyledContainer, StyledLanding, PosterContainer,
    ThreePosterBottomImageSection, SecureMoneySection,
} from '../../components';

import { posterSectionData, threePosterBottomImageSectionData } from './constant';
import PosterSection from './PosterSection';

const trackingPayload = {
    flow_name: 'contact us',
    channel: 'contact us',
    page_name: 'web home page',
};

const ContactUsPosterContainer = styled(PosterContainer)`
    background-color: ${(props) => props.theme.color.DARK_GREY};
`;

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledContainer>
            <ContactUsPosterContainer>
                <AppHeader activeMenu='CONTACT US' trackingPayload={trackingPayload} />
                <PosterSection data={posterSectionData} />
            </ContactUsPosterContainer>
            <StyledLanding>
                <ThreePosterBottomImageSection data={threePosterBottomImageSectionData} />
                <SecureMoneySection />
            </StyledLanding>
            <AppFooter trackingPayload={trackingPayload} />
        </StyledContainer>
    );
};

export default memo(ContactUs);
