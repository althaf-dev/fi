import React from 'react';

import { NRE_ACCOUNT_IMG_URL_MAP } from '@/constants/AssetConstants';

import { ACCOUNT_FEATURES } from '../constants';

import {
  Container,
  Description,
  FeatureDescription,
  FeatureIcon,
  FeatureItem,
  FeaturesDescription,
  FeaturesListWrapper,
  FeaturesTitle,
  FeaturesWrapper,
} from './styles';

const AccountFeatures: React.FC = () => {
  return (
    <Container>
      <Description>
        Federal Bank's NRE & NRO Savings Accounts on the Fi app shatter traditional banking barriers, offering Non-Resident Indians a frictionless financial gateway. Imagine opening an NR Federal Bank account without any physical document or in-person check. It's a digital convenience.
        <br />
        For over 3.5 million Indians, Fi has already transformed money management. Now, NRIs can instantly send funds home, improve your savings, automate UPI payments, and earn rewards.
      </Description>
      <FeaturesWrapper>
        <FeaturesTitle>Features & benefits</FeaturesTitle>
        <FeaturesDescription>
        The Federal Bank NR Savings Account on Fi is designed to empower our NRI customers with seamless savings, globally accepted Debit Cards, and advanced Mobile Banking.
        </FeaturesDescription>
        <FeaturesListWrapper>
          {
            ACCOUNT_FEATURES.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon src={NRE_ACCOUNT_IMG_URL_MAP.STAR} />
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureItem>
            ))
          }
        </FeaturesListWrapper>
      </FeaturesWrapper>
    </Container>
  );
};

export default AccountFeatures;
