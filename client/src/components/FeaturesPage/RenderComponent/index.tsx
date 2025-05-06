/**
 * @file RenderComponent Based On ComponentType
 * All compound components should go here
 * Basic component should go in RenderBasicComponent
 */

import React from 'react';

import RenderBasicComponent from '../RenderBasicComponent';
import { Carousel } from '../components';

interface RenderLayoutProps {
    info: {
        type: string,
        data: any;
    }
}

// eslint-disable-next-line no-shadow
enum ComponentType {
    CarouselComponent = 'carousel',
}

const RenderComponent = (props: RenderLayoutProps) => {
    const { info } = props;

    const { type, data } = info;

    switch (type) {
        case ComponentType.CarouselComponent: {
            const { list } = data;

            return <Carousel data={list} />;
        }

        default:
            return <RenderBasicComponent info={info} />;
    }
};

export default RenderComponent;
