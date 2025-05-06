/* eslint-disable camelcase */
/**
 * @file All interfaces for React and DOM elements can be defined here
 */

/**
 * Used for defining the prop of a useRef value
 * You can pass it the generic while using
 * Example:
 * interface IComponentProps {
 *     containerRef: RefObject<HTMLDivElement>
 * }
 */
export interface RefObject<T> {
    readonly current: T | null
}

/**
 * The Link interface describes an object with properties URL of a link, as well as an optional boolean
 * indicating whether the link is external.
 */
export interface Link {
    url: string;
    isExternal?: boolean;
}

/**
 * ITextLink type extends Link with a required text property, representing the text content of the link.
 */
export type ITextLink = {
        label: string;
        links: {
          text: string;
          url: string;
          isExternal?: boolean;
        }[];
  };
/**
 * The LinkArray types define the array of ITextLink object
 *
 */
export type TextLinkArray = ITextLink[];

/**
 * This interface defines color options based on a boolean input.
 */
export interface IColorOptions {
    condition: boolean;
    firstColor: string;
    secondColor: string;
}

/**
 * Represents a single FAQ article.
 */
export interface IFaqArticle {
    question: string;
    answer: string;
}

/**
 * API response interface.
 * Represents the response received from an API request.
 * @template T - Type of the data in the response.
 */
export interface IApiResponse<T> {
    code: number;
    data: T;
    message: string;
    success: boolean;
}

/**
 * Interface for the transformed company details
 */
export interface TransformedCompanyDetails {
  text: string;
  subText: string;
  description: string;
  data: TransformedDataEntry[];
}

/**
 * Interface for transformed data entry
 */
export interface TransformedDataEntry {
  text: string;
  value: string;
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
 * Interface for feature page carousel
 */
export interface IFeaturePageCarousel {
    id: string;
    title: string;
    icon: {
        image_src: string;
        fallback_image_src?: string;
    };
    sub_text: string;
    tag_data: {
        icon: string;
        text: string;
    };
    description?: string;
    url?: string;
}

/**
 * Interface for a pagination context
 */
export interface IPageContext {
    after_token: string;
    before_token: string;
    has_after: boolean;
    has_before: boolean;
}
