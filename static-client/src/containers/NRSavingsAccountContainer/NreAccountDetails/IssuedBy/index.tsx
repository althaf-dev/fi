import React from 'react';

import { LOGOS_URL_MAP } from '@/constants/AssetConstants';

import {
  IssuedByContent,
  IssuedByLogo,
  IssuedByText,
  IssuedByWrapper,
  Partnership,
  TermsAndConditionsUnderIssued,
} from './styles';

const IssuedBy: React.FC = () => (
  <IssuedByWrapper>
    <IssuedByContent>
      <IssuedByText>Issued by</IssuedByText>
      <IssuedByLogo
        src={LOGOS_URL_MAP.FI_FEDERAL}
        alt="Federal Bank logo"
      />
    </IssuedByContent>
    <Partnership>Co-branded partnership with Fi Brand Pvt Ltd</Partnership>
    <TermsAndConditionsUnderIssued>*T&C Apply</TermsAndConditionsUnderIssued>
  </IssuedByWrapper>
);



export default IssuedBy;
