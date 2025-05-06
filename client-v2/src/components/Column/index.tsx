/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */

'use client';

/**
 * @file Column Component for Render component
 */
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Device } from '@/Themes/Device';
import { ResponsiveStyle } from '../types';
import { jsonStyleToCssStringConverter } from '../RenderComponent/utils';

type ColumnProps = {
  className?: string;
  id?: string;
  styles?:ResponsiveStyle;
  styleId?: string;
}

const StyledColumn = styled.div<ColumnProps>`
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

function Column(props:PropsWithChildren<ColumnProps>) {
    const {
        children, id, className, styles, ...rest
    } = props;

    const styleMap = jsonStyleToCssStringConverter(styles);

    return (
        <StyledColumn data-styleId='main' id={id} className={`l-column ${className}`} {...rest} styles={styleMap?.main}>
            {children}
        </StyledColumn>
    );
}

export default Column;
