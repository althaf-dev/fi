/**
 * @file Common styled components used across the app
 */

import styled, { css } from 'styled-components';

import { Device } from '../Themes/Device';
import MIXINS from '../Themes/mixins';

/**
 * StyledContainer is common wrapper on the input used in the calculator
 * but the background-color, font-size and max-width are changing according to the view port
 * that why we are passing different props here
 * isMobileView props - only true when viewport is mobile and change the background color
 * isModalOpen props - use to change font-size in mobile view
 * componentType props - use to change the max-width in mobile view
 * mobileInputWidth props - use to set width of input element in mobile view
 * hasMobileDesignV1 props - only true when viewport is mobile and need to render calculator v1 mobile design
 * hasMobileDesignV1 props use to set margin, width, font-size
 * isInputInsideAnotherComponent props - use to remove margin from input component if input component is wrap inside another component
 */
const StyledContainer = styled.div<{
    isMobileView?: boolean,
    isModalOpen?: boolean,
    componentType?: string,
    mobileInputWidth?: number,
    hasMobileDesignV1?: boolean,
    isInputInsideAnotherComponent?: boolean
}>`
    background-color: ${(props) => (props.isMobileView ? props.theme.color.WHITE : props.theme.color.CHALK_GREY)};
    border-radius: 11px;
    color: ${(props) => props.theme.color.MINE_SHAFT};
    cursor: pointer;
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: ${(props) => {
        if (props.isModalOpen) return '28px';

        if (props.hasMobileDesignV1) return '20px';

        return '16px';
    }};
    line-height: 110%;
    letter-spacing: 0.45px;
    padding: 8px 12px;
    max-width: ${(props) => (
        props.componentType === 'dropdown' // TODO: Use value from enum instead of direct strings
        || props.componentType === 'dropdown_and_input'
        || props.componentType === 'slider'
            ? '133px' : 'unset')};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: ${(props) => (props.hasMobileDesignV1 ? `${props.mobileInputWidth}ch` : 'unset')};
    margin: ${(props) => (props.isInputInsideAnotherComponent ? '0px' : '0px auto')};

    @media ${Device.tab} {
        font-size: 24px;
        padding: 15px 20px;
        margin: 0px;
    }
`;

/**
 * UserSelectNone is common style for disabling selection
 */
const UserSelectNone = css`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

/**
 * OutlineNone is common style for disabling outline
 */
const OutlineNone = styled.div`
    outline: none;
`;

/**
 * A RangeLabelSection is a common styling for showing the labels for the min and max values of the slider
 */
const RangeLabelSection = styled.div`
    color: ${(props) => props.theme.color.TEXT_GREY_1};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    margin-top: 9px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${Device.tab} {
        font-size: 16px;
        line-height: 120%;
        margin-top: 19px;
    }

    @media ${Device.desktop} {
        font-size: 20px;
    }
`;

const CenterTextDiv = styled.div`
    text-align: center;
`;

/**
 * Render an <a> tag with an href attribute and optional target and rel attributes, based on props passed to the component.
 *
 * @example
 * <StyledLink url="https://example.com" isExternal>Example Website</StyledLink>
 *
 */

const StyledContainerVOne = styled.div`
    ${MIXINS.FontMixin({ weight: 600, size: '20px' })};
    background-color: ${(props) => props.theme.color.BLACK};
    color: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    padding: 12px 33px;
    max-width: 150px;
    margin: 0px auto;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({ weight: 600, size: '24px' })};
        max-width: 200px;
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '36px' })};
        padding: 25px 20px;
        max-width: 300px;
    }
`;

const ScrollableContainer = styled.div`
    overflow: auto;

    /* To hide scrollbar */
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export {
    StyledContainer, UserSelectNone, OutlineNone, RangeLabelSection, CenterTextDiv, StyledContainerVOne,
    ScrollableContainer,
};
