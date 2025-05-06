/**
 * @file Carousel Arrows Styled
 */
import styled, { css } from 'styled-components';

import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

const ArrowWrapperStyles = css`
    ${MIXINS.FlexMixin({ width: '55px', height: '70px' })};
    border-radius: 26px;
    background-color: ${(props) => props.theme.color.LIGHT_GREY};
    cursor: pointer;
    position: absolute;
    top: 30%;
    z-index: 1;
`;

const LeftArrowWrapper = styled.div`
    ${ArrowWrapperStyles};
    left: 0;
`;

const RightArrowWrapper = styled.div`
    ${ArrowWrapperStyles};
    right: 0;
`;

const IconHolder = styled.div`
    display: none;

    @media ${Device.desktop} {
        display: block;
        width: 13px;
        height: 22px;
    }
`;

export {
    LeftArrowWrapper,
    RightArrowWrapper,
    IconHolder,
};
