import React from 'react';

import {
  ContentWrapper,
  SecurityPartnersContainer,
  TextColumn,
  Title,
  InfoColumn,
  Description,
  Highlight,
} from './styles';
import PartnerLogos from './PartnerLogos';

const SecurityPartners: React.FC<{}> = () => (
  <SecurityPartnersContainer>
    <ContentWrapper>
      <TextColumn>
        <Title>Fi partners with the best to secure your money</Title>
        <PartnerLogos />
      </TextColumn>
      <InfoColumn>
        <Description>
          Our partner bank hosts your Savings Account and follows all security standards per applicable regulations.
          <br />
          <br />
          Your money is always safe with our banking partner - Federal Bank and
          your money is covered under the Deposit Insurance and Credit Guarantee Corporation Scheme.
          This insures your money up to <Highlight>₹5 lakh</Highlight>.
          <br />
          <br />
          Fi itself is not a bank and doesn't hold or claim to have a banking license.
        </Description>
      </InfoColumn>
    </ContentWrapper>
  </SecurityPartnersContainer>
);

export default SecurityPartners;
