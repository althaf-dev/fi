/* eslint-disable react/require-default-props */
/**
 * @file Hamburger Navbar Accordion Container Component
 */

import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';
import HeaderAccordion from './AppPhoneHeaderAccordion';
import { selectDynamicConfig } from '@/rtk/components/App/selectors';
import { NAVIGATION_URLS } from '../../../constants/AppConstant';

const Wrapper = styled.div`
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

interface AppPhoneAccordionContainer {
    data: any;
    isFooter: boolean;
    onClick?: () => void;
    initialAccordionState?: number;
}

const CONSUL_META_INFO_PATH_NAME = 'meta-info';

const HeaderAccordionCr = (props: AppPhoneAccordionContainer) => {
    const {
        data, isFooter, onClick, initialAccordionState,
    } = props;

    const dynamicConfigInfo : any = useSelector(
        selectDynamicConfig(CONSUL_META_INFO_PATH_NAME),
        shallowEqual,
    );

    const dynamicConfigNavigation = dynamicConfigInfo?.navigation || {};

    const dynamicPageProps = {
        hideSalaryAccountItem: dynamicConfigNavigation.hideSalaryAccount,
        hideCreditCardWaitlistItem: dynamicConfigNavigation.hideCreditCardWaitlistPage,
    };

    const [activeIndex, setActiveIndex] = useState(initialAccordionState);

    return (
        <Wrapper>
            {
                data.map((item: any, index: string) => {
                    if (item.isDeprecated) return null;

                    if (item.label === NAVIGATION_URLS.SALARY_ACCOUNT.label && dynamicPageProps.hideSalaryAccountItem) return null;

                    if (item.label === NAVIGATION_URLS.CREDIT_CARD_WAITLIST.label && dynamicPageProps.hideCreditCardWaitlistItem) return null;

                    return (
                        <HeaderAccordion
                            key={item.label}
                            data={item}
                            index={parseInt(index, 10)}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            isFooter={isFooter}
                            onClick={onClick}
                            dynamicConfigInfo={dynamicConfigInfo}
                        />
                    );
                })
            }
        </Wrapper>
    );
};

HeaderAccordionCr.defaultProps = {
    initialAccordionState: 0,
};

export default HeaderAccordionCr;
