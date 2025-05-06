/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React, { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

import { ThemeType } from '@/Themes/Theme';
import { Device } from '@/Themes/Device';
import { tag } from '@/Themes/Typography';
import { htmlSanitization } from '@/utils';

import { jsonStyleToCssStringConverter } from '../RenderComponent/utils';
import { ResponsiveStyle } from '../types';
import './FontStyles.scss';

export type TextProps = React.HTMLAttributes<HTMLElement> &
    React.HTMLAttributes<HTMLInputElement> & {
        tagType:
        | 'text'
        | 'button'
        | 'input'
        | 'label'
        | 'span'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'p';
    type?: any;
    disabled?: boolean;
    children?: ReactNode;
    value?: any;
    autoFocus?: boolean;
    styles?:ResponsiveStyle;
    typography?: any;
    id?: any;
    }

/**
     *
     * TODO: font variant should be dynamic to varinat defination
     *
     * ref: https://github.com/epiFi/web/pull/2129#discussion_r1423778828
     *
     */

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type Fonts = {
        font:
            | 'h1'
            | 'h1NormalVariant'
            | 'h1VariantOne'
            | 'h1VariantTwo'
            | 'h1VariantThree'
            | 'h1VariantFour'
            | 'h1VariantFive'
            | 'h1VariantSix'
            | 'h1VariantSeven'
            | 'h2'
            | 'h2VariantOne'
            | 'h2VariantTwo'
            | 'h2VariantThree'
            | 'h2VariantFour'
            | 'h2VariantSix'
            | 'h2VariantSeven'
            | 'h2VariantEight'
            | 'h2VariantNine'
            | 'h3'
            | 'h3VariantOne'
            | 'h3VariantTwo'
            | 'h3VariantThree'
            | 'h3VariantFour'
            | 'h3VariantFive'
            | 'h3VariantSix'
            | 'h3VariantSeven'
            | 'h3VariantEight'
            | 'h3VariantNine'
            | 'h4'
            | 'h4VariantOne'
            | 'h4VariantTwo'
            | 'h4VariantThree'
            | 'h4VariantFour'
            | 'h4VariantFive'
            | 'h4VariantSix'
            | 'h4VariantSeven'
            | 'h5'
            | 'h6'
            | 'h6VariantOne'
            | 'h5VariantOne'
            | 'h5VariantTwo'
            | 'h5VariantThree'
            | 'h5VariantFour'
            | 'h5VariantFive'
            | 'h2VariantFive'
            | 'h5VariantSix'
            | 'h4VariantEight'
            | 'pNormalVariant'
            | 'p'
            | 'pVariantOne'
            | 'p2'
            | 'p3'
            | 'p4'
            | 'p5'
            | 'p5VariantOne'
            | 'p6'
            | 'p6VariantOne'
            | 'pSmall'
            | 'pSmallVariantOne'
            | 'pSmallVariantTwo'
            | 'pSmallVariantThree'
            | 'pSmallVariantFour'
            | 'pSmallVariantFive'
            | 'pSmallVariantSix'
            | 'pSmallVariantSeven'
            | 'pSmallVariantEight'
            | 'pSmallVariantNine'
            | 'pSmallVariantTen'
            | 'pSmallVariantEleven'
            | 'pSmallVariantTwelve'
            | 'pSmallVariantThirteen'
            | 'input'
            | 'inputVariantOne'
            | 'inputVariantTwo'
            | 'inputVariantThree'
            | 'label'
            | 'labelVariantOne'
            | 'labelVariantTwo'
            | 'labelVariantThree'
            | 'labelVariantFour'
            | 'labelVariantFive'
            | 'labelVariantSix'
            | 'labelVariantSeven'
            | 'labelVariantEight'
            | 'labelVariantNine'
            | 'labelVariantTen'
            | 'labelVariantEleven'
            | 'labelVariantTwelve'
            | 'labelVariantThirteen'
            | 'labelVariantFourteen'
            | 'labelVariantFifteen'
            | 'labelVariantSixteen'
            | 'labelVariantSeventeen'
            | 'labelVariantEighteen'
            | 'button'
            | 'buttonVariantOne'
            | 'buttonVariantTwo'
            | 'buttonVariantThree'
            | 'buttonVariantFour'
            | 'buttonVariantFive'
            | 'footerLabel'
            | 'workingInfo'
            | 'options'
            | 'description'
            | 'descriptionVariantOne'
            | 'footerMail'
            | 'cardTagFont'
            | 'cardTitleFont'
            | 'careerCardTitle'
            | 'headingTagline'
            | 'bottomSheetHeading'
            | 'bottomSheetDescription'
            | 'posterCardTitle'
            | 'posterCardDescription'
            | 'cardTitleVariantOne'
            | 'cardDescriptionVariantOne'
            | 'cardDescriptionVariantTwo'
            | 'cardTitleVariantTwo'
            | 'cardTitleVariantThree'
            | 'cardTitleVariantFour'
            | 'cardTitleVariantFive'
            | 'cardTitleVariantSix'
            | 'cardTitleVariantSeven'
            | 'cardTitleVariantEight'
            | 'cardTitleVariantNine'
            | 'cardTitleVariantTen'
            | 'cardTitleVariantEleven'
            | 'cardTitleVariantTwelve'
            | 'cardTitleVariantThirteen'
            | 'emailTitle'
            | 'emailDescription'
            | 'emailFooterText'
            | 'titleVariantOne'
            | 'titleVariantTwo'
            | 'titleVariantThree'

        tagType:
            | 'text'
            | 'button'
            | 'input'
            | 'label'
            | 'span'
            | 'h1'
            | 'h2'
            | 'h3'
            | 'h4'
            | 'h5'
            | 'p';
        type?: any;
        color?:
            | 'CHARCOAL_GREY'
            | 'CHALK_GREY'
            | 'ERROR_RED'
            | 'MID_GREY'
            | 'FOREST_GREEN'
            | 'TEXT_GREY_1'
            | 'GREY_2'
            | 'GREY_3'
            | 'TUNDORA_2'
            | 'FI_PINK'
            | 'FI_LIGHT_BLUE'
            | 'LIGHT_YELLOW'
            | 'FI_GREEN'
            | 'WHITE'
            | 'PATTERNS_BLUE_TWO'
            | 'SILVER_2'
            | 'SUVA_GREY'
            | 'MINE_SHAFT'
            | 'TUNDORA_2'
            | 'GAINSBORO'
            | 'TEA_GREEN'
            | 'LIGHT_GREEN'
            | 'MYNTRA'
            | 'PASTEL_BLUE'
            | 'WARNING_COLOR'
            | 'STEEL'
            | 'SAN_MARINO'
            | 'LIGHT_GREY'
            | 'LIGHTER_GREY'
            | 'NERO'
            | 'DINGLEY'
            | 'SHARK'
            | 'SHARK1'
            | 'BOMBAY'
            | 'IRON'
            | 'OSLO_GRAY'
            | 'MONOCHROME_STEEL';
        disabled?: boolean;
        children?: ReactNode;
        value?: any;
        autoFocus?: boolean;
    };

const TextSize = (props: TextProps & { theme: ThemeType }) => {
    const fontStyle = props.typography as tag;
    return { fontStyle };
};

const TextColor = (props: TextProps & { theme: ThemeType }) => ({ color: props.color });

const StyledText = styled.div<TextProps & { theme: ThemeType; styles: ResponsiveStyle<string> }>`
    color: ${(props) => TextColor(props).color};
    font-family: ${(props) => TextSize(props).fontStyle.fontFamily};
    font-size: ${(props) => TextSize(props).fontStyle.phone.fontSize};
    font-weight: ${(props) => TextSize(props).fontStyle.phone.fontWeight};
    line-height: ${(props) => TextSize(props).fontStyle.phone.lineHeight};
    ${(props) => props?.styles?.phone as unknown as string}
    @media ${Device.tab} {
        font-size: ${(props) => TextSize(props).fontStyle.tab.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.tab.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.tab.lineHeight};
        ${(props) => props?.styles?.tab}
    }

    @media ${Device.desktop} {
        font-size: ${(props) => TextSize(props).fontStyle.desktop.fontSize} !important;
        font-weight: ${(props) => TextSize(props).fontStyle.desktop.fontWeight} !important;
        line-height: ${(props) => TextSize(props).fontStyle.desktop.lineHeight} !important;
        ${(props) => props?.styles?.desktop}
    }
`;

const StyledButton = styled.button<TextProps & { theme: ThemeType }>`
    font-size: ${(props) => TextSize(props).fontStyle.phone.fontSize};
    font-weight: ${(props) => TextSize(props).fontStyle.phone.fontWeight};
    line-height: ${(props) => TextSize(props).fontStyle.phone.lineHeight};
    font-family: ${(props) => TextSize(props).fontStyle.fontFamily};
    letter-spacing: ${(props) => TextSize(props).fontStyle.phone.letterSpacing};

    @media ${Device.tab} {
        font-size: ${(props) => TextSize(props).fontStyle.tab.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.tab.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.tab.lineHeight};
        letter-spacing: ${(props) => TextSize(props).fontStyle.tab.letterSpacing};
    }

    @media ${Device.desktop} {
        font-size: ${(props) => TextSize(props).fontStyle.desktop.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.desktop.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.desktop.lineHeight};
        letter-spacing: ${(props) => TextSize(props).fontStyle.desktop.letterSpacing};
    }
`;

const StyledLabel = styled.label<TextProps & { theme: ThemeType }>`
    color: ${(props) => TextColor(props).color};
    font-size: ${(props) => TextSize(props).fontStyle.phone.fontSize};
    font-weight: ${(props) => TextSize(props).fontStyle.phone.fontWeight};
    line-height: ${(props) => TextSize(props).fontStyle.phone.lineHeight};
    font-family: ${(props) => TextSize(props).fontStyle.fontFamily};
    letter-spacing: ${(props) => TextSize(props).fontStyle.phone.letterSpacing};

    @media ${Device.tab} {
        font-size: ${(props) => TextSize(props).fontStyle.tab.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.tab.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.tab.lineHeight};
        letter-spacing: ${(props) => TextSize(props).fontStyle.tab.letterSpacing};
    }

    @media ${Device.desktop} {
        font-size: ${(props) => TextSize(props).fontStyle.desktop.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.desktop.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.desktop.lineHeight};
        letter-spacing: ${(props) => TextSize(props).fontStyle.desktop.letterSpacing};
    }
`;

const StyledInput = styled.input<TextProps & { theme: ThemeType }>`
    color: ${(props) => TextColor(props).color};
    font-size: ${(props) => TextSize(props).fontStyle.phone.fontSize};
    font-weight: ${(props) => TextSize(props).fontStyle.phone.fontWeight};
    line-height: ${(props) => TextSize(props).fontStyle.phone.lineHeight};
    font-family: ${(props) => TextSize(props).fontStyle.fontFamily};

    -webkit-appearance: none; 
    -moz-appearance: none;

    @media ${Device.tab} {
        font-size: ${(props) => TextSize(props).fontStyle.tab.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.tab.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.tab.lineHeight};
    }

    @media ${Device.desktop} {
        font-size: ${(props) => TextSize(props).fontStyle.desktop.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.desktop.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.desktop.lineHeight};
    }
`;

const StyledSpan = styled.span<TextProps & { theme: ThemeType }>`
    color: ${(props) => TextColor(props).color};
    font-size: ${(props) => TextSize(props).fontStyle.phone.fontSize};
    font-weight: ${(props) => TextSize(props).fontStyle.phone.fontWeight};
    line-height: ${(props) => TextSize(props).fontStyle.phone.lineHeight};
    font-family: ${(props) => TextSize(props).fontStyle.fontFamily};

    @media ${Device.tab} {
        font-size: ${(props) => TextSize(props).fontStyle.tab.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.tab.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.tab.lineHeight};
    }

    @media ${Device.desktop} {
        font-size: ${(props) => TextSize(props).fontStyle.desktop.fontSize} !important;
        font-weight: ${(props) => TextSize(props).fontStyle.desktop.fontWeight} !important;
        line-height: ${(props) => TextSize(props).fontStyle.desktop.lineHeight} !important;
    }
`;

const StyledH1 = styled.h1<TextProps & { theme: ThemeType; styles: ResponsiveStyle<string> }>`
    color: ${(props) => TextColor(props).color};
    font-family: ${(props) => TextSize(props).fontStyle.fontFamily};
    font-size: ${(props) => TextSize(props).fontStyle.phone.fontSize};
    font-weight: ${(props) => TextSize(props).fontStyle.phone.fontWeight};
    line-height: ${(props) => TextSize(props).fontStyle.phone.lineHeight};
    ${(props) => props?.styles?.phone as unknown as string}
    
    @media ${Device.tab} {
        font-size: ${(props) => TextSize(props).fontStyle.tab.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.tab.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.tab.lineHeight};
        ${(props) => props?.styles?.tab}
    }

    @media ${Device.desktop} {
        font-size: ${(props) => TextSize(props).fontStyle.desktop.fontSize} !important;
        font-weight: ${(props) => TextSize(props).fontStyle.desktop.fontWeight} !important;
        line-height: ${(props) => TextSize(props).fontStyle.desktop.lineHeight} !important;
        ${(props) => props?.styles?.desktop}
    }
`;

const StyledH2 = styled.h2<TextProps & { theme: ThemeType }>`
    color: ${(props) => TextColor(props).color};
    font-size: ${(props) => TextSize(props).fontStyle.phone.fontSize};
    font-weight: ${(props) => TextSize(props).fontStyle.phone.fontWeight};
    line-height: ${(props) => TextSize(props).fontStyle.phone.lineHeight};
    font-family: ${(props) => TextSize(props).fontStyle.fontFamily};

    @media ${Device.tab} {
        font-size: ${(props) => TextSize(props).fontStyle.tab.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.tab.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.tab.lineHeight};
    }

    @media ${Device.desktop} {
        font-size: ${(props) => TextSize(props).fontStyle.desktop.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.desktop.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.desktop.lineHeight};
    }
`;

const StyledH3 = styled.h3<TextProps & { theme: ThemeType }>`
    color: ${(props) => TextColor(props).color};
    font-size: ${(props) => TextSize(props).fontStyle.phone.fontSize};
    font-weight: ${(props) => TextSize(props).fontStyle.phone.fontWeight};
    line-height: ${(props) => TextSize(props).fontStyle.phone.lineHeight};
    font-family: ${(props) => TextSize(props).fontStyle.fontFamily};

    @media ${Device.tab} {
        font-size: ${(props) => TextSize(props).fontStyle.tab.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.tab.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.tab.lineHeight};
    }

    @media ${Device.desktop} {
        font-size: ${(props) => TextSize(props).fontStyle.desktop.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.desktop.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.desktop.lineHeight};
    }
`;

const StyledH4 = styled.h4<TextProps & { theme: ThemeType }>`
    color: ${(props) => TextColor(props).color};
    font-size: ${(props) => TextSize(props).fontStyle.phone.fontSize};
    font-weight: ${(props) => TextSize(props).fontStyle.phone.fontWeight};
    line-height: ${(props) => TextSize(props).fontStyle.phone.lineHeight};
    font-family: ${(props) => TextSize(props).fontStyle.fontFamily};

    @media ${Device.tab} {
        font-size: ${(props) => TextSize(props).fontStyle.tab.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.tab.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.tab.lineHeight};
    }

    @media ${Device.desktop} {
        font-size: ${(props) => TextSize(props).fontStyle.desktop.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.desktop.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.desktop.lineHeight};
    }
`;

const StyledH5 = styled.h5<TextProps & { theme: ThemeType }>`
    color: ${(props) => TextColor(props).color};
    font-size: ${(props) => TextSize(props).fontStyle.phone.fontSize};
    font-weight: ${(props) => TextSize(props).fontStyle.phone.fontWeight};
    line-height: ${(props) => TextSize(props).fontStyle.phone.lineHeight};
    font-family: ${(props) => TextSize(props).fontStyle.fontFamily};

    @media ${Device.tab} {
        font-size: ${(props) => TextSize(props).fontStyle.tab.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.tab.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.tab.lineHeight};
    }

    @media ${Device.desktop} {
        font-size: ${(props) => TextSize(props).fontStyle.desktop.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.desktop.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.desktop.lineHeight};
    }
`;

const StyledP = styled.p<TextProps & { theme: ThemeType }>`
    color: ${(props) => TextColor(props).color};
    font-size: ${(props) => TextSize(props).fontStyle.phone.fontSize};
    font-weight: ${(props) => TextSize(props).fontStyle.phone.fontWeight};
    line-height: ${(props) => TextSize(props).fontStyle.phone.lineHeight};
    font-family: ${(props) => TextSize(props).fontStyle.fontFamily};

    @media ${Device.tab} {
        font-size: ${(props) => TextSize(props).fontStyle.tab.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.tab.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.tab.lineHeight};
    }

    @media ${Device.desktop} {
        font-size: ${(props) => TextSize(props).fontStyle.desktop.fontSize};
        font-weight: ${(props) => TextSize(props).fontStyle.desktop.fontWeight};
        line-height: ${(props) => TextSize(props).fontStyle.desktop.lineHeight};
    }
`;

const Font = (props: TextProps & { styles: ResponsiveStyle<string>}) => {
    switch (props.tagType) {
        case 'text':
            return <StyledText {...props}>{props.children}</StyledText>;

        case 'button':
            return (
                <StyledButton type={props.type} {...props}>
                    {props.children}
                </StyledButton>
            );

        case 'input':
            return (
                <StyledInput
                    type={props.type}
                    {...props}
                    autoFocus={props.autoFocus}
                    value={props.value}
                />
            );

        case 'label':
            return <StyledLabel {...props}>{props.children}</StyledLabel>;

        case 'span':
            return <StyledSpan {...props}>{props.children}</StyledSpan>;

        case 'h1':
            return <StyledH1 {...props}>{props.children}</StyledH1>;

        case 'h2':
            return <StyledH2 {...props}>{props.children}</StyledH2>;

        case 'h3':
            return <StyledH3 {...props}>{props.children}</StyledH3>;

        case 'h4':
            return <StyledH4 {...props}>{props.children}</StyledH4>;

        case 'h5':
            return <StyledH5 {...props}>{props.children}</StyledH5>;

        case 'p':
            return <StyledP {...props}>{props.children}</StyledP>;

        default:
            return <StyledText {...props}>{props.children}</StyledText>;
    }
};

const MainFont = (props: PropsWithChildren<TextProps>) => {
    const {
        children, id, styles, typography, ...rest
    } = props;
    const styleMap = jsonStyleToCssStringConverter(styles);
    typography.toString = () => '';
    return (
        <Font
            styles={styleMap?.main}
            id={id}
            typography={typography}
            {...rest}
            dangerouslySetInnerHTML={{ __html: htmlSanitization(children as string) }}
        />
    );
};
export default MainFont;
