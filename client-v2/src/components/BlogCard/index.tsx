/**
 * @file Features Page Blog Component
 */

'use client';

import React from 'react';
import styled from 'styled-components';

import { Device } from '@/Themes/Device';
import { htmlSanitization } from '@/utils';

import { Font, Image } from '../../Abstract';

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
    url: string;
    fallbackUrl: string;
    blogUrl: string;
    title: string;
    tag: string;
    readLength: string;
}

const BlogCard = (props: BlogProps) => {
    const {
        url, fallbackUrl, blogUrl, title, tag, readLength
    } = props;

    return (
        <Link href={blogUrl} target='_blank' rel='noreferrer'>
            <Card>
                <ImageHolder>
                    <Image
                        icon={url}
                        alt='card-image'
                        loadingType='lazy'
                        fallBackImage={fallbackUrl}
                    />
                </ImageHolder>
                <TextSection>
                    {tag ? (
                        <>
                            <Tag font='labelVariantThree' tagType='text' color='MINE_SHAFT'>
                                {tag}
                            </Tag>
                            <Separator />
                        </>
                    ) : null}
                    <Title font='cardTitleVariantSeven' tagType='text' color='MINE_SHAFT' dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }} />
                    <ReadingTimeTag font='pSmall' tagType='text' color='STEEL' dangerouslySetInnerHTML={{ __html: htmlSanitization(readLength) }} />
                </TextSection>
            </Card>
        </Link>
    );
};

export default BlogCard;
