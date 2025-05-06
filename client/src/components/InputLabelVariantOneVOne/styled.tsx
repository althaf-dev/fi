/**
 * @file styled
 *
 * @summary This file contains styled components for InputLabelVariantOneVOne component.
 */

import styled from 'styled-components';

import { Device } from '../../Themes/Device';

import MIXINS from '../../Themes/mixins';

const Container = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: 12px;

    @media ${Device.desktop} {
        margin-bottom: 24px;
    }
`;

const Description = styled.span`
    ${MIXINS.FontMixin({ weight: 600, size: '12px', lineHeight: '14px' })};
    color: ${(props) => props.theme.color.SILVER_2};

    @media ${Device.tab} {
        ${MIXINS.FontMixin({ weight: 600, size: '16px', lineHeight: '14px' })};
    }
`;

export { Container, Description };
