import React from 'react';
import styled from 'styled-components';
import { Device } from '../../../../Themes/Device';
import { Font, Image } from '../../../../components/Abstract';
import LaunchIcon from '../../../../assets/svgs/launch.svg';

const CardWrapper = styled.div`
    width: 100%;
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 28px;
    max-height: 330px;
    min-height: 330px;
    cursor: grab;

    @media ${Device.tab} {
        padding: 25px;
        min-height: 350px;
        max-height: 350px;
    }

    @media ${Device.desktop} {
        border-radius: 25px;
        padding: 40px 34px;
        min-height: 520px;
        max-height: 520px;
    }
`;

const TextWrapper = styled.div``;

const ImageWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 30px;
    min-height: 80px;
    height: fit-content;

    @media ${Device.desktop} {
        border-radius: 15px;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const IconWrapper = styled.div`
    margin-right: 5px;
`;

const CarouselGap = styled.div`
    margin: 0 10px;
    min-width: 230px;
    max-width: 230px;

    @media ${Device.tab} {
        margin: 0px 20px;
        min-width: 245px;
        max-width: 245px;
    }

    @media ${Device.desktop} {
        margin: 0px 30px;
        min-width: 365px;
        max-width: 365px;
    }
`;

const InsightCard = (props) => (
    <CarouselGap>
        <CardWrapper>
            <TextWrapper>{props.children}</TextWrapper>
            {props.cardType === 'poster' ? (
                <ImageWrapper>
                    <Image
                        icon={props.poster}
                        objectType='cover'
                        alt='Poster'
                        loadingType='lazy'
                        fallBackImage={props.fallBackImage}
                    />
                </ImageWrapper>
            ) : (
                <ButtonWrapper>
                    <IconWrapper>
                        <Image
                            icon={LaunchIcon}
                            objectType='contain'
                            alt='icon'
                            loadingType='lazy'
                        />
                    </IconWrapper>
                    <Font tagType='span' font='button' color='FOREST_GREEN'>
                        {props.label}
                    </Font>
                </ButtonWrapper>
            )}
        </CardWrapper>
    </CarouselGap>
);

export default InsightCard;
