import styled from 'styled-components';
import { Device } from '../../../Themes/Device';

const Wrapper = styled.div<{ isStickySection?: boolean }>`
    background: ${(props) => (props.isStickySection ? props.theme.color.LIGHT_GREY : props.theme.color.WHITE)};
    border-radius: 15px;
    padding: 20px;
    width: 258px;
    max-height: 400px;
    overflow-y: auto;
    margin: 12px auto 40px;

    @media ${Device.tab} {
        background: ${(props) => props.theme.color.WHITE};
        border-radius: 22px;
        margin: 8px auto 54px;
        max-height: 500px;
        width: 442px;
    }

    @media ${Device.desktop} {
        border-radius: 20px;
        width: 390px;
        margin: 50px auto 0px;
        max-height: 700px;
        padding: 34px;
    }
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Separator = styled.div`
    border: 1px solid ${(props) => props.theme.color.STEEL};
    width: 100%;
    margin: 20px 0px;

    @media ${Device.desktop} {
        border: 1px solid ${(props) => props.theme.color.ONYX};
        margin: 26px 0px;
    }
`;

const TableSeparator = styled.div`
    display: none;

    @media ${Device.desktop} {
        display: block;
        border: 2px solid ${(props) => props.theme.color.GAINSBORO};
        margin: 58px auto 40px;
        width: 395px;
    }
`;

const Label = styled.div<{ isStickySection?: boolean }>`
    color: ${(props) => (props.isStickySection ? props.theme.color.WHITE : props.theme.color.LIGHT_GREY)};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    max-width: 112px;
    text-align: start;

    @media ${Device.tab} {
        font-size: 22px;
        max-width: 190px;
    }

    @media ${Device.desktop} {
        color: ${(props) => props.theme.color.LIGHT_GREY};
        font-size: 20px;
        max-width: 163px;
    }
`;

const LabelValue = styled.div<{ isStickySection?: boolean }>`
    color: ${(props) => (props.isStickySection ? props.theme.color.WHITE : props.theme.color.LIGHT_GREY)};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    margin-right: 6px;

    @media ${Device.tab} {
        font-size: 22px;
    }

    @media ${Device.desktop} {
        color: ${(props) => props.theme.color.LIGHT_GREY};
        font-size: 20px;
        margin-right: 8px;
    }
`;

const LabelContainer = styled.div`
    display: flex;
    align-items: center;
`;

export {
    Wrapper, Section, Separator, TableSeparator, Label, LabelValue, LabelContainer,
};
