/**
 * @file NumberOfStocksAndSortingSection Component
 */
import React, { memo } from 'react';

import { ICONS_URL_MAP } from '../../../constants/AssetConstants';

import { Image } from '../../../components';

import {
    Wrapper, NumberOfStocksText, SortingSection, SelectedSortOption, SortingImageWrapper, SortingImageHolder,
} from './styled';

interface INumberOfStocksAndSortingSectionProps {
    numberOfStocksText: string;
    selectedSortOptionTitle: string;
    handleSort: () => void;
}

const NumberOfStocksAndSortingSection = (props: INumberOfStocksAndSortingSectionProps) => {
    const { numberOfStocksText, selectedSortOptionTitle, handleSort } = props;

    return (
        <Wrapper>
            <NumberOfStocksText>
                {numberOfStocksText}
            </NumberOfStocksText>
            <SortingSection onClick={handleSort}>
                <SelectedSortOption>
                    {selectedSortOptionTitle}
                </SelectedSortOption>
                <SortingImageWrapper>
                    <SortingImageHolder>
                        <Image icon={ICONS_URL_MAP.GREEN_UP_ARROW} alt='up-arrow' loadingType='lazy' />
                    </SortingImageHolder>
                    <SortingImageHolder>
                        <Image icon={ICONS_URL_MAP.GREEN_DOWN_ARROW} alt='down-arrow' loadingType='lazy' />
                    </SortingImageHolder>
                </SortingImageWrapper>
            </SortingSection>
        </Wrapper>
    );
};

export default memo(NumberOfStocksAndSortingSection);
