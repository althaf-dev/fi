'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { transformDataAccordingFeaturePageCarousel } from '@/utils/transformation';
import { APP_URLS } from '@/constants/AppConstant';
import { COLLECTION_IDS, OrientationType } from './constants';
import TopBottomOrientation from '@/components/Sections/TopBottomOrientation';
import { fetchUSStocksDetails } from '@/rtk/components/US-Stocks-feature-page/reducers';

const UsstockWebCollectionUI = () => {
    const dispatch = useAppDispatch();
    const details : any = useAppSelector((state) => state.usStocks);
    const hasUsStockData = details.hasUSStocksData.WEB_COLLECTION;

    useEffect(() => {
        if (!hasUsStockData) {
            dispatch(fetchUSStocksDetails(COLLECTION_IDS.WEB_COLLECTION));
        }
    }, [hasUsStockData]);

    let transformData;

    if (details) {
        transformData = transformDataAccordingFeaturePageCarousel(details?.usStocksData?.WEB_COLLECTION.details_section?.stocks);
    }

    const UsstockWebCollection = {
        orientation: OrientationType.TopBottom,
        top: {
            type: 'heading',
            data: {
                title: 'Add Apple, Microsoft, Tesla, Nike and more to your portfolio',
            },
        },
        bottom: {
            type: 'carousel_varinat_one',
            data: {
                list: transformData,
                navigationUrl: APP_URLS.US_STOCKS,
            },
        },
    };

    return (
        <div>
            {
                transformData && <TopBottomOrientation item={UsstockWebCollection} />
            }

        </div>
    );
};

export default UsstockWebCollectionUI;
