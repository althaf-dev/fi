/**
 * @file Success or Failure Screen Page
 */

'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MIXINS from '../../../Themes/mixins';
import { Device } from '../../../Themes/Device';
import LottiePlayer from '../../../components/LottiePlayer';
import logger from '@/utils/logger';
import { PageConfig, creditCardEligibilityStatus } from '../constants';
import { fireCreditCardEvents } from '../utils';

const Logo = styled.img`
    height: 25px;
    width: 20.31px;
    margin-bottom: 35px;

    @media ${Device.tab} {
        height: 56px;
        width: 226px;
    }

    @media ${Device.desktop} {
        display: none;
    }
`;

const FiLogo = styled.img`
    display: none;

    @media ${Device.desktop} {
        display: block;
        height: 52px;
        width: 52px;
    }
`;

const Title = styled.div`
    color: ${(props) => props.theme.color.FOREST_GREEN};
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 600,
        size: '24px',
        lineHeight: '28px',
    })};
    padding: 70px 0 10px 0;

    @media ${Device.tab} {
        color: ${(props) => props.theme.color.FOREST_GREEN};
        ${MIXINS.FontMixin({
        weight: 700,
        size: '40px',
        lineHeight: '34px',
    })};
        padding-top: 47px;
        padding-bottom: 47px;
    }

    @media ${Device.desktop} {
        color: ${(props) => props.theme.color.WHITE};
        padding-bottom: 0;
    }
`;

const Description = styled.div`
    color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 600,
        size: '14px',
        lineHeight: '18px',
    })};
    padding-bottom: 28px;
    text-align: center;
    width: 70%;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        size: '24px',
        lineHeight: '28px',
    })};
        width: 65%;
    }
`;

const Subtitle = styled.div`
    color: ${(props) => props.theme.color.GREY_5};
    ${MIXINS.FontMixin({
        font: 'inter',
        weight: 500,
        size: '12px',
        lineHeight: '14px',
    })};
    margin: 25px 0;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        size: '16px',
        lineHeight: '18px',
    })};
        margin-bottom: 29px;
    }
`;

const BtnSubtitle = styled.div`
    color: ${(props) => props.theme.color.GREY_5};
    ${MIXINS.FontMixin({
        font: 'inter',
        weight: 700,
        size: '12px',
        lineHeight: '14px',
    })};
    margin: 12px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    justify-content: center;
    padding-bottom: 95px;

    @media ${Device.desktop} {
        flex-wrap: nowrap;
    }
`;

const SucessOrFailureScreenContainer = styled.div<any>`
    background-color: ${(props) => props.theme.color.SHARK2};
    height: 100%;
    width: 100%;

    @media ${Device.desktop} {
        color: ${(props) => props.theme.color.WHITE};
        background: ${(props) => props.theme.color.NERO};
        height: auto;
        display: flex;
        flex-shrink: 0;
        flex-direction: row;
        align-items: center;
        height: 100vh;
    }
`;

const Icon = styled.img`
    height: 40px;
    width: 40px
`;

const BenefitDataTitle = styled.div`
    color: ${(props) => props.theme.color.ONYX};
    ${MIXINS.FontMixin({
        font: 'Gilroy ',
        weight: 600,
        size: '14px',
        lineHeight: '18px',
    })};
    text-align: center;
`;

const BenefitDataSection = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

const Button = styled.button<any>`
    outline: none;
    border: none;
    box-shadow: ${(props) => props.style.boxShadow || '0 7px 0 #085245'};
    background: ${(props) => props.style.bgColor || props.theme.color.FOREST_GREEN};
    border-radius: 10px;
    cursor: pointer;
    padding: 14px 77px;
    text-transform: uppercase;
    ${MIXINS.FontMixin({
        font: 'gilroy', size: '14px', weight: 700, lineHeight: '15px'
    })}
    color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FlexMixin({ align: 'center' })};

    @media ${Device.desktop} {
        padding: 17px 61px;
        ${MIXINS.FontMixin({ size: '16px', weight: 700, lineHeight: '17px' })}
    }
`;

const ButtonWrapper = styled.a`
    text-decoration: none;
`;

const LottieWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;

    @media ${Device.desktop} {
        width: 100%;
    }
