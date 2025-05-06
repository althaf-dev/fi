import React, { useEffect } from 'react';
import styled from 'styled-components';

import {
    AppHeader, AppFooter, PosterContainer, StyledContainer, StyledLanding,
    SecureMoneySection,
} from '../../components';
import { Device } from '../../Themes/Device';

import CardGridSection from './CardGridSection/CardGridSection';
import PosterSection from './PosterSection/PosterSection';
import TeamGrid from './TeamGrid/TeamGrid';

const trackingPayload = {
    flow_name: 'waitlist',
    channel: 'waitlist',
    page_name: 'team page',
};

const GridHolder = styled.div`
    margin-top: -86px;

    @media ${Device.tab} {
        margin-top: -140px;
    }

    @media ${Device.desktop} {
        margin-top: -208px;
    }
`;

const Teams = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledContainer>
            <PosterContainer>
                <AppHeader
                    activeMenu='OUR TEAM'
                    fontColor='SILVER_2'
                    menuColor='WHITE'
                    trackingPayload={trackingPayload}
                />
                <PosterSection />
            </PosterContainer>

            <StyledLanding>
                <GridHolder>
                    <TeamGrid />
                </GridHolder>
                <CardGridSection />
                <SecureMoneySection />
            </StyledLanding>

            <AppFooter trackingPayload={trackingPayload} />
        </StyledContainer>
    );
};

export default Teams;
