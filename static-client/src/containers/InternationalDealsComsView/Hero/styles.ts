import { DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP } from "@/constants/AssetConstants";
import { MAX_WIDTH_MEDIA_SCREENS, WINDOW_SIZE, Device } from "@/Themes/Device";
import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: Inter, sans-serif;
  font-weight: 400;
`;

export const HeroContent = styled.div`
  background-color: #f4f0e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 0 445px;
  @media (${Device.tab}) {
    align-items: start;
  }
`;

export const Logo = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  @media (${Device.tab}) {
    display: block;
    position: relative;
    max-width: 26%;
    max-height: 45px;
    margin: 70px 0px 0px -1408px;
  }
`;

export const DebitDealsContent = styled.div`
  @media (${Device.tab}) {
    display: flex;
    flex-direction: column;
    margin-left: 248px;
    margin-top: 432px;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const InternationalDealsImage = styled.img`
  aspect-ratio: 333.33;
  object-fit: contain;
  object-position: center;
  width: 290px;
  height: 227px;
  margin-top: 23px;
  max-width: 290px;
  @media (${Device.tab}) {
    content: url(${DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.DESKTOP_INTERNATIONAL_DEALS});
    min-width: 602px;
    height: 309px;
    position: absolute;
    left: 238px;
    top: 218px;
  }
`;

export const DealFestText = styled.div`
  display: none;
  @media (${Device.tab}) {
    display: block;
    max-width: 50%;
    max-height: 100%;
    margin-bottom: 10px;
  }
`;

export const SunVisaCardImage = styled.img`
  object-fit: contain;
  object-position: center;
  height: 300px;
  margin-top: 10px;
  max-width: 300px;
  @media (${Device.tab}) {
    min-width: 432px;
    height: 434px;
    position: absolute;
    right: 248px;
    top: 216.9px;
    display: block;
  }
`;

export const PoweredByImage = styled.img`
  aspect-ratio: 333.33;
  object-fit: contain;
  object-position: center;
  width: 290px;
  height: 227px;
  margin-top: -68px;
  max-width: 290px;
  @media (${Device.tab}) {
    position: absolute;
    top: 755px;
    right: 242px;
    height: 41px;
    min-width: 436px;
  }
`;

export const HeroTitle = styled.h1`
  color: #000;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-size: 14px;
  line-height: 18px;
  margin-top: 16px;
`;

export const CardInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  line-height: 1;
  justify-content: center;
  margin: 20px;
`;

export const CardIssuer = styled.div`
  display: flex;
  min-height: 20px;
  align-items: center;
  gap: 4px;
  justify-content: start;
  @media (${Device.tab}) {
    position: absolute;
    top: 816px;
    height: 32px;
  }
`;

export const CardIssuerText = styled.span`
  font-feature-settings: "liga" off, "clig" off;
  align-self: stretch;
  width: 85px;
  margin: auto 0;
`;

export const CardIssuerLogo = styled.img`
  aspect-ratio: 3.6;
  object-fit: contain;
  object-position: center;
  width: 72px;
  align-self: stretch;
  margin: auto 0;
`;

export const PartnershipInfo = styled.div`
  display: flex;
  margin-top: 8px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: #6a6d70;
  text-align: center;
  justify-content: start;
  @media (${Device.tab}) {
    position: absolute;
    top: 850px;
    height: 32px;
    font-size: 19px;
  }
`;

export const federalvisa = styled.img`
  display: flex;
  margin-top: 8px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: #6a6d70;
  text-align: center;
  justify-content: start;
`;

export const poweredBy = styled.img`
  display: flex;
  margin-top: 8px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: #6a6d70;
  text-align: center;
  justify-content: start;
`;

export const DateRangeImage = styled.img`
  object-fit: contain;
  object-position: center;
  height: 49px;
  margin-top: -70px;
  max-width: 297px;

  @media (${Device.tab}) {
    position: absolute;
    top: 707.97px;
    left: 251px;
    height: 84px;
    min-width: 552.87px;
    margin-top: -31px;
  }
`;
