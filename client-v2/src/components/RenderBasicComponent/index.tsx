/**
 * @file RenderBasicComponent Based On ComponentType
 * Component that are stand alone and do not have a dependency go here
 */

import React, { memo } from 'react';

import CarouselVariantOne from '@/components/CarouselVariantOne/index';
import Heading from '../Heading';
import CategoryTags from '../CategoryTags';
import FeaturesCards from '../Features/FeaturesCards';

interface RenderLayoutProps {
    info: {
        type: string;
        data: any;
    };
}

// eslint-disable-next-line no-shadow
enum ComponentType {
    CarouselVariantOneComponent = 'carousel_varinat_one',
    HeadingComponent = 'heading',
    CardsComponent = 'cards',
    CategoryTagsComponent = 'category_tags',
}

const RenderBasicComponent = (props: RenderLayoutProps) => {
    const { info } = props;

    const { type, data } = info || {};

    switch (type) {
        case ComponentType.CarouselVariantOneComponent: {
            return <CarouselVariantOne item={data} />;
        }
        case ComponentType.HeadingComponent: {
            const { title, description } = data;

            return <Heading title={title} description={description} />;
        }
        case ComponentType.CategoryTagsComponent: {
            return <CategoryTags item={data} />;
        }

        case ComponentType.CardsComponent: {
            return <FeaturesCards item={data} />;
        }

        default:
            return null;
    }
};

export default memo(RenderBasicComponent);
