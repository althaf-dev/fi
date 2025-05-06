import { Device } from "@/Themes/Device";
import { styled } from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  background-color: #e6e9ed;
`;

export const PromotionSection = styled.section`
  width: 100%;
  @media (${Device.tab}) {
    padding: 0px 75px;
  }
  @media (${Device.desktop}) {
    padding: 0px 110px 0px;
    margin: auto;
    max-width: 1440px;
  }
`;

export const PromotionContainer = styled.div`
  border-radius: 16px;
  background: var(--Supporting-Honey-100, #fff8ce);
  z-index: 10;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-size: 12px;
  color: var(--Supporting-Honey-900, #98712f);
  justify-content: center;
  margin: -32px 40px 0px 40px;
  height: 56px;
  @media (${Device.tab}) {
    margin: -35px 0px 0px;
  }
  @media (${Device.desktop}) {
    margin: -32px 0px 0px;
  }
`;

export const ContentWrapperDiv = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const AtmIcon = styled.img`
  aspect-ratio: 1.59;
  object-fit: contain;
  object-position: center;
  margin: auto 0;
  width: 27px;
  height: 17px;
  @media (${Device.tab}) {
    width: 50px;
    height: 34px;
  }
  @media (${Device.desktop}) {
    width: 70px;
    height: 44px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PromotionText = styled.p`
  font-size: 12px;
  font-family: Gilroy, sans-serif;
  word-break: break-word;
  @media (${Device.tab}) {
    font-size: 24px;
  }
`;

export const ArrowIcon = styled.img`
  width: 12px;
  height: 12px;
  margin: -3px 15px;
  @media (${Device.tab}) {
    width: 22px;
    height: 22px;
    margin: -3px 20px;
  }
  @media (${Device.desktop}) {
    width: 32px;
    height: 32px;
    margin: -10px 20px;
  }
`;

export const Container = styled.section`
  display: flex;
  margin-top: 32px;
  width: 100%;
  max-width: 320px;
  flex-direction: column;
`;

export const Header = styled.h2`
  color: #000;
  font-size: 20px;
  line-height: 1.2;
  margin: 19px 0px 0px 30px;
`;

export const ContentWrapper = styled.main`
  border-radius: 20px;
  background: #fff;
  display: flex;
  margin-top: 12px;
  width: 92%;
  padding: 28px 0;
  overflow: hidden;
  margin: 18px 20px 20px 20px;
`;

export const DestinationsList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DestinationRow = styled.div`
  display: flex;
  width: 288px;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin: 8px 0;
`;

export const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LocationIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 20px;
`;

export const LocationName = styled.span`
  color: #333;
  font-size: 16px;
  text-transform: capitalize;
  letter-spacing: 0.45px;
`;

export const AmountText = styled.span`
  color: #333;
  font-size: 16px;
  text-align: right;
  letter-spacing: 0.45px;
`;

export const Divider = styled.hr`
  background-color: #e3e7ec;
  border: none;
  height: 1px;
  margin: 16px 0;
  width: 100%;
`;

export const DebitCardLink = styled.a`
  border: none;
`;
