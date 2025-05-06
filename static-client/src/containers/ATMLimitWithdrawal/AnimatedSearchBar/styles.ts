import { Device } from "@/Themes/Device";
import { styled } from "styled-components";

export const PageBackground = styled.div`
    background: #e7e9ed;
    width: 100%;
    position: relative;
    padding-top: 15px;
`;

export const SearchBarContainer = styled.div`
    width: 100%;
    padding: 0 20px;
    position: relative;
    z-index: 1;
    margin-bottom:px;
    background: transparent;
    padding-bottom: 28px;

    @media (${Device.tab}) {
        padding: 0 75px 28px;
    }

    @media (${Device.desktop}) {
        padding: 0 110px 28px;
        max-width: 1440px;
        margin: 0 auto;
    }
`;

export const SearchForm = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    padding: 22px 24px;  // Increased padding for better icon placement
    background: var(--Background-Light-Layer-2, #FFF);
    border-radius: 50px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    margin-top: -47px;
`;

export const SearchInput = styled.input`
    flex: 1;
    border: none;
    background: none;
    font-family: 'Gilroy', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #00b899;
    outline: none;
    min-width: 0;
    padding-left: 36px; // Space for the icon
    margin-left: -28px; // Pull text closer to icon
    
    &::placeholder {
        font-family: 'Gilroy', sans-serif;
        color: #00b899;
    }
`;

export const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    flex-shrink: 0;
    position: relative;
    z-index: 2;
`;


export const AnimationContainer = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  left: 172px;
  top: 46.5%;
  transform: translateY(-50%);
  height: 50px;
  width: 200px;
  pointer-events: none;
  z-index: 10;
  display: ${props => props.$isVisible ? 'block' : 'none'};
`;