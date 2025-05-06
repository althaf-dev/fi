import { Device } from "@/Themes/Device";
import styled from "styled-components";

export const TravelDealsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f0e4;
  @media (${Device.tab}) {
    margin-bottom: 100px;
    height: 100%;
    margin-top: 100px;
  }
`;

export const TravelDealsTitle = styled.h2`
  color: #6a6d70;
  font-feature-settings: "liga" off, "clig" off;
  font: 400 14px/1 Inter, sans-serif;
  margin-bottom: 75px;
`;

export const DealsGrid = styled.div`
  width: 100%;
  max-width: 336px;
  margin-top: -71px;
  @media (${Device.tab}) {
    display: none;
  }
`;

export const DealCard = styled.div`
  background-color: #f4f0e4;
  flex-direction: column;
  overflow: hidden;
  padding: 0px;
  gap: 24px;
  height: 200px;
`;

export const DealImage = styled.img`
  aspect-ratio: 1.97;
  object-fit: contain;
  object-position: center;
  width: 100%;
`;

export const ViewAllDeals = styled.button`
  display: flex;
  margin-top: 20px;
  align-items: center;
  gap: 12px;
  color: #000;
  text-align: center;
  justify-content: center;
  font: 600 20px/1.2 Gilroy, sans-serif;
  background: none;
  border: none;
  cursor: pointer;
  @media (${Device.tab}) {
    display: none;
  }
`;

export const ArrowIcon = styled.img`
  aspect-ratio: 0.92;
  object-fit: contain;
  object-position: center;
  width: 11px;
`;

export const TermsAndConditions = styled.p`
  color: #6a6d70;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  margin-top: -206px;
  font: 400 14px/1 Inter, sans-serif;
`;

export const TravelImage = styled.img`
  color: #6a6d70;
  font: 400 14px / 1 Inter, sans-serif;
  height: 223.46px;
  left: 113.74px;
  position: relative;
  top: -11px;
  @media (${Device.tab}) {
    display: none;
  }
`;
export const TravelDealsCard = styled.div`
  display: none;
  @media (${Device.tab}) {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 1%;
  }
`;

export const DesktopTravelBeach = styled.img`
  display: none;
  @media (${Device.tab}) {
    height: 700px;
    max-height: 100%;
    display: block;
    margin-top: 100px;
  }
`;

export const DesktopOfferscard = styled.img`
  display: none;
  @media (${Device.tab}) {
    max-width: 100%;
    display: block;
    padding-right: 8%;
    height: auto;
  }
`;

export const TravelImage2 = styled.img`
  color: #6a6d70;
  top: -140px;
  font: 400 14px / 1 Inter, sans-serif;
  position: relative;
  width: 312px;
  height: 124px;
  left: -13px;
  gap: 16px;
  @media (${Device.tab}) {
    display: none;
  }
`;

export const TermsAndConditions2 = styled.p`
  color: #6a6d70;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  margin-top: 44px;
  font: 400 14px/1 Inter, sans-serif;
  @media (${Device.tab}) {
    display: none;
  }
`;
