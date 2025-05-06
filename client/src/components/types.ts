/**
 * @file Common interfaces and types defined for components used in other parts of the app
 */

import { TextProps } from './Abstract/Font/Font';

export type IFinePrint = {
    text: string;
    font: TextProps['font'];
    color: TextProps['color'];
    url?: string;
    onClick?: (url: string) => void;
}
