import styled from 'styled-components';

import { Device } from '../../../../Themes/Device';

const Wrapper = styled.div`
    padding: 23px;

    @media ${Device.tab} {
        padding: 48px 133px 40px;
    }

    @media ${Device.desktop} {
        padding: 48px 40px 0px;
    }
`;

// Container for extra information above the graph legend
const ExtraInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 36px;

    @media ${Device.tab} {
        margin-bottom: 47px;
    }

    @media ${Device.desktop} {
        margin-bottom: 60px;
    }
`;

// Each item in the extra info container
const ExtraInfoText = styled.div`
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: ${(props) => props.theme.color.SUVA_GREY};

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    @media ${Device.tab} {
        font-size: 18px;
    }

    @media ${Device.desktop} {
        font-size: 16px;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Description = styled.span`
    color: ${(props) => props.theme.color.SUVA_GREY};
    font-size: 11px;
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0.39px;
    text-transform: uppercase;

    @media ${Device.tab} {
        letter-spacing: 0.45px;
        font-size: 16px;
    }
`;

const Separator = styled.div`
    border: 2px solid ${(props) => props.theme.color.GAINSBORO};
    margin: 28px 0px;
    height: 0px;
    display: none;

    @media ${Device.desktop} {
        display: block;
        margin: 40px 0px;
    }
`;

const BulletContainer = styled.span<{ bulletColor: string }>`
    background-color: ${(props) => props.bulletColor};
    border-radius: 50%;
    display: inline-block;
    width: 9px;
    height: 9px;
    margin-right: 7px;

    @media ${Device.tab} {
        width: 12px;
        height: 12px;
        margin-right: 12px;
    }
`;

export {
    Wrapper, Container, Description, Separator, BulletContainer, ExtraInfoContainer, ExtraInfoText,
};
