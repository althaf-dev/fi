/**
 * @file Min KYC Closed Account flow type definitions
 */

import React from 'react';

export interface IstepModuleList {
    Component: React.ReactElement;
}

export interface IstepModuleListItem {
    [key: string]: IstepModuleList;
}

export interface ICommonErrorResponsePayload {
    error: {
        message: string;
    };
    description: string;
}
