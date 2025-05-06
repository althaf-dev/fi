/* eslint-disable camelcase */

import { IDropDown } from '../../components/DropDownVariantOne';

/**
 * @file Calculator containers type definitions
 */

export interface ICalculatorInfo {
    calculator_id: string;
    url: string;
    name: string;
    description: string;
    icon_url: string;
    mobile_icon_url?:string;
    mobile_top_sheet_description?:string;
    mobile_poster_label?:string;
    fallback_mobile_icon_url?:string;
    related_calculators: Array<string>;
}

export interface ICalculatorInputField {
    input_id: string;
    type: string;
    label: string;
    prefix_text: string;
    suffix_text: string;
    more_info: string;
    min_value: IDropDown;
    max_value: IDropDown;
    step_value: number;
    value: any; // number | ILabel
    readable_only: boolean;
    allow_decimal: boolean;
    debounce_time: number;
    options: Array<IDropDown>;
    nested_items?: Array<any>;
    show_bottom_of_graph?: boolean;
    parent_item_index?: number; 
}

interface IAdditionalInformation {
    title: string;
    content: string;
}

export interface ICalculators {
    calculator_info: ICalculatorInfo;
    input_fields: Array<ICalculatorInputField>;
    additional_information: Array<IAdditionalInformation>;
    faqs_information: Array<any>;
    banner_details: ICalculatorCtaBannerData;
}

export interface ICalculatorsReducer {
    allCalculators: Array<ICalculatorInfo>;
    singleCalculator: ICalculators | null;
    outputResult: object & { visuals: any[]; outputSentence: string } | null;
}

export interface ICalculatorCtaBannerData {
    title: string;
    title_color: string;
    side_banner: string;
    button_text: string;
    url: string;
    desktop_image_src: {
        image_src: string;
        fallback_image_src: string;
    };
    mobile_image_src: {
        image_src: string;
        fallback_image_src: string;
    };
}
