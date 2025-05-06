import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Font, Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { Section } from '../AboutStyled/AboutStyled';

const PosterSection = styled.div`
    text-align: center;
    padding: 20px;
    margin: auto;

    @media ${Device.tab} {
        padding: 30px 30px 60px 30px;
    }

    @media ${Device.desktop} {
        text-align: left;
        padding: 60px;
        max-width: 1290px;
    }
`;

const ContentHolder = styled.div<{ type: 'leftImage' | 'rightImage' }>`
    margin: auto;
    max-width: 320px;

    @media ${Device.tab} {
        max-width: 484px;
    }

    @media ${Device.desktop} {
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: ${(props) => (props.type === 'rightImage' ? 'row' : 'row-reverse')};
    }
`;

const Description = styled(Font)`
    margin-top: 15px;
    margin-bottom: 30px;

    @media ${Device.tab} {
        margin-top: 15px;
        margin-bottom: 40px;
    }

    @media ${Device.desktop} {
        margin-top: 20px;
        margin-bottom: 0;

        span {
            display: block;
        }
    }
`;

const TextHolder = styled.div<{ isThirdCard: boolean }>`
    margin: auto;
    max-width: ${(props) => (props.isThirdCard ? '270px' : '100%')};

    @media ${Device.tab} {
        max-width: ${(props) => (props.isThirdCard ? '320px' : '100%')};
    }

    @media ${Device.desktop} {
        max-width: 490px;
        margin: 0px;
    }
`;

const ImageHolder = styled.div`
    width: 320px;
    height: 268px;

    @media ${Device.tab} {
        margin: auto;
        width: 370px;
        height: 310px;
    }

    @media ${Device.desktop} {
        margin: 0;
        width: 550px;
        height: 460px;
    }
`;

const Title = styled(Font)`
    @media ${Device.desktop} {
        span {
            display: block;
        }
    }
`;

interface AboutInfoSectionProps {
    cardType?: 'leftImage' | 'rightImage';
    titleText: ReactNode;
    descriptionText: ReactNode;
    imageIcon: any;
    fallBackImage: any;
    isThirdCard: boolean;
    key: number;
}

const AboutInfoSection = ({
    cardType,
    titleText,
    descriptionText,
    imageIcon,
    fallBackImage,
    isThirdCard,
    key,
} : AboutInfoSectionProps) => (
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

AboutInfoSection.defaultProps = { cardType: 'leftImage' };

export default AboutInfoSection;
