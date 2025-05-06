/**
 * @file NumberOfStocksAndSortingSection Styled
 */
import styled from 'styled-components';

import { Device } from '@/Themes/Device';
import MIXINS from '@/Themes/mixins';

const Wrapper = styled.div`
    ${MIXINS.FlexMixin({ justify: 'space-between' })};
    background-color: ${(props) => props.theme.color.CATSKILL_WHITE};
    padding: 7px 14px;

    @media ${Device.desktop} {
        padding: 16px 40px;
    }
`;

const NumberOfStocksText = styled.div`
    ${MIXINS.FontMixin({ size: '12px', lineHeight: '16px', weight: 600 })};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ size: '20px', lineHeight: '24px', weight: 600 })};
    }
`;

const SortingSection = styled.div`
    ${MIXINS.FlexMixin({})};
    gap: 5px;
    cursor: pointer;

    @media ${Device.desktop} {
        gap: 10px;
    }
`;

const SelectedSortOption = styled.div`
    ${MIXINS.FontMixin({ size: '12px', lineHeight: '16px', weight: 600 })};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ size: '20px', lineHeight: '24px', weight: 600 })};
    }
`;

const SortingImageWrapper = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column' })};
    gap: 3px;
`;

const SortingImageHolder = styled.div`
    width: 8px;
    height: 4px;

    @media ${Device.desktop} {
        width: 15px;
        height: 10px;
    }
`;

export {
    Wrapper,
    NumberOfStocksText,
    SortingSection,
    SortingImageHolder,
    SelectedSortOption,
    SortingImageWrapper,
};
