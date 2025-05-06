import React from 'react';

import { NRE_ACCOUNT_IMG_URL_MAP } from '@/constants/AssetConstants';

import {
  CardBody,
  CardContent,
  CountryAvailability,
  CountryAvailabilityText,
  CountryAvailabilityWrapper,
  NreAccountDetailsWrapper,
} from './styles';
import CardHeader from './CardHeader';
import IssuedBy from './IssuedBy';
import CardImage from './CardImage';
import Benefits from './Benefits';

const NreAccountDetails: React.FC<{}> = () => (
  <NreAccountDetailsWrapper>
    <CardContent>
      <CardHeader />
      <CardBody>
        <Benefits />
        <CountryAvailabilityWrapper>
          <CountryAvailability>
            <img src={NRE_ACCOUNT_IMG_URL_MAP.STAR_ICON} alt="Login Icon" />
            <CountryAvailabilityText>NRE & NRO Savings Accounts are available only for UAE & Qatar</CountryAvailabilityText>
          </CountryAvailability>
        </CountryAvailabilityWrapper>
        <CardImage />
        <IssuedBy />
      </CardBody>
    </CardContent>
  </NreAccountDetailsWrapper>
);

export default NreAccountDetails;
