/**
 * @file Credit Card Eligibility type definitions
 */

export interface IErrorResponse {
    error: {
        message: string;
    };
    message: string;
    description: string;
}

export interface IDisplayInfoData {
    headerIcon: string;
    screenTitle: string;
    screenMessage: string;
    screenImage: string;
    ctaText: string;
    additionalText?: string;
    bottomText?: string;
}
