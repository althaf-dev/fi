/* eslint-disable camelcase */

/**
 * @file Handles all the logic and rendering w.r.t different story templates
 */

import React, { FC, memo, ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import LottiePlayer from '../../../components/LottiePlayer';

import { LottieContainer, StoryContainer, StoryInnerContainer } from '../styled';
import StoryHeader from '../Header';
import { TEMPLATE_IDS } from '../constants';
import { IStoryGroupData, IStoryItem, ITemplateProps } from '../interfaces';
import Template1 from '../Template1';
import {
    Template2A, Template2B, Template2C, Template2D,
} from '../Template2';
import Template3 from '../Template3';
import Template4 from '../Template4';
import Template5 from '../Template5';
import { Template6A, Template6B, Template6C, Template6D } from '../Template6';
import Template7 from '../Template7';
import Template8 from '../Template8';

const RenderTemplate = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;

    switch (storyItem.template_id) {
        case TEMPLATE_IDS.TEMPLATE_1: {
            return <Template1 storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_2A: {
            return <Template2A storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_2B: {
            return <Template2B storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_2C: {
            return <Template2C storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_2D: {
            return <Template2D storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_3: {
            return <Template3 storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_4A: {
            return <Template4 storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_4B: {
            return <Template4 storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_5: {
            return <Template5 storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_6A: {
            return <Template6A storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_6B: {
            return <Template6B storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_6C: {
            return <Template6C storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_6D: {
            return <Template6D storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_7: {
            return <Template7 storyItem={storyItem} />;
        }

        case TEMPLATE_IDS.TEMPLATE_8: {
            return <Template8 storyItem={storyItem} />;
        }

        default: {
            return <Template1 storyItem={storyItem} />;
        }
    }
};

const MemoRenderTemplate = memo(RenderTemplate);

const StoryContentContainer = styled.div`
    max-width: 370px;
    margin: 0 auto;
    height: 95%;
    width: inherit;
`;

const GlobalStyle = createGlobalStyle`
    * {
        user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
    }
`;

const StoryContent = (storyData: IStoryGroupData, storyItem: IStoryItem):FC => memo((): ReactElement => (
    <>
        <GlobalStyle />
        <StoryContainer>
            <StoryInnerContainer>
                <StoryHeader
                    storyData={storyData}
                    storyItem={storyItem}
                />
                <StoryContentContainer>
                    <MemoRenderTemplate storyItem={storyItem} />
                </StoryContentContainer>
                <LottieContainer>
                    <LottiePlayer
                        path={storyItem.values.bg_lottie}
                        loop={false}
                    />
                </LottieContainer>
            </StoryInnerContainer>
        </StoryContainer>
    </>
));

const getStoryList = (webStoryData: IStoryGroupData): any[] => webStoryData.stories.map((webStoryItem: IStoryItem) => {
    const uiObj = {
        content: null,
        storyData: null,
    };

    const modifiedWebStoryItem = {
        ...webStoryItem,
        client_platform: webStoryData.client_platform,
    };

    uiObj.content = StoryContent(webStoryData, modifiedWebStoryItem);
    uiObj.storyData = modifiedWebStoryItem;

    return uiObj;
});

export default getStoryList;
