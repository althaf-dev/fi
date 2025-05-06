import React from 'react';
import styled from 'styled-components';

import { Font, Image } from '../Abstract';
import { Device, WINDOW_SIZE } from '../../Themes/Device';
import { useWindowDimensions, useIsSSR } from '../../hooks';
import { ICONS_URL_MAP } from '../../constants/AssetConstants';

const StyledCard = styled.div<{
    isSelected?: boolean;
    gridType?: number;
}>`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    padding: ${(props) => (props.gridType === 1 ? '30px' : '48px 30px')};

    @media ${Device.tab} {
        padding: 25px;
        height: 200px;
    }

    @media ${Device.desktop} {
        height: 300px;
        padding: ${(props) => (props.gridType === 1 ? '25px' : '80px 40px')};
    }
`;

const TitleOneDiv = styled(Font)<{
    type?: number;
    gridType?: number;
}>`
    width: 100%;
    opacity: ${(props) => (props.type === 1 ? 1 : 0)};
    transition: all ease ${(props) => (props.type !== 1 ? '1s' : '0s')};

    @media ${Device.tab} {
        width: 170px;
    }
    @media ${Device.desktop} {
        width: ${(props) => (props.gridType === 1 ? '260px' : '295px')};
    }
`;

const TitleThreeDiv = styled(Font)<{
    type?: number;
    gridType?: number;
}>`
    width: 100%;
    opacity: ${(props) => (props.type === 3 ? 1 : 0)};
    transition: all ease ${(props) => (props.type !== 1 ? '1s' : '0s')};

    @media ${Device.tab} {
        width: 170px;
    }

    @media ${Device.desktop} {
        width: ${(props) => (props.gridType === 1 ? '260px' : '295px')};
    }
`;

const TitleTwoDiv = styled(Font)<{
    type?: number;
    gridType?: number;
}>`
    width: 100;
    opacity: ${(props) => (props.type === 2 ? 1 : 0)};
    transition: all ease 1s;

    @media ${Device.tab} {
        width: 210px;
    }

    @media ${Device.desktop} {
        width: ${(props) => (props.gridType === 1 ? '260px' : '295px')};
    }
`;

const FooterLink = styled.div`
    font-family: Gilroy;
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
    letter-spacing: 0.45px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    margin-top: 24px;
    color: ${(props) => props.theme.color.GREY_2};

    @media ${Device.desktop} {
        font-size: 16px;
    }
`;

const Buttons = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;

    .selected {
        background-color: ${(props) => props.theme.color.CHARCOAL_GREY};
    }

    .not-selected {
        background-color: ${(props) => props.theme.color.SILVER_2};
    }
`;

const Dot = styled.div`
    border-radius: 50%;
    width: 6px;
    height: 6px;
    background-color: #333333;
    cursor: pointer;

    &:first-child {
        margin-bottom: 8px;
    }
`;

const ImageHolder = styled.div`
    height: 0.8em;
    width: 0.8em;
`;

const LinkHolder = styled.div`
    position: relative;
    z-index: 1;
`;

const CardTwoWrapper = styled.div<{ type?: number }>`
    max-height: 81px;
    transition: all ease ${(props) => (props.type !== 1 ? '1s' : '0s')};
    transform: ${(props) => {
        const getTranslation = () => {
            if (props.type === 1) return 'translateY(0px)';
            if (props.type === 2) return 'translateY(-81px)';
            return 'translateY(-162px)';
        };

        return getTranslation();
    }};

    @media ${Device.tab} {
    transform: ${(props) => {
        const getTranslation = () => {
            if (props.type === 1) return 'translateY(0px)';
            if (props.type === 2) return 'translateY(-96px)';
            return 'translateY(-144px)';
        };

        return getTranslation();
    }};
}`;

interface CardTwoProps {
    gridType?: 1 | 2;
    type?: number;
    isSelected?: boolean;
    setType?: (num: number) => void;
}

const CardTwo = (props: CardTwoProps) => {
    const { width } = useWindowDimensions();
    const isSSR = useIsSSR();
    const {
        isSelected, gridType, type, setType
    } = props;

    return (
        <StyledCard isSelected={isSelected} gridType={gridType}>
            {!isSSR && width! < WINDOW_SIZE.DESKTOP ? (
                <CardTwoWrapper type={type}>
                    <TitleOneDiv
                        font='h2VariantThree'
                        tagType='text'
                        color='MINE_SHAFT'
                        type={type}
                        gridType={gridType}
                    >
                        {gridType === 1
                            ? 'This startup aims to reimagine financial services for millennials'
                            : 'You can save money on your own terms, and get rewarded for it too'}
                    </TitleOneDiv>
                    <TitleTwoDiv
                        font='h2VariantThree'
                        tagType='text'
                        color='MINE_SHAFT'
                        type={type}
                        gridType={gridType}
                    >
                        {gridType === 1
                            ? 'How savvy startups are rebooting banking'
                            : 'Get insights into your money behaviour that help you take charge'}
                    </TitleTwoDiv>
                    <TitleThreeDiv
                        font='h2VariantThree'
                        tagType='text'
                        color='MINE_SHAFT'
                        type={type}
                        gridType={gridType}
                    >
                        {gridType === 1
                            ? 'This startup aims to reimagine financial services for millennials'
                            : 'You can save money on your own terms, and get rewarded for it too'}
                    </TitleThreeDiv>
                </CardTwoWrapper>
            ) : (
                <>
                    {type === 2 && (
                        <TitleTwoDiv
                            font='h2VariantThree'
                            tagType='text'
                            color='MINE_SHAFT'
                            type={type}
                            gridType={gridType}
                        >
                            {gridType === 1
                                ? 'How savvy startups are rebooting banking'
                                : 'Get insights into your money behaviour that help you take charge'}
                        </TitleTwoDiv>
                    )}
                    {type === 1 && (
                        <TitleOneDiv
                            font='h2VariantThree'
                            tagType='text'
                            color='MINE_SHAFT'
                            type={type}
                            gridType={gridType}
                        >
                            {gridType === 1
                                ? 'This startup aims to reimagine financial services for millennials'
                                : 'You can save money on your own terms, and get rewarded for it too'}
                        </TitleOneDiv>
                    )}
                </>
            )}
            {gridType === 1 && (
                <LinkHolder>
                    <a
                        href={
                            type === 1
                                ? 'https://yourstory.com/2020/02/startup-former-google-pay-execs-epifi-fintech'
                                : 'https://www.livemint.com/companies/start-ups/how-savvy-startups-are-rebooting-banking-11581611838546.html'
                        }
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FooterLink>
                            READ THIS&nbsp;
                            <ImageHolder>
                                <Image
                                    loadingType='lazy'
                                    icon={ICONS_URL_MAP.EXTERNAL_LINK}
                                    alt='link'
                                />
                            </ImageHolder>
                        </FooterLink>
                    </a>
                </LinkHolder>
            )}

            {!isSSR && width! < WINDOW_SIZE.DESKTOP && (
                <Buttons>
                    <Dot
                        className={type !== 2 ? 'selected' : 'not-selected'}
                        onClick={() => {
                            setType && setType(3);
                        }}
                    />
                    <Dot
                        className={type === 2 ? 'selected' : 'not-selected'}
                        onClick={() => {
                            setType && setType(2);
                        }}
                    />
                </Buttons>
            )}
        </StyledCard>
    );
};

CardTwo.defaultProps = {
    gridType: 1,
    type: 1,
    isSelected: false,
    setType: () => {},
};

export default CardTwo;
