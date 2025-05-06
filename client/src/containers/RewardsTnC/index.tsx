import React, { useEffect, useRef } from 'react';

import {
    PosterContainer,
    StyledContainer,
    StyledLanding,
} from '../../components';

import PosterSection from './PosterSection';
import MenuSection from './MenuSection';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import RewardsTnCHeader from './RewardsTnCHeader';

const RewardsTnC = () => {
    const myRef = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onTitleClick = (index: number) => {
        myRef[index].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <StyledContainer>
            <PosterContainer>
                <RewardsTnCHeader />
                <PosterSection />
            </PosterContainer>
            <StyledLanding>
                <MenuSection onTitleClick={onTitleClick} />
                <div ref={myRef[0]}>
                    <SectionOne />
                </div>
                <div ref={myRef[1]}>
                    <SectionTwo />
                </div>
                <div ref={myRef[2]}>
                    <SectionThree />
                </div>
            </StyledLanding>
        </StyledContainer>
    );
};

export default RewardsTnC;
