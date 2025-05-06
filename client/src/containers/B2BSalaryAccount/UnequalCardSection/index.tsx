/**
 * @file Unequal Card Section
*/
import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';

import { Font, Image } from '../../../components';
import { htmlSanitization } from '../../../utils';

// TODO(Ankit): need to add mobile and tab styling
const Wrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    max-width: 320px;
    margin: 0px auto;

    @media ${Device.tab} {
        max-width: 688px;
        grid-template-columns: 1fr 1fr;        
    }

    @media ${Device.desktop} {
        grid-gap: 40px;
        max-width: 1150px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const CardSection = styled.div<{ backgroundColor: string, cardType?: string, imageAlignment?: string }>`
    background-color: ${(props) => props.backgroundColor};
    border-radius: 20px;
    padding: 20px;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    @media ${Device.tab} {
        padding: 30px 24px;
        max-width: 329px;
    }

    @media ${Device.desktop} {
        flex-direction: row;
        padding: 60px 40px;
        height: ${(props) => (props.cardType === 'large_card' ? '428px' : '236px')};
        flex-direction: ${(props) => (props.imageAlignment === 'right_side' ? 'row-reverse' : 'row')};
        max-width: 555px;
    }
`;

const ImageHolder = styled.div<{ cardType?: string }>`
    width: 42px;
    height: 42px;

    @media ${Device.desktop} {
        width: ${(props) => (props.cardType === 'large_card' ? '180px' : '80px')};
        height: ${(props) => (props.cardType === 'large_card' ? '250px' : '80px')};
    }
`;

const Title = styled(Font)<{ cardType?: string }>`
    text-align: left;

    @media ${Device.desktop} {
        width: ${(props) => (props.cardType === 'large_card' ? '276px' : '375px')};
    }
`;

const CtaWrapper = styled(Font)`
    margin-top: 24px;
`;

interface UnequalCardSectionProps {
    item: any;
}

const UnequalCardSection = (props: UnequalCardSectionProps) => {
    const { item } = props;
    const { left_cards_data: leftCardsData, right_cards_data: rightCardsData } = item || {};

    const getCardData = (ele) => (
        <CardSection backgroundColor={ele.background_color} cardType={ele?.card_type} imageAlignment={ele?.image_alignment}>
            <ImageHolder cardType={ele?.card_type}>
                <Image icon={ele.icon.image_src} alt='logo' loadingType='lazy' fallBackImage={ele.icon.fallback_image_src} />
            </ImageHolder>
            <div>
                <Title font='cardTitleVariantTwo' tagType='text' color='LIGHT_GREY' cardType={ele?.card_type}>
                    <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: htmlSanitization(ele.title) }}
                    />
                </Title>
                {ele?.cta && (
                    <CtaWrapper font='buttonVariantThree' tagType='text' color='FOREST_GREEN'>
                        <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(ele.cta) }}
                        />
                    </CtaWrapper>
                )}
            </div>
        </CardSection>
    );

    return (
        <Wrapper>
            <Container>
                {leftCardsData.map((ele) => getCardData(ele))}
            </Container>
            <Container>
                {rightCardsData.map((ele) => getCardData(ele))}
            </Container>
        </Wrapper>
    );
};

export default UnequalCardSection;
