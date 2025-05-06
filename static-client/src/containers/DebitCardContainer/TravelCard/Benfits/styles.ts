import { MAX_WIDTH_MEDIA_SCREENS, WINDOW_SIZE } from "@/Themes/Device";
import styled from "styled-components";

export const BenefitsColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  margin-left: 0;
  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    width: 100%;
  }
`;

export const ToggleWrapper = styled.div<{ position: "left" | "right" }>`
  border-radius: 94px;
  background: var(--Content-On-Light-High-Emphasis-850, #313234);
  display: flex;
  width: 100%;
  gap: 18px;
  overflow: hidden;
  text-align: center;
  padding: 3px;
  position: relative;
  z-index: 1;
  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 100%;
    gap: 10px;
  }
  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    gap: 5px;
  }
  &:before {
    border-radius: 94px;
    width: calc(50% - 3px);
    height: calc(100% - 8px);
    content: "";
    display: block;
    position: absolute;
    -webkit-transform: ${(props) =>
      props.position === "right" ? "translateX(calc(100% - 4px))" : "unset"};
    -ms-transform: ${(props) =>
      props.position === "right" ? "translateX(calc(100% - 4px))" : "unset"};
    transform: ${(props) =>
      props.position === "right" ? "translateX(calc(100% - 4px))" : "unset"};
    background: var(--Interactive-Dark-Tertiary-Action2, #57595d);
    border: 1.469px solid var(--Content-On-Dark-Low-Emphasis-600, #6a6d70);
    z-index: 2;
    transition: transform 0.3s;
  }
`;

export const ToggleButton = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  font-feature-settings: "liga" off, "clig" off;
  flex-grow: 1;
  color: ${(props) =>
    props.isActive
      ? "var(--Interactive-Dark-White-Text, #fff)"
      : "var(--Interactive-Light-Tertiary-Action-2, #6a6d70)"};
  font: 600 20px/1.2 Gilroy, sans-serif;
  padding: 20px;
  background: none;
  border: none;
  z-index: 3;
  width: 50%;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 10px;
    font-size: 0.8rem;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-size: 14px;
  }
`;

export const BenefitsWrapper = styled.ul`
  display: flex;
  margin-top: 28px;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  color: var(--Content-On-Dark-High-Emphasis-50, #f6f9fd);
  justify-content: flex-start;
  list-style-type: none;
  padding: 0;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 20px;
`;

export const BenefitIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    width: 20px;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    width: 16px;
  }
`;

export const BenefitDescription = styled.p`
  font-feature-settings: "liga" off, "clig" off;
  margin: 0;
  font: 600 20px/1.2 Gilroy, sans-serif;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.1rem;
    text-align: left;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-size: 15px;
    font-family: Gilroy;
    font-size: 15px;
    font-weight: 500;
    line-height: 0.9rem;
    text-align: left;
  }
`;
