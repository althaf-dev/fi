/**
 * @file InfoSection
 * This component displays information about ATM withdrawal limits, including how they work and how the calculator uses user inputs.
 */

import React from 'react';
import { Disclaimer, Divider, InfoContainer, InfoTitle } from '../styles';
import { InfoContent, InfoDescription, InfoImage, InfoImageContainer } from './styles';
import { ATM_WITHDRAWAL_LIMIT_IMG_URL_MAP } from '@/constants/AssetConstants';
import { DebitCardLink } from '../Countryselector/styles';
import { DEBIT_CARD } from '../constants';

const InfoSection: React.FC = () => (
  <InfoContainer>
    <DebitCardLink href={DEBIT_CARD}>
    <InfoImageContainer>
    <InfoImage  src={ATM_WITHDRAWAL_LIMIT_IMG_URL_MAP.ZERO_FOREX_CARD_IMG} alt="ATM Withdrawal Info" />
    </InfoImageContainer>
    </DebitCardLink>
    <InfoContent>
    <InfoTitle>How do ATM limits work?</InfoTitle>
    <InfoDescription>
      A PPF has a lot going for it. It’s a great investment tool, if you’re looking for a predictable way to stay on top of inflation over the years. But it also comes at a cost - your money is locked away for 15 years before you can actually get your hands on it. 
      <br /><br />
      This calculator is one way to know if the time investment is worth it. 15 years is a lifetime, after all. Interest rate aside, you make up to ₹1,50,000 of your income exempt from tax each year. 
    </InfoDescription>
    <InfoTitle>How does this calculator use your inputs?</InfoTitle>
    <InfoDescription>
      For one, the PPF has been around for over 50 years now, and doesn’t look like it will be irrelevant anytime soon. But I guess we can never be sure. Here are some facts, though:
      <br /><br />
      A majority of investors who rely on the Public Provident Fund as an investment option do so for its predictable nature of returns. Your returns are risk-free - this means it’s not subject to whatever state the stock market is in. 
      <br /><br />
      You could literally open a PPF account in minutes from any of the major banks, and claim ₹1,50,000 of it as tax savings. Also, you could invest as little as ₹100 to begin with, and ₹500 each year to keep the investment going over 15 years.        
    </InfoDescription>
    </InfoContent>
    <Divider />
    <Disclaimer>
    Disclaimer: The above content is for informational purposes only and is not meant to be taken as investment, financial, or any other kind of advice. This is not a solicitation, recommendation, endorsement, or offer to buy or sell any securities or other financial instruments.
    </Disclaimer>
  </InfoContainer>
  );

export default InfoSection;
