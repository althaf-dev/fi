/**
 * @file Salary Account SignUp container type definitions
 */

import React from 'react';
import { emailWorkBenefitData, phoneNumberWorkBenefitData } from './constants';

export interface IstepModuleList {
    Component: React.ReactElement;
    RightChild: React.ReactElement;
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

export type BuildWorkBenefitSectionProps =
    | typeof emailWorkBenefitData
    | typeof phoneNumberWorkBenefitData;
