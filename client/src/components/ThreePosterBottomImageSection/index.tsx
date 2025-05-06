import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-useless-path-segments
import { Font, Image } from '..';
import { Device } from '../../Themes/Device';
import { htmlSanitization } from '../../utils';

const Section = styled.div`
    padding: 20px;
    margin: auto;

    @media ${Device.tab} {
        padding: 30px 30px 0px 30px;
    }

    @media ${Device.desktop} {
        padding: 120px 130px 0px;
    }
`;

const Container = styled.div`
    display: grid;
    grid-gap: 40px;

    @media ${Device.tab} {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 40px;
        margin: 0px -30px;
        padding: 0px 30px;
        overflow-x: scroll;

        /* To hide scrollbar */
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        }

    @media ${Device.desktop} {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 80px;
    }
`;

const Card = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 15px;
    width: 260px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 295px;
    }

    @media ${Device.desktop} {
        border-radius: 20px;
        width: 340px;
    }
`;

const ImageHolder = styled.div`
    width: 260px;
    height: 140px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 295px;
        height: auto;
    }

    @media ${Device.desktop} {
        width: 340px;
        height: 182px;
    }
`;

const Title = styled(Font)`
    letter-spacing: 0.45px;
    text-align: left;
    width: 200px;
    margin: 0px auto 16px;

    @media ${Device.tab} {
        margin: 0px 0px 15px;
    }

    @media ${Device.desktop} {
        margin-bottom: 20px;
        width: 260px;
        margin: 0px auto 20px;
    }
`;

const Description = styled(Font)`
    text-align: center;
    width: 205px;
    margin: 0px auto;
    text-align: left;
    word-break: break-word;

    @media ${Device.tab} {
        width: 225px;
    }

    @media ${Device.desktop} {
        width: 260px;
    }
`;

const TextSection = styled.div`
    padding: 30px;

    @media ${Device.tab} {
        padding: 35px;
        height: 198px;
    }

    @media ${Device.desktop} {
        padding: 40px;
        height: 278px;
    }
`;

interface ThreePosterBottomImageSectionProps {
    data: {id: number, image: any, fallbackImage: any; title: string, description: string, alt: string }[];
}

const ThreePosterBottomImageSection = (props: ThreePosterBottomImageSectionProps) => {
    const { data } = props;

    return (
        <Section>
            <Container>
                {data.map((ele) => (
                    <Card key={ele.id}>
                        <TextSection>
                            <Title font='cardTitleVariantOne' tagType='text' color='MINE_SHAFT'>
                                {ele.title}
                            </Title>
                            <Description font='cardDescriptionVariantOne' tagType='text' color='SUVA_GREY'>
                                <div
                                // eslint-disable-next-line react/no-danger
                                    dangerouslySetInnerHTML={{ __html: htmlSanitization(ele.description) }}
                                />
                            </Description>
                        </TextSection>
                        <ImageHolder>
                            <Image
                                icon={ele.image}
                                alt={ele.alt}
                                loadingType='lazy'
                                fallBackImage={ele.fallbackImage}
                            />
                        </ImageHolder>
                    </Card>
                ))}
            </Container>
        </Section>
    );
};

export default ThreePosterBottomImageSection;
