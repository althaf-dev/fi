/**
 * @file TopCard Component for Fi Minutes
 * This component renders the Top Card which contains data like title, amount, etc.
 */

import React, { useState, ReactElement } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

import { Values } from '../interfaces';
import {
    IconContainer, InfoPill, TextVar17, TextVar20, TextVar21, TextVar15, FlexJSB, LineClampText,
} from '../styled';

const TopCardContainer = styled.div<{ summaryObj: boolean }>`
    width: 100% !important;
    height: max-content;
    background: radial-gradient(
        89.94% 206.51% at 86.59% 17%,
        rgba(72, 72, 72, 0.7) 0%,
        rgba(53, 52, 52, 0.7) 100%
        ),
        #313234;
    box-shadow: 0px 20px 24px -20px rgba(0, 0, 0, 0.25);
    border-radius: 35px;
    ${MIXINS.FlexMixin({ dir: 'column' })};
    margin: 20px 0 8px;
    /* using vh for adjusting smaller screen sizes (eg. iPhone SE) */
    /* here it will adjust the padding accordingly and resize to fit the screen */
    padding: 4vh 2vh;

    @media ${Device.high_res_phone} {
        padding: ${(props) => (props.summaryObj ? '32px 32px 10px' : '32px')};
    }
`;

const SummaryContainer = styled(TextVar15)`
    /* using vh for adjusting smaller screen sizes (eg. iPhone SE) */
    /* here it will adjust the padding accordingly and resize to fit the screen */
    margin: 2vh 0 0 0;

    @media ${Device.high_res_phone} {
        margin: 30px 0;
    }
`;

const PaddedIcon = styled.div`
    padding: 6px;
    background: #313234;
    border-radius: 100%;
    width: 28px;
    height: 28px;
    margin: 4px;
    ${MIXINS.FlexMixin({})};
`;

const IconsContainer = (props: Values): ReactElement => {
    const { storyItem } = props;
    const {
        icons,
        post_text: postText,
    } = storyItem || {};

    const {
        plain_string: postTextPlainString,
    } = postText || {};

    return (
        <FlexJSB>
            {icons.map((item) => (
                <PaddedIcon>
                    <IconContainer width='16px' height='16px' src={item} />
                </PaddedIcon>
            ))}
            <TextVar20 color='#B2B5B9'>{postTextPlainString}</TextVar20>
        </FlexJSB>
    );
};

const TopCard = (props: Values): ReactElement => {
    const { storyItem } = props;

    const [storyItemParsed] = useState(JSON.parse(storyItem));

    const {
        title: titleObj,
        sub_title: subTitleObj,
        value: valueObj,
        description: descriptionObj,
        summary: summaryObj,
    } = storyItemParsed;

    const {
        plain_string: textVar20,
    } = titleObj || {};

    const {
        plain_string: valueText,
        font_color: valueColor,
    } = valueObj || {};

    const {
        pre_icon: preIcon,
        text: textObj,
    } = descriptionObj || {};

    const {
        plain_string: textVar15,
        font_color: summaryColor,
    } = summaryObj || {};

    const { plain_string: textInfo, font_color: fontColor } = textObj || {};

    return (
        <TopCardContainer summaryObj={summaryObj}>
            <TextVar20 color='#B2B5B9'>{textVar20}</TextVar20>
            {subTitleObj && (
                <IconsContainer storyItem={subTitleObj} />
            )}
            {valueObj && (
                <LineClampText noOfLines={1}>
                    <TextVar21 color={valueColor}>{valueText}</TextVar21>
                </LineClampText>
            )}
            {descriptionObj && (
                <InfoPill bgColor='#313234' size='large'>
                    <IconContainer src={preIcon} width='12px' margin='0 4px' />
                    <TextVar17 color={fontColor}>{textInfo ?? ''}</TextVar17>
                </InfoPill>
            )}
            {summaryObj && (
                <SummaryContainer color={summaryColor}>
                    <LineClampText noOfLines={2}>
                        {textVar15}
                    </LineClampText>
                </SummaryContainer>
            )}
        </TopCardContainer>
    );
};

export default TopCard;
