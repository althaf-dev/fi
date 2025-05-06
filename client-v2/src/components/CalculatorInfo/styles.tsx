import styled from 'styled-components';
import { Device, MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';

export const InfoContainer = styled.section`
  margin-top: 50px;
  padding: 20px 20px;
  background-color: #f5f5f5;
  @media (${Device.tab}) {
    color: #E6E9ED;
  }
`;

export const CalculatorTitle = styled.h2`
  font-family: Gilroy;
  font-size: 64px;
  font-weight: 400;
  line-height: 67.2px;
  text-align: left;
  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 24px;
    font-weight: 500;
    line-height: 28.8px;
    text-align: left;
  }
`;

export const InfoTitle = styled.h2`
  color: #333;
  font-size: 24px;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  margin-top: 20px;
  @media (${Device.tab}) {
    font-size: 30px;
  }
`;

export const CalculatorGrid = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 37px;
  overflow-x: scroll;
  overflow-y: hidden;
  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (${Device.desktop}) {
    gap: 52px;
    margin-top: 60px;
  }
`;

export const CalculatorCard = styled.section`
  word-break: break-word;
  border-radius: 12px;
  background: var(--snow-fffff, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 18px;
  width: 156px;
  height: 120px;
  @media (${Device.tab}) {
    padding: 75px;
    width: 300px;
    height: 250px;
    gap: 0px;
    border-radius: 31px;
  }
  @media (${Device.desktop}) {
    width: 320px;
    height: 264px;
    gap: 0px;
    border-radius: 31px;
  }
`;

export const CalculatorIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  @media (${Device.tab}) {
    width: 60px;
    height: 60px;
    margin-top: -20px;
  }
  @media (${Device.desktop}) {
    width: 60px;
    height: 60px;
  }
`;

export const CalculatorName = styled.p`
  margin-top: 12px;
  white-space: pre-line;
  text-align: center;
  font-family: Gilroy, sans-serif;
  @media (${Device.tab}) {
    font-size: 24px;
  }
  @media (${Device.desktop}) {
    font-size: 24px;
  }  
`;

export const DestinationContainer = styled.div`
  width: 100%;
  padding: 20px 80px 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const CalculatorContainer = styled.section`
  @media (${Device.desktop}) {
    margin-top: 100px;
    max-width: 100%;
  }
`;

export const CalculatorLink = styled.a`
  text-align: center;
`;
