/**
 * @file Util functions for Fi minutes
 */

import { helpers } from '../../utils';

import { WEB_CALLBACK_OBJECTS } from './constants';
import { ClientPlatform, IStoryItem, MovementTypes } from './interfaces';
import getStoryList from './Templates';

// eslint-disable-next-line no-var
declare var window: any;

/**
 * Calls mobile functions and passes the payload based on the event
 * @param platform The mobile platform to send the callback to
 * @param payload The payload that is sent to mobile device
 */
export const callMobileClientFunction = (platform: ClientPlatform, payload): void => {
    // eslint-disable-next-line no-console
    console.log('callMobileClientFunction invoked', JSON.stringify({
        payload,
        platform,
    }));
    try {
        const stringifiedPayload = JSON.stringify(payload);

        if (platform === ClientPlatform.ANDROID) {
            window?.fiAndroidApp?.fiMinutesWebCallback(stringifiedPayload);
            // eslint-disable-next-line no-console
            console.log(`callMobileClientFunction ~ successfully called ${platform} function`);
        }

        if (platform === ClientPlatform.IOS) {
            window?.webkit?.messageHandlers?.fiMinutesWebCallback?.postMessage(stringifiedPayload);
            // eslint-disable-next-line no-console
            console.log(`callMobileClientFunction ~ successfully called ${platform} function`);
        }
    } catch (error) {
        console.error('error while passing data to mobile client in callMobileClientFunction: ', error);
    }
};

/**
 * Calculates the movement method when user navigates between stories
 * @param newIndex The index of the story that has just loaded
 * @param currentIndex The index of the previous story
 * @returns The movement direction
 */
export const getMovementMethod = (newIndex: number, currentIndex: number): MovementTypes => {
    if (newIndex > currentIndex) return MovementTypes.CLICK_NEXT;

    if (newIndex < currentIndex) return MovementTypes.CLICK_BACK;

    return MovementTypes.AUTO;
};

/**
 * Function that is called from Android or iOS to load the web stories data
 * @param receivedStoryData JSON string
 */
export const loadWebStoryDataFromApp = (setFiMinutesData: Function) => (receivedStoryData: string): void => {
    try {
        const webStoryData = JSON.parse(receivedStoryData);
        // eslint-disable-next-line no-console
        console.log('loadWebStoryDataFromApp ~ parsedJSON', webStoryData);

        if (helpers.isNilOrEmpty(webStoryData)) {
            return;
        }

        const modifiedWebStoryData = {
            ...webStoryData,
            stories: getStoryList(webStoryData),
        };

        setFiMinutesData(modifiedWebStoryData);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('loadWebStoryDataFromApp ~ error in receivedStoryData', error);
    } finally {
        // eslint-disable-next-line no-console
        console.log('loadWebStoryDataFromApp ~ receivedStoryData', receivedStoryData);
        // eslint-disable-next-line no-console
        console.log('loadWebStoryDataFromApp ~ string receivedStoryData', JSON.stringify(receivedStoryData));
    }
};

/**
 * Utility function to handle action CTA like redirect to another mobile page using deeplink
 * @param actionId The action ID sent by backend
 * @param storyItem The data of the current story
 * @returns void
 */
export const handleClickAction = (actionId: string, storyItem: IStoryItem) => (): void => {
    if (!actionId) return;

    const payload = WEB_CALLBACK_OBJECTS.PerformAction;
    payload.data.storyId = storyItem.story_id;
    payload.data.actionId = storyItem.banner_action_id || storyItem.cta_button_action_id;

    callMobileClientFunction(storyItem.client_platform, payload);
};

/**
 * Utility function to handle share CTA on any story
 * @param storyItem The data of the current story
 * @returns void
 */
export const handleShareAction = (storyItem: IStoryItem) => (): void => {
    const payload = WEB_CALLBACK_OBJECTS.ShareStory;
    payload.data.storyId = storyItem.story_id;

    callMobileClientFunction(storyItem.client_platform, payload);
};
