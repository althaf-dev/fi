import React from 'react';
import styled from 'styled-components';

import { FeaturePageTitle } from '../../../components/FeaturesPage/styled';

import { Device } from '../../../Themes/Device';
import { Font, Image } from '../../../components';

const PosterSection = styled.div`
    text-align: center;
    padding: 0px 20px 50px;
    max-width: 360px;
    margin: 0px auto;

    @media ${Device.tab} {
        padding: 0px 40px 60px 60px;
        max-width: 768px;
    }

    @media ${Device.desktop} {
        text-align: left;
        padding: 0px 70px 100px;
        max-width: 1290px;
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-gap: 20px;

    @media ${Device.tab} {
        grid-template-columns: 1fr 1fr;        
    }

    @media ${Device.desktop} {
        grid-gap: 40px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
`;

const Section = styled.div`
    background: ${(props) => props.theme.color.LIGHT_YELLOW};
    border-radius: 20px;
    max-width: 100%;
    margin: 0px auto 20px;
    overflow: hidden;

    @media ${Device.tab} {
        max-width: 329px;
    }

    @media ${Device.desktop} {
        max-width: 555px;
        margin: 0px auto 40px;
    }
`;

const CardHolder = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 13px;
    margin: 30px 0px 27px -26px;

    @media ${Device.tab} {
        grid-gap: 10px;
        margin: 30px 0px 30px -19px;
    }

    @media ${Device.desktop} {
        margin: 54px 0px 60px -36px;
        grid-gap: 18px;
    }
`;

const Card = styled.div`
    background-color: ${(props) => props.theme.color.CHAMOIS};
    border-radius: 12.4px;
    width: 116px;

    @media ${Device.tab} {
        width: 106px;
    }

    @media ${Device.desktop} {
        border-radius: 17.5px;
        width: 165px;
    }
`;

const CardImageHolder = styled.div`
    width: 42px;
    height: 42px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8px;

    @media ${Device.tab} {
        width: 30px;
        height: 30px;
        margin-top: 11px; 
    }

    @media ${Device.desktop} {
        width: 46px;
        height: 46px;
        margin-top: 18px;
    }
`;

const CardTitle = styled(Font)`
    text-align: center;
    margin-top: 6px;
    margin-bottom: 16px;

    @media ${Device.tab} {
        margin-bottom: 13px;
    }

    @media ${Device.desktop} {
        margin-top: 8px;
        margin-bottom: 22px;
    }
`;

const ImageDescriptionSection = styled.div<{ backgroundColor: string; }>`
    background-color: ${(props) => props.backgroundColor};
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 16px;
    padding: 20px;
    max-width: 100%;
    margin: 0px auto;
    align-items: center;

    @media ${Device.tab} {
        padding: 30px 24px;
        grid-gap: 6px;
        max-width: 329px;
    }

    @media ${Device.desktop} {
        padding: 40px;
        grid-gap: 40px;
        max-width: 555px;
    }
`;

const ImageHolder = styled.div`
    width: 42px;
    height: 42px;

    @media ${Device.desktop} {
        width: 80px;
        height: 80px;
    }
`;

const Title = styled(Font)<{ hasImageDescriptionSection?: boolean }>`
    padding: ${(props) => (props.hasImageDescriptionSection ? '0px' : '0px 20px 30px')};
    text-align: left;

    @media ${Device.tab} {
        padding: ${(props) => (props.hasImageDescriptionSection ? '0px' : '0px 37px 30px')};
    }

    @media ${Device.desktop} {
        padding: ${(props) => (props.hasImageDescriptionSection ? '0px' : '0px 40px 40px')};
    }
`;

const SectionOne = styled.div`
    background: ${(props) => props.theme.color.TEA_GREEN};
    border-radius: 20px;
    max-width: 100%;
    margin: 20px auto 0px;
    overflow: hidden;

    @media ${Device.tab} {
        max-width: 329px;
    }

    @media ${Device.desktop} {
        max-width: 555px;
        margin: 40px auto 0px;
    }
`;

const CardHolderOne = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 7px;
    margin: 30px 0px 18px -6px;

    @media ${Device.tab} {
        margin: 36px 0px 36px -8px;
    }

    @media ${Device.desktop} {
        margin: 36px 0px 40px -8px;
        grid-gap: 12px;
    }
`;

