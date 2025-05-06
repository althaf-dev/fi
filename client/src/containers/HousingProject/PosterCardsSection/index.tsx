/**
* @file Housing Page Poster Card Section
*/

import React, { memo } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';

import { Font, Image } from '../../../components';
import { htmlSanitization } from '../../../utils';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 22px 30px;
    width: 320px;
    margin: 0px auto;

    @media ${Device.desktop} {
        width: 718px;
        grid-gap: 32px 40px;
    }
`;

const Card = styled.div`
    display: flex;
    gap: 12px;

    @media ${Device.desktop} {
        gap: 24px;
    }
`;

const ImageHolder = styled.div`
    width: 24px;
    height: 24px;

    @media ${Device.desktop} {
        width: 62px;
        height: 62px;
    }
`;

const Subtext = styled(Font)`
    text-align: start;
`;

interface PosterCardsSectionProps {
    data: any;
}

const PosterCardsSection = (props: PosterCardsSectionProps) => {
    const { data } = props;

    return (
        <Container>
            {data.map((listItem) => {
                const {
                    id, title, image_src: imageSrc, fallback_image_src: fallbackImageSrc,
                } = listItem;

                return (
                    <Card key={id}>
                        <ImageHolder>
                            <Image
                                icon={imageSrc}
                                fallBackImage={fallbackImageSrc}
                                alt='icon'
                                loadingType='lazy'
                            />
                        </ImageHolder>
                        <Subtext font='labelVariantEleven' tagType='text' color='WHITE'>
                            <div
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }}
                            />
                        </Subtext>
                    </Card>
                );
            })}
        </Container>
    );
};

export default memo(PosterCardsSection);
