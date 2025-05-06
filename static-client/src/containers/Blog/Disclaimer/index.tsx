import { Device } from '@/Themes/Device';
import MIXINS from '@/Themes/mixins';
import { ICONS_URL_MAP, LOGOS_URL_MAP } from '@/constants/AssetConstants'
import React from 'react'
import { styled } from 'styled-components';


const SafetyContainer = styled.div`
  display: flex;
`;

const BhimLogo = styled.img`
  width: 80px;
  height: 12px;

  @media ${Device.desktop} {
    width: 146px;
    height: 20px;
}
`;

const FederalLogo = styled.img`
  width: 66px;
  height: 17px;

  @media ${Device.desktop} {
    width: 106px;
    height: 27px;
}
`;

const VisaLogo = styled.img`
  width: 42px;
  height: 20px;

  @media ${Device.desktop} {
    width: 69px;
    height: 27px;
}
`;

const PciLogo = styled.img`
  width: 47px;
  height: 19px;

  @media ${Device.desktop} {
    width: 72px;
    height: 30px;
}
`;

const WealthLogo = styled.img`
  width: 52px;
  height: 15px;

  @media ${Device.desktop} {
    width: 107px;
    height: 23px;
}
`;

const LiquiLoanLogo = styled.img`
  width: 68px;
  height: 8px;

  @media ${Device.desktop} {
    width: 148px;
    height: 18px;
}
`;

const OneMoneyLogo = styled.img`
  width: 56PX;
  height: 17px;

  @media ${Device.desktop} {
    width: 71px;
    height: 22px;
}
`;

const FinvuLogo = styled.img`
  width: 36px;
  height: 18px;

  @media ${Device.desktop} {
    width: 45px;
    height: 23px;
}
`;

const AlpacaLogo = styled.img`
  width: 65px;
  height: 17px;

  @media ${Device.desktop} {
    width: 78px;
    height: 22px;
}
`;


const IsoText = styled.div`
color: ${(props) => props.theme.color.NERO};
  ${MIXINS.FontMixin({
    font: "Gilroy",
    weight: 500,
    size: "9px",
    lineHeight: "11px",
  })};
  self-align: center;
  @media ${Device.desktop} {
      color: ${(props) => props.theme.color.BOMBAY_GREY};
      ${MIXINS.FontMixin({
        font: "Gilroy",
        weight: 500,
        size: "16px",
        lineHeight: "18px",
      })};
  }
`

const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  @media ${Device.desktop} {
    gap: 32px;
    margin: 30px 0;
  }
`;

const SafetyTitle = styled.div`
  ${MIXINS.FontMixin({
    font: "Gilroy",
    weight: 700,
    size: "28px",
    lineHeight: "32px",
  })};
  color: ${(props) => props.theme.color.GREY_5};
  margin: 32px 0 18px 0;

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "Gilroy",
      weight: 700,
      size: "36px",
      lineHeight: "40px",
    })};
    color: ${(props) => props.theme.color.SHARK1};
    margin-bottom: 24px;
  }
`;

const SafetySubTitle = styled.div`
  ${MIXINS.FontMixin({
    font: "inter",
    weight: 700,
    size: "16px",
    lineHeight: "20px",
  })};
  color: ${(props) => props.theme.color.GREY_5};
  margin-bottom: 4px;
  display: flex;

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "Gilroy",
      weight: 600,
      size: "28px",
      lineHeight: "32px",
    })};
    margin-bottom: 8px;
  }
`;

const SafetyDescription = styled.div`
  ${MIXINS.FontMixin({
    font: "inter",
    weight: 400,
    size: "12px",
    lineHeight: "16px",
  })};
  color: ${(props) => props.theme.color.GREY_5};
  max-width: 100%;
  margin-bottom: 20px;

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 500,
      size: "24px",
      lineHeight: "36px",
    })};
    max-width: 100%;
  }
`;

const SafetyDescriptionV2 = styled(SafetyDescription)`
  @media ${Device.desktop} {
    margin-bottom: 20px;
  }
`;

const SafetyImg = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 8px;
  @media ${Device.desktop} {
    height: 32px;
    width: 32px;
    margin-right: 12px;
  }
`;

