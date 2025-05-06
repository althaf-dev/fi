import styled from 'styled-components';

import { Device } from '../../../../Themes/Device';

const Wrapper = styled.div`
    padding: 30px 30px 24px;

    @media ${Device.tab} {
        padding: 48px 133px 40px;
    }

    @media ${Device.desktop} {
        padding: 60px 40px 0px;
    }
`;

const Container = styled.div`
    & > div:last-child {
        margin-bottom: 0px;
    }
`;

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 27px;

    @media ${Device.tab} {
        margin-bottom: 40px;
    }
`;

const Description = styled.span`
    color: ${(props) => props.theme.color.SUVA_GREY};
    font-size: 14px;
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
    Wrapper, Container, Section, Description, Separator, BulletContainer,
};
