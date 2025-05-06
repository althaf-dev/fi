'use client';

import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { trackGTMEvent } from '@/events';
import { PAGE_VIEW_SECUREDIGITALSA } from '@/events/EventName';

const Wrapper = styled.div`   
        background: #f5f5f5;   
        .header-container {
        background: #282828;  
        }  
    `;
export default function PageWrapper(props: any) {
    useEffect(() => {
        trackGTMEvent(PAGE_VIEW_SECUREDIGITALSA);
    }, []);

    return (
        <Wrapper>
            {
                props?.children
            }
        </Wrapper>
    );
}
