/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */

'use client';

/**
 * @file Link Component for Render component
 */
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Device } from '@/Themes/Device';
import { ResponsiveStyle } from '../types';
import { jsonStyleToCssStringConverter } from '../RenderComponent/utils';

type LinkProps = {
  className?: string;
  styles?:ResponsiveStyle;
  styleId?: string;
  url?: string;
}

const StyledLink = styled.div<LinkProps>`
    ${(props) => (`
        display: block;
        ${props?.styles?.phone}

        @media ${Device.tab}{
            ${props?.styles?.tab}
        }

        @media ${Device.desktop} {
            ${props?.styles?.desktop}
        }
    `)}
`;

const LinkWrapper = styled.a`
    cursor: pointer;
`;

function Link(props:PropsWithChildren<LinkProps>) {
    const {
        url, children, className, styles, ...rest
    } = props;

    const styleMap = jsonStyleToCssStringConverter(styles);

    return (
        <LinkWrapper href={url} target='_blank' rel='noreferrer'>
            <StyledLink data-styleId='main' className={`l-link ${className}`} {...rest} styles={styleMap?.main}>
                {children}
            </StyledLink>
        </LinkWrapper>
    );
}

export default Link;
