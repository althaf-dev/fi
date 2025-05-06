import React from 'react';

import { FEDERAL_SERVICE_CHARGES_URL } from '../../../constants/AppConstant';

import {
    Container,
    SectionContainerOneTitle,
    SectionContainerTwoTitle,
    InfoOne,
    SectionOne,
    SectionTwo,
    ColoredSpan,
} from './SectionStyle';
import ThingsThatMatterSection from './ThingsThatMatterSection';
import AllThingsDigitalSection from './AllThingsDigitalSection';
import PaperAndBranchBaseSection from './PaperAndBranchBaseSection';

// eslint-disable-next-line arrow-body-style
const FeesSection = () => {
    return (
        <Container>
            <SectionContainerOneTitle tagType='h2' font='h1' color='MINE_SHAFT'>
                Things That Matter 🌟
            </SectionContainerOneTitle>

            <SectionOne>
                <ThingsThatMatterSection />
            </SectionOne>

            <SectionContainerTwoTitle tagType='h2' font='h1' color='MINE_SHAFT'>
                All Things Digital 💻
            </SectionContainerTwoTitle>

            <SectionOne>
                <AllThingsDigitalSection />
            </SectionOne>

            <SectionContainerTwoTitle tagType='h2' font='h1' color='MINE_SHAFT'>
                Paper & Branch Based: We hope these are few and far between 📝
            </SectionContainerTwoTitle>

            <SectionTwo>
                <PaperAndBranchBaseSection />
            </SectionTwo>

            <InfoOne font='p' tagType='text' color='SUVA_GREY'>
                The charges mentioned above are specifically for Savings Account users on Fi. To view any other fees,
                please head to our&nbsp;
                <a href={FEDERAL_SERVICE_CHARGES_URL} target='_blank' rel='noreferrer'>
                    <ColoredSpan color='FOREST_GREEN'>banking partner’s fee document</ColoredSpan>
                </a>
                .
            </InfoOne>

            <InfoOne font='p' tagType='text' color='SUVA_GREY'>
                Note: Additional GST & other applicable taxes will be applicable on all the above-mentioned fees.
            </InfoOne>
        </Container>
    );
};

export default FeesSection;
