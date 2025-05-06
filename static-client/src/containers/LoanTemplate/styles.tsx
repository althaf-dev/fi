/** 
 *  @file styles.tsx
 *
 *  This file contains the common styles for the loan template page
 *  for the template pages common components
 */

import styled from "styled-components";
import Image from "next/image";
import { MAX_WIDTH_MEDIA_SCREENS } from "../../Themes/Device";

/*
 *There is a new background image for the mobile view in the media query (${MAX_WIDTH_MEDIA_SCREENS.phone})
 * Two background images are used here for the desktop view
 */
const PageWrapper = styled.div`
  background: var(--Background-Dark-Base, #18191b);
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
  background-image: url("https://dza2kd7rioahk.cloudfront.net/assets/loan-template/webp/cash_bg_desktop.webp"),
    url("https://dza2kd7rioahk.cloudfront.net/assets/loan-template/webp/background_image.webp");
  background-position: top 10% center, center;
  background-size: 70% 50%, cover;
  background-repeat: no-repeat;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    background-position: top 10% center, center;
    background-size: 70% 40%, cover;
    background-repeat: no-repeat;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    background-image: url("https://dza2kd7rioahk.cloudfront.net/assets/loan-template/webp/background_cash_mobile.webp"),
      none;
    background-size: 100% 40%;
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.hr`
  background-color: #313234;
  height: 1px;
  width: 100%;
  border: none;
`;

interface BackgroundImageSvgProps {
  customWidth?: string;
  customHeight?: string;
}

const BackgroundImageSvg = styled(Image)<BackgroundImageSvgProps>`
  position: absolute;
  top: 10px;
  width: 80%;
  height: 70%;

  @media (max-width: 480px) {
    width: 450px;
    height: 400px;
  }
`;

interface FeaturesWrapperProps {
  marginTop?: string;
  marginBottom?: string;
}

const FeaturesWrapper = styled.section<FeaturesWrapperProps>`
  width: 100%;
  max-width: 380px;
  position: relative;

  display: none;
  flex-direction: column;
  margin-top: ${(props) => props.marginTop || "148px"};
  margin-bottom: ${(props) => props.marginBottom || "40px"};
  color: var(--Supporting-Ocean-200, #9dc2d0);
  font: 600 14px/18px Gilroy, sans-serif;
  border-radius: 19px;
  padding: 20px 11px;
  z-index: 1;
  background-color: transparent;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: 1px;
    border-radius: inherit;
    background: linear-gradient(
      180deg,
      rgba(155, 241, 240, 0.8) 0%,
      rgba(155, 232, 241, 0) 100%
    );
    padding: 1px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -2;
      background: linear-gradient(
        4.25deg,
        #071720 7.17%,
        rgba(7, 24, 32, 0.3) 50.48%,
        rgba(8, 7, 32, 0) 96.54%
      );
      border-radius: 10px;
      padding: 5px;
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    display: flex;
  }
`;

export {
  PageWrapper,
  MainContent,
  FeaturesWrapper,
  BackgroundImageSvg,
  Divider,
};