const CardOne = styled.div`
    border-radius: 16.5px;
    background: ${(props) => props.theme.color.TEA_GREEN_ONE};
    display: flex;
    align-items: center;
    width: 140px;
    padding: 3px 14px 3px 3px;

    @media ${Device.desktop} {
        border-radius: 28.5px;
        width: 240px;
        padding: 6px 24px 6px 6px;
    }
`;

const CardImageHolderOne = styled.div`
    width: 35px;
    height: 35px;
    margin-right: 3px;

    @media ${Device.desktop} {
        width: 60px;
        height: 60px;
        margin-right: 8px;
    }
`;

const CardTitleOne = styled(Font)`
    width: 85px;
    text-align: left;

    @media ${Device.desktop} {
        width: 144px;
    }
`;

const CardDescriptionOne = styled(Font)`
    margin-top: 2px;
    text-align: left;
`;

interface SectionFourInterface {
    values: {
        title: string,
        cardData: {
            title: string,
            data: {
                id: number,
                icon: any,
                title: string,
            }[];
        },
        cardOneData: {
            title: string,
            data: {
                id: number,
                icon: any,
                fallbackIcon: any,
                title: string,
                description: string,
            }[];
        },
        cardTwoData: {
            title: string,
            icon: any,
        },
        cardThreeData: {
            title: string,
            icon: any,
        }
    }
}

const SectionFour = (props: SectionFourInterface) => {
    const { values } = props;
    const {
        title, cardData, cardOneData, cardTwoData, cardThreeData,
    } = values;

    return (
        <PosterSection>
            <FeaturePageTitle font='cardTitleVariantFour' tagType='h1' color='MINE_SHAFT'>{title}</FeaturePageTitle>
            <Wrapper>
                <Container>
                    <Section>
                        <CardHolder>
                            {cardData.data.map((ele) => (
                                <Card key={ele.id}>
                                    <CardImageHolder>
                                        <Image icon={ele.icon} alt='logo' loadingType='lazy' />
                                    </CardImageHolder>
                                    <CardTitle font='labelVariantEight' tagType='text' color='MINE_SHAFT'>
                                        {ele.title}
                                    </CardTitle>
                                </Card>
                            ))}
                        </CardHolder>
                        <Title font='cardTitleVariantTwo' tagType='text' color='LIGHT_GREY'>
                            {cardData.title}
                        </Title>
                    </Section>
                    <ImageDescriptionSection backgroundColor='#D1DAF1'>
                        <ImageHolder>
                            <Image icon={cardTwoData.icon} alt='logo' loadingType='lazy' />
                        </ImageHolder>
                        <Title font='cardTitleVariantTwo' tagType='text' color='LIGHT_GREY' hasImageDescriptionSection>
                            {cardTwoData.title}
                        </Title>
                    </ImageDescriptionSection>
                </Container>
                <Container>
                    <ImageDescriptionSection backgroundColor='#DEEEF2'>
                        <ImageHolder>
                            <Image icon={cardThreeData.icon} alt='logo' loadingType='lazy' />
                        </ImageHolder>
                        <Title font='cardTitleVariantTwo' tagType='text' color='LIGHT_GREY' hasImageDescriptionSection>
                            {cardThreeData.title}
                        </Title>
                    </ImageDescriptionSection>
                    <SectionOne>
                        <CardHolderOne>
                            {cardOneData.data.map((ele) => (
                                <CardOne key={ele.id}>
                                    <CardImageHolderOne>
                                        <Image icon={ele.icon} alt='logo' loadingType='lazy' fallBackImage={ele.fallbackIcon} />
                                    </CardImageHolderOne>
                                    <div>
                                        <CardTitleOne font='labelVariantNine' tagType='text' color='GREY_2'>
                                            {ele.title}
                                        </CardTitleOne>
                                        <CardDescriptionOne font='labelVariantTen' tagType='text' color='SUVA_GREY'>
                                            {ele.description}
                                        </CardDescriptionOne>
                                    </div>
                                </CardOne>
                            ))}
                        </CardHolderOne>
                        <Title font='cardTitleVariantTwo' tagType='text' color='LIGHT_GREY'>{cardOneData.title}</Title>
                    </SectionOne>
                </Container>
            </Wrapper>
        </PosterSection>
    );
};

export default SectionFour;
