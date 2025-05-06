'use client';

/**
 * @file FAQs
 * Represents an FAQs component that shows a question and its corresponding answer.
 */
import React, { memo, useState } from 'react';
import { ICONS_URL_MAP } from '../../constants/AssetConstants';
import { Image } from '../Abstract';
import {
    Card,
    QuestionsHolder,
    Questions,
    Answers,
    ArrowImageHolder,
    ExpandableTitle,
} from './styled';
import htmlSanitization from '@/utils/htmlSanitization';

interface FAQsProps {
    faqs: IFaqArticle[];
    numberOfFaq: number;
    totalNumFAQ: number;
    viewMoreText: string;
    background: string;
    upArrow: string;
    downArrow: string;
    magnifi: boolean;
    questionColor: string;
    answerColor: string;
}

interface IFaqArticle {
    question: string;
    answer: string;
    id?: number;
}

const FAQs: React.FC<FAQsProps> = ({
    faqs, numberOfFaq, totalNumFAQ, viewMoreText, background, upArrow, downArrow, magnifi, questionColor, answerColor
}) => {
    const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>();
    const [activeFaq, setActiveFaq] = useState<number>(numberOfFaq);

    const onClickedFaqFolders = (index: number) => () => {
        setActiveFaqIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleClick = () => {
        setActiveFaq(totalNumFAQ);
    };

    function getArrowIcon(index: number): string {
        let arrowIcon: string;
        if (activeFaqIndex === index) {
            arrowIcon = upArrow || ICONS_URL_MAP.TOP_ARROW_V2;
        } else {
            arrowIcon = downArrow || ICONS_URL_MAP.BOTTOM_ARROW_V2;
        }
        return arrowIcon;
    }

    return (
        <>
            {faqs.slice(0, activeFaq).map((faq, index) => (
                <div key={faq.id}>
                    <Card showAnswer={activeFaqIndex === index} onClick={onClickedFaqFolders(index)} backgroundColor={background}>
                        <QuestionsHolder>
                            <Questions dangerouslySetInnerHTML={{ __html: htmlSanitization(faq.question) }} questionColor={questionColor} />
                            <ArrowImageHolder magnifi={magnifi}>
                                <Image
                                    icon={getArrowIcon(index)}
                                    loadingType='lazy'
                                    alt='arrow icon'
                                />
                            </ArrowImageHolder>
                        </QuestionsHolder>
                    </Card>

                    <Answers showAnswer={activeFaqIndex === index} backgroundColor={background} answerColor={answerColor}>
                        <div dangerouslySetInnerHTML={{ __html: htmlSanitization(faq.answer) }} />
                    </Answers>
                </div>
            ))}
            { totalNumFAQ !== activeFaq && totalNumFAQ ? (
                <ExpandableTitle onClick={handleClick}>{viewMoreText}</ExpandableTitle>
            ) : null}
        </>
    );
};

export default memo(FAQs);
