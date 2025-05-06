/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import type { Metadata } from 'next';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { Wrapper } from './styles';
import Colors from '@/Themes/Colors';

import { pageMetaMap, getMetaTags } from '@/MetaConfig/meta';
import { ScriptTags } from '@/MetaConfig/siteScriptTag';
import ClientSection from './ClientSection';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = getMetaTags(pageMetaMap['credit-cards/magnifi']);
    return metaData;
}

function Page() {
    return (
        <>
            <meta property='og:type' content='product' />
            <Wrapper>
                <div className='header-container'><AppHeader /></div>
                <ClientSection />
                <AppFooter
                    hideStickyFooter
                    backgroundColor={Colors.BLACK}
                />
            </Wrapper>
            <ScriptTags {...pageMetaMap['credit-cards/magnifi']} />
        </>
    );
}

export default Page;
