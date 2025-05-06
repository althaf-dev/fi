import React from 'react';

import { ICONS_URL_MAP, NRE_ACCOUNT_IMG_URL_MAP } from '@/constants/AssetConstants';
import { ONE_LINK_URL_NR } from '@/constants/AppConstant';
import Colors from '@/Themes/Colors';
import { trackEvent, trackGTMEvent } from '@/events';
import { useWindow } from '@/hooks';

import {
  FeesContainer,
  FeesList,
  FeesListItem,
  FeesTitle,
  InstructionsNoteContainer,
  InstructionsNoteDescription,
  InstructionsNoteIcon,
  InstructionsNoteTitle,
  InstructionsNoteTitleWrapper,
  InstructionsNoteWrapper,
  NRSavingsAccountContainerWrapper,
  ShadowGreenButton,
  StickyFooter,
  Content,
  Details,
  AccountContent,
} from './styles';
import { CLICKED_NRE_NRO_SAVINGS_ACCOUNT_OPENING_BUTTON, NR_SAVINGS_ACCOUNT_TRACKING_PAYLOAD } from './constants';
import AccountFeatures from './AccountFeatures';
import Instructions from './Instructions';
import NreAccountDetails from './NreAccountDetails';
import SecurityPartners from './SecurityPartners';

const NRSavingsAccountContainer: React.FC<{}> = () => {
  const [windowState] = useWindow();

  const trackingData = {
      ...NR_SAVINGS_ACCOUNT_TRACKING_PAYLOAD,
      cta_location: 'footer',
  };

  const clickedOpenAccount = (key: string) => () => {
      trackEvent(key, { ...trackingData, method: 'manual', entry_point: 'nre_nro_savings_account_opening' });

      trackGTMEvent(key);
  };
  
  return (
    <NRSavingsAccountContainerWrapper>
      <div style={{ backgroundColor: Colors.BLACK_3 }}>
        <NreAccountDetails />
      </div>
      <Details>
        <AccountFeatures />
      </Details>
      <AccountContent>
        <Instructions />
        <InstructionsNoteContainer>
          <InstructionsNoteWrapper>
            <InstructionsNoteTitleWrapper>
              <InstructionsNoteIcon src={NRE_ACCOUNT_IMG_URL_MAP.STAR_ICON} />
              <InstructionsNoteTitle>Note</InstructionsNoteTitle>
            </InstructionsNoteTitleWrapper>
            <InstructionsNoteDescription>
              Physical PAN is mandatory. You can download your e-PAN to complete your NR Account set-up if you don't have it.
              <br />
              Here's how:
              <ul style={{ listStylePosition: 'inside' }}>
                <li>Visit the NSDL or UTIITSL website.</li>
                <li>Enter your Aadhaar number, PAN number, and DOB</li>
                <li>Your e-PAN will be sent to your registered mobile number</li>
              </ul>
            </InstructionsNoteDescription>
          </InstructionsNoteWrapper>
        </InstructionsNoteContainer>
      </AccountContent>
      <Content>
        <FeesContainer>
          <FeesTitle>Fees & Charges</FeesTitle>
          <FeesList>
            <FeesListItem onClick={() => window.open('https://www.federalbank.co.in/savings-rate', '_blank')}>
              <div>Please visit the <span>Rates & Charges</span> page for interest rates.</div>
              <img src={ICONS_URL_MAP.RIGHT_ARROW} alt="right arrow" />
            </FeesListItem>
            <FeesListItem onClick={() => window.open('https://www.federalbank.co.in/rates-and-charges', '_blank')}>
              <div>For Service charges and fees, <span>please click here</span></div>
              <img src={ICONS_URL_MAP.RIGHT_ARROW} alt="right arrow" />
            </FeesListItem>
          </FeesList>
        </FeesContainer>
        <SecurityPartners />
      </Content>
      <StickyFooter>
        <a
          onClick={clickedOpenAccount(CLICKED_NRE_NRO_SAVINGS_ACCOUNT_OPENING_BUTTON)}
          href={
            (windowState && windowState.oneLinkCommonUrlNR) ||
            ONE_LINK_URL_NR
          }
          id="poster_link"
          target="_blank"
          rel="noreferrer"
        >
          <ShadowGreenButton font="button" tagType="button" type="button">
            Open Account
          </ShadowGreenButton>
        </a>
      </StickyFooter>
    </NRSavingsAccountContainerWrapper>
  );
};

export default NRSavingsAccountContainer;
