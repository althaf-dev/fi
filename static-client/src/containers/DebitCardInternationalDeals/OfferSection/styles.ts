import styled from 'styled-components';

export const OfferSectionWrapper = styled.section`
  background-color: #f4f0e4;
  z-index: 10;
  display: flex;
  margin-top: -436px;
  flex-direction: column;
  overflow: hidden;
  padding: 49px 0;
`;

export const OfferContent = styled.div`
  display: flex;
  width: 100%;
  padding-left: 12px;
  flex-direction: column;
  align-items: center;
`;

export const OfferContent2 = styled.img`
  display: flex;
    width: 270px;
    padding-left: 12px;
    flex-direction: column;
    align-items: center;
    height: 104px;
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
`;

export const OfferCard = styled.div`
  position: relative; 
  border-radius: 24px;
  background-color: #F4F0E4;
  display: flex;
  margin-top: 32px;
  width: 100%;
  max-width: 320px;
  flex-direction: column;
  padding: 43px 0;
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

export const OfferCardImage2 = styled.img`
    margin-top: -55px;
    width: 121.82px;
    height: 94.82px;
    position: relative;
    top: -483px;
    right: -214px;
    padding: 10px;
    display: none;
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

export const TermsAndConditions = styled.p`
  color: #6a6d70;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  margin-top: -205px;
  font: 400 14px/1 Inter, sans-serif;
`;

export const TopOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
  cursor: pointer;
  z-index: 2;  // Ensures it's above OfferCardImage
`;

export const BottomOverlay = styled.div`
  position: absolute;
  bottom: 200px;
  left: 0;
  width: 100%;
  height: 35%;
  cursor: pointer;
  z-index: 2;  // Ensures it's above OfferCardImage
`;
