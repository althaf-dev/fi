/* eslint-disable camelcase */
/**
 * @file CarouselVariantOne Component
 */
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { APP_URLS } from '../../../constants/AppConstant';
import { IFeaturePageCarousel } from '../../../interfaces/elements';
import { htmlSanitization } from '../../../utils';

import { Image } from '../../Abstract';

import {
    Wrapper, CardContainer, Card, Link, ImageBox, ImageHolder, Title, SubContainer,
    SubText, TagIconHolder, TagText, Description,
} from './styled';

interface ICarouselVariantOneProps {
    item: {
        list: IFeaturePageCarousel[];
        navigationUrl?: string;
    };
}

interface ICarouselCardProps {
    listItem: IFeaturePageCarousel;
}

const CarouselCard = (props: ICarouselCardProps) => {
    const { listItem } = props;

    const {
        title, icon, sub_text: subText, tag_data: tagData,
        description,
    } = listItem || {};
    const { image_src: imageSrc, fallback_image_src: fallbackImageSrc } = icon || {};
    const { icon: tagIcon, text: tagText } = tagData || {};

    return (
        <Card>
            <ImageBox>
                <ImageHolder>
                    <Image
                        icon={imageSrc}
                        alt='card-image'
                        loadingType='lazy'
                        fallBackImage={fallbackImageSrc}
                    />
                </ImageHolder>
            </ImageBox>
            <Title>{title}</Title>
            {subText || tagIcon || tagText ? (
                <SubContainer>
                    {subText ? <SubText>{subText}</SubText> : null}
                    {tagIcon ? (
                        <TagIconHolder>
                            <Image
                                icon={tagIcon}
                                alt='icon'
                                loadingType='lazy'
                            />
                        </TagIconHolder>
                    ) : null}
                    {tagText ? (
                        <TagText>
                            <div
                            // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(tagText) }}
                            />
                        </TagText>
                    ) : null}
                </SubContainer>
            ) : null}
            {description ? <Description>{description}</Description> : null}
        </Card>
    );
};

const CarouselVariantOne = (props: ICarouselVariantOneProps) => {
    const { item } = props;
    const { list, navigationUrl } = item;

    const navigate = useNavigate();

    const onClick = (url) => () => {
        if (url) {
            const lowercaseSymbol = url.toLowerCase();
            navigate(`${APP_URLS.US_STOCKS}/${lowercaseSymbol}`);
        }
    };

    return (
        <Wrapper>
            <CardContainer>
                {list.map((listItem) => {
                    const { url, id } = listItem || {};

                    return (
                        navigationUrl ? (
                            <Link key={id} onClick={onClick(url)}>
                                <CarouselCard listItem={listItem} />
                            </Link>
                        ) : (
                            <div>
                                <CarouselCard listItem={listItem} />
                            </div>
                        )
                    );
                })}
            </CardContainer>
        </Wrapper>
    );
};

export default memo(CarouselVariantOne);
