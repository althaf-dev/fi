import styled from 'styled-components';
import { Font } from '../../../components/Abstract';
import { Device } from '../../../Themes/Device';

const SectionContainer = styled.div`
    padding: 60px 20px;

    @media ${Device.tab} {
        padding: 80px 0px;
    }

    @media ${Device.desktop} {
        padding: 100px 0px;
    }
`;

const Bar = styled.div`
    height: 2px;
    width: 80px;
    background-color: ${(props) => props.theme.color.MID_GREY};
    text-align: center;
    margin: auto;
`;

const Card = styled.div`
    padding: 20px;
    border-radius: 26px;
    background-color: ${(props) => props.theme.color.WHITE};

    @media ${Device.desktop} {
        padding: 40px;
    }
`;

const WidthHolder = styled.div`
    margin: auto;
    max-width: 320px;

    @media ${Device.tab} {
        max-width: 484px;
    }

    @media ${Device.desktop} {
        max-width: 680px;
    }
`;

const TitleTextHolder = styled.div`
    margin: auto;
    max-width: 320px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 850px;
    }
`;

const TitleText = styled(Font)`
    text-align: center;
    margin-bottom: 16px;

    @media ${Device.desktop} {
        margin-bottom: 32px;
    }
`;

const InfoOne = styled(Font)`
    text-align: center;
    cursor: pointer;

    &:not(:last-child) {
        margin-bottom: 8px;
    }

    @media ${Device.tab} {
        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    @media ${Device.desktop} {
        &:not(:last-child) {
            margin-bottom: 12px;
        }
    }
`;

const InfoTwo = styled(Font)`
    text-align: left;
    cursor: pointer;
    max-width: 320px;
    margin: auto;

    &:not(:last-child) {
        margin-bottom: 8px;
    }

    @media ${Device.tab} {
        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    @media ${Device.desktop} {
        &:not(:last-child) {
            margin-bottom: 12px;
        }
    }
`;

export {
    SectionContainer,
    Bar,
    Card,
    WidthHolder,
    TitleTextHolder,
    TitleText,
    InfoOne,
    InfoTwo,
};
