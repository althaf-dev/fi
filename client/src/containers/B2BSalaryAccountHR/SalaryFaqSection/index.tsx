/**
 * @file B2BSalaryAccountHR Faqs Section
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font, AccordionGroup } from '../../../components';
import MIXINS from '../../../Themes/mixins';

const FaqSection = styled.div`
    text-align: center;
    padding: 20px 20px 0 20px;
    margin:0px auto;
    max-width: 360px;


    @media ${Device.tab} {
        padding: 0px 40px 0px;
        max-width: 768px;
        margin: 80px auto 0px auto;
    }

    @media ${Device.desktop} {
        padding: 50px;
        max-width: 1290px;
        margin: 0px auto;
    }
`;

const Container = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column', justify: 'normal', align: 'normal' })};
    border-radius: 20px;
    overflow: hidden;
`;

const Title = styled(Font)`
    margin-bottom: 20px;
    text-align: center;

    @media ${Device.desktop} {
        margin-bottom: 25px;
    }
`;

interface ISalaryFaqSectionProps {
    data: {
        title: string;
        description: string;
        list: {
            id: number;
            title: string;
            content: string;
        }[];
    };
}

const SalaryFaqSection = (props: ISalaryFaqSectionProps) => {
    const { data } = props;
    const { list, title } = data;

    return (
        <FaqSection>
            <Title font='h1VariantThree' tagType='h1' color='MINE_SHAFT'>
                {title}
            </Title>
            <Container>
                <AccordionGroup list={list} />
            </Container>
        </FaqSection>
    );
};

export default React.memo(SalaryFaqSection);
