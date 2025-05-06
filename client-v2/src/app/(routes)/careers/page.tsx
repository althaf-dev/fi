import { Wrapper } from './styles';
import AppFooter from '@/components/AppFooter';

import React from 'react';
import Careers from '@/containers/Careers';

function page() {
    return (
        <Wrapper>
            <Careers/>
            <AppFooter />
        </Wrapper>
    );
}

export default page;
