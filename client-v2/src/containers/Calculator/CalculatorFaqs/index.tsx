import React from 'react';
import styled from 'styled-components';

import { Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { ICONS_URL_MAP } from '../../../constants/AssetConstants';
import { htmlSanitization } from '../../../utils';

const Title = styled.div`
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 110%;
    margin-bottom: 20px;

    @media ${Device.tab} {
        font-size: 26px;
        line-height: 31px;
        margin-bottom: 24px;
    }

    @media ${Device.desktop} {
        font-size: 30px;
        line-height: 36px;
    }
`;

const FaqCard = styled.div<{ showAnswer?: boolean }>`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: ${(props) => (props.showAnswer ? '20px 20px 0px 0px' : '20px')};
    cursor: pointer;
    margin: ${(props) => (props.showAnswer ? '0px' : '0px auto 16px')};
    padding: 20px 16px 12px;

    @media ${Device.tab} {
        padding: 32px 24px 20px;
        margin: ${(props) => (props.showAnswer ? '0px' : '0px auto 20px')};
    }

    @media ${Device.desktop} {
        padding: 32px 30px;
        padding: ${(props) => (props.showAnswer ? '32px 30px 24px' : '32px 30px')};
    }
`;

const FaqTitleHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const FaqTitle = styled.div`
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 115%;
    max-width: 250px;

    @media ${Device.tab} {
        font-size: 24px;
        max-width: 600px;
    }

    @media ${Device.desktop} {
        max-width: unset;
    }
`;

const FaqDescription = styled.div<{ showAnswer: boolean }>`
    background-color: ${(props) => props.theme.color.WHITE};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    color: ${(props) => props.theme.color.GREY_3};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    display: ${(props) => (props.showAnswer ? 'block' : 'none')};
    margin: ${(props) => (props.showAnswer ? '0px auto 16px' : '0px auto')};
    padding: 0px 16px 20px;

    // & > div:not(:last-child) {
    //     margin-bottom: 24px;
    // }

    @media ${Device.tab} {
        font-size: 20px;
        line-height: 120%;
        padding: 0px 24px 32px;
        margin: ${(props) => (props.showAnswer ? '0px auto 20px' : '0px auto')};
    }

    @media ${Device.desktop} {
        padding: 0px 30px 32px;
        margin: ${(props) => (props.showAnswer ? '0px auto 20px' : '0px auto')};

        & > div:not(:last-child) {
            margin-bottom: 40px;
        }
    }
`;

const ArrowImageHolder = styled.div`
    width: 16px;
    height: 16px;

    @media ${Device.tab} {
        width: 20px;
        height: 20px;
    }

    @media ${Device.desktop} {
        width: 24px;
        height: 24px;
    }
`;

interface CalculatorFaqsProps {
    faqs: Array<any>;
    activeFaqIndex: number;
    setActiveFaqIndex: (value: number) => void;
}

const CalculatorFaqs = (props: CalculatorFaqsProps) => {
    const {
        faqs, activeFaqIndex, setActiveFaqIndex,
    } = props;

    const onClickedFaqFolders = (index:number) => () => {
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
            <Title>FAQs</Title>
            {faqs.map((faq, index) => (
                <div key={faq.id}>
                    <FaqCard
                        showAnswer={activeFaqIndex === index}
                        key={faq.id}
                        onClick={onClickedFaqFolders(index)}
                    >
                        <FaqTitleHolder>
                            <FaqTitle
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(faq.title) }}
                            />

                            <ArrowImageHolder>
                                <Image
                                    icon={activeFaqIndex === index ? ICONS_URL_MAP.TOP_ARROW_V2 : ICONS_URL_MAP.BOTTOM_ARROW_V2}
                                    loadingType='lazy'
                                    alt='arrow icon'
                                />
                            </ArrowImageHolder>
                        </FaqTitleHolder>
                    </FaqCard>

                    <FaqDescription showAnswer={activeFaqIndex === index}>
                        <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(faq.content) }}
                        />
                    </FaqDescription>
                </div>
            ))}
        </>
    );
};

export default CalculatorFaqs;
