/**
 * @file Fi minutes styled components
 */

import styled from 'styled-components';

import MIXINS from '../../Themes/mixins';

const RetroGamingFont = styled.div`
    font-family: 'Retro Gaming',sans-serif;
    font-weight: 400;
    text-align: center;
    word-break: break-word;
`;

const GilroyFont = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-weight: 600;
    text-align: center;
`;

export const StoryContainer = styled.div`
    height: 100%;
    width: 100%;
`;

/**
 * Need to set the height using --vh for mobile screens otherwise 100% height is not calculated properly
 * Using 100% or 100vh takes into account the top bar and bottom bar as well
 * Hence it adds scroll to the page and the CTA like Share button gets cut off or get completely hidden
 */
export const StoryInnerContainer = styled.div`
    padding: 15px 10px;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    width: inherit;
    // position: fixed; // Not needed since scroll is disabled directly from iOS code 
`;

export const TemplateContainer = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column' })};
`;

export const LottieContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`;

export const LineClampText = styled.div<{ noOfLines?: number }>`
    ${(props) => MIXINS.LineClampMixin(props.noOfLines)};
`;

export const FlexJSB = styled.div`
    ${MIXINS.FlexMixin({ justify: 'space-between' })};
`;

const INFO_PILL_PADDING_SIZE_MAP = {
    large: '10px 16px',
    small: '4px 8px',
};

export const InfoPill = styled.div<{ bgColor?: string, size?: string }>`
    ${MIXINS.FlexMixin({})};
    width: max-content;
    padding: ${(props) => (INFO_PILL_PADDING_SIZE_MAP[props.size ?? 'small'])};
    margin-left: ${(props) => (props.size === 'large' ? '0' : '8px')};
    border-radius: ${(props) => (props.size === 'large' ? '17px' : '9px')};
    background-color: ${(props) => props.bgColor ?? props.theme.color.TRANSPARENT};
`;

export const IconContainer = styled.img<{ width?: string, height?: string, margin?: string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin ?? '0'};
`;

export const TextVar1 = styled(RetroGamingFont)`
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: ${(props) => props.theme.color.BOMBAY_GREY};
`;

export const TextVar1A = styled(RetroGamingFont)`
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: ${(props) => props.theme.color.WHITE};
`;

export const TextVar2 = styled(RetroGamingFont)`
    font-size: 24px;
    line-height: 31px;
    letter-spacing: 0.07em;
    /* text-shadow: 2px 0px 0px #646464; */
    color: ${(props) => props.theme.color.WHITE};
`;

export const TextVar3 = styled(RetroGamingFont)`
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01em;
    /* text-shadow: 1px 0px 0px #4D4D4D; */
    color: ${(props) => props.theme.color.WHITE};
`;

export const TextVar4 = styled(RetroGamingFont)`
    font-size: 50px;
    line-height: 64px;
    letter-spacing: 0.04em;
    background: linear-gradient(96.31deg, #FDC462 8.31%, #D9941B 68.82%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* text-shadow: 3px 0px 0px #724006; */
`;

export const TextVar5 = styled(RetroGamingFont)`
    font-size: 40px;
    /* line-height: 54px; */
    background: linear-gradient(106.18deg, #AD6CFF 21.25%, #822CF0 97.37%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* text-shadow: 3px 0px 0px #26084B; */
`;

export const TextVar6 = styled(RetroGamingFont)`
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.01em;
    color: #A865FE;
`;

export const TextVar7 = styled(RetroGamingFont)`
    font-size: 50px;
    /* line-height: 54px; */
    text-align: center;
    background: linear-gradient(106.18deg, #CF7C65 21.25%, #B35338 97.37%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* text-shadow: 3px 0px 0px #571D0C; */
`;

export const TextVar7A = styled(TextVar7)`
    font-size: 40px;
`;

export const TextVar8 = styled(RetroGamingFont)`
    font-size: 40px;
    line-height: 54px;
    color: ${(props) => props.theme.color.WHITE};
`;

export const TextVar9 = styled(RetroGamingFont)`
    font-size: 50px;
    /* line-height: 54px; */
    background: linear-gradient(106.18deg, #69E38B 21.25%, #167E40 97.37%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* text-shadow: 3px 0px 0px #16361F; */
`;

export const TextVar10 = styled(RetroGamingFont)`
    font-size: 20px;
    line-height: 25px;
    background: linear-gradient(106.18deg, #69E38B 21.25%, #167E40 97.37%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* text-shadow: 3px 0px 0px #16361F; */
`;

export const TextVar11 = styled(RetroGamingFont)`
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.01em;
    color: ${(props) => props.theme.color.SUVA_GREY};
`;

export const TextVar12 = styled(RetroGamingFont)`
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01em;
    /* text-shadow: 1px 0px 0px #4D4D4D; */
    color: ${(props) => props.theme.color.ONYX};
`;

export const TextVar13 = styled(RetroGamingFont)`
    font-size: 24px;
    line-height: 41px;
    /* text-shadow: 2px 0px 0px #363636; */
    color: ${(props) => props.theme.color.ALTO_VAR_1};
`;

export const TextVar14 = styled(RetroGamingFont)`
    font-size: 24px;
    line-height: 41px;
    /* text-shadow: 2px 0px 0px #363636; */
    color: ${(props) => props.theme.color.GRAY};
`;

export const TextVar15 = styled(GilroyFont)<{ color?: string, size?, family? }>`
    ${(props) => props.family && `font-family: ${props.family};`} 
    font-size: ${(props) => (props.size ? `${props.size}px` : '20px')};
    // line-height: 24px;
    color: ${(props) => props.color ?? props.theme.color.GRAY};
`;

export const TextVar16 = styled(GilroyFont)<{ color?: string, size?, family? }>`
    line-height: 30px;
    ${(props) => props.family && `font-family: ${props.family};`} 
    font-size: ${(props) => (props.size ? `${props.size}px` : '24px')};
    color: ${(props) => props.color ?? props.theme.color.WHITE};
`;

export const TextVar17 = styled(GilroyFont)<{ color?: string, fontSize?, fontFamily? }>`
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
    ${(props) => props.fontFamily && `font-family: ${props.fontFamily};`} 
    line-height: 16px;
    color: ${(props) => props.color ?? props.theme.color.ONYX};
`;

export const TextVar18 = styled(GilroyFont)<{ color?: string }>`
    font-size: 28px;
    line-height: 32px;
    font-weight: 500;
    margin: 10px 0;
    color: ${(props) => props.color ?? props.theme.color.MONOCHROME_CHARCOAL};
`;

export const TextVar19 = styled(GilroyFont)<{ color?: string, size?, family? }>`
    font-size: ${(props) => (props.size ? `${props.size}px` : '16px')};
    ${(props) => props.family && `font-family: ${props.family};`} 
    line-height: 20px;
    color: ${(props) => props.color ?? props.theme.color.MONOCHROME_CHARCOAL};
`;

export const TextVar20 = styled(GilroyFont)<{ color?: string }>`
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: ${(props) => props.color ?? props.theme.color.MONOCHROME_CHARCOAL};
`;

export const TextVar21 = styled(GilroyFont)<{ color?: string }>`
    font-weight: 500;
    font-size: 48px;
    line-height: 40px;
    padding: 16px 16px 30px;
    color: ${(props) => props.color ?? props.theme.color.MINT_GREEN};
`;
