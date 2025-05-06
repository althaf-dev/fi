import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from '../../../components';
import { CLICKED_FAQ_CATEGORY, trackEvent } from '../../../events';
import { trackingPayload } from '../constants';
import createFAQsLinks from '../utils/createFAQsLinks';
import { CategoryCardWrapper, CategoryDescription, CategoryIconHolder, CategoryName } from './styles';

interface CategoryCardProps {
    categoryUrl: string;
    categoryName: string;
    description: string;
}

const CategoryCard = (props: CategoryCardProps) => {
    const {
        categoryUrl, categoryName, description,
    } = props;

    const onClickedFaqCategory = () => {
        trackEvent(CLICKED_FAQ_CATEGORY, { ...trackingPayload, category_name: categoryName });
    };

    return (
        <Link to={createFAQsLinks(categoryName)}>
            <CategoryCardWrapper onClick={onClickedFaqCategory}>
                <CategoryIconHolder>
                    <Image icon={categoryUrl} loadingType='lazy' alt='category icon' />
                </CategoryIconHolder>
                <CategoryName tagType='text' font='h5' color='MINE_SHAFT'>
                    {categoryName}
                </CategoryName>
                <CategoryDescription tagType='text' font='h4VariantFour' color='SUVA_GREY'>
                    {description}
                </CategoryDescription>
            </CategoryCardWrapper>
        </Link>
    );
};

export default CategoryCard;
