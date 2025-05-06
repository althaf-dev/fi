/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { Metadata } from 'next';
import PageConfig from './config.json';
import RenderComponent from '@/components/RenderComponent';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { pageMetaMap, getMetaTags } from '@/MetaConfig/meta';
import { ScriptTags } from '@/MetaConfig/siteScriptTag';
import PageWrapper from './wrapper';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = getMetaTags(pageMetaMap['features/secure-digital-savings-account']);
    return metaData;
}

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
        <>
            <meta property='og:type' content='product' />
            <PageWrapper>
                <div className='header-container'><AppHeader /></div>
                {
                    PageConfig.sections.map((id) => <RenderComponent key={id} elements={PageConfig.elements} elementId={id} />)
                }
                <AppFooter />
            </PageWrapper>
            <ScriptTags {...pageMetaMap['features/secure-digital-savings-account']} />
        </>
    );
}
