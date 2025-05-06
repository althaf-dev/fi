/**
 * @file Credit Card Eligibility index page
 */

'use client';

import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import StepModule from './StepModule';
import { updatePageType } from '@/rtk/components/CreditCard/reducer';
import { useAppDispatch } from '@/rtk/hooks';
import { PageConfig } from './constants';
import { Device } from '@/Themes/Device';

const GlobalStyle = createGlobalStyle<any>`
  body {
    background-color: ${(props) => props?.style?.phone?.bgColor}
  }

  @media ${Device.tab} {
    body {
        background-color: ${(props) => props?.style?.phone?.bgColor}
      }
  }
`;

const CreditCardEligibility = (props: any) => {
    const { type } = props || {};
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updatePageType(type));
    }, [dispatch, type]);

    const { styleConfig } = PageConfig[type] || {
        posterStyle: {
            phone: {
                bgColor: '#fff',
            },
            tab: {
                bgColor: '#fff',
            }
        }
    };

    return (
        <>
            <GlobalStyle style={styleConfig.posterStyle} />
            <StepModule />
        </>
    );
};

export default CreditCardEligibility;
