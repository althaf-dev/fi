import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Device } from '../../Themes/Device';

import {
    AppHeader, AppFooter, StyledContainer, StyledLanding, PosterContainer, PrimaryButton,
    SecureMoneySection,
} from '../../components';
import { HOME_PAGE_VARIANT_ONE_LINK_URL } from '../../constants/AppConstant';

import PosterSection from './PosterSection';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionFive from './SectionFive';
import LeftRightSection from './LeftRightSectionComponent';
import FiCoinsSection from './FiCoinsSection';
import ForEmployersSection from './ForEmployersSection';
import SalaryFaqSection from './SalaryFaqSection';

import {
    sectionOneData, sectionTwoData, sectionThreeData, sectionFiveData, sectionSixData, fiCoinsSectionData,
} from './constant';

// eslint-disable-next-line no-var
declare var window: any;

const SalaryAccountPosterContainer = styled(PosterContainer)`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
`;

const ButtonHolder = styled.div`
    margin: 0px auto 50px;
    max-width: 360px;
    padding: 0px 20px;

    @media ${Device.tab} {
        margin: 0px auto 60px;
        width: 300px;
    }

    @media ${Device.desktop} {
        margin: 0px auto 80px;
        width: 412px;
    }
`;

const SalaryAccountButtonWrapper = () => (
    <ButtonHolder>
        <a
            href={window.oneLinkCommonUrl || HOME_PAGE_VARIANT_ONE_LINK_URL}
            className='onelink-common-url'
            target='_blank'
            rel='noreferrer'
        >
            <PrimaryButton
                label='GET SALARY ACCOUNT'
                fontVariant='buttonVariantTwo'
            />
        </a>
    </ButtonHolder>
);

const SalaryAccount = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledContainer>
            <SalaryAccountPosterContainer>
                <AppHeader activeMenu='SALARY ACCOUNT' />
                <PosterSection />
            </SalaryAccountPosterContainer>
            <StyledLanding>
                <SectionOne data={sectionOneData} />
                <LeftRightSection data={sectionSixData} />
                <SectionOne data={sectionTwoData} />
                <FiCoinsSection data={fiCoinsSectionData} />
                <SalaryAccountButtonWrapper />
                <SectionThree values={sectionThreeData} />
                <SalaryAccountButtonWrapper />
                <SectionFive values={sectionFiveData} />
                <SalaryAccountButtonWrapper />
                <ForEmployersSection />
                <SalaryFaqSection />
                <SecureMoneySection />
            </StyledLanding>
            <AppFooter />
        </StyledContainer>
    );
};

export default SalaryAccount;
