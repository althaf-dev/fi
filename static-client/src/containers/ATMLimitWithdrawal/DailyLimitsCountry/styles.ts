import { Device } from "@/Themes/Device";
import { styled } from "styled-components";
import {MAX_WIDTH_MEDIA_SCREENS} from "@/Themes/Device";


export const CountryLimitContainer = styled.main`
    display: flex;
    flex-direction: column;
    font-family: Gilroy, sans-serif;
    font-weight: 600;
    padding: 32px 20px 8px 20px;
    background-color: #e6e9ed;
    @media (${Device.tab}) {
        padding: 32px 0px 8px 0px;
    }
    @media (${Device.desktop}) {
        padding: 32px 0px 8px 0px;
    }
`;

export const Title = styled.h1`
    color: #000;
    font-size: 10px;
    line-height: 1.2;
    margin-left: 23px;
    font-weight: 595;
    margin-bottom: 12px;
    @media (${Device.tab}) {
        max-width: 100%;
        font-size: 20px;
        padding: 0px 53px;
        margin-bottom: 12px;
    }
    @media (${Device.desktop}) {
        padding: 0px 89px;
    }
`;

export const ContentWrapper = styled.div`
    margin-top: 10px;
    border-radius: 24px;
    background-color: #fff;
    width: 100%;
    font-size: 28px;
    color: #333;
    line-height: 1;
    @media (${Device.tab}) {
        max-width: 100%;
    }
`;

export const CountryList = styled.div`
    
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 32px 0;
    @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
        padding: 28px 0;
    }
`;

export const CountryRow = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding:5px 16px;
    @media (${Device.tab}) {
        flex-wrap: wrap;
        gap: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 32px;
    }
    @media (${Device.desktop}) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const CountryInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 120px;
    height: 18px;
`;

export const FlagImage = styled.div`
    aspect-ratio: 1;
    object-fit: contain;
    font-size: 18px;
    margin-top: 3px;
    @media (${Device.tab}) {
        font-size: 34px;
        margin-top: 0px;
    }
`;

export const CountryName = styled.span`
    font-family: GiGilroy, sans-serif;
    font-size: 18px;
    font-weight: 595;
    line-height: 17.6px;
    letter-spacing: 0.45px;
    @media (${Device.tab}) {
        font-size: 28px;
    }
`;

export const LimitValue = styled.span`
    text-align: right;
    width: 150px;
    font-size: 16px;
    font-weight: 595;
    @media (${Device.tab}) {
        font-size: 22px;
    }
    @media (${Device.desktop}) {
        font-size: 28px;
    }
`;

export const Divider = styled.hr`
    background-color: #e3e7ec;
    height: 1px;
    width: 100%;
    margin: 16px 0;
    border: 0;
    @media (${Device.tab}) {
        margin: 28px 0;
    }
`;

export const CountryContainer = styled.div`
    margin-top:20px;
    width: 100%;
    padding: 0px 20px 112px;
    @media (${Device.tab}) {
        padding: 20px 75px 112px;
    }
    @media (${Device.desktop}) {
        padding: 0px 110px 112px;
        margin: auto;
        max-width: 1440px;
    }
`;

export const CountryNotFound = styled.p`
    margin-top:20px;
    padding: 20px 20px 20px;
    font-size: 16px;
    @media (${Device.tab}) {
        padding: 20px 83px 20px;
        font-size: 24px;
    }
`;

export const TitleContainer = styled.div`
    margin-bottom:10px;
    max-width: 1440px;
    
    @media (${Device.desktop}) {
        margin: auto;
        width: 1440px;
        text-align: left;
    }
`;
