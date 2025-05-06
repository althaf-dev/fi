/*
 @file: AccordionGroup Section
*/

import React, { useState } from 'react';
import styled from 'styled-components';

import { ICONS_URL_MAP } from '../../constants/AssetConstants';
import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';
import { htmlSanitization } from '../../utils';

import { Image } from '../index';

const AccordionCard = styled.div<{ showAnswer?: boolean }>`
    text-align: left;
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

const AccordionTitleHolder = styled.div`
    ${MIXINS.FlexMixin({ justify: 'space-between' })};
`;

const AccordionTitle = styled.div`
    ${MIXINS.FontMixin({ weight: 600, size: '16px', lineHeight: '115%' })};
    color: ${(props) => props.theme.color.MINE_SHAFT};
    max-width: 250px;
    text-align: left;


    @media ${Device.tab} {
        ${MIXINS.FontMixin({ weight: 600, size: '24px', lineHeight: '115%' })};
        max-width: 600px;
    }

    @media ${Device.desktop} {
        max-width: unset;
    }
`;

const AccordionDescription = styled.div<{ showAnswer: boolean }>`
    ${MIXINS.FontMixin({ weight: 500, size: '14px', font: 'Inter' })};
    background-color: ${(props) => props.theme.color.WHITE};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    color: ${(props) => props.theme.color.GREY_3};
    text-align: left;


    display: ${(props) => (props.showAnswer ? 'block' : 'none')};
    margin: ${(props) => (props.showAnswer ? '0px auto 16px' : '0px auto')};
    padding: 0px 16px 20px;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        weight: 500, size: '20px', font: 'Inter', lineHeight: '120%',
    })};
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

interface AccordionItemProps {
    title: string;
    content: string;
    id: number;
}

interface AccordionGroupProps {
    list: Array<AccordionItemProps>;
}

const AccordionGroup = (props: AccordionGroupProps) => {
    const {
        list,
    } = props;

    const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1);

    const onClickedAccordionFolders = (index) => () => {
        /**
         * if index value is equal to the activeAccordionIndex value that means user clicked on the same accordion that currently open
         * so for this set the default activeAccordionIndex value which is -1 in the activeAccordionIndex state
         * else if another accordion section open than set index value in the activeAccordionIndex state
         */
        if (index === activeAccordionIndex) {
            setActiveAccordionIndex(-1);
        } else {
            setActiveAccordionIndex(index);
        }
    };

    return (
        <>
            {list.map((item, index) => (
                <div key={item.id}>
                    <AccordionCard
                        showAnswer={activeAccordionIndex === index}
                        key={item.id}
                        onClick={onClickedAccordionFolders(index)}
                    >
                        <AccordionTitleHolder>
                            <AccordionTitle
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(item.title) }}
                            />

                            <ArrowImageHolder>
                                <Image
                                    icon={activeAccordionIndex === index ? ICONS_URL_MAP.TOP_ARROW_V2 : ICONS_URL_MAP.BOTTOM_ARROW_V2}
                                    loadingType='lazy'
                                    alt='arrow icon'
                                />
                            </ArrowImageHolder>
                        </AccordionTitleHolder>
                    </AccordionCard>

                    <AccordionDescription showAnswer={activeAccordionIndex === index}>
                        <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(item.content) }}
                        />
                    </AccordionDescription>
                </div>
            ))}
        </>
    );
};

export default React.memo(AccordionGroup);
