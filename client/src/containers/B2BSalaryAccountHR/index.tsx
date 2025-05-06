/**
 * @file B2B Salary account HR Index page
 * B2b page is to set context for Hr/founders and this will also be landing page for all performance marketing Ads,
 * hence the user needs to validate to prevent abuse on affiliates.
 */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
    AppFooter, StyledContainer, PosterContainer, SecureMoneySection,
} from '../../components';
import PosterSection from './PosterSection';
import RightChoiceSection from './RightChoiceSection';
import FeatureCardSection from './FeatureCardSection';
import CompanySection from './CompanySection';
import SalaryFaqSection from './SalaryFaqSection';
import {
    DEMO_SECTION_ID_MOBILE, SectionType, PAGE_TYPE, configMap, EVENT_LIST,
} from './constant';
import SalaryProgramSection from './SalaryProgramSection';
import { Device } from '../../Themes/Device';
import B2bHeaderSection from './B2BHeaderSection';
import ContactSection from './ContactSection';
import TestimonialSection from './TestimonialSection';
import { debounce } from '../../utils';
import { fireTrackingEvents } from './utils';

// eslint-disable-next-line no-var
declare var window: any;

const SalaryAccountPosterContainer = styled(PosterContainer)`
    background-color: ${(props) => props.theme.color.BALTIC_SEA};
`;

const StyledLandingB2b = styled.div`
    margin: auto;

    @media ${Device.desktop}{
        padding-bottom: 0px;
    }
`;

const SalaryProgramSectionMobile = styled.div`
    display: block;
    padding-bottom: 40px;
    background-color: ${(props) => props.theme.color.BALTIC_SEA};

    @media ${Device.tab} {
        display: block;
        margin-bottom: 0px;
    }

    @media ${Device.desktop} {
        display: none;
        margin-bottom: 0px;
    }
    `;

/**
 * demo section will be added
 *
 *  const StickyDemoContainer = styled.a`
 *     position: fixed;
 *     bottom: 0;
 *     width: 75%;
 *     height: 4%;
 *     border-radius: 3rem;
 *     padding: 10px;
 *     text-align: center;
 *     display: flex;
 *     justify-content: center;
 *     align-items: center;
 *     z-index: 1000;
 *     max-width: 340px;
 *     ${MIXINS.FontMixin({
 *       font: 'Gilroy', weight: 700, size: '14px', lineHeight: '15.4px',
 *     })};
 *     background-color: ${(props) => props.theme.color.FOREST_GREEN};
 *     color:${(props) => props.theme.color.WHITE};

 *     @media ${Device.tab} {
 *        display: none;
 *       }

 *     @media ${Device.desktop} {
 *        display: none;
 *      }`;

 *   const DemoSectionButton = styled.div`
 *     display: flex;
 *     justify-content:center;
 *   `;

 *   const DemoSection = () => (
 *     <DemoSectionButton>
 *         <StickyDemoContainer href='#demoSection'>
 *             Book a demo
 *         </StickyDemoContainer>
 *     </DemoSectionButton>
 * );
 */

const renderSection = (section: any, pageType: string) => {
    const { type, data, id } = section;

    switch (type) {
        case SectionType.RightChoiceSection: {
            return <RightChoiceSection key={id} data={data} />;
        }

        case SectionType.FeatureCardSection: {
            return <FeatureCardSection key={id} data={data} type={pageType} />;
        }

        case SectionType.TestimonialSection: {
            return <TestimonialSection key={id} data={data} />;
        }

        case SectionType.CompanySection: {
            return <CompanySection key={id} data={data} type={pageType} />;
        }

        case SectionType.SalaryProgramSection: {
            return (
                <SalaryProgramSectionMobile id={DEMO_SECTION_ID_MOBILE}>
                    <SalaryProgramSection data={data} key={id} type={pageType} />
                </SalaryProgramSectionMobile>
            );
        }

        case SectionType.SalaryFaqSection: {
            return <SalaryFaqSection key={id} data={data} />;
        }

        case SectionType.SecureMoneySection: {
            return <SecureMoneySection key={id} />;
        }

        case SectionType.ContactSection: {
            return <ContactSection key={id} data={data} />;
        }

        default:
            return null;
    }
};

const B2BSalaryAccountHR = () => {
    const pageType = (window.location.pathname === PAGE_TYPE.corporate.url
         && PAGE_TYPE.corporate) || (window.location.pathname === PAGE_TYPE.sme.url && PAGE_TYPE.sme);

    const selectedPageType = pageType.label;

    const handelScroll = () => {
        fireTrackingEvents(pageType.label, EVENT_LIST.SCROLL_ON_LANDING_PAGE, null);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fireTrackingEvents(pageType.label, EVENT_LIST.LANDED_ON_LANDING_PAGE, null);
        const debouncedHandleScroll = debounce(handelScroll, 2000);
        window.addEventListener('scroll', debouncedHandleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!pageType && !pageType.label) return null;

    return (
        <StyledContainer>
            <SalaryAccountPosterContainer>
                <B2bHeaderSection />
                <PosterSection data={configMap[selectedPageType]?.poster} type={pageType.label} />
            </SalaryAccountPosterContainer>
            <StyledLandingB2b>
                {configMap[selectedPageType]?.section.map((section) => renderSection(section, pageType.label))}
            </StyledLandingB2b>
            {/* <DemoSection /> */}
            <AppFooter hideStickyFooter salaryProgram />
        </StyledContainer>
    );
};

export default React.memo(B2BSalaryAccountHR);
