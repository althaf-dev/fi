'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { transformUSStocksCollectionsData } from '@/utils/transformation';
import { OrientationType } from './constants';
import TopBottomOrientation from '@/components/Sections/TopBottomOrientation';
import { fetchUSStocksCollectionDetails, fetchUSStocksCollectionList, updateCollectionDetails } from '@/rtk/components/US-Stocks-feature-page/reducers';

const UsstockCollection = () => {
    const dispatch = useAppDispatch();
    const details : any = useAppSelector((state) => state.usStocks);
    const hasCollectionsDeatils = details.hasCollectionDetails;
    const hasCollections = details.hasCollection;

    useEffect(() => {
        if (!hasCollections) {
            dispatch(fetchUSStocksCollectionList());
        }
    }, [hasCollections]);

    useEffect(() => {
        if (details.collectionId && !hasCollectionsDeatils) {
            dispatch(fetchUSStocksCollectionDetails(details.collectionId));
        }
    }, [details.collectionId, hasCollectionsDeatils]);

    let transaformData;
    const collectionData = details?.collections?.collections;
    const collectionDetails = details?.collectionDetails?.details_section?.stocks;
    const { collectionId } = details;

    if (details.collectionDetails && details.collections) {
        transaformData = transformUSStocksCollectionsData(collectionData, collectionDetails, collectionId);
    }

    const UssCollectionUIData = {
        orientation: OrientationType.TopBottom,
        top: {
            type: 'heading',
            data: {
                title: 'Not sure what to buy?<br/>Pick from these collections',
            },
        },
        bottom: {
            type: 'category_tags',
            data: {
                actionName: updateCollectionDetails,
                categories: transaformData,
                dynamicComponent: true,
            },
        },
    };

    return (
        <div>
            {
                collectionId && collectionData && <TopBottomOrientation item={UssCollectionUIData} />
            }
        </div>
    );
};

export default UsstockCollection;
