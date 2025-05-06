import React from 'react';
import type { Metadata } from 'next';
import PageConfig from './config.json';
import RenderComponent from '@/components/RenderComponent';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { Wrapper } from './styles';
import { pageMetaMap, getMetaTags } from '@/MetaConfig/meta';
import { htmlSanitization } from '@/utils';
import applicationLdJson from '@/MetaConfig/siteScript';

export async function generateMetadata(): Promise<Metadata> {
    const metaData = getMetaTags(pageMetaMap['features/deposits']);
    return metaData;
}

export default function page() {
    return (
        <>
            <script
                type='application/ld+json'
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: htmlSanitization(JSON.stringify(applicationLdJson({ ...pageMetaMap['features/deposits'] }))) }}
            />
            <meta property='og:type' content='product' />
            <Wrapper>
                <div className='header-container'><AppHeader /></div>
                {
                    PageConfig.sections.map((id) => <RenderComponent key={id} elements={PageConfig.elements} elementId={id} />)
                }
                <AppFooter />
            </Wrapper>
        </>
    );
}
