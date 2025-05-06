'use client';

import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`   
    background: #f5f5f5;   
    .header-container {
        background: #282828;  
    }  
`;

export default function PageWrapper(props: any) {
    return (
        <Wrapper>
            {props?.children}
        </Wrapper>
    );
}
