/**
 * @file FAQs
 * Represents a FAQs component that shows a question and its corresponding answer.
 */
import React, { memo, useState } from 'react';

import { ICONS_URL_MAP } from '../../constants/AssetConstants';
import { IFaqArticle } from '../../interfaces/elements';
import { htmlSanitization } from '../../utils';

import { Image } from '../Abstract';

import {
    Card, QuestionsHolder, Questions, Answers, ArrowImageHolder,
} from './styled';

interface FAQsProps {
    faqs: IFaqArticle[];
}

const FAQs = (props: FAQsProps) => {
    const { faqs } = props;

    const [activeFaqIndex, setActiveFaqIndex] = useState(-1);

    const onClickedFaqFolders = (index) => () => {
        /**
         * if index value is equal to the activeFaqIndex value that means user clicked on the same FAQs that currently open
         * so for this set the default activeFaqIndex value which is -1 in the activeFaqIndex state
         * else if another FAQs section open than set index value in the activeFaqIndex state
         */
        if (index === activeFaqIndex) {
            setActiveFaqIndex(-1);
        } else {
            setActiveFaqIndex(index);
        }
    };

    return (
        <>
            {faqs.map((faq, index) => (
                <div>
                    <Card
                        showAnswer={activeFaqIndex === index}
                        onClick={onClickedFaqFolders(index)}
                    >
                        <QuestionsHolder>
                            <Questions
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(faq.question) }}
                            />
                            <ArrowImageHolder>
                                <Image
                                    icon={activeFaqIndex === index ? ICONS_URL_MAP.TOP_ARROW_V2 : ICONS_URL_MAP.BOTTOM_ARROW_V2}
                                    loadingType='lazy'
                                    alt='arrow icon'
                                />
                            </ArrowImageHolder>
                        </QuestionsHolder>
                    </Card>

                    <Answers showAnswer={activeFaqIndex === index}>
                        <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(faq.answer) }}
                        />
                    </Answers>
                </div>
            ))}
        </>
    );
};

export default memo(FAQs);
