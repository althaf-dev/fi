import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { APP_URLS } from '../../../constants/AppConstant';
import { ICONS_URL_MAP } from '../../../constants/AssetConstants';

const Container = styled.div`
    max-width: 767px;
    margin: 0px auto 12px;

    @media ${Device.tab} {
        max-width: 728px;
    }

    @media ${Device.desktop} {
        max-width: unset;
        margin-bottom: 20px;
    }
`;

const Section = styled.div`
    color: ${(props) => props.theme.color.STEEL};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 110%;
    letter-spacing: 0.45px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
    max-width: 250px;

    @media ${Device.tab} {
        font-size: 14px;
        max-width: 358px;
    }

    @media ${Device.desktop} {
        font-size: 16px;
        overflow: unset;
    }
`;

const Label = styled.span`
    cursor: pointer;
    vertical-align: middle;
`;

const IconHolder = styled.span`
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0px 2px;
    vertical-align: middle;

    @media ${Device.desktop} {
        width: 16px;
        height: 16px;
    }
`;

interface CalculatorBreadcrumbsProps {
    calculatorUrl: string;
    name: string;
}

const CalculatorBreadcrumbs = (props: CalculatorBreadcrumbsProps) => {
    const { calculatorUrl, name } = props;

    const navigate = useNavigate();

    const redirectToCalculatorsPage = () => {
        navigate(APP_URLS.CALCULATORS_PAGE);
    };

    const arrowImageHolder = (
        <IconHolder>
            <Image icon={ICONS_URL_MAP.FADE_RIGHT_ARROW} loadingType='lazy' alt='arrow icon' />
        </IconHolder>
    );

    return (
        <Container>
            <Section>
                <Label
                    tabIndex={0}
                    role='button'
                    onClick={redirectToCalculatorsPage}
                >
                    Calculators
                </Label>
                {calculatorUrl && (
                    <>
                        {arrowImageHolder}
                        <Label
                            tabIndex={0}
                            role='button'
                        >
                            {name}
                        </Label>
                    </>
                )}
            </Section>
        </Container>
    );
};

export default memo(CalculatorBreadcrumbs);
