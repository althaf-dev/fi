/**
* @file Housing Page Poster Section
*/

import React, { memo } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';

import { Font } from '../../../components';

import PosterCardsSection from '../PosterCardsSection';
import { posterCardsSectionData } from '../constant';

const Section = styled.div`
    text-align: center;
    padding-top: 40px;
    overflow: hidden;
    height: 450px;

    @media ${Device.desktop} {
        padding-top: 60px;
        height: 900px;
    }
`;

const ContentHolder = styled.div`
    margin: auto;
    max-width: 320px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 820px;
    }
`;

const Tag = styled(Font)`
    background: ${(props) => props.theme.color.FOREST_GREEN};
    border-radius: 20px;
    padding: 4px 18px;
    width: max-content;
    margin: 0px auto 21px;

    @media ${Device.tab} {
        padding: 8px 16px;
        width: max-content;
        margin: 0px auto 24px;
    }

    @media ${Device.desktop} {
        width: max-content;
        margin: 0px auto 30px;
    }
`;

const Title = styled(Font)`
    margin: 0px auto 21px;

    @media ${Device.tab} {
        max-width: 529px;
    }

    @media ${Device.desktop} {
        max-width: 728px;
        margin: 0px auto 35px;
    }
`;

const PosterSection = () => (
    <Section>
        <ContentHolder>
            <Tag font='pSmallVariantEight' tagType='text' color='WHITE'>
                ⭐  EXCLUSIVE FOR FI USERS
            </Tag>

            <Title font='h1' tagType='h1' color='WHITE'>
                Become a home owner. ₹47L onwards.
                <sup>*</sup>
            </Title>

            <PosterCardsSection data={posterCardsSectionData} />
        </ContentHolder>
    </Section>
);

export default memo(PosterSection);
