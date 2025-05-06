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

type RowProps = {
    className?: string;
    id?: string;
    styles?:ResponsiveStyle;
    styleId?: string;
  }

const StyledRow = styled.div<RowProps>`
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

export default function Row(props:PropsWithChildren<RowProps>) {
    const {
        children, className, id, styles, ...rest
    } = props;

    const styleMap = jsonStyleToCssStringConverter(styles);

    return (
        <StyledRow data-styleId='main' id={id} className={`l-row ${className}`} {...rest} styles={styleMap?.main}>
            {children}
        </StyledRow>
    );
}
