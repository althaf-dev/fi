'use client';

import styled from 'styled-components';
import { Device } from '@/Themes/Device';

export const Wrapper = styled.div`
  background: #f5f5f5;
  .header-container {
    background: #282828;
  }
`;
export const Container = styled.div`
    padding: 20px 30px 0px;
    max-width: 767px;
    margin: auto;

    @media ${Device.desktop} {
        padding: 40px 185px 0px;
        max-width: 1440px;
    }
`;

export const Title = styled.h1`
    display: none;
`;
