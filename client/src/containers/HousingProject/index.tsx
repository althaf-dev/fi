import React, { useEffect } from 'react';
import styled from 'styled-components';

import {
    AppHeader, AppFooter, StyledContainer, StyledLanding, PosterContainer,
} from '../../components';

import PosterSection from './PosterSection';
import ToKnowMoreSection from './ToKnowMoreSection';
import VideoSection from './VideoSection';
import BuildersDetailSection from './BuildersDetailSection';
import LegitSection from './LegitSection';
import LimitedTimeOfferSection from './LimitedTimeOfferSection';

const HousingProjectPosterContainer = styled(PosterContainer)`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
`;

const HousingProject = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledContainer>
            <HousingProjectPosterContainer>
                <AppHeader />
                <PosterSection />
            </HousingProjectPosterContainer>
            <StyledLanding>
                <VideoSection />
                <BuildersDetailSection />
                <LimitedTimeOfferSection />
                <LegitSection />
                <ToKnowMoreSection />
            </StyledLanding>
            <AppFooter />
        </StyledContainer>
    );
};

export default HousingProject;
