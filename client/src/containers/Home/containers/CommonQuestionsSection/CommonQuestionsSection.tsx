import React, { useState } from 'react';
import styled from 'styled-components';

import { Image } from '../../../../components';
import { Device } from '../../../../Themes/Device';
import { ICONS_URL_MAP } from '../../../../constants/AssetConstants';

import { Section, FeatureWrapper } from '../../components';
import { COMMON_QUESTIONS_SECTION } from '../../constants';

const SectionWrapper = styled.div`
    margin-top: 40px;

    @media ${Device.desktop} {
        margin-top: 140px;
    }
`;

const Container = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 15px;
    margin-top: 30px;
    padding: 24px;
    text-align: left;

    @media ${Device.desktop} {
        border-radius: 30px;
        margin-top: 60px;
        margin-bottom: -80px;
        padding: 60px 80px;
    }
`;

const QuestionsHolder = styled.div`
    color: ${(props) => props.theme.color.DARK_GREY};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${Device.desktop} {
        column-gap: 15px;
        justify-content: unset;
    }
`;

const ArrowImageHolder = styled.div`
    height: 24px;
    width: 24px;

    @media ${Device.tab} {
        height: 28px;
        width: 28px;
    }
`;

const QuestionsTitle = styled.div<{showAnswer: boolean}>`
    color: ${(props) => props.theme.color.DARK_GREY};
    font-family: Gilroy, sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    vertical-align: middle;
    max-width: 242px;

    @media ${Device.tab} {
        font-size: 30px;
        line-height: 140%;
        max-width: 442px;
    }

    @media ${Device.desktop} {
        max-width: 900px;
    }
`;

const QuestionsDescription = styled.div<{ showAnswer?: boolean }>`
    color: ${(props) => props.theme.color.SUVA_GREY};
    display: ${(props) => (props.showAnswer ? 'block' : 'none')};
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    margin-top: 6px;
    max-width: 272px;
    text-align: left;

    @media ${Device.tab} {
        font-size: 24px;
        max-width: 472px;
    }

    @media ${Device.desktop} {
        max-width: 1130px;
    }
`;

const Separator = styled.hr`
    border: 1px solid ${(props) => props.theme.color.GAINSBORO};
    margin: 20px auto;

    @media ${Device.desktop} {
        margin: 40px auto;
    }

    &:last-child {
        display: none;
    }
`;

interface CommonQuestionsSectionProps {
    variant: any;
}

const CommonQuestionsSection = (props: CommonQuestionsSectionProps) => {
    const { variant } = props;

    const [activeIndex, setActiveIndex] = useState(-1);

    const onTitleClickHandler = (index) => () => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <SectionWrapper>
            <Section>
                <FeatureWrapper
                    title='Common Questions'
                >
                    <Container>
                        {COMMON_QUESTIONS_SECTION[variant]?.map((data, index) => (
                            <>
                                <QuestionsHolder
                                    key={data.id}
                                    onClick={onTitleClickHandler(index)}
                                >
                                    <QuestionsTitle showAnswer={activeIndex === index}>
                                        {data.title}
                                    </QuestionsTitle>
                                    <ArrowImageHolder>
                                        <Image
                                            icon={activeIndex === index ? ICONS_URL_MAP.TOP_ARROW_V2 : ICONS_URL_MAP.BOTTOM_ARROW_V2}
                                            loadingType='lazy'
                                            alt='arrow icon'
                                        />
                                    </ArrowImageHolder>
                                </QuestionsHolder>
                                <QuestionsDescription showAnswer={activeIndex === index}>
                                    {data.description}
                                </QuestionsDescription>
                                <Separator />
                            </>
                        ))}
                    </Container>
                </FeatureWrapper>
            </Section>
        </SectionWrapper>
    );
};

export default CommonQuestionsSection;
