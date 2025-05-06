'use client';

/* eslint-disable max-len */
/* eslint-disable dot-notation */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import Section from '../Section';
import Image from '../Image';
import Row from '../Row';
import Column from '../Column';
import Font from '../Font';
import Button, { DynamicButton } from '../Button';
import styleEngine from './StyleEngine';
import { ResponsiveStyle } from '../types';
import { TextVariant } from './types';
import Colors from '../../Themes/Colors';
import Typography from '../../Themes/Typography';
import logger from '@/utils/logger';
import BlogCard from '../BlogCard';
import { trackGTMEvent } from '@/events';
import TextImage from '../TextImage';
import CarouselVariantOne from '../Carousel/CarouselV2';
import FAQs from '../FAQs';
import PopUpComponent from '../PopUpComponent';
import Link from '../Link';
import DynamicComponent from '../DynamicComponent';
import UsstockWebCollectionUI from '@/containers/UsStockFeature/webCollections';
import UsstockCollection from '@/containers/UsStockFeature/collections';
import Accordion from './variants/Accordion';
import USStockCollections from '@/containers/USStockCollections';
import AboutScrollCardSection from '../AboutScrollCards/AboutScrollCardSection';
import AboutTeamSection from '../AboutTeamSection/AboutTeamSection';
import AppImageGridSection from '../AppImageGridSection/AppImageGridSection';
import SecureMoneySection from '../SecureMoneySection';
import AboutPosterSection from '../AboutPosterSection/AboutPosterSection';
import AboutInfoSection from '../AboutInfoSection/AboutInfoSection';
import InstaLoansPoster from '../Features/Insta-loans/Poster';
import InstaLoanFeatures from "../Features/Insta-loans/Features";
import RenderBasicComponent from '../RenderBasicComponent';

type ElementType = {
    type: string;
    variant?: string;
    children?: string[];
    class?: string;
    [key: string]: any;
};

interface IRenderComponentProps {
    elements: {
        [key: string]: ElementType;
    };
    elementId: string;
}

const RenderChildren = (props: IRenderComponentProps) => {
    const { elements, elementId } = props;
    const { children } = elements[elementId];

    return (
        <>
            {children?.map((id: string) => (
                <RenderComponent key={id} elements={elements} elementId={id} />
            ))}
        </>
    );
};

