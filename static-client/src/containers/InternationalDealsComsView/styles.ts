import { Device } from "@/Themes/Device";
import styled from "styled-components";

export const InternationalTravelOffersWrapper = styled.div`
  background-color: #f4f0e4;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
  @media (${Device.tab}) {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`;

export const SecurityContainer = styled.div`
  background-color: #f4f0e4;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  right: -40px;
  margin-bottom: 31px;
  @media (${Device.tab}) {
    max-width: 100%;
    max-height: 100%;
    margin-top: 80px;
    align-items: center;
  }
`;

export const ResearchHelper = styled.div`
  display: none;
  @media (${Device.tab}) {
    margin: 0 auto;
    height: 100%;
    padding: 0 100px;
    display: block;
  }
`;
