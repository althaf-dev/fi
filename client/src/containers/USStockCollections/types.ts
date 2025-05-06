/**
 * @file - Types
 * Defines interfaces or types related to the usstock collections
 */
import { IPageContext, IUSStockData, IUSStocksCollectionData } from '../../interfaces/elements';

export interface IFetchCollectionDetailsArgs {
    collection: IUSStocksCollectionData;
    prevToken?: string;
    afterToken?: string;
    sortOption?: string;
}

export interface IFetchCollectionDetailsResponse {
    transformedData: IUSStockData;
    _pageContext: IPageContext;
    _description: string;
    _selectedSortOption: string;
    _sortOptions: ISortOption[],
    _numberOfStocksText: string;
}

export interface ISortOption {
    title: string,
    type: string;
}
