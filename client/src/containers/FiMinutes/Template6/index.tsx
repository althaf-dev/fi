/**
 * @file Template 6 for Fi Minutes
 */

import React, { memo, ReactElement } from 'react';
import styled from 'styled-components';

import ErrorBoundary from '../ErrorBoundary';
import { CommonTemplateContainer } from '../CommonTemplate';
import BottomSheet from '../Components/BottomSheet';
import Category from '../Components/Category';
import TopCard from '../Components/TopCard';

import { ITemplateProps } from '../interfaces';
import { TextVar15 } from '../styled';

const Temp6CHeader = styled(TextVar15)`
    color: ${(props) => props.theme.color.WHITE};
    margin: 16px 0;
`;

const Template6AComponent = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values } = storyItem;
    const {
        value_card: valueCard,
        bottom_sheet_list_view: bottomSheet,
    } = values || {};

    return (
        <CommonTemplateContainer>
            <ErrorBoundary><TopCard storyItem={valueCard} /></ErrorBoundary>
            <ErrorBoundary><BottomSheet justifyContent='space-between' storyItem={bottomSheet} /></ErrorBoundary>
        </CommonTemplateContainer>
    );
};

export const Template6A = memo(Template6AComponent);

const Template6BComponent = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values } = storyItem;
    const {
        image_card: imageCard,
        bottom_sheet_list_view: bottomSheet,
    } = values || {};

    const imageCardParsed = JSON.parse(imageCard);

    return (
        <CommonTemplateContainer>
            <ErrorBoundary><Category storyItem={imageCardParsed} /></ErrorBoundary>
            <ErrorBoundary><BottomSheet justifyContent='space-between' storyItem={bottomSheet} /></ErrorBoundary>
        </CommonTemplateContainer>
    );
};

export const Template6B = memo(Template6BComponent);

const Template6CComponent = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values, client_platform: clientPlatform, story_id: storyId } = storyItem;
    const {
        text_1: textVar15,
        bottom_sheet_list_view: bottomSheet,
        bottom_sheet_bg_linear_gradient: bottomSheetBgLinearGradient,
    } = values || {};

    return (
        <CommonTemplateContainer>
            <ErrorBoundary><Temp6CHeader>{textVar15}</Temp6CHeader></ErrorBoundary>
            <ErrorBoundary><BottomSheet gradient={bottomSheetBgLinearGradient} justifyContent='space-between' storyItem={bottomSheet} clientPlatform={clientPlatform} storyId={storyId} /></ErrorBoundary>
        </CommonTemplateContainer>
    );
};

export const Template6C = memo(Template6CComponent);

const Template6DComponent = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values, client_platform: clientPlatform, story_id: storyId } = storyItem;
    const {
        value_card: valueCard,
        bottom_sheet_center_image_view: bottomSheet,
    } = values || {};

    return (
        <CommonTemplateContainer>
            <ErrorBoundary><TopCard storyItem={valueCard} /></ErrorBoundary>
            <ErrorBoundary>
                <BottomSheet
                    isZeroStateContainer
                    justifyContent='center'
                    storyItem={bottomSheet}
                    clientPlatform={clientPlatform}
                    storyId={storyId}
                />
            </ErrorBoundary>
        </CommonTemplateContainer>
    );
};

export const Template6D = memo(Template6DComponent);
