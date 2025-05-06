/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */

'use client';

/**
 * @file Section component for RenderComponent
 */
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { ResponsiveStyle } from '../types';
import { Device } from '@/Themes/Device';

import { jsonStyleToCssStringConverter } from '../RenderComponent/utils';

type SectionProps = {
    className?: string;
    styles?:ResponsiveStyle;
    styleId?: string;
    id?: string;
  }

const StyledColumn = styled.div<SectionProps>`
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

export default function Section(props:PropsWithChildren<SectionProps>) {
    const {
        children, className, styles, id, ...rest
    } = props;

    const styleMap = jsonStyleToCssStringConverter(styles);

    return (
        <StyledColumn id={id} data-styleId='main' className={`l-section ${className}`} {...rest} styles={styleMap?.main}>
            {children}
        </StyledColumn>
    );
}
