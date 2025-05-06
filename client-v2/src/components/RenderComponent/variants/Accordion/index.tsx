/*
 * @file: AccordionGroup Section
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Image } from '@/Abstract';
import { ICONS_URL_MAP } from '@/constants/AssetConstants';
import { Device } from '@/Themes/Device';

// Styled components for Accordion
const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    width: 478px;
    border-radius: 20px;
    padding: 28px;
    background-color: rgb(255, 255, 255);
    margin: 10px 10px 20px;

    @media ${Device.phone} {
        width: 320px;
        padding: 16px;
        margin: 10px auto 20px;
    }
    @media ${Device.desktop} {
        width: 468px;
        padding: 28px;
    }
`;

const AccordionItemWrapper = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
    margin: 10px 0px;
    @media ${Device.phone} {
        padding: 0px;
    }

    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }
`;

const AccordionTitle = styled.div`
    display: flex;
    justify-content: space-between;
    color: rgb(58, 58, 58);
    font-family: Gilroy;
    font-size: 30px;
    @media ${Device.phone} {
        font-size: 18px;
        text-align: left;
    }
    @media ${Device.desktop} {
        font-size: 30px;
    }
`;

const AccordionTitleText = styled.span`
    font-weight: 600;
    line-height: 120%;
}
`;

const ArrowContainer = styled.span`
    margin: auto 0px;
`;

const AccordionSubtitle = styled.div`
    margin-top: 4px;
    display: block;
    font-size: 24px;
    font-family: Inter;
    font-weight: 500;
    line-height: 130%;
    color: #8d8d8d;
    width: 85%;
    animation: 800ms ease 0s 1 normal none running fadeIn;
    @media ${Device.phone} {
        font-size: 16px;
        text-align: left;
    }
    @media ${Device.desktop} {
        font-size: 24px;
    }
`;

const Container = styled.div`
    display: block;
`;

const Accordion: React.FC<{ data: { title: string; subtitle: string; id: number }[] }> = ({ data }) => {
    // Initially expanding the first accordion data
    const [expandedId, setExpandedId] = useState(data[0].id);

    // Expand or shrink the accordion description based on the user's click.
    const toggleAccordion = (id: number) => {
        setExpandedId(id === expandedId ? 0 : id);
    };

    return (
        <Container>
            {data?.map(({ id, title, subtitle }) => (
                <AccordionContainer>
                    <AccordionItemWrapper key={id} onClick={() => toggleAccordion(id)}>
                        <AccordionTitle>
                            <AccordionTitleText>{title}</AccordionTitleText>
                            <ArrowContainer>
                                <Image
                                    icon={id === expandedId ? ICONS_URL_MAP.TOP_ARROW_V2 : ICONS_URL_MAP.BOTTOM_ARROW_V2}
                                    loadingType='lazy'
                                    alt='arrow icon'
                                    width='24px'
                                />
                            </ArrowContainer>
                        </AccordionTitle>
                        {id === expandedId && <AccordionSubtitle>{subtitle}</AccordionSubtitle>}
                    </AccordionItemWrapper>
                </AccordionContainer>
            ))}
        </Container>

    );
};

export default Accordion;
