/**
 * @file Index page of Amplifi eligibility page.
 */

'use client';

import React from 'react';
import styled from 'styled-components';
import CreditCardPosterSection from './CreditCardPosterSection';
import {
    POSTER_SECTION_DATA,
    BRANDS_SECTION,
    FEATURES_DATA,
    FEEDBACK_DATA,
} from './constants';
import FeedBackSection from './FeedbackSection';
import BrandSection from './BrandsSection';
import FeaturesSection from './FeaturesSection';

const AmplifiCreditCard = styled.div`
  background: ${(props) => props.theme.color.SHARK2};
`;

const AmplifiEligibility = () => (
    <AmplifiCreditCard>
        <CreditCardPosterSection posterSectionData={POSTER_SECTION_DATA} />
        <BrandSection brandData={BRANDS_SECTION} />
        <FeaturesSection
            title={FEATURES_DATA.title}
            featuresData={FEATURES_DATA.FI_DATA}
        />
        <FeedBackSection
            title={FEEDBACK_DATA.title}
            feedBackData={FEEDBACK_DATA.FI_DATA}
        />
    </AmplifiCreditCard>
);

export default AmplifiEligibility;
