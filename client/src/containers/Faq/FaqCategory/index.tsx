import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getCategoriesData } from '../actions';
import CategoryCard from './CategoryCard';
import { CategoryContainer } from './styles';

import Landing from '../Landing';

const FaqCategory = () => {
    const dispatch = useDispatch();

    const CATEGORIES_DATA = useSelector(
        (state: any) => state.faqReducer.categoriesData,
    );

    const hasCategoriesData = useSelector(
        (state: any) => state.faqReducer.hasCategoriesData,
        shallowEqual,
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!hasCategoriesData) {
            dispatch(getCategoriesData());
        }
    }, [hasCategoriesData, dispatch]);

    return (
        <Landing>
            <CategoryContainer>
                {CATEGORIES_DATA.map((value) => (
                    <div key={value.id}>
                        <CategoryCard
                            categoryUrl={value.iconUrl}
                            categoryName={value.name}
                            description={value.description}
                        />
                    </div>
                ))}
            </CategoryContainer>
        </Landing>
    );
};

export default FaqCategory;
