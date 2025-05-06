/**
 * @file CategoryTags Component
 *
 * This file contains the CategoryTags component, which displays a list of categories and corresponding cards.
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { getUSStocksCollectionDetailsAction } from '../../../containers/FeaturesPages/actions';
import { ActionNames } from '../../../containers/FeaturesPages/constants';
import { selectCollectionId, selectCollectionDetailsLoader } from '../../../containers/FeaturesPages/selectors';

import { Image } from '../../Abstract';
import CenteredSpinner from '../../CenteredSpinner';

import {
    Container, Categories, CategoryPill, CardsContainer, Card, CardImageHolder, ImageBox, Title, Link,
    CardWrapper, CategoriesTagWrapper,
} from './styled';
import { APP_URLS } from '../../../constants/AppConstant';

interface ICategoryTagsProps {
    item: any;
    actionName?: string;
    dynamicComponent?: boolean;
}

const CategoryTags = (props: ICategoryTagsProps) => {
    const { item } = props;
    const { categories, actionName, dynamicComponent } = item;

    const dispatch = useDispatch();

    const collectionId = useSelector(selectCollectionId, shallowEqual);
    const isCollectionDetailsLoading = useSelector(selectCollectionDetailsLoader, shallowEqual);

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [isActive, setIsActive] = useState(0);

    const onBtnClick = (tag, index) => {
        if (actionName) {
            switch (actionName) {
                case ActionNames.GET_US_STOCKS_COLLECTION_DETAILS_ACTION:
                    dispatch(getUSStocksCollectionDetailsAction({ collectionId: tag.id }));
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
            const collectionItem = categories.find((data) => data.id === collectionId);

            setSelectedCategory(collectionItem);
        }
    }, [collectionId, dynamicComponent]);

    const navigate = useNavigate();

    const handleCardClick = (url) => () => {
        if (url) {
            const lowercaseSymbol = url.toLowerCase();
            navigate(`${APP_URLS.US_STOCKS}/${lowercaseSymbol}`);
        }
    };

    return (
        <Container>
            <CategoriesTagWrapper>
                <Categories>
                    {categories.map((tag, index) => (
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
            {isCollectionDetailsLoading ? (
                <CenteredSpinner />
            ) : (
                <CardWrapper>
                    <CardsContainer>
                        {selectedCategory?.companies?.map((company) => (
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
