/**
 * @file US Stocks collection utils
 */
import { USS_DETAILS_ENDPOINT } from '../../Api/ApiRoutes';

import { clientApiWrapper, transformUSStocksData } from '../../utils';

import { IFetchCollectionDetailsArgs, IFetchCollectionDetailsResponse } from './types';

/**
 * Fetches collection details data.
 *
 * @param {IFetchCollectionDetailsArgs} args - The arguments for fetching collection details.
 * @returns {Promise<IFetchCollectionDetailsResponse>}
 * @throws {Error} If there is an error in fetching the collection details.
 */
const fetchCollectionDetails = async (args: IFetchCollectionDetailsArgs): Promise<IFetchCollectionDetailsResponse> => {
    try {
        const {
            collection, prevToken, afterToken, sortOption,
        } = args;

        const { collection_id: collectionId } = collection || {};

        let url = `${USS_DETAILS_ENDPOINT}?collectionId=${collectionId}`;

        if (prevToken) {
            url = `${url}&prevToken=${prevToken}`;
        }

        if (afterToken) {
            url = `${url}&afterToken=${afterToken}`;
        }

        if (sortOption) {
            url = `${url}&sortOption=${sortOption}`;
        }

        const response = await clientApiWrapper.get(url);

        if (!response?.success) {
            throw new Error('Failed to fetch collection details');
        }

        const { data } = response || {};

        if (Object.keys(data).length === 0) {
            throw new Error('No Data Available');
        }

        const { details_section: detailsSection, page_context: _pageContext } = data || {};

        const { description: collectionDescription, stocks, sort_section: sortSection } = detailsSection || {};

        const { plain_string: _description } = collectionDescription || {};

        const { selected_sort_option: _selectedSortOption, sort_options: _sortOptions, title } = sortSection || {};

        const { plain_string: _numberOfStocksText } = title || {};

        const transformedData = transformUSStocksData(stocks);

        return {
            transformedData, _pageContext, _description, _selectedSortOption, _sortOptions, _numberOfStocksText,
        };
    } catch (errorMessage) {
        throw new Error(errorMessage);
    }
};

export {
    // eslint-disable-next-line import/prefer-default-export
    fetchCollectionDetails,
};
