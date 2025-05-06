/**
 * @file B2BSalaryAccountHR header section
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';
import {
    DEMO_SECTION_ID_DESKTOP, DEMO_SECTION_ID_MOBILE, SALARY_PAGE_URL, WINDOW_INNER_WIDTH, LOGO_URL,
} from '../constant';

const B2bHeader = styled.div<{ fixed: boolean }>`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 23px 25px;
   position: ${(props) => (props.fixed ? 'fixed' : 'static')};
   top: 0;
   width: 100%;
   background-color: ${(props) => props.theme.color.BALTIC_SEA};
   z-index: 100;

   @media ${Device.desktop} {
       padding: 32px 85px;
    }
`;

const B2bTitle = styled.div`
    display: flex;
    width: 7rem;
    align-items: center;
`;

const B2bTitleText = styled.div`
    color: ${(props) => props.theme.color.WHITE};
    ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '14px', lineHeight: '16.19px',
    })};
    padding-left: 3.68px;
    cursor: pointer;

    @media ${Device.desktop} {
        padding-left: 6px;
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '24px', lineHeight: '26px',
    })};
    }
`;

const goToSalaryPage = () => {
    window.location.href = `${SALARY_PAGE_URL}`;
};

const B2bLinkText = styled.a`
   cursor: pointer;
   border-radius: 1rem;
   padding: 14px 20px 14px 20px;
   text-align: center;
   ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '12px', lineHeight: '14px',
    })};
   background-color: ${(props) => props.theme.color.FOREST_GREEN};
   color: ${(props) => props.theme.color.WHITE};

    }
    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '22px', lineHeight: '24px',
    })};
    }
`;

const ImageB2b = styled.img`
   height: 32px;
   width: 34px;

    @media ${Device.desktop} {
        height: 60px;
        width: 60px;
    }
`;

const B2bHeaderSection = () => {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    // Define section IDs based on window width
    const getDemoSectionId = () => {
        if (window.innerWidth >= WINDOW_INNER_WIDTH) {
        // For desktop
            return `${DEMO_SECTION_ID_DESKTOP}`;
        }
        // For mobile/tab
        return `${DEMO_SECTION_ID_MOBILE}`;
    };

    // Get the appropriate section ID based on window width
    const DEMO_SECTION_ID = getDemoSectionId();

    // Show the fixed header when the scroll position reaches a certain height from the top of the page to the Salary Program component.
    const SCROLL_THRESHOLD_MOBILE = 1070;
    const SCROLL_THRESHOLD_DESKTOP = 900;

    useEffect(() => {
        // Add a scroll event listener to handle the fixed header behavior
        const handleScroll = () => {
            const scrollThreshold = window.innerWidth >= 768
                ? SCROLL_THRESHOLD_DESKTOP
                : SCROLL_THRESHOLD_MOBILE;

            if (window.scrollY >= scrollThreshold) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <B2bHeader fixed={isHeaderFixed}>
            <B2bTitle onClick={goToSalaryPage}>
                <ImageB2b src={LOGO_URL} alt='Logo' />
                <B2bTitleText>Salary Program</B2bTitleText>
            </B2bTitle>

            <B2bLinkText href={`#${DEMO_SECTION_ID}`}>
                BOOK A DEMO
            </B2bLinkText>
        </B2bHeader>
    );
};

export default B2bHeaderSection;
