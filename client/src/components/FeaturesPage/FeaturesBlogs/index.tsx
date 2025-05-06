/**
 * @file Features Page Blog Component
 */

import React from 'react';
import styled from 'styled-components';

import { htmlSanitization } from '../../../utils';

import { Font, Image } from '../../Abstract';
import { Device } from '../../../Themes/Device';

const Section = styled.div`
    width: 100%;
    margin: 10px auto 0px;

    @media ${Device.tab} {
        margin: 40px 0px 0px;
    }

    @media ${Device.desktop} {
        width: 1070px;
    }
`;

const Container = styled.div`
    display: grid;
    grid-gap: 24px;

    @media ${Device.tab} {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px;
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
        padding: 0px;
        margin: 0px;
        grid-gap: 55px;
    }
`;

const Card = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 16px;
    overflow: hidden;
    width: 320px;
    margin: 0px auto;
`;

const ImageHolder = styled.div`
    width: 320px;
    height: 184px;
    margin: 0px auto;
`;

const Tag = styled(Font)`
    margin-bottom: 10px;
`;

const Separator = styled.div`
    border: 2px solid ${(props) => props.theme.color.MID_OCEAN};
    width: 42px;
    margin-bottom: 10px;
`;

const Title = styled(Font)`
    text-align: left;
    width: 280px;
    margin: 0px auto;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-word;
    flex-grow: 1;

    @media ${Device.tab} {
        width: 272px;
    }
`;

const ReadingTimeTag = styled(Font)`
    margin-top: 20px;
`;

const TextSection = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;

    @media ${Device.tab} {
        padding: 24px;
        height: 230px;
    }
`;

const Link = styled.a`
    cursor: pointer;
`;

interface BlogProps {
    data: any;
}

const FeaturesBlogs = (props: BlogProps) => {
    const { data } = props;

    return (
        <Section>
            <Container>
                {data.map((ele) => (
                    <Link href={ele.url} target='_blank' rel='noreferrer'>
                        <Card key={ele.id}>
                            <ImageHolder>
                                <Image
                                    icon={ele.image_src}
                                    alt='card-image'
                                    loadingType='lazy'
                                    fallBackImage={ele.fallback_image_src}
                                />
                            </ImageHolder>
                            <TextSection>
                                {ele.tag ? (
                                    <>
                                        <Tag font='labelVariantThree' tagType='text' color='MINE_SHAFT'>
                                            {ele.tag}
                                        </Tag>
                                        <Separator />
                                    </>
                                ) : null}
                                <Title font='cardTitleVariantSeven' tagType='text' color='MINE_SHAFT' dangerouslySetInnerHTML={{ __html: htmlSanitization(ele.title) }} />
                                <ReadingTimeTag font='pSmall' tagType='text' color='STEEL' dangerouslySetInnerHTML={{ __html: htmlSanitization(ele.reading_length) }} />
                            </TextSection>
                        </Card>
                    </Link>
                ))}
            </Container>
        </Section>
    );
};

export default FeaturesBlogs;
