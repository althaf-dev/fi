/**
 * @file All styled components global mixins are defined in this file
 */

interface IFlexMixin {
    dir?: string;
    justify?: string;
    align?: string;
    width?: string;
    height?: string;
}

/**
 * Mixin for applying flex style to an element.
 * @param dir - flex-direction.
 * @param justify - justify-content.
 * @param align - align-items.
 * @param width - width of the container.
 * @param height - height of the container
 */
const FlexMixin = (options: IFlexMixin): string => {
    const {
        dir = 'row',
        justify = 'center',
        align = 'center',
        width = 'auto',
        height = 'auto',
    } = options;
    return `
        display: flex;
        flex-direction: ${dir};
        justify-content: ${justify};
        align-items: ${align};
        width: ${width};
        height: ${height};
    `;
};

interface IFontMixin {
    font?: string;
    weight?: number;
    size?: string;
    lineHeight?: string;
    style?: string;
}

/**
 * Mixin for applying font style to an element.
 * @param font - font-family.
 * @param weight - font-weight.
 * @param size - font-size.
 * @param line-height - line-height.
 * @param style - font-style.
 */
const FontMixin = (options: IFontMixin): string => {
    const {
        weight = 500, size = '16px', lineHeight = '16px', font = 'Gilroy', style = 'normal',
    } = options;

    return `
        font-family: ${font}, sans-serif;
        font-style: ${style};
        font-weight: ${weight};
        font-size: ${size};
        line-height: ${lineHeight};
    `;
};

/**
 * Mixin for applying ellipsis to an element.
 * @param width - width of the container.
 */
const EllipsisMixin = (width: string): string => `
    width: ${width || 'fit-content'};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

/**
 * Mixin for applying line clamping to an element.
 * @param noOfLines - no of lines to show in the element.
 */
const LineClampMixin = (noOfLines: number): string => `
    display: -webkit-box;
    -webkit-line-clamp: ${noOfLines || 2};
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const MIXINS = {
    FlexMixin,
    FontMixin,
    EllipsisMixin,
    LineClampMixin,
};

export default MIXINS;