`;

const EligibilityWrapper = styled.div`
    height: 100%;

    @media ${Device.desktop} {
        width: 75%;
    }
`;

const PosterImage = styled.img`
    display: none;

    @media ${Device.desktop} {
        display: block;
        height: 90vh;
        width: 40%;
    }
`;

const LineBreak = styled.div`
    display: none;

    @media ${Device.desktop} {
        display: block;
        width: 70%;
        height: 2px;
        background: linear-gradient(90deg, #28292b 0%, #00b899 40%, #28292b 90%);
        margin: 32px 0 32px;
    }
`;

const DesktopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 3%;
    left: 1%;
    min-width: 80%;
    align-items: center;
    justify-content: space-around;

    @media ${Device.tab} {
        width: 60%;
        height: 80%;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: auto;
        padding-top: 82px;
    }
`;

const SubWrapper = styled.div<any>`
    height: 100vh;
    width: 100%; 
    overflow: auto;
    background-color: ${(props) => props.style.phone.bgColor || props.theme.color.SHARK2};
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;

    @media ${Device.desktop} {
        background: ${(props) => props.style.desktop.bgColor || props.theme.color.GREY_7};
    height: 90vh;
    width: 90vw; 
    max-width: 1440px;
}
`;

interface ISucessOrFailureScreen {
    logo?: string;
    title?: string;
    description?: string;
    linkText?: string;
    subTitle?: string;
    lottieBackground?: string;
    buttonUrl?: string;
    posterImg?: string;
    fiLogo?: string;
    btnDescription?: string;
    eligibilityEvent?: string;
    eligibilityBtnEvent?: string;
    benefitData?: {
        id?: string;
        title?: string;
        icon?: string;
    }[];
}

const SucessOrFailureScreen = (props: { data: ISucessOrFailureScreen, pageType: string, style: any, requestStatus: any}) => {
    const {
        data, pageType, style, requestStatus
    } = props;
    const { benefitData } = data || {};

    const pageStyle = requestStatus === creditCardEligibilityStatus.STATUS_SUCCESSFUL ? style.successScreen : style.failureScreen;

    const [lottieData, setLottieData] = useState();
    const lottieDataUrl = data.lottieBackground || '';

    useEffect(() => {
        fetch(lottieDataUrl)
            .then((res) => res.json())
            .then((result) => {
                setLottieData(result);
            })
            .catch((error) => {
                logger.log(error);
            });

        fireCreditCardEvents(pageType, data.eligibilityEvent!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onButtonClick = () => {
        fireCreditCardEvents(pageType, data.eligibilityBtnEvent!);
    };

    const { styleConfig } = PageConfig[pageType];

    return (
        <SucessOrFailureScreenContainer style={pageStyle}>
            <SubWrapper style={pageStyle}>
                <EligibilityWrapper>
                    <LottieWrapper>
                        <LottiePlayer
                            animationData={lottieData}
                            loop={false}
                            stop={false}
                            pause={false}
                        />
                        <DesktopWrapper>
                            <Logo src={data.logo} />
                            <FiLogo src={data.fiLogo} />
                            <Title>{data.title}</Title>
                            <LineBreak />
                            <Description>{data.description}</Description>
                            <Subtitle>{data.subTitle}</Subtitle>
                            <Wrapper>
                                {benefitData
                                    ? benefitData.map((item) => (
                                        <BenefitDataSection key={item.id}>
                                            <Icon src={item.icon} />
                                            <BenefitDataTitle>{item.title}</BenefitDataTitle>
                                        </BenefitDataSection>
                                    ))
                                    : null}
                            </Wrapper>

                            <ButtonWrapper href={(globalThis.window as any).oneLinkCommonUrl || data.buttonUrl}>
                                <Button
                                    className='onelink-common-url'
                                    onClick={onButtonClick}
                                    style={styleConfig.downloadAppButton}
                                >
                                    {data.linkText}
                                </Button>
                            </ButtonWrapper>
                            <BtnSubtitle>{data.btnDescription}</BtnSubtitle>
                        </DesktopWrapper>
                    </LottieWrapper>
                </EligibilityWrapper>
                <PosterImage src={data.posterImg} />
            </SubWrapper>
        </SucessOrFailureScreenContainer>
    );
};

export default SucessOrFailureScreen;
