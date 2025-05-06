/* eslint-disable camelcase */

/**
 * @file All common interfaces for Fi minutes are defined here
 */

// eslint-disable-next-line no-shadow
export enum ClientPlatform {
    ANDROID = 'ANDROID',
    IOS = 'IOS',
    WEB = 'WEB',
}

// eslint-disable-next-line no-shadow
export enum MovementTypes {
    CLICK_NEXT = 'click_next',
    CLICK_BACK ='click_back',
    AUTO = 'auto',
}

interface IImage {
    image_url: string;
}

interface IText {
    plain_string: string;
}

export interface IStoryHeader {
    title: IText;
    sub_title: IText;
    image: IImage;
}

export interface Values {
    [key: string]: any
}

export interface IStoryItem {
    story_id: string;
    template_id: string;
    values: Values;
    client_platform: ClientPlatform;
    banner_action_id: string;
    cta_button_action_id: string;
}

interface IHeading {
    heading: IStoryHeader;
}

export interface IStoryGroupData {
    story_header: IHeading;
    client_platform: ClientPlatform;
    stories: IStoryItem[];
}

export interface ITemplateProps {
    storyItem: IStoryItem;
    index?: number;
}

export interface IBottomCTAProps {
    hasAction: boolean;
    handleActionClick: () => void;
    actionImg: string;
}
