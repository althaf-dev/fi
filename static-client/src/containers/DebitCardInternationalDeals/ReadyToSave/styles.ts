import styled from 'styled-components';

export const ReadyToSaveSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  background-color: #f4f0e4;
`;

export const BannerImage = styled.div`
  position: relative;
  aspect-ratio: 0.794;
  width: 100%;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const BannerContent = styled.img`
  aspect-ratio: 55.56;
  object-fit: contain;
  object-position: center;
  width: 100%;
  margin: 20px;
  position: relative;
  z-index: 1;
  height: 10.36px;
`;

export const SectionTitle = styled.h2`
  color: #016854;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  margin-top: 55px;
  font: 700 24px/28px Gilroy, sans-serif;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 35px;
  width: 100%;
  max-width: 320px;
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeatureIcon = styled.img`
  aspect-ratio: 0.99;
  object-fit: contain;
  object-position: center;
  width: 68px;
`;

export const FeatureTitle = styled.h3`
  color: #000;
  text-align: center;
  font: 500 24px/24px Gilroy, sans-serif;
  margin-top: 8px;
`;

export const FeatureImage = styled.img`
  border-radius: 24px;
  width: 100%;
  margin-top: 13px;
`;

export const FeatureContainer = styled.img`
  width: 320px;
  height: 272px;
  padding: 9.76px 45.79px 0px 45.79px;
  gap: 0px;
  border-radius: 24px 0px 0px 0px;
  border: 4px 0px 0px 0px;
  opacity: 0px;
  background: #FFFDF5;
  border: 4px solid #FFFFFF
`;

export const BannerLine = styled.hr`
  width: 330px;
  height: 0.9px;
  top: 2798px;
  left: 20px;
  gap: 0px;
  opacity: 0px;
  color: #016854;
  background-color: #016854;
  border: 0.2px solid #016854;
  margin-top: 26px
`;
export const BannerLine2 = styled.hr`
  width: 330px;
  height: 0.9px;
  top: 2798px;
  left: 20px;
  gap: 0px;
  opacity: 0px;
  border: 0.2px solid #016854;
  color: #016854;
  background-color: #016854;
  margin: 2px;
`;
