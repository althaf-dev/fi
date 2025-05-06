import styled from "styled-components";

import { MAX_WIDTH_MEDIA_SCREENS } from "@/Themes/Device";
import { TermsAndConditions } from "../styles";

export const IssuedByWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  width: 308px;
  max-width: 100%;
  flex-direction: column;
  font-family: Inter, sans-serif;
  font-weight: 400;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
     margin-top: 20px;
  }
`;

export const IssuedByContent = styled.div`
  display: flex;
  min-height: 32px;
  align-items: center;
  gap: 4px;
  justify-content: flex-start;
`;

export const IssuedByText = styled.span`
  font-feature-settings: "liga" off, "clig" off;
  align-self: stretch;
  width: 76px;
  margin: auto 0;
  font-size: 16px;
  color: var(--Content-On-Dark-High-Emphasis-50, #f6f9fd);

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Inter;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1rem;
    text-align: right;
  }
`;

export const IssuedByLogo = styled.img`
  aspect-ratio: 3.6;
  object-fit: contain;
  object-position: center;
  width: 115px;
  align-self: stretch;
  margin: auto 0;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    width: 80px;
  }
`;

export const Partnership = styled.p`
  font-feature-settings: "liga" off, "clig" off;
  align-self: stretch;
  width: 100%;
  min-height: 20px;
  gap: 4px;
  margin-top: 12px;
  font-size: 14px;
  color: var(--Content-On-Dark-Low-Emphasis-600, #6a6d70);
  text-align: center;
  line-height: 1;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Inter;
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1rem;
    text-align: center;
    margin-top: 5px;
  }
`;

export const TermsAndConditionsUnderIssued = styled(TermsAndConditions)`
  display: none;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    display: block;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Inter;
    font-size: 0.6rem;
    font-weight: 400;
    line-height: 1rem;
    text-align: center;
    margin-top: 5px;
  }
`;
