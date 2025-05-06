import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';
import { htmlSanitization } from '../../../utils';

import { Font } from '../../Abstract';
import  Emoji  from '../Emoji/index';

// eslint-disable-next-line no-shadow
export enum CardsVariant {
    LeftRightCardVariant = 'left_right_card',
    TopBottomCardVariant = 'top_bottom_card',
    RightAlignCardVariant = 'right_align_card',
    LeftRightGridVariant = 'left_right_grid_card',
}

const TopBottomCardWrapper = styled.div<{ cardsVariant: CardsVariant }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: ${(props) => (props.cardsVariant === CardsVariant.RightAlignCardVariant ? 'unset' : 'wrap')};;
    width: 100%;
    margin: 16px 0;

    @media ${Device.tab} {
        flex-direction: row;
        margin: 24px 0;
        /* width: 720px; */
    }

    @media ${Device.desktop} {
        width: ${(props) => (props.cardsVariant === CardsVariant.TopBottomCardVariant ? '720px' : '1290px')};
        margin: 40px 0;
    }
`;

const LeftRigthCardWrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    margin-top: 30px;

    @media ${Device.desktop} {
        grid-gap: 28px;
        margin-top: 40px;
    }
`;

const LeftRightGridWrapper = styled.div`
    grid-gap: 20px;
    margin-top: 10px;

    @media ${Device.tab} {
        ${MIXINS.FlexMixin({})};
        margin-top: 30px;
        flex-wrap: wrap;
    }
`;

const TopBottomCard = styled.div<{ cardsVariant: CardsVariant, isNumberedCard?: boolean }>`
    width: 240px;
    height: ${(props) => (props.cardsVariant === CardsVariant.TopBottomCardVariant ? '194px' : '148px')};
    border-radius: 15px;
    background-color: ${(props) => (props.isNumberedCard ? 'transparent' : 'white')};
    padding: 24px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    position: relative;

    @media ${Device.desktop} {
        border-radius: 20px;
        width: 320px;
        height: ${(props) => (props.cardsVariant === CardsVariant.TopBottomCardVariant ? '264px' : '202px')};
        margin: 20px;
        padding: 30px;
    }
`;

const LeftRigthCard = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    width: 100%;
    margin: 0px auto;

    @media ${Device.tab} {
        flex-direction: row;
    }

    @media ${Device.desktop} {
        padding: 28px;
    }
`;

const LeftRightWrapCard = styled(LeftRigthCard)`
    width: 100%;
    margin: 10px 0;
    
    @media ${Device.desktop} {
        width: 48%;
        margin: 5px;
    }
`;

const Subtext = styled(Font)<{ cardsVariant: CardsVariant }>`
    white-space: pre-wrap;
    text-align: center;

    @media ${Device.tab} {
        text-align: ${(props) => (props.cardsVariant === CardsVariant.LeftRightCardVariant ? 'left' : 'center')};
        width: ${(props) => (props.cardsVariant === CardsVariant.LeftRightCardVariant ? '90%' : 'auto')};
    }
`;

const AbsoluteNumber = styled.div<{ isNumberedCard: boolean }>`
    display: ${(props) => (props.isNumberedCard ? 'block' : 'none')};
    position: absolute;
    bottom: 0;
    left: 0;

    ${MIXINS.FontMixin({
        size: '97px', weight: 900, lineHeight: '105%',
    })};

    color: ${(props) => props.theme.color.FOREST_GREEN};
    opacity: 0.2;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '142px', weight: 900, lineHeight: '105%',
    })};
    }
`;

interface FeaturesCardsProps {
    item: any;
}

const FeaturesCards = (props: FeaturesCardsProps) => {
    const { item } = props;
    const { list, variant, is_numbered_card: isNumberedCard } = item;

    let CardWrapper = TopBottomCardWrapper;
    let Card = TopBottomCard;

    if (variant === CardsVariant.LeftRightCardVariant) {
        CardWrapper = LeftRigthCardWrapper;
        Card = LeftRigthCard;
    } else if (variant === CardsVariant.LeftRightGridVariant) {
        CardWrapper = LeftRightGridWrapper;
        Card = LeftRightWrapCard;
    }

    return (
        <CardWrapper cardsVariant={variant}>
            {
                list.map((listitem, index) => {
                    const { image_src: imageSrc, fallback_image_src: fallbackImageSrc } = listitem.icon || {};
                    return (
                        <Card key={listitem.index} cardsVariant={variant} isNumberedCard={isNumberedCard}>
                            <AbsoluteNumber isNumberedCard={isNumberedCard}>{index + 1}</AbsoluteNumber>
                            {
                                imageSrc || fallbackImageSrc ? (<Emoji image={imageSrc} fallBackImage={fallbackImageSrc} cardsVariant={variant} />
                                ) : null
                            }
                            <Subtext font='h3VariantTwo' tagType='text' color='TUNDORA_2' cardsVariant={variant}>
                                <div
                                    // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{ __html: htmlSanitization(listitem.title) }}
                                />
                            </Subtext>
                        </Card>
                    );
                })
            }
        </CardWrapper>
    );
};

export default FeaturesCards;
