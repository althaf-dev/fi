import { fontNameAndSizes } from './data';

export const getAngleLinearColorStops = (gradient: any) => {
    if (gradient && typeof gradient === 'string') {
        // eslint-disable-next-line no-param-reassign
        gradient = JSON.parse(gradient);
    }
    const { degree: angle, linear_color_stops: linearColorStops } = gradient || {};
    if (typeof linearColorStops === 'string') {
        return { angle, linearColorStops: JSON.parse(linearColorStops) };
    }
    return { angle, linearColorStops };
};
export const getFontWithAppliedStyle = (fontStyle: string) => {
    if (!fontStyle) return {};
    const actualFontStyle = fontStyle.replace('_', '').toLowerCase();
    if (!fontNameAndSizes[actualFontStyle]) {
        return {};
    }
    const { fontName, size } = fontNameAndSizes[actualFontStyle];
    return { fontFamily: fontName, fontSize: size };
};

export const checkIfJSONString = (string: string) => {
    try {
        JSON.parse(string);
    } catch (e) {
        return false;
    }
    return true;
};

export default {};
