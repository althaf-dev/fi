/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
import React, { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import Colors from '@/Themes/Colors';

import { ThemeType } from '@/Themes/Theme';
import { Device } from '@/Themes/Device';

export type TextProps = React.HTMLAttributes<HTMLElement> &
    React.HTMLAttributes<HTMLInputElement> & {
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
        color?: keyof typeof Colors;
        disabled?: boolean;
        children?: ReactNode;
        value?: any;
        autoFocus?: boolean;
    };

const TextSize = (props: TextProps & { theme: ThemeType }) => {
    const fontStyle = props.theme.typography[props.font || 'p'];
    return { fontStyle };
};

const TextColor = (props: TextProps & { theme: ThemeType }) => {
    const color = props.theme.color[props.color || 'CHARCOAL_GREY'];
    return { color };
};

const StyledText = styled.div<TextProps>`
    color: ${(props) => TextColor(props).color};
    font-family: ${(props) => TextSize(props).fontStyle.fontFamily};
    font-size: ${(props) => TextSize(props).fontStyle.phone.fontSize};
    font-weight: ${(props) => TextSize(props).fontStyle.phone.fontWeight};
    line-height: ${(props) => TextSize(props).fontStyle.phone.lineHeight};

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

const StyledButton = styled.button<TextProps>`
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

const StyledLabel = styled.label<TextProps>`
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

const StyledInput = styled.input<TextProps>`
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

const StyledSpan = styled.span<TextProps>`
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

const StyledH1 = styled.h1<TextProps>`
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

const StyledH2 = styled.h2<TextProps>`
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

const StyledH3 = styled.h3<TextProps>`
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

const StyledH4 = styled.h4<TextProps>`
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

const StyledH5 = styled.h5<TextProps>`
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

const StyledP = styled.p<TextProps>`
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

const Font = (props: TextProps) => {
    const InputRef = useRef<HTMLInputElement>(
        null
    ) as React.RefObject<HTMLInputElement>;

    /* this is affecting the ssr as useLayoutEffect doesn't work with ssr
    useLayoutEffect(() => {
        if (props.autoFocus) {
            const timer = setTimeout(() => InputRef.current.focus(), 100);
            return () => clearTimeout(timer);
        }
    }, [props.autoFocus]);
    */

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
                    ref={InputRef}
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

export default Font;
