import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font } from '../../../components';
import { SVGS_URL } from '../../../constants/AssetConstants';

const StyledLandingCard = styled.div<{ bgColor?: string }>`
    padding: 24px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
        0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    background-color: ${(props) => props.bgColor};
`;

const WidthWrapper = styled.div`
    width: 320px;
    margin: auto;
`;

const BottomModal = styled.div`
    height: 50vh;
    // max-width: 360px;
    width: 100%;
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 12px 12px 0px 0px;
    padding: 24px;
    margin: 0px auto;

    @media ${Device.desktop} {
        flex-basis: 50%;
        padding: 56px 36px 36px;
        min-height: inherit;
        border-radius: 0px;
        min-width: 50%;
        max-width: 100%;
        height: 100%;
        overflow-y: auto;
    }
`;

const OptionCard = styled.div<{
    isSelected?: boolean;
    dimension?: number;
    type?: number;
}>`
    width: ${(props) => (props.dimension ? `${props.dimension}px` : '100px')};
    height: ${(props) => (props.dimension ? `${props.dimension}px` : '100px')};
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
        0px 1px 3px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${(props) => props.isSelected && `
        border: 3px solid ${props.theme.color.FOREST_GREEN};
        &:after {
        content: '';
        height: 32px;
        width: 32px;
        border-radius: 100%;
        overflow: hidden;
        position: absolute;
        right: -10px;
        top: -9px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-image: url(${SVGS_URL}circle-check2.svg);
    }`};

    @media ${Device.desktop} {
        width: ${(props) => (
            props.dimension && props.type !== 2
                ? '116px'
                : props.type === 2
                ? '180px'
                : '144px')};
        height: ${(props) => (
            props.dimension && props.type !== 2
                ? `116px`
                : props.type === 2
                ? '180px'
                : '144px')};

        ${(props) => props.isSelected && `
            border: 6px solid ${props.theme.color.FOREST_GREEN};

            &:after {
                content: '';
                height: 40px;
                width: 40px;
                right: ${props.type === 2 ? '5px' : '-10px'};
            }`};
    }
`;

const MonthCard = styled.div<{ isSelected?: boolean }>`
    padding: 9px 12px;
    cursor: pointer;
    border-radius: 8px;
    margin: 0 12px 12px 0;
    background-color: ${(props) => (
        !props.isSelected
            ? props.theme.color.CHALK_GREY
            : props.theme.color.WHITE
    )};

    ${(props) => props.isSelected && `
        box-shadow: 0 0 0 3px ${props.theme.color.FOREST_GREEN};
        position: relative;

        &:after {
            content: '';
            height: 20px;
            width: 20px;
            border-radius: 100%;
            overflow: hidden;
            position: absolute;
            right: -10px;
            top: -10px;
            background-size: 100%;
            background-repeat: no-repeat;
            background-image: url(${SVGS_URL}circle-check2.svg);
        }`}

    @media (max-width: 359px ) {
        padding: 5px 5px
    }

    @media ${Device.desktop} {
        padding: 12px 20px;
        border-radius: 16px;
        margin: 0 16px 24px 0;

        ${(props) => props.isSelected && `
        &:after {
            height: 32px;
            width: 32px;
            right: -16px;
            top: -16px;
        }`}
    }
`;

const OptionCardImage = styled.div<{ dimension?: string; type?: number }>`
    width: ${(props) => (props.dimension ? `${props.dimension}` : '64px')};
    height: ${(props) => (props.dimension ? `${props.dimension}` : '64px')};
    overflow: hidden;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.14)),
        drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.12)),
        drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.2));

    @media ${Device.desktop} {
        width: ${(props) => (props.dimension ? `${props.dimension}` : '116px')};
        height: ${(props) => (props.dimension ? `${props.dimension}` : '116px')};
    }
`;

const Holder = styled.div<{ color: string }>`
    position: relative;
    height: 100vh;
    /* height: calc(var(--vh, 1vh) * 100); */
    display: flex;
    overflow: hidden;
    background-color: ${(props) => (
        props.color === 'dark'
            ? props.theme.color.CHARCOAL_GREY
            : props.color === 'light'
            ? props.theme.color.WHITE
            : props.theme.color.SUVA_GREY
    )};

    @media ${Device.desktop} {
        padding: 75px;
        align-items: center;
    }
`;

const PageInfo = styled(Font)`
    text-align: center;
    margin: 0px auto 12px auto;
`;

const Wrapper = styled(Font)`
    max-width: 340px;
    text-align: center;
    margin: auto auto 5px auto;

    @media ${Device.desktop} {
        max-width: 515px;
    }
`;

const SectionOne = styled.div`
    display: flex;
    flex-direction: column;

    @media ${Device.desktop} {
        background-color: ${(props) => props.theme.color.DARKER_GREY};
        flex-basis: 50%;
        min-height: calc(100vh - 160px);
        overflow: hidden;
        min-width: 50%;
    }
`;

const QuestionWrapper = styled.div`
    margin: auto 0px;

    @media ${Device.desktop} {
        margin-top: 80px;
    }
`;

export {
    SectionOne,
    PageInfo,
    Wrapper,
    StyledLandingCard,
    WidthWrapper,
    BottomModal,
    OptionCard,
    OptionCardImage,
    MonthCard,
    Holder,
    QuestionWrapper,
};
