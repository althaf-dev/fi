import { Device } from '@/Themes/Device';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  background-color: #f5f5f5;
`;

// Header styling
export const HeaderContainer = styled.header`
  background-color: #18191b;
  padding: 33px 20px;
  height: 260px;
  @media (${Device.tab}) {
    padding: 45px 0px;  
    height: 400px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0px 20px;
  @media (${Device.tab}) {
    padding: 0px 75px;
    align-items: flex-start;
    text-align: start;
  }
  @media (${Device.desktop}) {
    align-items: flex-start;
    text-align: start;
    padding: 0px 110px 0px;
    display: flex;
    margin: auto;
    max-width: 1440px;
  }
`;

export const CardName = styled.p`
  color: #929599;
  font-size: 16px;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  @media (${Device.tab}) {
    font-size: 36px;
    margin-bottom: 28px;
  }
`;

export const HeaderTitle = styled.h1`
  color: #f6f9fd;
  font-size: 20px;
  line-height: 24px;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  margin-top: 8px;
  @media (${Device.tab}) {
    font-size: 40px;
    line-height: 60px;
  }
  @media (${Device.desktop}) {
    font-size: 64px;
    line-height: 60px;
  }
`;

// CountrySelector styling
export const SelectorContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
  padding: 0 20px;
`;

export const SelectorLabel = styled.label`
  color: #6a6d70;
  font-size: 12px;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const SelectorBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 320px;
  margin-top: 16px;
  padding: 8px;
  border-radius: 16px;
  border: 1px solid #e6e9ed;
  background-color: #fff;
`;

export const CountryOption = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CountryFlag = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 12px;
`;

export const CountryName = styled.span`
  font-size: 24px;
  color: #313234;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
`;

export const DropdownIcon = styled.img`
  width: 24px;
  height: 24px;
`;

// WithdrawalLimit styling
export const LimitContainer = styled.section`
  margin-top: 20px;
  border-radius: 20px;
  border: 1px solid #fff8ce;
  background-color: #fff;
  box-shadow: 0px 4px 8.7px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const LimitContent = styled.div`
  padding: 16px;
  text-align: center;
`;

export const LimitDescription = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #313234;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  @media (${Device.tab}) {
    font-size: 24px;
  }
`;

export const LimitAmount = styled.div`
  font-size: 28px;
  color: #313234;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  margin-top: 4px;
  padding: 2px 70px;
  border-radius: 11px;
  @media (${Device.tab}) {
    font-size: 36px;
  }
`;

// InfoSection styling
export const InfoText = styled.p`
  color: #8d8d8d;
  font-size: 10px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  @media (${Device.tab}) {
    font-size: 24px;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 2px solid #e7e7e7;
  margin: 30px 0;
  @media (${Device.tab}) {
    display: none;
  }
`;

export const Disclaimer = styled.p`
  color: #8d8d8d;
  font-size: 14px;
  line-height: 22px;
  font-family: Inter, sans-serif;
  padding: 0 20px;
  margin-top: 30px;
  @media (${Device.tab}) {
    font-size: 20px;
    padding: 20px 75px 20px;  
  }
  @media (${Device.desktop}) {
    padding: 20px 110px 0px;
    margin: auto;
    max-width: 1440px;
  }
`;

// CalculatorInfo styling
export const InfoContainer = styled.section`
  margin-top: 50px;
  padding: 20px 20px;
  background-color: #f5f5f5;
  @media (${Device.tab}) {
    color: #E6E9ED;
  }
`;

export const CalculatorTitle = styled.h2`
  color: #333;
  font-size: 24px;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  margin-top: 20px;
  padding: 0px 20px;
  @media (${Device.tab}) {
    font-size: 64px;
  }
  @media (${Device.desktop}) {
    font-size: 64px;
    padding: 0px;
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
  padding: 0px 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-bottom: 80px;
  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (${Device.desktop}) {
    gap: 52px;
    margin-top: 60px;
    margin-bottom: 100px;
    padding: 0px;
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
  padding: 20px 20px;
  background-color: #f5f5f5;
  @media (${Device.tab}) {
    padding: 20px 75px 20px;  
  }
  @media (${Device.desktop}) {
    padding: 80px 110px 20px;
    margin: auto;
    max-width: 1440px;
    background-color: #f5f5f5;
  }
`;

export const CalculatorLink = styled.a`
  text-align: center;
`;
