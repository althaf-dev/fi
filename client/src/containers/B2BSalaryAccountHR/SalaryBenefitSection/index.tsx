/**
 * @file B2BSalaryAccountHR Salary Benefit Section
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Image } from '../../../components';
import MIXINS from '../../../Themes/mixins';

import CarouselSection from '../CarouselSection';

const Section = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column', justify: 'space-evenly', align: 'normal' })};
    width: 320px;
    max-width: 340px;
    height: 378px;
    margin: 62px auto 0px auto;
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;

    @media ${Device.tab} {
        width: 728px;
        max-width: 748px;
    }

    @media ${Device.desktop} {
        ${MIXINS.FlexMixin({ dir: 'row', justify: 'space-evenly', align: 'normal' })};
        padding: 32px 0px 32px 74px;
        max-width: 1290px;
        width: 1290px;
    }
`;

const MainSection = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column', justify: 'center', align: 'center' })};

    @media ${Device.desktop} {
        ${MIXINS.FlexMixin({ dir: 'column', justify: ' space-evenly', align: 'start' })};
    }
`;

const MainImageHolder = styled.div`
    height: 38px;
    width: 42px;

    @media ${Device.desktop} {
        height: 113px;
        width: 133px;
    }
`;

const MainTitleText = styled.div`
    ${MIXINS.FontMixin({ weight: 600, size: '30px', lineHeight: '120%' })};
    text-align: center;
    color: ${(props) => props.theme.color.LIGHT_GREY};;
    width: 268px;
    margin-top: 20px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '40px', lineHeight: '112%' })};
        margin: 0px;
        text-align: left;
        width: 280px;
    }
`;

interface ISalaryBenefitProps {
    data: {
        title: string;
        headerLogo: string;
        cardType: string;
        list: {
            id: number,
            title: string,
            icon?: {
                imageSrc: string;
                fallbackImageSrc: string;
            },
            description?: string,
            backgroundColor?: string
        }[];
    };
}

const SalaryBenefitSection = (props: ISalaryBenefitProps) => {
    const { data } = props;
    const {
        title, headerLogo, list, cardType,
    } = data;

    return (
        <Section>
            <MainSection>
                <MainImageHolder>
                    <Image icon={headerLogo} />
                </MainImageHolder>
                <MainTitleText>{title}</MainTitleText>
            </MainSection>
            <CarouselSection
                list={list}
                cardType={cardType}
                disableColumnAlign
            />
        </Section>
    );
};

export default React.memo(SalaryBenefitSection);
