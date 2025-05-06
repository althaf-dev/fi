/* eslint-disable react/require-default-props */
/**
 * @file Hamburger Navbar Accordion Container Component
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderAccordion from './AppPhoneHeaderAccordion';

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

const HeaderAccordionCr = (props: AppPhoneAccordionContainer) => {
    const {
        data, isFooter, onClick, initialAccordionState,
    } = props;


    const [activeIndex, setActiveIndex] = useState(initialAccordionState);

    return (
        <Wrapper>
            {
                data.map((item: any, index: string) => {
                    if (item.isDeprecated) return null;

                    return (
                        <HeaderAccordion
                            key={item.label}
                            data={item}
                            index={parseInt(index, 10)}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            isFooter={isFooter}
                            onClick={onClick}
                            dynamicConfigInfo={''}
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
