/* eslint-disable no-var */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */

'use client';

/**
 * @file Row component for Render component
 */
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Device } from '@/Themes/Device';

import { ResponsiveStyle } from '../types';
import { jsonStyleToCssStringConverter } from '../RenderComponent/utils';

export type ButtonProps = {
    className?: string;
    styles?:ResponsiveStyle;
    styleId?: string;
    text?: string;
    url?: string;
    onClick? : () => void;
    event?: string;
    isDynamic?: boolean;
  }

const StyledAnchor = styled.a<ButtonProps>`
      ${(props) => (`
          ${props?.styles?.phone}
  
          @media ${Device.tab}{
              ${props?.styles?.tab}
          }
  
          @media ${Device.desktop} {
              ${props?.styles?.desktop}
          }
      `)}
  `;

const StyledButton = styled.button<any>`
      ${(props) => (`
          ${props?.styles?.phone}
  
          @media ${Device.tab}{
              ${props?.styles?.tab}
          }
  
          @media ${Device.desktop} {
              ${props?.styles?.desktop}
          }
      `)}
  `;

export default function Button(props: PropsWithChildren<ButtonProps>) {
    const {
        className = '', styles, children, url = '', isDynamic = false, ...rest
    } = props;

    const styleMap = jsonStyleToCssStringConverter(styles);

    return (
        <StyledAnchor
            data-styleId='main'
            className={`l-row ${className}`}
            styles={styleMap?.main}
            href={url}
            target={isDynamic ? '_blank' : '_parent'}
            {...rest}
        >
            <StyledButton styles={styleMap?.button}>{children}</StyledButton>
        </StyledAnchor>
    );
}
