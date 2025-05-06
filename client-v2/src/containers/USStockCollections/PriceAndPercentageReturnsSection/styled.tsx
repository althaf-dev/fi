/**
 * @file PriceAndPercentageReturn Styled
 */
import styled from 'styled-components';

import { Device } from '@/Themes/Device';
import MIXINS from '@/Themes/mixins';

const CurrentPrice = styled.div`
    ${MIXINS.FontMixin({ weight: 600, size: '14px', lineHeight: '18px' })};
    color: ${(props) => props.theme.color.MINE_SHAFT};
    text-align: end;
    word-break: break-word;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '28px', lineHeight: '32px' })};
    }
`;

const PercentageReturnsWrapper = styled.div`
    ${MIXINS.FlexMixin({ justify: 'flex-end' })};
    margin-top: 4px;

    @media ${Device.desktop} {
        margin-top: 16px;
    }
`;

const PercentageReturnsImageHolder = styled.div`
    width: 10px;
    height: 10px;

    @media ${Device.desktop} {
        width: 20px;
        height: 20px;
    }
`;

const PercentageReturnsLabel = styled(CurrentPrice)``;

export {
    CurrentPrice,
    PercentageReturnsWrapper,
    PercentageReturnsImageHolder,
    PercentageReturnsLabel,
};
