import React, { ReactNode } from 'react';
import Image from '../Image';
import {
    ImageHolder,
    Description,
    ContentHolder,
    Section,
    PosterSection,
    TextHolder,
    Title,
} from './Styled';

interface AboutInfoRowProps {
    cardType?: 'leftImage' | 'rightImage';
    titleText: ReactNode;
    descriptionText: ReactNode;
    imageIcon: any;
    fallBackImage: any;
    isThirdCard: boolean;
    key: number;
}

const AboutInfoRow = ({
    cardType,
    titleText,
    descriptionText,
    imageIcon,
    fallBackImage,
    isThirdCard,
    key,
}: AboutInfoRowProps) => (
    <Section key={key}>
        <PosterSection>
            <ContentHolder type={cardType}>
                <TextHolder isThirdCard={isThirdCard}>
                    <Title font='h1' tagType='h2' color='MINE_SHAFT'>
                        {titleText}
                    </Title>

                    <Description font='p3' tagType='h3' color='SUVA_GREY'>
                        {descriptionText}
                    </Description>
                </TextHolder>

                <ImageHolder>
                    <Image
                        icon={imageIcon}
                        alt='card-image'
                        loadingType='lazy'
                        fallBackImage={fallBackImage}
                    />
                </ImageHolder>
            </ContentHolder>
        </PosterSection>
    </Section>
);

AboutInfoRow.defaultProps = { cardType: 'leftImage' };

export default AboutInfoRow;
