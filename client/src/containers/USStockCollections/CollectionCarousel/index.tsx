/**
 * @file Collection Carousel
 *
 * Renders a carousel component for displaying a collection of cards.
 */
import React, { useCallback, useState, memo } from 'react';

import { IUSStocksCollectionData } from '../../../interfaces/elements';

import { Image, Carousel, LeftArrow, RightArrow } from '../../../components';
import { debounce } from '../../../utils';

import { CardWrapper, Card, ImageHolder, Title } from './styled';

const COLLECTION_CAROUSEL_SCROLL_VALUE = 140; // width of one collection card

interface ICollectionCarouselProps {
    collectionsData: IUSStocksCollectionData[];
    setSelectedCollectionItem: (item: IUSStocksCollectionData) => void;
}

const CollectionCarousel = (props: ICollectionCarouselProps) => {
    const { collectionsData, setSelectedCollectionItem } = props;

    const defaultSelectedCollection = collectionsData?.length && collectionsData[0];

    const { collection_id: defaultSelectedCollectionId = '' } = defaultSelectedCollection || {};

    const [selectedCollectionId, setSelectedCollectionId] = useState<string>(defaultSelectedCollectionId);

    /**
     * Function to debounce the card click event handler.
     * It delays the execution of the handler to prevent frequent updates.
     */
    const debounceCardClick = useCallback(debounce((collection: IUSStocksCollectionData) => {
        setSelectedCollectionItem(collection);
    }, 1000), []);

    /**
     * Event handler for the card click event.
     * Updates the selected collection ID and triggers the debounced card click event handler.
     */
    const onCardClick = (collection: IUSStocksCollectionData) => () => {
        const { collection_id: id } = collection;

        setSelectedCollectionId(id);
        debounceCardClick(collection);
    };

    return (
        <Carousel
            leftArrow={<LeftArrow />}
            rightArrow={<RightArrow />}
            leftScrollValue={COLLECTION_CAROUSEL_SCROLL_VALUE}
            rightScrollValue={COLLECTION_CAROUSEL_SCROLL_VALUE}
        >
            <CardWrapper>
                {collectionsData?.map((collection) => {
                    const { collection_id: id, icon, title } = collection || {};
                    const { image_url: imageUrl } = icon || {};
                    const isSelected = selectedCollectionId === id;

                    return (
                        <Card key={id} onClick={onCardClick(collection)} isSelected={isSelected}>
                            <ImageHolder>
                                <Image icon={imageUrl} alt='collection-icon' fallBackImage={imageUrl} loadingType='eager' />
                            </ImageHolder>
                            <Title isSelected={isSelected}>
                                {title}
                            </Title>
                        </Card>
                    );
                })}
            </CardWrapper>
        </Carousel>
    );
};

export default memo(CollectionCarousel);
