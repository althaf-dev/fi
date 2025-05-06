/**
 * @file Salary Faqs Section
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font, Image, AccordionGroup } from '../../../components';
import { StyledLink } from '../../../components/styled';
import { ICONS_URL_MAP } from '../../../constants/AssetConstants';
import { FAQS_URL } from '../../../constants/AppConstant';

import { salaryFaqsData } from '../constant';

const FaqSection = styled.div`
    text-align: center;
    padding: 0px 20px 0px;
    max-width: 360px;
    margin: 60px auto 0px auto;
    

    @media ${Device.tab} {
        padding: 0px 40px 0px;
        max-width: 768px;
        margin: 80px auto 0px auto;
    }

    @media ${Device.desktop} {
        padding: 0px 70px 0px;
        max-width: 1290px;
        margin: 100px auto 0px auto;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
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

const Description = styled(Font)`
    max-width: 100%;
    margin: 0px auto 30px;
    text-align: center;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        margin: 0px auto 60px;
        max-width: 684px;
    }
`;

const ArrowWrapper = styled.span`
    display: inline-block;
    height: 15px;
    width: 15px;
    margin-left: 3px;
    vertical-align: middle;

    @media ${Device.desktop} {
        height: 19px;
        width: 19px;
    }
`;

const Link = styled(StyledLink)`
    text-decoration: underline;
    text-underline-position: under;
`;

const SalaryFaqSection = () => (
    <FaqSection>
        <Title font='h1VariantThree' tagType='h1' color='MINE_SHAFT'>FAQs</Title>
        <Description font='p' tagType='p' color='SUVA_GREY'>
            For more details&nbsp;
            <Link
                url={`${FAQS_URL}/salary-accounts`}
                isExternal
            >
                check this
                <ArrowWrapper>
                    <Image
                        loadingType='lazy'
                        icon={ICONS_URL_MAP.TOP_RIGHT_ARROW_GREEN}
                        alt='arrow'
                        objectType='contain'
                    />
                </ArrowWrapper>
            </Link>
        </Description>
        <Container>
            <AccordionGroup list={salaryFaqsData} />
        </Container>
    </FaqSection>
);

export default SalaryFaqSection;
