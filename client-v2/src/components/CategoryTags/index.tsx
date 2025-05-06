'use client';

/**
 * @file CategoryTags Component
 *
 * This file contains the CategoryTags component, which displays a list of categories and corresponding cards.
 */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Image } from '../../Abstract';
import CenteredSpinner from '../CenteredSpinner';
import {
    Container, Categories, CategoryPill, CardsContainer, Card, CardImageHolder, ImageBox, Title, Link,
    CardWrapper, CategoriesTagWrapper,
} from './styled';
import { APP_URLS } from '@/constants/AppConstant';
import { useAppSelector, useAppDispatch } from '@/rtk/hooks';
import { fetchUSStocksCollectionDetails, updateCollectionDetails } from '@/rtk/components/US-Stocks-feature-page/reducers';

interface ICategoryTagsProps {
    item: any;
    actionName?: string;
    dynamicComponent?: boolean;
}

const CategoryTags = (props: ICategoryTagsProps) => {
    const router = useRouter();

    const details : any = useAppSelector((state) => state.usStocks);
    const collectionLoader = details.isCollectionDetailsLoading;
    const { item } = props;
    const { categories, actionName, dynamicComponent } = item;
    const { collectionId } = details;

    const dispatch = useAppDispatch();
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [isActive, setIsActive] = useState(0);

    const onBtnClick = (tag: any, index: any) => {
        if (actionName) {
            switch (actionName) {
                case updateCollectionDetails:
                    dispatch(fetchUSStocksCollectionDetails(tag.id));
                    break;
                default:
                    break;
            }
        } else {
            setSelectedCategory(tag);
        }
        setIsActive(index);
    };

    useEffect(() => {
        if (collectionId && dynamicComponent) {
            const collectionItem = categories.find((data: any) => data.id === collectionId);
            setSelectedCategory(collectionItem);
        }
    }, [collectionId, dynamicComponent, categories]);

    const handleCardClick = (url: any) => () => {
        if (url) {
            const lowercaseSymbol = url.toLowerCase();
            router.push(`${APP_URLS.US_STOCKS}/${lowercaseSymbol}`);
        }
    };

    if (!router) return null;

    return (
        <Container>
            <CategoriesTagWrapper>
                <Categories>
                    {categories.map((tag: any, index: any) => (
                        <CategoryPill
                            key={tag.id}
                            index={index}
                            isActive={isActive}
                            onClick={() => onBtnClick(tag, index)}
                        >
                            {tag.title}
                        </CategoryPill>
                    ))}
                </Categories>
            </CategoriesTagWrapper>
            {collectionLoader ? (
                <CenteredSpinner />
            ) : (
                <CardWrapper>
                    <CardsContainer>
                        {selectedCategory?.companies?.map((company: any) => (
                            <Link key={company.id}>
                                <Card onClick={handleCardClick(company.symbol)}>
                                    <ImageBox>
                                        <CardImageHolder>
                                            <Image
                                                icon={company.icon}
                                                alt='card-image'
                                                loadingType='lazy'
                                            />
                                        </CardImageHolder>
                                    </ImageBox>
                                    <Title font='h5' tagType='text' color='MINE_SHAFT'>{company.name}</Title>
                                </Card>
                            </Link>
                        ))}
                    </CardsContainer>
                </CardWrapper>
            )}
        </Container>
    );
};

CategoryTags.defaultProps = {
    actionName: '',
    dynamicComponent: false,
};

export default CategoryTags;
