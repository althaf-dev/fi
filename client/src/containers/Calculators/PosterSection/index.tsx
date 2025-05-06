import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import CalculatorBreadcrumbs from '../CalculatorBreadcrumbs';
import CalculatorBanner from '../CalculatorBanner';
import { ICalculatorCtaBannerData } from '../types';

/**
 * in the design for the calculator list page and for the single calculator page the padding is different
 * that why we use hasCalculatorListPage props which give a boolean value
 * according to the hasCalculatorListPage value we decide which padding we need to show
 */
const ContentHolder = styled.div<{ hasCalculatorListPage: boolean }>`
    text-align: ${(props) => (props.hasCalculatorListPage ? 'center' : 'left')};
    padding: 8px 30px 20px;
    max-width: 767px;
    margin: auto;

    @media ${Device.tab} {
        padding: ${(props) => (props.hasCalculatorListPage ? '50px 20px 64px' : '50px 20px 58px')};
        max-width: ${(props) => (props.hasCalculatorListPage ? '534px' : '728px')};
    }

    @media ${Device.desktop} {
        display: block;
        padding: 40px 0px 90px;
        max-width: ${(props) => (props.hasCalculatorListPage ? '732px' : '1080px')}
    }
`;

const Title = styled.h1`
    color: ${(props) => props.theme.color.WHITE};
    font-family: 'Gilroy',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;

    @media ${Device.tab} {
        font-size: 44px;
        line-height: 110%;
        margin-bottom: 20px;
    }

    @media ${Device.desktop} {
        font-size: 64px;
        line-height: 105%;
        margin-bottom: 31px;
    }
`;

const Description = styled.div`
    color: ${(props) => props.theme.color.SILVER_2};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 155%;
    display: none;

    @media ${Device.tab} {
        display: block;
        line-height: 140%;
    }

    @media ${Device.desktop} {
        font-size: 24px;
        line-height: 140%;
    }
`;

interface PosterSectionProps {
    title: string;
    calculatorUrl?: string;
    description?: string;
    hasBreadcrumbs?: boolean;
    hasCalculatorListPage?: boolean;
    bannerData?: ICalculatorCtaBannerData;
}

const PosterSection = (props: PosterSectionProps) => {
    const {
        title, calculatorUrl, description, hasBreadcrumbs, hasCalculatorListPage, bannerData,
    } = props;

    const breadcrumbsSection = (
        <CalculatorBreadcrumbs calculatorUrl={calculatorUrl} name={title} />
    );

    return (
        <>
            <ContentHolder hasCalculatorListPage={hasCalculatorListPage}>
                {hasBreadcrumbs && breadcrumbsSection}
                {!bannerData?.side_banner && (
                    <CalculatorBanner
                        bannerData={bannerData}
                        showOnDesktop
                    />
                )}
                <Title>
                    {title}
                </Title>
                <Description>
                    {description}
                </Description>
            </ContentHolder>
        </>
    );
};

PosterSection.defaultProps = {
    description: '',
    hasBreadcrumbs: false,
    hasCalculatorListPage: false,
    calculatorUrl: '',
    bannerData: null,
};

export default PosterSection;
