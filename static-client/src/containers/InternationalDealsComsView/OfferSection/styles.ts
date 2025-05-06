import { DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP } from "@/constants/AssetConstants";
import { Device } from "@/Themes/Device";
import styled from "styled-components";

interface TermsAndConditionsProps {
  hide?: boolean;
}

export const OfferSectionWrapper = styled.section`
  background-color: #f4f0e4;
  z-index: 10;
  display: flex;
  margin-top: -436px;
  flex-direction: column;
  overflow: hidden;
  padding: 49px 0;
  @media (${Device.tab}) {
    margin-top: -59px;
  }
`;

export const OfferContent = styled.div`
  display: flex;
  width: 100%;
  padding-left: 12px;
  flex-direction: column;
  align-items: center;
  @media (${Device.tab}) {
    display: inline-flex;
  }
`;

export const OfferContent2 = styled.img`
  display: flex;
  width: 270px;
  padding-left: 12px;
  flex-direction: column;
  align-items: center;
  height: 104px;
  @media (${Device.tab}) {
    content: url(${DEBIT_CARD_TRAVEL_FEST_IMG_URL_MAP.DESKTOP_KICK_STARTER_DEALS});
    width: 700px;
    left: 709px;
    display: inline-block;
    margin-bottom: 40px;
  }
`;

export const OfferMids = styled.div`
  display: none;
  @media (${Device.tab}) {
    display: block;
  }
`;

export const OfferContent3 = styled.img`
  display: none;
  @media (${Device.tab}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 185px;
    top: 141px;
    display: inline-block;
  }
`;

export const OfferImage = styled.img`
  aspect-ratio: 2.48;
  object-fit: contain;
  object-position: center;
  width: 100%;
  max-width: 270px;
`;

export const OfferDescription = styled.p`
  font-feature-settings: "liga" off, "clig" off;
  margin-top: 15px;
  width: 100%;
  max-width: 320px;
  color: #6a6d70;
  text-align: center;
  font: 400 14px/20px Inter, sans-serif;
  @media (${Device.tab}) {
        min-width: 972px;
        font-size: 34px;
        text-align: center;
}
`;

export const OfferCard = styled.div`
  position: relative;
  border-radius: 24px;
  background-color: #f4f0e4;
  display: flex;
  margin-top: 32px;
  width: 100%;
  max-width: 320px;
  flex-direction: column;
  padding: 43px 0;
  @media (${Device.tab}) {
    display: none;
  }
`;

export const OffersLink = styled.div`
  display: none;
  @media (${Device.tab}) {
    display: block;
  }
`;

export const OfferCardDesktop = styled.img`
  display: none;
  @media (${Device.tab}) {
    display: block;
    padding: 0 100px;
    width: 100%;
    max-height: 100%;
    display: block;
    margin-top: 200px;
  }
`;

export const OfferLink = styled.div`
  display: none;
  @media (${Device.tab}) {
    display: block;
    margin-bottom: -1081px;
  }
`;

export const OfferCardContent = styled.div`
  display: flex;
  width: 100%;
  padding-left: 16px;
  flex-direction: column;
`;

export const OfferCardTitle = styled.h2`
  color: #000;
  font: 500 27px/28px Gilroy, sans-serif;
  margin-left: -31px;
  text-wrap: auto;
`;

export const OfferCardDescription = styled.p`
  color: #6a6d70;
  font-feature-settings: "liga" off, "clig" off;
  margin-top: 16px;
  font: 400 14px/20px Inter, sans-serif;
`;

export const OfferCardImage = styled.img`
  aspect-ratio: 4.52;
  object-fit: contain;
  object-position: center;
  border-radius: 24px;
  margin-top: -55px;
  max-width: 100%;
  width: 320px;
  height: 584px;
  margin-left: -10px;
`;

export const OfferCardImage2 = styled.div`
  margin-top: -55px;
  width: 121.82px;
  height: 94.82px;
  position: relative;
  top: -483px;
  right: -214px;
  padding: 10px;
  // display: none;
`;

export const OfferCardImage3 = styled.div`
  width: 141.82px;
  height: 138.82px;
  gap: 0px;
  opacity: 0px;
  angle: -0 deg;
  position: relative;
  left: -13px;
  padding: 10px;
  top: -244px;
`;

export const TermsAndConditions = styled.p<TermsAndConditionsProps>`
  color: #6a6d70;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  margin-top: -205px;
  font: 400 14px/1 Inter, sans-serif;
  display: ${(props) => (props.hide ? 'none' : 'block')};
  @media (${Device.tab}) {
    font-size: 22px;
    margin-top: 20px;
    padding: 0 100px;
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
`;

export const TopOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
  cursor: pointer;
  z-index: 2;
`;

export const BottomOverlay = styled.div`
  position: absolute;
  bottom: 200px;
  left: 0;
  width: 100%;
  height: 35%;
  cursor: pointer;
  z-index: 2;
`;

export const LeftOverlay = styled.div`
  display: none;
  @media (${Device.tab}) {
    display: block;
    position: relative;
    top: -1103px;
    left: 70px;
    width: 40%;
    height: 68%;
    cursor: pointer;
    z-index: 2;
    padding: 504px 0px 17px 0px;
    margin: 27px;
  }
`;

export const RightOverlay = styled.div`
  display: none;
  @media (${Device.tab}) {
    display: block;
    position: relative;
    top: -547px;
    left: 788px;
    width: 40%;
    height: 59%;
    cursor: pointer;
    z-index: 2;
    padding: 504px 0px 17px 0px;
    margin: 27px;
  }
`;
