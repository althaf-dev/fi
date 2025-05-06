// common component for any left right image/text section for future

import React from 'react';
import styled from 'styled-components';

import { SalaryPageImageSize, SalaryPageContentSize } from '../../../components/ImageReverseSection';

import { Device } from '../../../Themes/Device';
import { ImageReverseSection } from '../../../components';

const PosterSection = styled.div`
    padding: 0 20px 0px;
    max-width: 360px;
    margin: 0px auto;

    @media ${Device.tab} {
        max-width: 768px;
        padding: 0 40px 0px;
    }

    @media ${Device.desktop} {
        max-width: 1290px;
        padding: 0 70px 0px;
    }
`;

const Container = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    margin-bottom: 30px;
    padding: 34px 26px;

    @media ${Device.tab} {
        margin-bottom: 30px;
        padding: 40px 48px;
    }

    @media ${Device.desktop} {
        margin-bottom: 40px;
        padding: 40px 108px;
    }
`;

interface LeftRightSectionComponentProps {
    data: {
        id: number,
        cardType: string,
        titleText: string,
        descriptionText: string,
        imageIcon: any,
        fallbackIcon: any;
        finePrint: any,
    }[];
}

const LeftRightSectionComponent = (props: LeftRightSectionComponentProps) => {
    const { data } = props;

    return (
        <PosterSection>
            {data.map((value) => (
                <Container>
                    <ImageReverseSection
                        id={value.id}
                        cardType={value.cardType}
                        titleText={value.titleText}
                        descriptionText={value.descriptionText}
                        finePrint={value.finePrint}
                        imageIcon={value.imageIcon}
                        fallbackIcon={value.fallbackIcon}
                        contentSize={SalaryPageContentSize}
                        imageSize={SalaryPageImageSize}
                    />
                </Container>
            ))}
        </PosterSection>
    );
};

export default LeftRightSectionComponent;
