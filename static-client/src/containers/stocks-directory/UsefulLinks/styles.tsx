import { MAX_WIDTH_MEDIA_SCREENS } from "../../../Themes/Device";
import styled from "styled-components";
import Colors from "@/Themes/Colors";

const FooterCardWrapper = styled.footer`
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
  background: ${Colors.WHITE};
  box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 94px 280px;
  font: 600 28px Gilroy, sans-serif;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 100px 40px 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1099px;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SectionTitle = styled.h2`
  color: var(--Content-On-Light-Low-Emphasis-500, #929599);
  font-feature-settings: "liga" off, "clig" off;
  line-height: 1;
  font-family: Gilroy;
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 28.23px;
    font-weight: 600;
    line-height: 33.87px;
    text-align: left;
  }
`;

const UsefulLinksSection = styled.section`
  width: 100%;
`;

const PopularStocksWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 101px;
  min-height: 294px;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 991px) {
    max-width: 100%;
    min-height: 94px;
    margin-top: 21px;
  }
`;

const PopularStocksTitle = styled.h3`
  transform: rotate(-1.1993808723964605e-11rad);
  z-index: 0;
  display: flex;
  width: 637px;
  max-width: 100%;
  align-items: center;
  gap: 40px 102px;
  color: var(--Content-On-Light-Disabled-400, #b2b5b9);
  line-height: 1;
  justify-content: flex-start;
  font-feature-settings: "liga" off, "clig" off;
  border-radius: 0;
  align-self: stretch;
  min-width: 240px;
  width: 452px;
  margin: auto 0;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 11.51px;
    font-weight: 600;
    line-height: 15.35px;
    text-align: left;
    margin: 10px 0;
  }
`;

const FooterTextWrapper = styled.div`
  display: flex;
  margin: 200px 0px;
  gap: 100px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    margin: 40px 20px 100px 20px;
    flex-direction: column;
    gap: 40px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  font-size: 16px;
  line-height: 1.5;
  color: var(--Content-On-Light-Low-Emphasis-500, #929599);
  font-family: Gilroy, sans-serif;
  margin-top: 20px;
  width: 539.96px;
  height: 331px;
  gap: 40px;
  opacity: 0px;

  img {
    width: 248px;
    height: 66px;
    gap: 0px;
    opacity: 0px;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    width: auto;
    height: auto;
    gap: 20px;

    img {
      aspect-radio: 3.76;
      width: 142px;
      height: 38px;
      margin: 40px auto 0;
    }

    p {
      font-family: Inter;
      font-size: 13.44px;
      font-weight: 500;
      line-height: 16.13px;
      text-align: center;
    }
  }
`;

const BoldText = styled.div`
  font-family: Gilroy;
  font-size: 62.79px;
  font-weight: 500;
  line-height: 75.34px;
  color: ${Colors.MINE_SHAFT};

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 28.8px;
    font-weight: 600;
    line-height: 34.56px;
    text-align: center;
  }
`;

export {
  FooterCardWrapper,
  ContentContainer,
  SectionTitle,
  UsefulLinksSection,
  PopularStocksWrapper,
  PopularStocksTitle,
  FooterTextWrapper,
  BoldText,
  TextWrapper,
};
