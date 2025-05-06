'use client';

/**
 * @file UsStock Collection
 * Render all details realted to a us stock collection
 */
import React, { useState, useEffect, useCallback } from 'react';
import Error from 'next/error';
import CollectionCarousel from './CollectionCarousel';
import StocksList from './StocksList';
import NumberOfStocksAndSortingSection from './NumberOfStocksAndSortingSection';
import { fetchCollectionDetails } from './utils';
import {
    IFetchCollectionDetailsArgs, IFetchCollectionDetailsResponse, IPageContext, ISortOption, IUSStockData, IUSStocksCollectionData
} from './types';
import { DEFAULT_SELECTED_SORT_OPTION } from './constants';
import {
    Wrapper, StocksListWrapper, CollectionDetailsWrapper, Description,
    DescriptionWrapper, CenteredSpinnerWrapper, StyledContainer,
} from './styled';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import Loader from '@/components/Loader';
import Breadcrumbs from '@/components/Breadcrumbs';
import CenteredSpinner from '@/components/CenteredSpinner';
import InfiniteScroll from '@/components/InfiniteScroll';
import { fetchUSStocksCollectionList } from '@/rtk/components/US-Stocks-feature-page/reducers';

const USStockCollections = () => {
    const dispatch = useAppDispatch();
    const details : any = useAppSelector((state) => state.usStocks);
    const hasCollections = details.hasCollection;

    const collectionData = details?.collections?.collections;

    const [loading, setLoading] = useState<boolean>(true);
    const [stocksListLoading, setStocksListLoading] = useState(false);
    const [isFetchingMoreData, setIsFetchingMoreData] = useState(false);
    const [error, setError] = useState<string>('');
    const [selectedCollectionItem, setSelectedCollectionItem] = useState<IUSStocksCollectionData | null>(null);
    const [pageContext, setPageContext] = useState<IPageContext | null>(null);
    const [stocksList, setStocksList] = useState<IUSStockData | null>(null);
    const [description, setDescription] = useState<string>('');
    const [numberOfStocksText, setNumberOfStocksText] = useState<string>('');
    const [selectedSortOption, setSelectedSortOption] = useState<ISortOption | null>(null);
    const [sortOptions, setSortOptions] = useState<ISortOption[] | null>(null);

    /**
     * Returns the selected sort option data from an array of sort options.
     *
     * @param {Array<Object>} _sortOptions - An array of sort options.
     * @param {string} _selectedSortOption - The selected sort option type.
     * @returns {Object} The selected sort option data or defaultSelectedSortOptionData if not found.
     */
    const getSelectedSortOptionData = (_sortOptions: any, _selectedSortOption: any) => {
        const data = _sortOptions?.find((sortOption: any) => sortOption?.type === _selectedSortOption);

        return data || DEFAULT_SELECTED_SORT_OPTION;
    };

    /**
     * Using setTimeout to add delay before updating the loading state to false.
     * This ensures that the loading animation is shown before rendering the UI.
     */
    const delayLoadingAnimation = (callbackFunction: any, delay: any) => {
        setTimeout(callbackFunction, delay);
    };

    const fetchDataOnInitialLoad = async (args: IFetchCollectionDetailsArgs) => {
        try {
            const {
                transformedData, _pageContext, _description, _selectedSortOption, _sortOptions, _numberOfStocksText,
            }: IFetchCollectionDetailsResponse = await fetchCollectionDetails(args);

            const selectedSortOptionData = getSelectedSortOptionData(_sortOptions, _selectedSortOption);

            setPageContext(_pageContext);
            setDescription(_description);
            setStocksList(transformedData);
            setNumberOfStocksText(_numberOfStocksText);
            setSelectedSortOption(selectedSortOptionData);
            setSortOptions(_sortOptions);
        } catch (errorMessage: any) {
            setError(errorMessage);
        } finally {
            delayLoadingAnimation(() => setLoading(false), 500);
        }
    };

    const fetchDataWhenCollectionItemChange = async (args: IFetchCollectionDetailsArgs) => {
        try {
            setStocksListLoading(true);

            const {
                transformedData, _pageContext, _description, _numberOfStocksText,
                _sortOptions, _selectedSortOption,
            }: IFetchCollectionDetailsResponse = await fetchCollectionDetails(args);

            const selectedSortOptionData = getSelectedSortOptionData(_sortOptions, _selectedSortOption);

            setPageContext(_pageContext);
            setDescription(_description);
            setStocksList(transformedData);
            setNumberOfStocksText(_numberOfStocksText);
            setSelectedSortOption(selectedSortOptionData);
            setSortOptions(_sortOptions);
        } catch (errorMessage: any) {
            setError(errorMessage);
        } finally {
            delayLoadingAnimation(() => setStocksListLoading(false), 500);
        }
    };

    const fetchMoreData = async (args: IFetchCollectionDetailsArgs) => {
        try {
            setIsFetchingMoreData(true);

            const { transformedData, _pageContext }: IFetchCollectionDetailsResponse = await fetchCollectionDetails(args);

            setPageContext(_pageContext);
            setStocksList((prevState: any) => ({
                ...prevState,
                ...transformedData,
            }));
        } catch (errorMessage: any) {
            setError(errorMessage);
        } finally {
            delayLoadingAnimation(() => setIsFetchingMoreData(false), 500);
        }
    };

    const fetchDataWhenSortingMethodChange = async (args: IFetchCollectionDetailsArgs) => {
        try {
            setStocksListLoading(true);

            const {
                transformedData, _selectedSortOption, _sortOptions,
            }: IFetchCollectionDetailsResponse = await fetchCollectionDetails(args);

            const selectedSortOptionData = getSelectedSortOptionData(_sortOptions, _selectedSortOption);

            setSelectedSortOption(selectedSortOptionData);
            setStocksList(transformedData);
        } catch (errorMessage: any) {
            setError(errorMessage);
        } finally {
            delayLoadingAnimation(() => setStocksListLoading(false), 500);
        }
    };

    /**
     * Callback function triggered when scrolling reaches the end for infinite scroll.
     */
    const onScrollEnd = useCallback(() => {
        if (selectedCollectionItem) {
            fetchMoreData({
                collection: selectedCollectionItem,
                prevToken: pageContext?.before_token,
                afterToken: pageContext?.after_token,
            });
        }
    }, [selectedCollectionItem, pageContext?.before_token, pageContext?.after_token]);

    /**
    * Handles sorting functionality and updates the data accordingly.
    */
    const handleSort = useCallback(() => {
    // Get the index of the currently selected sort option
        const currentIndex = sortOptions?.findIndex((sortOption) => sortOption?.type === selectedSortOption?.type);

        // Ensure sortOptions is not null and has length
        if (sortOptions && sortOptions.length > 0 && currentIndex !== undefined && currentIndex !== -1) {
        // Calculate the index of the next sort option using modulo operator
            const nextIndex = (currentIndex + 1) % sortOptions.length;

            // Retrieve the next sort method based on the next index
            const nextSortMethod = sortOptions[nextIndex];

            // Call the fetchDataWhenSortingMethodChange function to update the data based on the selected collection item and the next sort method
            fetchDataWhenSortingMethodChange({ collection: selectedCollectionItem || collectionData[0], sortOption: nextSortMethod?.type });
        }
    }, [collectionData, selectedCollectionItem, selectedSortOption?.type, sortOptions]);

    useEffect(() => {
        if (!hasCollections) {
            dispatch(fetchUSStocksCollectionList());
        }
    }, [hasCollections]);

    /**
     * Fetches and displays the details of the default selected collection when the collectionsData changes.
     */
    useEffect(() => {
        if (collectionData?.length) {
            const defaultSelectedCollection = collectionData[0];

            fetchDataOnInitialLoad({ collection: defaultSelectedCollection });
        }
    }, [collectionData]);

    useEffect(() => {
        if (selectedCollectionItem) {
            fetchDataWhenCollectionItemChange({ collection: selectedCollectionItem });
        }
    }, [selectedCollectionItem]);

    if (loading) {
        return <Loader isLoading={loading} />;
    }

    if (error) {
        return (
            <StyledContainer>
                <Error statusCode={500} />
            </StyledContainer>
        );
    }

    return (
        <StyledContainer>
            <Wrapper>
                <Breadcrumbs />
                <CollectionCarousel collectionsData={collectionData} setSelectedCollectionItem={setSelectedCollectionItem} />
                <CollectionDetailsWrapper>
                    <DescriptionWrapper>
                        <Description>
                            {description}
                        </Description>
                    </DescriptionWrapper>

                    <NumberOfStocksAndSortingSection
                        numberOfStocksText={numberOfStocksText}
                        selectedSortOptionTitle={selectedSortOption?.title || ''}
                        handleSort={handleSort}
                    />

                    <StocksListWrapper>
                        <InfiniteScroll onScrollEnd={onScrollEnd} hasMoreData={!!pageContext?.has_after}>
                            {stocksListLoading ? <CenteredSpinner /> : <StocksList stocksList={stocksList as IUSStockData} />}
                            {isFetchingMoreData ? (
                                <CenteredSpinnerWrapper>
                                    <CenteredSpinner />
                                </CenteredSpinnerWrapper>
                            ) : null}
                        </InfiniteScroll>
                    </StocksListWrapper>
                </CollectionDetailsWrapper>
            </Wrapper>
        </StyledContainer>
    );
};

export default USStockCollections;
