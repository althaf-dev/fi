/**
 * @file Credit Card Eligibility index page
 */

import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { MainContainer } from '../../components/Waitlist/styled';
import InnerContainer from '../../components/Waitlist/components/InnerContainer';
import { PNGS_URL } from '../../constants/AssetConstants';

import { selectCreditCardEligibilityReducer } from './selectors';
import StepModule from './StepModule';

const CreditCardEligibility = () => {
    const { isModalOpen } = useSelector(
        selectCreditCardEligibilityReducer,
        shallowEqual,
    );

    return (
        <MainContainer>
            <InnerContainer isModalOpen={isModalOpen} imageUrl={`${PNGS_URL}amplifi-credit-card-poster.png`}>
                <StepModule />
            </InnerContainer>
        </MainContainer>
    );
};

export default CreditCardEligibility;
