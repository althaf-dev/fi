import styled from 'styled-components';
import { Font } from '../../../components';
import { Device } from '../../../Themes/Device';

const Container = styled.div`
    max-width: 308px;
    margin: auto;
    margin-bottom: 40px;

    @media ${Device.tab} {
        margin-bottom: 60px;
        max-width: 900px;
    }

    @media ${Device.desktop} {
        margin-bottom: 120px;
        max-width: 1296px;
    }
`;

const SectionContainerOneTitle = styled(Font)`
    text-align: center;
    margin-bottom: 30px;

    @media ${Device.desktop} {
        max-width: 850px;
        margin: auto;
    }
`;

const SectionContainerTwoTitle = styled(Font)`
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;

    @media ${Device.desktop} {
        max-width: 850px;
        margin: auto;
    }
`;

const SectionOne = styled.div`
    margin-bottom: 80px;
    margin-top: 30px;
    border-radius: 25px;
    overflow: hidden;

    @media ${Device.desktop} {
        margin-bottom: 120px;
        margin-top: 60px;
    }
`;

const SectionTwo = styled.div`
    margin-bottom: 40px;
    margin-top: 30px;
    border-radius: 25px;
    overflow: hidden;

    @media ${Device.desktop} {
        margin-bottom: 120px;
        margin-top: 60px;
    }
`;

const InfoOne = styled(Font)`
    margin-bottom: 20px;
    max-width: 320px;
    text-align: center;

    @media ${Device.desktop} {
        margin: auto auto 40px auto;
        max-width: 978px;
    }
`;

const ContentWrapper = styled.div<{ color: 'GAINSBORO' | 'WHITE' }>`
    background: ${(props) => props.theme.color[props.color]};
    padding: 20px 15px;
    display: flex;
    align-items: center;

    & > div {
        font-weight: normal !important;
        word-break: break-word;
    }

    @media ${Device.desktop} {
        padding: 28px 48px;

        & > div {
            line-height: 130% !important;
        }
    }
`;

const BoldContent = styled.span`
    font-weight: 700;
`;

const ColoredSpan = styled.span<{ color: 'FOREST_GREEN' }>`
    color: ${(props) => props.theme.color[props.color]};
    text-decoration: underline;
`;

export {
    Container,
    SectionContainerOneTitle,
    SectionContainerTwoTitle,
    InfoOne,
    SectionOne,
    SectionTwo,
    ContentWrapper,
    BoldContent,
    ColoredSpan,
};
