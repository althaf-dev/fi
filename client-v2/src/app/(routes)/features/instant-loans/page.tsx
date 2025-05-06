import React from 'react';
import { Wrapper } from './styles';
import PageConfig from './config.json';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import RenderComponent from '@/components/RenderComponent';
import SecureMoneySection from '@/components/SecureMoneySection';

function page() {
    return (
        <Wrapper>
            <div className="header-container">
                <AppHeader />
            </div>
            {PageConfig.sections.map((id) => (
                <RenderComponent
                    key={id}
                    elements={PageConfig.elements}
                    elementId={id}
                />
            ))}
            <SecureMoneySection/>
            <AppFooter/>
        </Wrapper>
    );
}

export default page;
