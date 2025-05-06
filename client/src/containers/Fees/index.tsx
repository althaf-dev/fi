import React, { useEffect } from 'react';

import {
    AppHeader, AppFooter, PosterContainer, StyledContainer, StyledLanding,
} from '../../components';

import PosterSection from './PosterSection';
import FeesSection from './FeesSection';

const Fees = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledContainer>
            <PosterContainer>
                <AppHeader activeMenu='FEES' />
                <PosterSection />
            </PosterContainer>

            <StyledLanding>
                <FeesSection />
            </StyledLanding>

            <AppFooter />
        </StyledContainer>
    );
};

export default Fees;
