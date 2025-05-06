import { ResponsiveStyle } from '../types';

export type Variants = {
    [key: string]:{
        extends: string;
        properties: ResponsiveStyle
    }
}

export type TextVariant = {
    colorTag: string;
    typographyTag: string;
    properties: ResponsiveStyle
}
