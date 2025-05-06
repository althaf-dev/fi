/**
 * @file - Types
 * Defines interfaces or types related to the usstock collections
 */

/**
 * Interface for a pagination context
 */
export interface IPageContext {
    after_token: string;
    before_token: string;
    has_after: boolean;
    has_before: boolean;
}

/**
 * Interface for US Stock data
 */
export interface IUSStockData {
    [key: string] : {
        id: string;
        title: string;
        icon: {
          image_src: string;
        };
        currentPrice: string;
        percentageReturns: {
          icon: string;
          text: string;
        };
        symbol: string;
        shouldUpdateRealTime: boolean;
    }
}

/**
 * Interface for US Stocks collections data
 */
export interface IUSStocksCollectionData {
    collection_id: string;
    icon: {
        image_url: string,
    };
    title: string;
}

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
