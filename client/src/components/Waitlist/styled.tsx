/**
 * @file Waitlist common styled components
 */

import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

import { Font } from '..';

const MainContainer = styled.div`
    background-color: ${(props) => props.theme.color.CHALK_GREY};
    width: 100%;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
`;

const PrevHolder = styled.div`
    cursor: pointer;
    position: absolute;
    left: 31px;
    width: 24px;
    height: 24px;

    @media ${Device.desktop} {
        width: 36px;
        height: 36px;
        left: 75px;
    }
`;

const HeaderHolder = styled.div`
    ${MIXINS.FlexMixin({})};
    margin-bottom: 40px;

    @media ${Device.desktop} {
        margin-bottom: 60px;
    }
`;

const HighlightText = styled.span`
    color: black;
`;

const ErrorDescription = styled(Font)`
`;

const ErrorWrapper = styled.div<{ textAlignment?: string, noPadding?: boolean }>`
    padding-top: ${({ noPadding }) => (noPadding ? '0px' : '10px')};
    text-align: ${({ textAlignment }) => (textAlignment || 'center')};
`;

const FooterContainer = styled.div`
${MIXINS.FlexMixin({ dir: 'column' })}; 
`;

export {
    MainContainer, PrevHolder, HeaderHolder, HighlightText, ErrorDescription, ErrorWrapper,
    FooterContainer,
};
