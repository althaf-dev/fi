import React from 'react';
import type { Metadata } from 'next';
import PageConfig from './config.json';
import RenderComponent from '@/components/RenderComponent';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { pageMetaMap, getMetaTags } from '@/MetaConfig/meta';
import PageWrapper from './wrapper';
import { htmlSanitization } from '@/utils';
import applicationLdJson from '@/MetaConfig/siteScript';
import StockDirectory from '@/containers/USStock/StockDirectory';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = getMetaTags(pageMetaMap['us-stocks/collections']);
    return metaData;
}

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
        <>
            <script
                type='application/ld+json'
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: htmlSanitization(JSON.stringify(applicationLdJson({ ...pageMetaMap['us-stocks/collections'] }))) }}
            />
            <meta property='og:type' content='product' />
            <PageWrapper>
                <div className='header-container'><AppHeader /></div>
                {
                    PageConfig.sections.map((id) => <RenderComponent key={id} elements={PageConfig.elements} elementId={id} />)
                }
                <StockDirectory />
                <AppFooter />
            </PageWrapper>
        </>
    );
}
