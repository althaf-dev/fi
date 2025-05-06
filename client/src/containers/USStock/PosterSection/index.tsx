/**
 * @file PosterSection
 * Render graph and the price of the us stock
 */

import React, { memo } from 'react';

import { Breadcrumbs, Image } from '../../../components';
import LineChartDesktop from '../../FinancialCharts/LineChartDesktop';

import PriceAndPercentageReturnsSection from '../PriceAndPercentageReturnsSection';
import {
    IActiveTabData, IStockPriceAndChartData, IStockStaticData, ITag, ITimePeriod,
} from '../types';

import {
    Wrapper, StockInfoSection, ImageHolder, StockName,
    TagsSection, Tag, TimePeriodsSection, TimePeriodTab,
    LineChartContainer,
} from './styled';

interface IPosterSectionProps {
    staticData: IStockStaticData;
    stockPriceAndChartData: IStockPriceAndChartData;
    activeTabData: IActiveTabData;
    onTabClick: (value: ITimePeriod) => void;
}

const PosterSection = (props: IPosterSectionProps) => {
    const {
        staticData, stockPriceAndChartData, activeTabData, onTabClick,
    } = props;
    const {
        name, icon, tagList, timePeriods,
    } = staticData || {};

    const { chartDataJsCommand, currentPrice, percentageReturns } = stockPriceAndChartData || {};
    const { initChartJsCommand, setChartDataJsCommand, updateChartDataJsCommand } = chartDataJsCommand || {};

    const onClick = (timePeriod: ITimePeriod) => () => {
        onTabClick(timePeriod);
    };

    return (
        <Wrapper>
            <Breadcrumbs name={name} />

            <StockInfoSection>
                <ImageHolder>
                    <Image icon={icon} alt='stock-image' fallBackImage={icon} loadingType='lazy' />
                </ImageHolder>
                <StockName>{name}</StockName>

                <PriceAndPercentageReturnsSection
                    currentPrice={currentPrice}
                    percentageReturns={percentageReturns}
                    activeTabLabel={activeTabData?.tabText}
                />

                <TagsSection>
                    {tagList?.map((tag: ITag) => (
                        <Tag key={tag.label}>{tag?.label}</Tag>
                    ))}
                </TagsSection>
            </StockInfoSection>

            <LineChartContainer>
                <LineChartDesktop
                    initChartJsCommand={initChartJsCommand}
                    setChartDataJsCommand={setChartDataJsCommand}
                    updateChartDataJsCommand={updateChartDataJsCommand}
                />
            </LineChartContainer>

            <TimePeriodsSection>
                {timePeriods?.map((timePeriod: ITimePeriod) => {
                    const { tabText } = timePeriod;

                    return (
                        <TimePeriodTab key={tabText} onClick={onClick(timePeriod)} isTabActive={activeTabData?.tabText === tabText}>
                            {tabText}
                        </TimePeriodTab>
                    );
                })}
            </TimePeriodsSection>
        </Wrapper>
    );
};

export default memo(PosterSection);
