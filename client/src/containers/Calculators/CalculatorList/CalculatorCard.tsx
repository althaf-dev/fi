import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Image } from '../../../components';

import { getSingleCalculatorDataAction } from '../actions';
import { APP_URLS } from '../../../constants/AppConstant';

import {
    ListCardWrapper, ListDescription, ListIconHolder, ListName,
} from './styled';

interface CalculatorCardProps {
    iconUrl: string;
    name: string;
    description: string;
    url: string;
    fallbackIconUrl: string;
    loadingType: 'lazy' | 'eager';
}

const CalculatorCard = (props: CalculatorCardProps) => {
    const {
        iconUrl, fallbackIconUrl, name, description, url, loadingType,
    } = props;

    const dispatch = useDispatch();

    const onCalculatorCardClick = () => {
        dispatch(getSingleCalculatorDataAction({ value: url }));
    };

    return (
        <Link to={`${APP_URLS.CALCULATORS_PAGE}/${url}`}>
            <ListCardWrapper onClick={onCalculatorCardClick}>
                <ListIconHolder>
                    <Image icon={iconUrl} fallBackImage={fallbackIconUrl} loadingType={loadingType} alt='category icon' />
                </ListIconHolder>
                <ListName font='cardTitleVariantEight' tagType='text' color='MINE_SHAFT'>
                    {name}
                </ListName>
                <ListDescription font='cardDescriptionVariantTwo' tagType='text' color='GREY_2'>
                    {description}
                </ListDescription>
            </ListCardWrapper>
        </Link>
    );
};

export default memo(CalculatorCard);
