import styled from 'styled-components';
import { Device, MAX_WIDTH_MEDIA_SCREENS } from '../../../Themes/Device';

export const InfoContainer = styled.section`
  margin-top: 50px;
  padding: 20px 20px;
  background-color: #f5f5f5;
  @media (${Device.tab}) {
    color: #E6E9ED;
  }
`;
export const AnimatedCalculatorGrid = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 37px;
  margin-bottom: 80px;
  
  @media (${Device.desktop}) {
    margin-top: 60px;
    margin-bottom: 100px;
  }
`;

export const SlideContainer = styled.div<{ offset: number }>`
  display: flex;
  gap: 24px;
  transition: transform 0.4s ease-in-out;
  transform: translateX(${(props) => props.offset}px);
  padding: 0 20px;
  
  @media (${Device.desktop}) {
    gap: 52px;
    padding: 0;
  }
`;
export const CalculatorTitle = styled.h2`
   font-family: Gilroy;
    font-size: 64px;
    font-weight: 400;
    line-height: 67.2px;
    text-align: left;
    padding-left: 70px;

    @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
        font-family: Gilroy;
        font-size: 24px;
        font-weight: 500;
        line-height: 28px;
        text-align: left;
        padding: 0 20px;
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
  min-width: 156px; // Add this to prevent shrinking
  height: 120px;

  @media (${Device.tab}) {
    padding: 75px;
    width: 300px;
    min-width: 300px; // Add this to prevent shrinking
    height: 250px;
    gap: 0px;
    border-radius: 31px;
  }

  @media (${Device.desktop}) {
    width: 320px;
    min-width: 320px; // Add this to prevent shrinking
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
  padding: 20px 20px 0px 20px;
  @media (${Device.tab}) {
    padding: 20px 75px 20px;  
    border-radius: 24px 24px 0px 0px;
  }
  @media (${Device.desktop}) {
    padding: 80px 110px 20px;
    margin: auto;
    max-width: 1440px;
  }
`;

export const CalculatorLink = styled.a`
  text-align: center;
`;

export const ChevronIcon = styled.span`
    margin-left: 8px;
    font-size: 16px;
    color: #ccc;
`;

export const NavigationButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`;

interface NavigationButtonProps {
    visibility: string;
}

export const NavigationButtonLeft = styled.img<NavigationButtonProps>`
    padding: 10px;
    background-color: white;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    visibility: ${(props) => props.visibility};

    @media ${MAX_WIDTH_MEDIA_SCREENS.phone}{
      display: none;
    }
`;

export const NavigationButtonRight = styled.img<NavigationButtonProps>`
    cursor: pointer;
    padding: 10px;
    background-color: white;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    visibility: ${(props) => props.visibility};

    @media ${MAX_WIDTH_MEDIA_SCREENS.phone}{
      display: none;
    }
`;

export const GridContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
`;

export const GridWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 1500px;
  width: 100%;
`;
