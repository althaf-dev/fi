/**
 * @file RenderBasicComponent Based On ComponentType
 * Component that are stand alone and do not have a dependency go here
 */

import React, { memo } from 'react';

import SingleCalculator from '../../../containers/Calculators/SingleCalculator';

import {
    Button, Image, Text, Heading, FeaturesCards, AccordionContainer, FeaturesTable, FeaturesBlogs, CategoryTags,
    CarouselVariantOne, Disclaimer,
} from '../components';
import { CalculatorContainer, CalculatorSection } from '../styled';

interface RenderLayoutProps {
    info: {
        type: string;
        data: any;
    };
}

// eslint-disable-next-line no-shadow
enum ComponentType {
    TextComponent = 'text',
    ImageComponent = 'image',
    ButtonComponent = 'button',
    HeadingComponent = 'heading',
    CardsComponent = 'cards',
    BlogComponent = 'blog',
    AccordionComponent = 'accordions',
    TableComponent = 'table',
    CalculatorComponent = 'calculator',
    CategoryTagsComponent = 'category_tags',
    CarouselVariantOneComponent = 'carousel_varinat_one',
    DisclaimerComponent = 'disclaimer',
}

const RenderBasicComponent = (props: RenderLayoutProps) => {
    const { info } = props;

    const { type, data } = info || {};

    switch (type) {
        case ComponentType.TextComponent: {
            const {
                title, description, cta, info_text: infoText,
            } = data;

            return <Text title={title} description={description} cta={cta} infoText={infoText} />;
        }

        case ComponentType.ImageComponent: {
            const {
                image_src: imageSrc,
                fallback_image_src: fallbackImageSrc,
                mobile,
                variant,
            } = data;

            return <Image image={imageSrc} fallBackImage={fallbackImageSrc} mobile={mobile} imageVariant={variant} />;
        }

        case ComponentType.ButtonComponent: {
            const { url, text } = data;

            return <Button url={url} text={text} />;
        }

        case ComponentType.HeadingComponent: {
            const { title, description } = data;

            return <Heading title={title} description={description} />;
        }

        case ComponentType.CardsComponent: {
            return <FeaturesCards item={data} />;
        }

        case ComponentType.BlogComponent: {
            const { list } = data;

            return <FeaturesBlogs data={list} />;
        }

        case ComponentType.AccordionComponent: {
            return <AccordionContainer data={data} />;
        }

        case ComponentType.TableComponent: {
            return <FeaturesTable data={data} />;
        }

        case ComponentType.CalculatorComponent: {
            const { calc_url: calcUrl } = data;

            return (
                <CalculatorContainer>
                    <CalculatorSection>
                        <SingleCalculator internalPageUrl={calcUrl} />
                    </CalculatorSection>
                </CalculatorContainer>
            );
        }

        case ComponentType.CategoryTagsComponent: {
            return <CategoryTags item={data} />;
        }

        case ComponentType.CarouselVariantOneComponent: {
            return <CarouselVariantOne item={data} />;
        }

        case ComponentType.DisclaimerComponent: {
            const { text } = data;

            return <Disclaimer contentText={text} />;
        }

        default:
            return null;
    }
};

export default memo(RenderBasicComponent);