function RenderComponent(props: IRenderComponentProps): any {
    try {
        const { elements, elementId } = props;
        const element = elements[elementId];

        if (!element) {
            return <div>unknown element</div>;
        }

        const { type, variant, className = '', id = '' } = element;

        const styles = styleEngine({ type, variant }) as ResponsiveStyle;

        switch (type) {
            case 'Section':
                return (
                    <Section
                        styles={styles}
                        className={className}
                        id={elementId}
                    >
                        <RenderChildren
                            elements={elements}
                            elementId={elementId}
                        />
                    </Section>
                );

            case 'Row':
                return (
                    <Row styles={styles} id={id} className={className}>
                        <RenderChildren
                            elements={elements}
                            elementId={elementId}
                        />
                    </Row>
                );

            case 'Column':
                return (
                    <Column styles={styles} id={id} className={className}>
                        <RenderChildren
                            elements={elements}
                            elementId={elementId}
                        />
                    </Column>
                );

            case 'Link': {
                const { url } = element;
                return (
                    <Link url={url} styles={styles} className={className}>
                        <RenderChildren
                            elements={elements}
                            elementId={elementId}
                        />
                    </Link>
                );
            }

            case 'Image': {
                const { url, fallback_url: fallbackUrl, alt = '' } = element;

                return (
                    <Image
                        styles={styles}
                        icon={url}
                        fallBackImage={fallbackUrl}
                        className={className}
                        id={id}
                        alt={alt}
                    />
                );
            }

            case 'Text': {
                const { content } = element;
                const {
                    colorTag,
                    typographyTag,
                    properties = {} as ResponsiveStyle,
                } = styles as unknown as TextVariant;
                const typography =
                    Typography[typographyTag as keyof typeof Typography];
                const color = Colors[colorTag as keyof typeof Colors];

                return (
                    <Font
                        typography={typography}
                        styles={properties}
                        color={color}
                        tagType="text"
                        className={className}
                        id={id}
                    >
                        {content}
                    </Font>
                );
            }

            case 'h1': {
                const { content } = element;
                const {
                    colorTag,
                    typographyTag,
                    properties = {} as ResponsiveStyle,
                } = styles as unknown as TextVariant;
                const typography =
                    Typography[typographyTag as keyof typeof Typography];
                const color = Colors[colorTag as keyof typeof Colors];

                return (
                    <Font
                        typography={typography}
                        styles={properties}
                        color={color}
                        tagType="h1"
                        className={className}
                        id={id}
                    >
                        {content}
                    </Font>
                );
            }

            case 'Button': {
                const { content, url, isDynamic, event } = elements[elementId];

                if (isDynamic)
                    return (
                        <DynamicButton
                            styles={styles}
                            onClick={() => {
                                if (event) {
                                    trackGTMEvent(event);
                                }
                            }}
                            url={url}
                        >
                            {content}
                        </DynamicButton>
                    );

                return (
                    <Button
                        styles={styles}
                        onClick={() => {
                            if (event) {
                                trackGTMEvent(event);
                            }
                        }}
                        url={url}
                    >
                        {content}
                    </Button>
                );
            }

            case 'BlogCard': {
                const {
                    url,
                    fallback_url: fallbackUrl,
                    blog_url: blogUrl,
                    title,
                    tag,
                    read_length: readLength,
                } = elements[elementId];
                return (
                    <BlogCard
                        url={url}
                        fallbackUrl={fallbackUrl}
                        blogUrl={blogUrl}
                        title={title}
                        tag={tag}
                        readLength={readLength}
                    />
                );
            }

            case 'TextImage': {
                const { data } = elements[elementId];
                return <TextImage data={data} />;
            }
            case 'Accordion': {
                const { data } = elements[elementId];
                return <Accordion data={data} />;
            }
            case 'PopUpComponent': {
                const { data, baseText, headingText } = elements[elementId];
                return (
                    <PopUpComponent
                        baseText={baseText}
                        headingText={headingText}
                        data={data}
                        className={className}
                    />
                );
            }
            case 'DynamicComponent': {
                const { visibleAfter, hideAfter } = element;
                return (
                    <DynamicComponent
                        visibleAfter={visibleAfter}
                        hideAfter={hideAfter}
                        styles={styles}
                        className={className}
                    >
                        <RenderChildren
                            elements={elements}
                            elementId={elementId}
                        />
                    </DynamicComponent>
                );
            }
            case 'FAQs': {
                const {
                    faqs,
                    numberOfFaq,
                    totalNumFAQ,
                    viewMoreText,
                    background,
                    upArrow,
                    downArrow,
                    magnifi,
                    questionColor,
                    answerColor,
                } = elements[elementId];
                return (
                    <FAQs
                        faqs={faqs}
                        numberOfFaq={numberOfFaq}
                        totalNumFAQ={totalNumFAQ}
                        viewMoreText={viewMoreText}
                        background={background}
                        upArrow={upArrow}
                        downArrow={downArrow}
                        magnifi={magnifi}
                        questionColor={questionColor}
                        answerColor={answerColor}
                    />
                );
            }

            case 'CarouselVariantOne': {
                const { slides } = elements[elementId];
                return <CarouselVariantOne slides={slides} />;
            }

            case 'USStockCollections': {
                return <USStockCollections />;
            }

            case 'UssCollectionUI': {
                return <UsstockCollection />;
            }

            case 'UsstockWebCollectionCarousel': {
                return <UsstockWebCollectionUI />;
            }
            case 'AboutInfoSection': {
                return <AboutInfoSection />;
            }
            case 'AboutScrollSection': {
                return <AboutScrollCardSection />;
            }
            case 'AboutTeamSection': {
                return <AboutTeamSection />;
            }
            case 'AboutAppImageGridSection': {
                return <AppImageGridSection />;
            }
            case 'AboutSecureMoneySection': {
                return <SecureMoneySection />;
            }
            case 'AboutPosterSection': {
                return <AboutPosterSection />;
            }
            case 'AboutPosterSection': {
                return <AboutPosterSection />;
            }
            case 'FeaturesInstaLoansPoster': {
                return <InstaLoansPoster />;
            }
            case 'FeaturesInstaLoans': {
                return <InstaLoanFeatures/>
            }
            case 'heading': {
                return <RenderBasicComponent info={item.full}/>
            }

            default:
                return (
                    <div>
                        Not implemented
                        {type}
                    </div>
                );
        }
    } catch (e: any) {
        logger.log(e);
        return (
            <div>
                Not implemented:
                {new Error(e).toString()}
            </div>
        );
    }
}

export default RenderComponent;
