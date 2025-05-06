/**
 * @file CarouselSection Component
 */

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';
import { ScrollableContainer } from '../../../components/styled';
import { Image } from '../../../components';
import { getDefaultMiddleScrollLeftOffSet, htmlSanitization } from '../../../utils';

import { CARD_INFO, PAGE_TYPE } from '../constant';

const Wrapper = styled.div<{ hideShadow: boolean }>`
    ${MIXINS.FlexMixin({})};
    width: 100%;
    position: relative;
    overflow-x: hidden;

    ${(props) => (!props.hideShadow
        ? `
        &::after {
            content: "";
            position: absolute;
            width: 5%;
            height: 100%;
            left: -5%;
            top: 0;
            box-shadow: 28px 0px 28px -9px rgba(0, 0, 0, 0.15);
        }

        &::before {
            content: "";
            position: absolute;
            width: 5%;
            height: 100%;
            right: -5%;
            top: 0;
            box-shadow: -15px 0px 28px -11px rgba(0, 0, 0, 0.15);;
        }`
        : '')}
`;

const CardContainer = styled(ScrollableContainer)<{ disableColumnAlign: boolean; type?: string | null }>`
    ${MIXINS.FlexMixin({ dir: 'column', justify: 'normal', align: 'normal' })};
    gap: 15px;
    padding: ${(props) => (props.type && props.type === PAGE_TYPE.sme.label ? '0px' : '0 20px 0 20px')};
    overflow: none;
    width: 100%;
    ${(props) => (props.disableColumnAlign ? ' flex-direction: row; ' : null)}

    @media ${Device.tab} {
        ${MIXINS.FlexMixin({ dir: 'row', justify: 'normal', align: 'normal' })};
        gap: 20px;
        overflow-x: scroll;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

const Card = styled.div<{ backgroundColor: string; cardType: string; }>`
    ${MIXINS.FlexMixin({ dir: 'column' })};
    border-radius: 16px;
    background: ${(props) => props.backgroundColor || props.theme.color.CHALK_GREY};
    width: ${(props) => CARD_INFO[props.cardType].phone.card.width};
    height: ${(props) => CARD_INFO[props.cardType].phone.card.height};
    overflow: hidden;
    margin: 0px auto;
    padding: 10px;

    @media ${Device.tab} {
        padding: 0px;
        width: ${(props) => CARD_INFO[props.cardType].tab.card.width};
        height: ${(props) => CARD_INFO[props.cardType].tab.card.height};
    }

    @media ${Device.desktop} {
        width: ${(props) => CARD_INFO[props.cardType].desktop.card.width};
        height: ${(props) => CARD_INFO[props.cardType].desktop.card.height};
    }
`;

const ImageBox = styled.div`
    padding: 8px;
    width: max-content;

    @media ${Device.desktop} {
        padding: 12px;
    }
`;

const ImageHolder = styled.div`
    width: 53px;

    @media ${Device.desktop} {
        width: 80px;
    }
`;

const ImageHolderV2 = styled.div`
    @media ${Device.desktop} {
        margin-top: 30px;
    }
`;

const Title = styled.div<{ cardType: string }>`
    ${(props) => MIXINS.FontMixin(CARD_INFO[props.cardType].phone.titleText)};
    color: ${(props) => props.theme.color.MINE_SHAFT};
    text-align: center;
    word-break: break-word;
    padding: 10px;

    @media ${Device.desktop} {
        ${(props) => MIXINS.FontMixin(CARD_INFO[props.cardType].desktop.titleText)};
    }
`;

const Description = styled.div<{ cardType: string }>`
    ${(props) => MIXINS.FontMixin(CARD_INFO[props.cardType].phone.descriptionText)};
    color: ${(props) => props.theme.color.LIGHT_GREY};
    width: ${(props) => CARD_INFO[props.cardType].phone.descriptionText.width};
    text-align: center;
    word-break: break-word;

    @media ${Device.desktop} {
        ${(props) => MIXINS.FontMixin(CARD_INFO[props.cardType].desktop.descriptionText)};
        width: ${(props) => CARD_INFO[props.cardType].desktop.descriptionText.width};
    }
`;

const TagImg = styled.img`
    width:70%;
    padding:6px 12px;
    margin-bottom: 10px;
`;

interface ICarouselSectionProps {
    cardType: string;
    list: {
        id: number,
        imageSrcTag?: string,
        title: string,
        icon?: {
            imageSrc: string;
            fallbackImageSrc: string;
        },
        description?: string,
        backgroundColor?: string
        imageType?: string;
    }[];
    hideShadow?: boolean;
    disableColumnAlign?: boolean;
    type?: string | null;
}

const CarouselSection = (props: ICarouselSectionProps) => {
    const {
        list, hideShadow, disableColumnAlign, cardType, type,
    } = props;

    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // The scrollable container is defaulted to the centre scroll position from the list of elements so that the user can understand it.
        const container = carouselRef.current;
        container.scrollLeft = getDefaultMiddleScrollLeftOffSet(container);
    }, []);

    return (
        <Wrapper hideShadow={hideShadow}>
            <CardContainer disableColumnAlign={disableColumnAlign} ref={carouselRef} type={type}>
                {list.map((listItem) => {
                    const {
                        id, icon, description, title, backgroundColor, imageSrcTag, imageType,
                    } = listItem;
                    const { imageSrc, fallbackImageSrc } = icon || {};

                    return (
                        <a key={id}>
                            <Card
                                backgroundColor={backgroundColor}
                                cardType={cardType}
                            >
                                {imageSrc && !imageType ? (
                                    <ImageBox>
                                        <ImageHolder>
                                            <Image
                                                icon={imageSrc}
                                                alt='card-image'
                                                loadingType='lazy'
                                                objectType='contain'
                                                fallBackImage={fallbackImageSrc}
                                            />
                                        </ImageHolder>
                                    </ImageBox>
                                ) : null}
                                {imageSrcTag && !imageType ? (
                                    <TagImg src={imageSrcTag} />
                                ) : null}

                                {imageType && imageType === 'v2' && <ImageHolderV2><TagImg src={imageSrcTag} /></ImageHolderV2>}

                                {title ? (
                                    <Title
                                        cardType={cardType}
                                        // eslint-disable-next-line react/no-danger
                                        dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }}
                                    />
                                ) : null}

                                {description ? (
                                    <Description
                                        cardType={cardType}
                                        // eslint-disable-next-line react/no-danger
                                        dangerouslySetInnerHTML={{ __html: htmlSanitization(description) }}
                                    />
                                ) : null}
                            </Card>
                        </a>
                    );
                })}
            </CardContainer>
        </Wrapper>
    );
};

CarouselSection.defaultProps = {
    hideShadow: false,
    disableColumnAlign: false,
    type: null,
};

export default React.memo(CarouselSection);
