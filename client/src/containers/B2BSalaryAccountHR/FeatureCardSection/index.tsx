/**
 * @file B2BSalaryAccountHR Feature card Section
 */

import React from 'react';
import styled from 'styled-components';

import MIXINS from '../../../Themes/mixins';
import { Device } from '../../../Themes/Device';
import FinePrintText from '../../../components/FinePrintText';
import { htmlSanitization } from '../../../utils';

import CarouselSection from '../CarouselSection';
import { Title } from '../styled';
import { PAGE_TYPE } from '../constant';

const PosterSection = styled.div<{type?: string | null}>`
    text-align: center;
    padding: 20px;
    max-width: 360px;
    margin: 0px auto;

    @media ${Device.tab} {
        max-width: 768px;
        padding: 0px 40px 60px 40px;
    }

    @media ${Device.desktop} {
        padding: 50px;
        padding-top: ${(props) => (props.type && props.type === PAGE_TYPE.sme.label ? '0px' : '50px')};
        max-width: 1290px;
    }
`;

const Container = styled.div`
    display: grid;
    grid-gap: 20px;

    @media ${Device.desktop} {
        grid-gap: 28px;
    }
`;

const FinePrintWrapper = styled.div<any>`
    text-align: ${(props) => (props.type && props.type === PAGE_TYPE.sme.label ? 'center' : 'right')};
`;

const InfoText = styled.div`
    color: ${(props) => props.theme.color.GREY_2};
    margin-bottom: 20px;
    ${MIXINS.FontMixin({
        font: 'inter',
        weight: 500,
        size: '16px',
        lineHeight: '18px',
    })};
    @media ${Device.tab} {
        margin-bottom: 60px;
        ${MIXINS.FontMixin({
        font: 'inter',
        weight: 500,
        size: '24px',
        lineHeight: '34px',
    })};
    }
    `;

interface IFeatureCardSectionProps {
    data: {
        title: string,
        cardType: string;
        finePrint: any;
        description?: string,
        list: {
            id: number,
            icon?: {
                imageSrc: string;
                fallbackImageSrc: string;
            },
            title: string,
            description?: string,
            backgroundColor?: string,
            tag?: string,
        }[];
    };
    type: string | null;
}

const FeatureCardSection = (props: IFeatureCardSectionProps) => {
    const { data, type = null } = props;
    const {
        title, list, cardType, finePrint, description,
    } = data;

    return (
        <PosterSection type={type}>
            <Title
                font='cardTitleVariantFour'
                tagType='h1'
                color='MINE_SHAFT'
                dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }}
            />
            <InfoText>{description}</InfoText>
            <Container>
                <CarouselSection hideShadow list={list} cardType={cardType} type={type} />
                <FinePrintWrapper>
                    <FinePrintText data={finePrint} type={type} />
                </FinePrintWrapper>
            </Container>
        </PosterSection>
    );
};

export default React.memo(FeatureCardSection);
