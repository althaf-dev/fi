/**
 * @file UsStocks List Styled
 */
import styled from 'styled-components';

import { Device } from '@/Themes/Device';
import MIXINS from '@/Themes/mixins';

const StockCard = styled.div`
    ${MIXINS.FlexMixin({ justify: 'space-between' })};
    cursor: pointer;
`;

const StockInfo = styled.div`
    ${MIXINS.FlexMixin({ justify: 'space-between' })};
    gap: 14px;

    @media ${Device.desktop} {
        gap: 24px;
    }
`;

const ImageHolder = styled.div`
    border: 1px solid ${(props) => props.theme.color.MYSTIC};
    border-radius: 10px;
    width: 42px;
    height: 42px;
    padding: 7px;

    @media ${Device.desktop} {
        border-radius: 19px;
        width: 86px;
        height: 86px;
        padding: 14px;
    }
`;

const StockStats = styled.div`
    flex-shrink: 0;
`;

const StockName = styled.div`
    ${MIXINS.FontMixin({ weight: 600, size: '14px', lineHeight: '18px' })};
    color: ${(props) => props.theme.color.MINE_SHAFT};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '28px', lineHeight: '32px' })};
    }
`;

const Separator = styled.div`
    border: 1px solid ${(props) => props.theme.color.CHALK_GREY};
    margin: 20px 0px;

    @media ${Device.desktop} {
        margin: 25px 0px;
    }
`;

export {
    StockCard,
    StockInfo,
    ImageHolder,
    StockName,
    Separator,
    StockStats,
};
