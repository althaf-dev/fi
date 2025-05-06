/**
 * @file Waitlist common styled components
 */

import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

import { Font } from '..';

const MainContainer = styled.div`
    background: ${(props) => props.theme.color.SHARK2};
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
        width: 52px;
        height: 52px;
        left: 75px;
    }
`;

const HeaderHolder = styled.div`
    ${MIXINS.FlexMixin({})};
    margin-bottom: 10px;
    margin-top: 18px;

    @media ${Device.desktop} {
        margin-bottom: 10px;
    }

    .header-title{
        font-family: Gilroy;
        font-size: 20px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;
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
height: 103px;
`;

export {
    MainContainer, PrevHolder, HeaderHolder, HighlightText, ErrorDescription, ErrorWrapper,
    FooterContainer,
};
