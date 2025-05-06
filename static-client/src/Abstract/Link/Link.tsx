/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Font } from '../index';
import { TextProps } from '../Font/Font';

type LinkProps = React.HTMLAttributes<HTMLElement> & {
    linkType?: 'normal' | 'inline' | 'footer';
    color?: any;
    children?: ReactNode;
    font?: TextProps['font'];
};

const StyledLink = styled(Font)`
    cursor: pointer;
`;

const NormalLink = styled(StyledLink)`
    width: fit-content;
    color: ${(props) => props.theme.color.MID_GREY};
    border-bottom: 1px solid ${(props) => props.theme.color.WHITE};

    &:hover {
        color: ${(props) => props.theme.color.FOREST_GREEN};
        border-bottom: 1px solid ${(props) => props.theme.color.MID_GREEN};
    }
`;

const InlineLink = styled(StyledLink)`
    display: inline-block;
    color: ${(props) => props.theme.color.FOREST_GREEN};
    border-bottom: 1px solid ${(props) => props.theme.color.TRANSPARENT};

    &:hover {
        line-height: 115%;
        border-bottom: 1px solid ${(props) => props.theme.color.MID_GREEN};
    }
`;

const FooterLink = styled(StyledLink)`
    width: fit-content;
    color: ${(props) => props.theme.color.MID_GREY};
    border-bottom: 1px solid ${(props) => props.theme.color.MID_GREY};

    &:hover {
        color: ${(props) => props.theme.color.FOREST_GREEN};
        border-bottom: 1px solid ${(props) => props.theme.color.FOREST_GREEN};
    }
`;

const Link = (props: LinkProps) => {
    switch (props.linkType) {
        case 'inline':
            return (
                <InlineLink font={props.font || 'input'} tagType='text' {...props}>
                    {props.children}
                </InlineLink>
            );
        case 'footer':
            return (
                <FooterLink font='footerLabel' tagType='text' {...props}>
                    {props.children}
                </FooterLink>
            );
        default:
            return (
                <NormalLink font='input' tagType='text' {...props}>
                    {props.children}
                </NormalLink>
            );
    }
};

Link.defaultProps = {
    font: 'input',
};

export default Link;
