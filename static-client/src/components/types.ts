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

export type CommonComponentProps = {
    className?: string;
    styles?: ResponsiveStyle;
};

type DeviceStyleType = React.CSSProperties & Record<string, any>;

export type ResponsiveStyle<T = DeviceStyleType> = {
    phone: T;
    tab: T;
    desktop: T;
};
