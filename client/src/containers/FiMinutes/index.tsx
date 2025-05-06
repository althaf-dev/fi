/**
 * @file Fi minutes landing component
 */

import React, { useEffect, useMemo, useState } from 'react';
import ReactInstaStories from 'react-insta-stories';
import { shallowEqual, useSelector } from 'react-redux';

import { Loader } from '../../components';

import { CONSUL_META_INFO_PATH_NAME } from '../App/constants';
import { selectDynamicConfig } from '../App/selectors';

import {
    DEFAULT_STORY_INTERVAL_TIME_IN_MS, WEB_CALLBACK_OBJECTS,
    BE_STORY_DATA, DEFAULT_FI_MINUTES_DATA, storyCustomStyles,
} from './constants';
import { callMobileClientFunction, getMovementMethod, loadWebStoryDataFromApp } from './utils';
import { ClientPlatform } from './interfaces';

// eslint-disable-next-line no-var
declare var window: any;

const FiMinutes = () => {
    const [fiMinutesData, setFiMinutesData] = useState(DEFAULT_FI_MINUTES_DATA);
    const [currentIndex, setCurrentIndex] = useState(0);

    const dynamicConfigInfo = useSelector(
        selectDynamicConfig(CONSUL_META_INFO_PATH_NAME),
        shallowEqual,
    );

    const storyIntervalTime = useMemo(() => {
        const clientPlatform = fiMinutesData?.client_platform;

        const specificOSInterval = dynamicConfigInfo?.fiMinutes?.storyInterval[clientPlatform];

        if (specificOSInterval) return specificOSInterval;

        return DEFAULT_STORY_INTERVAL_TIME_IN_MS;
    }, [dynamicConfigInfo?.fiMinutes?.storyInterval, fiMinutesData?.client_platform]);

    /**
     * Function that is called when a new story is viewed
     * @param newIndex The latest index of the story that is in view
     * @param curStoryData The current story object that is being viewed on the UI
     */
    const onStoryStart = (newIndex: number, curStoryData: any): void => {
        const payload = WEB_CALLBACK_OBJECTS.LoadedNewScreenOnFiMinutes;
        payload.data.newSlideStoryId = curStoryData.storyData.story_id;
        payload.data.previousSlideStoryId = fiMinutesData.stories[currentIndex].storyData.story_id;
        const movementMethod = getMovementMethod(newIndex, currentIndex);
        payload.data.movementMethod = movementMethod;

        callMobileClientFunction(fiMinutesData.client_platform, payload);

        setCurrentIndex(newIndex);
    };

    /**
     * Function that is called when the last story has ended
     * @param newIndex The latest index of the story that is in view
     * @param allStoryData Array of objects containing all the story data
     */
    const onAllStoriesEnd = (newIndex: number, allStoryData: any[]): void => {
        const payload = WEB_CALLBACK_OBJECTS.ViewedAllStories;
        payload.data.storyId = allStoryData[newIndex].storyData.story_id;

        callMobileClientFunction(fiMinutesData.client_platform, payload);
    };

    /**
     * Function runs on initial page load
     * Registers android/ios functions loadWebStoryDataFromApp on window object
     */
    useEffect(() => {
        window.loadWebStoryDataFromApp = loadWebStoryDataFromApp(setFiMinutesData);
        window.BE_STORY_DATA = JSON.stringify(BE_STORY_DATA);

        // Event trigger to notify app that web has been loaded.
        const payload = WEB_CALLBACK_OBJECTS.FiMinutesPageLoaded;
        callMobileClientFunction(ClientPlatform.WEB, payload);
        callMobileClientFunction(ClientPlatform.ANDROID, payload);
        callMobileClientFunction(ClientPlatform.IOS, payload);

        // uncomment for web
        // setTimeout(() => {
        //     loadWebStoryDataFromApp(setFiMinutesData)(window.BE_STORY_DATA);
        // }, 1000);
    }, []);

    return (
        <ReactInstaStories
            keyboardNavigation
            defaultInterval={storyIntervalTime || DEFAULT_STORY_INTERVAL_TIME_IN_MS}
            stories={fiMinutesData.stories}
            height='100vh'
            width='100%'
            storyContainerStyles={storyCustomStyles}
            loader={<Loader isLoading text='Fetching minutes' />}
            onStoryStart={onStoryStart}
            onAllStoriesEnd={onAllStoriesEnd}
        />
    );
};

export default FiMinutes;
