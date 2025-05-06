import React from 'react';
import { Wrapper } from './styles';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import RenderComponent from '@/components/RenderComponent';
import PageConfig from './config.json';
import AboutInfoSection from '@/components/AboutInfoSection/AboutInfoSection';
import AboutScrollCardSection from '@/components/AboutScrollCards/AboutScrollCardSection';
import AboutTeamSection from '@/components/AboutTeamSection/AboutTeamSection';
import AppImageGridSection from '@/components/AppImageGridSection/AppImageGridSection';
import SecureMoneySection from '@/components/SecureMoneySection';

function page() {
    return (
        <>
            <Wrapper>
                <div className='header-container'>
                    <AppHeader fontColor='GREY_2' menuColor='GRAY' />
                </div>

                {PageConfig.sections.map((id) => (
                    <RenderComponent
                        key={id}
                        elements={PageConfig.elements}
                        elementId={id}
                    />
                ))}
                <AboutInfoSection/>
                <AboutScrollCardSection/>
                <AboutTeamSection/>
                <AppImageGridSection/>
                <SecureMoneySection/>
                <AppFooter />
            </Wrapper>
        </>
    );
}

export default page;