const DisclaimerTitle = styled.div`
  ${MIXINS.FontMixin({
    font: "Gilroy",
    weight: 700,
    size: "28px",
    lineHeight: "32px",
  })};
  color: ${(props) => props.theme.color.SHARK1};

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "Gilroy",
      weight: 700,
      size: "36px",
      lineHeight: "40px",
    })};
  }
`;

const DisclaimerDescription = styled.div`
  ${MIXINS.FontMixin({
    font: "inter",
    weight: 400,
    size: "16px",
    lineHeight: "20px",
  })};
  color: ${(props) => props.theme.color.GREY_2};
  margin-top: 20px;

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
      font: "inter",
      weight: 500,
      size: "24px",
      lineHeight: "36px",
    })};
  }
`;


const index = () => {
  return (
    <div>
        <DisclaimerTitle>Disclaimer</DisclaimerTitle>
          <DisclaimerDescription>
            Fi Money is not a bank; it offers banking services through licensed
            partners and investment services through epiFi Wealth Pvt. Ltd. and
            its partners. This post is for information only and is not
            professional financial advice.
          </DisclaimerDescription>

          <SafetyTitle>Safety first.</SafetyTitle>
          <SafetyContainer>
            <SafetyImg src= {ICONS_URL_MAP.LOCK_LOGO}/>
            <div>
              <SafetySubTitle>Safe</SafetySubTitle>
              <SafetyDescription>
                Our partner bank hosts your Savings Account, issues Cards and
                follows all security standards per applicable regulations.
                <br />
                <br />
                Your money is always safe with our banking partner, Federal
                Bank, and is insured for up to ₹5 lakh under the Deposit
                Insurance and Credit Guarantee Corporation Scheme.
              </SafetyDescription>
            </div>
          </SafetyContainer>
          <SafetyContainer>
            <SafetyImg src = {ICONS_URL_MAP.SECURE_LOGO}/>
            <div>
              <SafetySubTitle>Secure</SafetySubTitle>
              <SafetyDescriptionV2>
                Armed with cutting-edge protocols via Fi Secure — we maintain
                the best account safety standards and enforce stringent internet
                security safeguards. Since we&apos;ve built Fi from its core without
                any shortcuts, the confidentiality of your data is of supreme
                importance to us.
              </SafetyDescriptionV2>
              <LogoContainer>
              <BhimLogo src = {ICONS_URL_MAP.BHIM_LOGO}/>
               <FederalLogo src ={LOGOS_URL_MAP.FI_FEDERAL}/>
               <VisaLogo src = {ICONS_URL_MAP.VISA_LOGO_2}/>
               <PciLogo src = {ICONS_URL_MAP.PCI_ICON_V2}/>
               <IsoText>
               ISO 27001:2013
               </IsoText>
               <WealthLogo src = {ICONS_URL_MAP.EPIFI_WEALTH_LOGO_V2}/>
              </LogoContainer>
            </div>
          </SafetyContainer>
          <SafetyContainer>
            <SafetyImg src= {ICONS_URL_MAP.SOLID_LOGO}/>
            <div>
              <SafetySubTitle>Solid</SafetySubTitle>
              <SafetyDescriptionV2>
                Fi is not a bank and doesn&apos;t hold or claim a banking license.
                However, we partner with regulated entities to provide specific
                products and features. Fi partners with the best to secure your
                money.
              </SafetyDescriptionV2>
              <LogoContainer>
               <LiquiLoanLogo src = {ICONS_URL_MAP.LIQUILOAN_V2}/>
                <AlpacaLogo src = {LOGOS_URL_MAP.ALPACA_LOGO}/>
                <WealthLogo src = {ICONS_URL_MAP.EPIFI_WEALTH_LOGO_V2}/>
                <FinvuLogo src = {ICONS_URL_MAP.FINVU_LOGO}/>
                <OneMoneyLogo src = {ICONS_URL_MAP.ONEMONEY_LOGO}/>
              </LogoContainer>
            </div>
          </SafetyContainer>
    </div>
  )
}

export default index
