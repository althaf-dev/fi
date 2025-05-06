/* eslint-disable no-useless-escape */
/* eslint-disable quotes */
/**
 * @file Constants for Fi minutes
 */

import Colors from '../../Themes/Colors';

import { ClientPlatform } from './interfaces';

export const DEFAULT_STORY_INTERVAL_TIME_IN_MS = 10000;

export const WEB_CALLBACK_OBJECTS = {
    LoadedNewScreenOnFiMinutes: {
        eventName: 'LoadedNewScreenOnFiMinutes',
        data: {
            newSlideStoryId: 'String',
            previousSlideStoryId: 'String',
            movementMethod: 'String',
        },
    },
    ViewedAllStories: {
        eventName: 'ViewedAllStories',
        data: {
            storyId: 'String',
        },
    },
    ShareStory: {
        eventName: 'ShareStory',
        data: {
            storyId: 'String',
        },
    },
    PerformAction: {
        eventName: 'PerformAction',
        data: {
            storyId: 'String',
            actionId: 'connectAccounts',
        },
    },
    TapOnClose: {
        eventName: 'TapOnClose',
        data: {
            storyId: 'String',
        },
    },
    FiMinutesPageLoaded: {
        eventName: 'FiMinutesPageLoaded',
    },
};

export const storyCustomStyles = {
    backgroundColor: Colors.SHARK,
};

export const TEMPLATE_IDS = {
    TEMPLATE_1: 'STORY_TEMPLATE_1',
    TEMPLATE_2A: 'STORY_TEMPLATE_2A',
    TEMPLATE_2B: 'STORY_TEMPLATE_2B',
    TEMPLATE_2C: 'STORY_TEMPLATE_2C',
    TEMPLATE_2D: 'STORY_TEMPLATE_2D',
    TEMPLATE_3: 'STORY_TEMPLATE_3',
    TEMPLATE_4A: 'STORY_TEMPLATE_4A',
    TEMPLATE_4B: 'STORY_TEMPLATE_4B',
    TEMPLATE_5: 'STORY_TEMPLATE_5',
    TEMPLATE_6A: 'STORY_TEMPLATE_6A',
    TEMPLATE_6B: 'STORY_TEMPLATE_6B',
    TEMPLATE_6C: 'STORY_TEMPLATE_6C',
    TEMPLATE_6D: 'STORY_TEMPLATE_6D',
    TEMPLATE_7: 'STORY_TEMPLATE_7',
    TEMPLATE_8: 'STORY_TEMPLATE_8',
};

export const BE_STORY_DATA = {
    story_header: {
        heading: {
            title: {
                plain_string: 'Minutes',
            },
            sub_title: {
                plain_string: '2022',
            },
            image: {
                image_url:
                    'https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo.svg',
            },
        },
    },
    stories: [
        {
            story_id: 'e9c32ae4-ea53-47f7-9556-8470fe4daedb',
            template_id: 'STORY_TEMPLATE_1',
            values: {
                action_id: '',
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                image_2:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Share.png',
                image_1:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.png',
                share_image: '',
                text_1: 'Presenting Presenting Presenting Presenting Presenting Presenting Presenting Presenting Presenting',
                text_2: 'ABCD ABCD ABCD ABCD ABCD ABCD ABCD',
                text_3: 'Fi Minutes of Fi Minutes of Fi Minutes of Fi Minutes ofFi Minutes ofFi Minutes of Fi Minutes of Fi Minutes of Fi Minutes of',
                text_4: '',
            },
        },
        {
            story_id: '342c0381-af6b-40e6-9b34-ffc5d44b353e',
            template_id: 'STORY_TEMPLATE_2A',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                image_1:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Pixel+Rupee.png',
                text_1: 'Your average monthly spent in 2022 was | Your average monthly spent in 2022 was Your average monthly spent in 2022 was Your average monthly spent in 2022 was Your average monthly spent in 2022 was',
                text_2: '35,27000000000',
                text_3: 'Not bad! | Your average monthly spent in 2022 was Your average monthly spent in 2022 was Your average monthly spent in 2022 was Your average monthly spent in 2022 was Your average monthly spent in 2022 was',
            },
        },
        {
            story_id: '63658297-5e64-40c8-8a04-c6c6cc99c557',
            template_id: 'STORY_TEMPLATE_2B',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Share.png',
                text_1: 'Your top category was | Your top category was Your top category was Your top category was Your top category was',
                text_2: 'Food & Drinks | Food & Drinks Food & Drinks Food & Drinks Food & Drinks Food & Drinks Food & Drinks',
                text_3: 'You spent 1,15,450 on it last year | You spent 1,15,450 on it last year You spent 1,15,450 on it last year You spent 1,15,450 on it last year You spent 1,15,450 on it last year',
            },
        },
        {
            story_id: '563e266c-1248-4e01-a0d5-ebea4df01812',
            template_id: 'STORY_TEMPLATE_2C',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                icon_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/zomato-logo-square.png',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Share.png',
                text_1: 'Your favourite merchant this year was | Your favourite merchant this year was Your favourite merchant this year was Your favourite merchant this year was Your favourite merchant this year was',
                text_2: 'Myntra',
                text_3: 'You shopped with them a whooping 78 times last year | You shopped with them a whooping 78 times last year You shopped with them a whooping 78 times last year You shopped with them a whooping 78 times last year You shopped with them a whooping 78 times last year',
                text_4: 'MY',
            },
        },
        {
            story_id: 'a1bc308b-7884-4029-a820-121484df6c4a',
            template_id: 'STORY_TEMPLATE_2D',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                text_1: "You've earned | You've earned You've earned You've earned You've earned You've earned You've earned You've earned",
                text_2: '15000000000000000000',
                text_3: 'money-plants | money-plants money-plants money-plants money-plants ',
                text_4: 'Your money-plants have now grown into trees and are living happily :) | Your money-plants have now grown into trees and are living happily :) Your money-plants have now grown into trees and are living happily :)',
            },
        },
        {
            story_id: 'c97582bf-0b9c-4220-b5fe-e2d357c5bdee',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                share_image: '',
            },
        },
        {
            story_id: 'd4a9558f-67ab-4694-a68a-c811c996226c',
            template_id: 'STORY_TEMPLATE_4A',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                items: '[{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Gold.png","sub_title":"56,000000000000","title":"Stocks \\u0026 MF Stocks MF Stocks MF"},{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Silver.png","sub_title":"28,3000000000","title":"Deposits Deposits Deposits Deposits"},{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Bronze.png","sub_title":"22,0000000000","title":"Crypto Crypto Crypto Crypto Crypto Crypto Crypto"}]',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Share.png',
                text_1: 'Your top investments in 2022',
            },
        },
        {
            story_id: '24a9558f-67ab-4694-a68a-c811c996226d',
            template_id: 'STORY_TEMPLATE_4B',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                items: '[{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Gold.png","sub_title":"56,00000000000","title":"Stocks \\u0026 MF Stocks MF Stocks MF Stocks MF Stocks MF"},{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Silver.png","sub_title":"28,30000000000000","title":"Deposits Deposits Deposits Deposits Deposits Deposits"},{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Bronze.png","sub_title":"22,0000000000000000","title":"Crypto Crypto Crypto Crypto Crypto Crypto"}]',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Share.png',
                text_1: 'Your top merchants in 2022',
            },
        },
        {
            story_id: '999e266c-1248-4e01-a0d5-ebea4df01812',
            template_id: 'STORY_TEMPLATE_5',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                centre_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/template-5-centre-img.png',
                box_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/template-5-box-cloud-img.png',
                text_1: "2022 was a chill year for you on Fi. But 2023's challenges will be different.",
                text_2: "The temptations to splurge will be many, and you'll find a way around them. You will automate your retirement savings, or save for that dream vacay.",
                text_3: 'Buckle up! We got this!',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Share.png',
            },
        },
        {
            story_id: '123e266c-1248-4e01-a0d5-ebea4df01813',
            template_id: 'STORY_TEMPLATE_2C',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                icon_image: '',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Share.png',
                text_1: 'Your favourite merchant this year was',
                text_2: 'Zomato Technologies Pvt. Ltd.',
                text_3: 'You shopped with them a whooping 123 times last year',
                text_4: 'YO',
            },
        },
        {
            story_id: 'a193f373-bfe9-4261-97c3-ccfe75a5a84c',
            template_id: 'STORY_TEMPLATE_1',
            values: {
                action_id: 'ConnectAccounts',
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                image_2:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Share.png',
                image_1: '',
                share_image: '',
                text_1: '',
                text_2: '',
                text_3: '',
                text_4: '',
            },
        },
        {
            story_id: '0bb74400-003e-4c07-bc12-ab050094d76c',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Share.png',
            },
        },
        {
            story_id: 'f6d869d7-fd49-4dd3-aafc-d050bdd2bafa',
            template_id: 'STORY_TEMPLATE_4A',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                items: '[{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Gold.png","sub_title":"12,600","title":"Gadget"},{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Silver.png","sub_title":"8,500","title":"Food \\u0026 Drinks"},{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Silver.png","sub_title":"8,500","title":"Food \\u0026 Drinks"}]',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Share.png',
                text_1: 'Your top categories in 2022',
            },
        },
        {
            story_id: 'ca2445c7-f425-4e3b-9146-d0de6be684ef',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                share_image: '',
            },
        },
        {
            story_id: 'be75af44-7838-4afc-ae52-40724b7feb8a',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                share_image: '',
            },
        },
        {
            story_id: '2fc8b7dc-ca08-4b35-bd6a-ff30e39cb404',
            template_id: 'STORY_TEMPLATE_2A',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                image_1:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Pixel+Rupee.png',
                text_1: 'You invested 42 times and made your own treasure',
                text_2: '3,05,450',
                text_3: 'Way to go champ!!',
            },
        },
        {
            story_id: '8f583eb3-0406-48bd-bdba-b2c324708276',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                share_image: '',
            },
        },
        {
            story_id: '952ff2fa-01c2-4e3f-9b14-1fdbc563b4ee',
            template_id: 'STORY_TEMPLATE_2B',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Share.png',
                text_1: 'You invested the most in',
                text_2: 'Stocks & MF',
                text_3: 'You invested 2,23,100 in it last year',
            },
        },
        {
            story_id: '31bc308b-7884-4029-a820-121484df6c4a',
            template_id: 'STORY_TEMPLATE_2D',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                text_1: 'And those gave you',
                text_2: '2,34,123',
                text_3: 'fi-coins',
                text_4: 'turns out money does grow on trees!',
            },
        },
        {
            story_id: 'd619dd80-68ec-49cf-9f6e-1fc2dcea6ff8',
            template_id: 'STORY_TEMPLATE_6A',
            values: {
                // bg_lottie: 'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                value_card: {
                    title: {
                        plain_string: 'PORTFOLIO ON FI',
                    },
                    sub_title: {
                        icons: ['', '', '', '', ''],
                        post_text: '+2',
                    },
                    value: {
                        text: '₹1,47,789',
                        color: '#C5E9B2',
                    },
                    description: {
                        pre_icon: '',
                        text: {
                            text: '13.6% increase from December',
                            color: '#FFFFFF',
                        },
                    },
                    summary: {
                        text: "Your investments had a 'New Year New Me' moment too Your investments had a 'New Year New Me' moment too Your investments had a 'New Year New Me' moment too",
                        color: '#FFFFFF',
                    },
                },
                bottom_sheet_list_view: {
                    title: {
                        plain_string: 'PORTFOLIO ON FI',
                    },
                    primary_text: '₹23,500',
                    items: [
                        {
                            icon: '',
                            title: 'Stocks & MF',
                            // sub_title: {
                            //     text: {
                            //         text: '₹823',
                            //         color: '#CF8888',
                            //     },
                            //     post_icon: '',
                            // },
                            value: '16,000',
                        },
                        {
                            icon: '',
                            title: 'Jump',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '45,600',
                        },
                        {
                            icon: '',
                            title: 'US Stocks',
                            // sub_title: {
                            //     text: {
                            //         text: '₹823',
                            //         color: '#CF8888',
                            //     },
                            //     post_icon: '',
                            // },
                            value: '16,000',
                        },
                        {
                            icon: '',
                            title: 'Deposits',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '45,600',
                        },
                    ],
                    footer: {
                        text: {
                            text: 'Your spends across all your connected accounts',
                            color: '#878A8D',
                        },
                        post_icon: '',
                    },
                },
            },
        },
        {
            story_id: 'd619dd80-68ec-49cf-9f6e-1fc2dcea6ff8',
            template_id: 'STORY_TEMPLATE_6A',
            values: {
                // bg_lottie: 'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                value_card: {
                    title: {
                        plain_string: 'PORTFOLIO ON FI',
                    },
                    value: {
                        text: '₹1,47,789',
                        color: '#C5E9B2',
                    },
                    description: {
                        pre_icon: '',
                        text: {
                            text: '13.6% increase from December',
                            color: '#FFFFFF',
                        },
                    },
                    summary: {
                        text: 'Good start to 2023!',
                        color: '#FFFFFF',
                    },
                },
                bottom_sheet_list_view: {
                    title: 'Your investments on Fi in Jan',
                    primary_text: '₹23,500',
                    items: [
                        {
                            icon: '',
                            title: 'Stocks & MF',
                            // sub_title: {
                            //     text: {
                            //         text: '₹823',
                            //         color: '#CF8888',
                            //     },
                            //     post_icon: '',
                            // },
                            value: '16,000',
                        },
                        {
                            icon: '',
                            title: 'Jump',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '45,600',
                        },
                        {
                            icon: '',
                            title: 'US Stocks',
                            // sub_title: {
                            //     text: {
                            //         text: '₹823',
                            //         color: '#CF8888',
                            //     },
                            //     post_icon: '',
                            // },
                            value: '16,000',
                        },
                    ],
                    footer: {
                        pre_icon: '',
                        text: {
                            text: 'BY our licensed partner',
                            color: '#CF8888',
                        },
                    },
                },
            },
        },
        {
            story_id: 'ee5d39b0-7ca0-4e1a-b47f-cad1abf921ea',
            template_id: 'STORY_TEMPLATE_6B',
            values: {
                image_card: {
                    header: "Here's where you spent most on Food",
                    image: '',
                    title: 'Food & Drinks',
                    description: '₹14,530',
                    info: {
                        text: {
                            text: '₹823',
                            color: '#CF8888',
                        },
                        post_icon: '',
                    },
                },
                bottom_sheet_list_view: {
                    title: 'Your investments on Fi in Jan',
                    primary_text: '₹23,500',
                    items: [
                        {
                            icon: '',
                            title: 'Stocks & MF',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '16,000',
                        },
                        {
                            icon: '',
                            title: 'Jump',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '45,600',
                        },
                        {
                            icon: '',
                            title: 'US Stocks',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '16,000',
                        },
                        {
                            icon: '',
                            title: 'Deposits',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '45,600',
                        },
                    ],
                    footer: {
                        text: {
                            text: '₹823',
                            color: '#CF8888',
                        },
                        post_icon: '',
                    },
                },
            },
        },
        {
            story_id: 'a0ed10ce-43a1-4730-a089-84bace7c78f0',
            template_id: 'STORY_TEMPLATE_7',
            values: {
                // bg_lottie: 'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.json',
                text_1: 'Your big wins this month!',
                text_2: 'When compared to December',
                image_card_list: [
                    {
                        image: '',
                        title: 'Food & Drinks',
                        description: '₹14,530',
                        info: {
                            text: {
                                text: '₹823',
                                color: '#CF8888',
                            },
                            post_icon: '',
                        },
                    },
                    {
                        image: '',
                        title: 'Food & Drinks',
                        description: '₹14,530',
                        info: {
                            text: {
                                text: '₹823',
                                color: '#CF8888',
                            },
                            post_icon: '',
                        },
                    },
                    {
                        image: '',
                        title: 'Food & Drinks',
                        description: '₹14,530',
                        info: {
                            text: {
                                text: '₹823',
                                color: '#CF8888',
                            },
                            post_icon: '',
                        },
                    },
                ],
            },
        },
        {
            story_id: 'ee5d39b0-7ca0-4e1a-b47f-cad1abf921ea',
            template_id: 'STORY_TEMPLATE_6C',
            values: {
                text_1: 'If you had to describe your January in money',
                bottom_sheet_list_view: {
                    items: [
                        {
                            icon: '',
                            title: 'Stocks & MF',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '16,000',
                        },
                        {
                            icon: '',
                            title: 'Jump',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '45,600',
                        },
                        {
                            icon: '',
                            title: 'US Stocks',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '16,000',
                        },
                        {
                            icon: '',
                            title: 'Jump',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '45,600',
                        },
                        {
                            icon: '',
                            title: 'US Stocks',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '16,000',
                        },
                    ],
                    banner_url:
                        'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/AddFundsBanner.png',
                    banner_action_id: 'add-fund-action',
                },
            },
        },
    ],
    client_platform: 'ANDROID',
};

export const BE_STORY_DATA_1 = {
    story_header: {
        heading: {
            title: {
                plain_string: 'Minutes',
            },
            sub_title: {
                plain_string: '2022',
            },
            image: {
                image_url:
                    'https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo.svg',
            },
        },
    },
    stories: [
        {
            story_id: 'ee5d39b0-7ca0-4e1a-b47f-cad1abf921ea',
            template_id: 'STORY_TEMPLATE_6C',
            values: {
                text_1: 'If you had to describe your January in money',
                bottom_sheet_list_view: {
                    items: [
                        {
                            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/OpeningBalance.png',
                            title: {
                                plain_string: 'Opening Balance',
                            },
                            value: {
                                plain_string: '34',
                            },
                        },
                    ],
                    banner_url:
                        'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/AddFundsBanner.png',
                    banner_action_id: 'add-fund-action',
                },
            },
        },
        {
            story_id: 'ee5d39b0-7ca0-4e1a-b47f-cad1tyf921ea',
            template_id: 'STORY_TEMPLATE_6D',
            values: {
                value_card: {
                    title: {
                        plain_string: 'PORTFOLIO ON FI',
                    },
                    value: {
                        text: '₹1,47,789',
                        color: '#C5E9B2',
                    },
                    description: {
                        pre_icon: '',
                        text: {
                            text: '13.6% increase from December',
                            color: '#FFFFFF',
                        },
                    },
                    summary: {
                        text: 'Good start to 2023!',
                        color: '#FFFFFF',
                    },
                },
                bottom_sheet_center_image_view: {
                    image: 'https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo.svg',
                    title: {
                        plain_string: 'Missing Something?',
                    },
                    subtitle: {
                        plain_string:
                            'Connect your accounts to Fi and get your savings and spending across all your bank accounts. See the whole picture!',
                    },
                    cta_button_action_id: 'add-fund-action',
                    cta_button_text: {
                        font_color: '#FFFFFF',
                        bg_color: '#00B899',
                        plain_string: 'Check Score',
                    },
                },
            },
        },
    ],
    client_platform: 'ANDROID',
};

export const BE_STORY_DATA_2 = {
    story_header: {
        heading: {
            title: { plain_string: 'Minutes' },
            sub_title: { plain_string: '2022' },
            image: {
                image_url:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Fi-logo.png',
            },
        },
    },
    stories: [
        {
            story_id: 'e9c32ae4-ea53-47f7-9556-8470fe4daedb',
            template_id: 'STORY_TEMPLATE_1',
            values: {
                action_id: '',
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/FiMinutesIntro.json',
                image_1:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/2022.png',
                image_2: '',
                text_1: 'Presenting',
                text_2: "ABCD's",
                text_3: 'Fi Minutes of',
                text_4: '',
            },
        },
        {
            story_id: 'c97582bf-0b9c-4220-b5fe-e2d357c5bdee',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/SpendsIntro.json',
                share_image: '',
            },
        },
        {
            story_id: '342c0381-af6b-40e6-9b34-ffc5d44b353e',
            template_id: 'STORY_TEMPLATE_2A',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/AvgSpendsPerMonth.json',
                image_1:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Rupee.png',
                text_1: 'Your monthly average spend was',
                text_2: '51,620',
                text_3: 'Not bad!',
            },
        },
        {
            story_id: '0bb74400-003e-4c07-bc12-ab050094d76c',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/TopCategoryQ.json',
                share_image: '',
            },
        },
        {
            story_id: '63658297-5e64-40c8-8a04-c6c6cc99c557',
            template_id: 'STORY_TEMPLATE_2B',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/TopCategory_Others.json',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/ShareButton.png',
                text_1: 'Your top category was',
                text_2: 'Credit Card \\u0026 Loan',
                text_3: 'You spent 4,12,502 on it last year',
            },
        },
        {
            story_id: 'f6d869d7-fd49-4dd3-aafc-d050bdd2bafa',
            template_id: 'STORY_TEMPLATE_4A',
            values: {
                bg_lottie: '',
                items: '[{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Gold.png","sub_title":"4,12,502","title":"Credit Card \\u0026 Loan"},{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Silver.png","sub_title":"90,339","title":"Food \\u0026 Drinks"},{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Bronze.png","sub_title":"49,228","title":"Housing \\u0026 Bills"}]',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/ShareButton.png',
                text_1: 'Your top categories in 2022',
            },
        },
        {
            story_id: 'ca2445c7-f425-4e3b-9146-d0de6be684ef',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/TopMerchantQ.json',
                share_image: '',
            },
        },
        {
            story_id: '563e266c-1248-4e01-a0d5-ebea4df01812',
            template_id: 'STORY_TEMPLATE_2C',
            values: {
                bg_lottie: '',
                icon_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/Merchant//All+Merchant+Logos/Swiggy.png',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/ShareButton2.png',
                text_1: 'Your favourite merchant this year was',
                text_2: 'Swiggy',
                text_3: 'You shopped with them a whooping 83 times last year',
                text_4: 'S',
            },
        },
        {
            story_id: '5a813b50-dabc-4718-a9fe-405c1375dc9e',
            template_id: 'STORY_TEMPLATE_4B',
            values: {
                bg_lottie: '',
                items: '[{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Gold.png","sub_title":"","title":"Swiggy"},{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Silver.png","sub_title":"","title":"Cred"},{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Bronze.png","sub_title":"","title":"Mubashir"}]',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/ShareButton2.png',
                text_1: 'And your top merchants of 2022',
            },
        },
        {
            story_id: '735c2b7d-046e-4644-8f14-26501f49abd0',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/TopMonth_Sep.json',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/ShareButton2.png',
            },
        },
        {
            story_id: 'be75af44-7838-4afc-ae52-40724b7feb8a',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/InvestIntro.json',
                share_image: '',
            },
        },
        {
            story_id: '2fc8b7dc-ca08-4b35-bd6a-ff30e39cb404',
            template_id: 'STORY_TEMPLATE_2A',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/InvestTotal.json',
                image_1:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Rupee.png',
                text_1: 'You invested 44 times and made your own treasure',
                text_2: '2,36,425',
                text_3: 'Way to go champ!!',
            },
        },
        {
            story_id: '8f583eb3-0406-48bd-bdba-b2c324708276',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/InvestCategoryQ.json',
                share_image: '',
            },
        },
        {
            story_id: '952ff2fa-01c2-4e3f-9b14-1fdbc563b4ee',
            template_id: 'STORY_TEMPLATE_2B',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/InvestCategory_Deposits.json',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/ShareButton3.png',
                text_1: 'You invested the most in',
                text_2: 'Deposits',
                text_3: 'You invested 1,01,220 in it last year',
            },
        },
        {
            story_id: 'd4a9558f-67ab-4694-a68a-c811c996226c',
            template_id: 'STORY_TEMPLATE_4A',
            values: {
                bg_lottie: '',
                items: '[{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Gold.png","sub_title":"1,01,220","title":"Deposits"},{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Silver.png","sub_title":"80,000","title":"Jump"},{"image":"https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Bronze.png","sub_title":"55,205","title":"Stocks \\u0026 MF"}]',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/ShareButton3.png',
                text_1: 'Your top investments in 2022',
            },
        },
        {
            story_id: '260e7903-6cd2-4487-b7de-51156568fd89',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/RewardsIntro.json',
                share_image: '',
            },
        },
        {
            story_id: 'a1bc308b-7884-4029-a820-121484df6c4a',
            template_id: 'STORY_TEMPLATE_2D',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/MoneyPlantsTotal.json',
                text_1: "You've earned",
                text_2: '142',
                text_3: 'money-plants',
                text_4: 'Your money-plants have now grown into trees and are living happily :)',
            },
        },
        {
            story_id: '39adff8e-2d0a-47c8-ad44-3f4b17fc4d67',
            template_id: 'STORY_TEMPLATE_2D',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/FiCoinsTotal.json',
                text_1: 'And those gave you',
                text_2: '65,704',
                text_3: 'fi-coins',
                text_4: 'turns out money does grow on trees!',
            },
        },
        {
            story_id: 'd74f01d4-c965-4297-b4c6-28437340c033',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/FinalHoroscopeIntro.json',
                share_image: '',
            },
        },
        {
            story_id: 'f4840866-e024-4692-854e-c4f2edd7963f',
            template_id: 'STORY_TEMPLATE_5',
            values: {
                bg_lottie:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/FinalHoroscope.json',
                box_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Horoscope-Box.png',
                centre_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/Horoscope-Centre.png',
                share_image:
                    'https://epifi-icons.s3.ap-south-1.amazonaws.com/fi-minutes/web/ShareButton.png',
                text_1: "You lived smart and fast in 2022. But 2023 will be even faster. Your investing game will go to a whole other level this year with automation and diversification. You know what? You're going to ace it!",
                text_2: '',
                text_3: "You're the saviour! You saved like a pro, and never took 'No' for an answer, even from yourself. The role model we all wished we had.",
            },
        },
    ],
    client_platform: 'ANDROID',
};

export const DEFAULT_FI_MINUTES_DATA = {
    story_header: {
        heading: {
            title: '',
            sub_title: '',
            image: '',
        },
    },
    client_platform: ClientPlatform.WEB, // Keeping WEB since default value should not be android or ios so that story interval time is 10s initially
    stories: [{ content: null, storyData: { story_id: '' } }],
};

export const MyData = {
    story_header: {
        heading: {
            title: { plain_string: 'Minutes' },
            sub_title: { plain_string: 'April 2024' },
            image: {
                image_url:
                    'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/fi-minutes-header-logo.png',
            },
        },
    },
    stories: [
        // {
        //     story_id: '3867ca36-1ab6-4e18-af31-5175656c1601',
        //     template_id: 'STORY_TEMPLATE_3',
        //     values: {
        //         bg_lottie:
        //             'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/Apr-Intro.json',
        //     },
        // },
        // {
        //     story_id: '3867ca36-1ab6-4e18-af31-5175656c1602',
        //     template_id: 'STORY_TEMPLATE_3',
        //     values: {
        //         bg_lottie:
        //             'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/Apr-About.json',
        //     },
        // },
        // {
        //     story_id: '3867ca36-1ab6-4e18-af31-5175656c1603',
        //     template_id: 'STORY_TEMPLATE_6A',
        //     values: {
        //         bottom_sheet_list_view: {
        //             title: { plain_string: 'See how you spent last month' },
        //             items: [
        //                 {
        //                     icon: 'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/NumberOfTxns.png',
        //                     title: { plain_string: 'No. of transactions' },
        //                     value: { plain_string: '1' },
        //                 },
        //                 {
        //                     icon: 'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/AvgTxnAmount.png',
        //                     title: {
        //                         plain_string: 'Average transaction amount',
        //                     },
        //                     value: { plain_string: '₹78' },
        //                 },
        //                 {
        //                     icon: 'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/HighestTxn.png',
        //                     title: { plain_string: 'Highest transaction' },
        //                     value: { plain_string: '₹78' },
        //                 },
        //             ],
        //         },
        //         value_card: {
        //             title: { plain_string: 'TOTAL SPENT ON FI' },
        //             value: { font_color: '#C5E9B2', plain_string: '₹78' },
        //             description: {
        //                 text: { plain_string: '₹20,132 decrease from March' },
        //                 pre_icon:
        //                     'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/DecGray.png',
        //             },
        //         },
        //     },
        // },
        // {
        //     story_id: '3867ca36-1ab6-4e18-af31-5175656c1604',
        //     template_id: 'STORY_TEMPLATE_6A',
        //     values: {
        //         bottom_sheet_list_view: {
        //             title: {
        //                 plain_string: 'Your expenses across bank accounts',
        //             },
        //             items: [
        //                 {
        //                     icon: 'https://epifi-icons.s3.ap-south-1.amazonaws.com/connectedaccounts/banks/Axis.png',
        //                     title: { plain_string: 'Axis ••0482' },
        //                     value: { plain_string: '₹47,785' },
        //                 },
        //             ],
        //             footer: {
        //                 text: {
        //                     font_color: '#878A8D',
        //                     plain_string:
        //                         'Your spends across all your connected accounts',
        //                 },
        //                 pre_icon:
        //                     'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/Info.png',
        //             },
        //         },
        //         value_card: {
        //             title: { plain_string: 'SPENDS ON OTHER ACCOUNTS' },
        //             sub_title: {
        //                 icons: [
        //                     'https://epifi-icons.s3.ap-south-1.amazonaws.com/connectedaccounts/banks/Axis.png',
        //                 ],
        //             },
        //             value: { font_color: '#C5E9B2', plain_string: '₹47,785' },
        //             description: {
        //                 text: { plain_string: '₹81,660 decrease from March' },
        //                 pre_icon:
        //                     'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/DecGray.png',
        //             },
        //         },
        //     },
        // },
        {
            story_id: '3867ca36-1ab6-4e18-af31-5175656c1605',
            template_id: 'STORY_TEMPLATE_7',
            values: {
                image_card_list: {
                    image_cards: [
                        {
                            image: 'https://epifi-icons.s3.ap-south-1.amazonaws.com/txn-categories/transparent/Credit%20Card%20%26%20Loan.svg',
                            bg_color: '#9287BD',
                            title: { plain_string: 'Credit Card \u0026 Loan' },
                            description_pre_icon: 'https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/coins_success.png',
                            info: {
                                text: {
                                    font_color: '#fff',
                                    plain_string: '100',
                                    font_style: 'displayXL',
                                },
                                pre_icon:
                                    'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/DecGreen.png',
                            },
                        },
                        {
                            image: 'https://epifi-icons.s3.ap-south-1.amazonaws.com/txn-categories/transparent/Food%20%26%20Drinks.svg',
                            bg_color: '#879EDB',
                            title: { plain_string: 'Food \u0026 Drinks' },
                            description: { plain_string: '₹13,080' },
                            info: {
                                text: {
                                    font_color: '#CF8888',
                                    plain_string: '₹6,001',
                                },
                                post_icon:
                                    'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/IncRed.png',
                            },
                        },
                        {
                            image: 'https://epifi-icons.s3.ap-south-1.amazonaws.com/txn-categories/transparent/Money%20Transfer.svg',
                            bg_color: '#7FBECE',
                            title: { plain_string: 'Money Transfer' },
                            description: { plain_string: '₹6,310' },
                            info: {
                                text: {
                                    font_color: '#87BA6B',
                                    plain_string: '₹77,414',
                                },
                                post_icon:
                                    'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/DecGreen.png',
                            },
                        },
                    ],
                },
                text_1: 'Your big spends last month!',
                text_2: 'When compared to March',
            },
        },
        {
            story_id: '3867ca36-1ab6-4e18-af31-5175656c1606',
            template_id: 'STORY_TEMPLATE_6B',
            values: {
                bottom_sheet_list_view: {
                    title: { plain_string: 'You paid most to these' },
                    items: [
                        {
                            title: { plain_string: 'Cred Club' },
                            value: { plain_string: '₹4,406' },
                        },
                        {
                            title: { plain_string: 'Airtel Bill Payments' },
                            value: { plain_string: '₹2,354' },
                        },
                        {
                            title: { plain_string: 'Others' },
                            value: { plain_string: '₹10,008' },
                        },
                    ],
                },
                image_card: {
                    header: { plain_string: "Here's where you spent most on" },
                    image: 'https://epifi-icons.s3.ap-south-1.amazonaws.com/txn-categories/transparent/Credit%20Card%20%26%20Loan.svg',
                    bg_color: '#9287BD',
                    title: { plain_string: 'Credit Card \u0026 Loan' },
                    description: { plain_string: '₹16,768' },
                    info: {
                        text: { font_color: '#87BA6B', plain_string: '₹2,094' },
                        post_icon:
                            'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/DecGreen.png',
                    },
                },
            },
        },
        {
            story_id: '3867ca36-1ab6-4e18-af31-5175656c1607',
            template_id: 'STORY_TEMPLATE_6A',
            values: {
                bottom_sheet_list_view: {
                    title: { plain_string: 'See what impacted your score' },
                    items: [
                        {
                            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/OnTimePayment.png',
                            title: { plain_string: 'On-time payment' },
                            value: { plain_string: 'Excellent' },
                        },
                        {
                            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/CreditAge.png',
                            title: { plain_string: 'Credit Age' },
                            value: { plain_string: 'Weak' },
                        },
                        {
                            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/AvailableCredit.png',
                            title: { plain_string: 'Available Credit' },
                            value: { plain_string: 'Excellent' },
                        },
                    ],
                    footer: {
                        text: { plain_string: 'BY OUR LICENSED PARTNER' },
                        post_icon:
                            'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/ExperianLogo.png',
                    },
                },
                value_card: {
                    title: { plain_string: 'CREDIT SCORE' },
                    value: { font_color: '#C5E9B2', plain_string: '878' },
                    description: {
                        text: { plain_string: 'Refreshed in February' },
                    },
                    summary: {
                        plain_string:
                            "That's a great score! Keep up the good work",
                    },
                },
            },
        },
        {
            story_id: '3867ca36-1ab6-4e18-af31-5175656c1608',
            template_id: 'STORY_TEMPLATE_6C',
            values: {
                bottom_sheet_list_view: {
                    items: [
                        {
                            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/OpeningBalance.png',
                            title: { plain_string: 'Opening Balance' },
                            value: { plain_string: '₹67,427' },
                        },
                        {
                            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/Spends.png',
                            title: { plain_string: 'Spends' },
                            sub_title: {
                                text: {
                                    font_color: '#878A8D',
                                    plain_string: '68.02%',
                                },
                                post_icon:
                                    'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/DecGray.png',
                            },
                            value: { plain_string: '₹47,863' },
                        },
                        {
                            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/Invested.png',
                            title: { plain_string: 'Invested' },
                            sub_title: {
                                text: {
                                    font_color: '#878A8D',
                                    plain_string: '380.5%',
                                },
                                post_icon:
                                    'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/IncGray.png',
                            },
                            value: { plain_string: '₹96,101' },
                        },
                        {
                            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/Refunds.png',
                            title: { plain_string: 'Refunds' },
                            value: { plain_string: '-' },
                        },
                        {
                            icon: 'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/CreditScore.png',
                            title: { plain_string: 'Credit Score' },
                            sub_title: {
                                text: {
                                    font_color: '#878A8D',
                                    plain_string: '8 pts',
                                },
                                post_icon:
                                    'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/DecGray.png',
                            },
                            value: { plain_string: '878' },
                        },
                    ],
                    banner_url:
                        'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/AnalyserBanner.png',
                    banner_action_id: 'analyser-action',
                },
                text_1: 'If you had to describe your April in money',
            },
        },
        {
            story_id: '3867ca36-1ab6-4e18-af31-5175656c1609',
            template_id: 'STORY_TEMPLATE_3',
            values: {
                bg_lottie:
                    'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/Apr-Outro.json',
            },
        },
    ],
    client_platform: 'IOS',
};

export const T68 = {
    story_header: {
        heading: {
            title: { plain_string: 'Minutes' },
            sub_title: { plain_string: 'April 2024' },
            image: {
                image_url:
                    'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/fi-minutes-header-logo.png',
            },
        },
    },
    stories: [
        {
            story_id: 'ee5d39b0-7ca0-4e1a-b47f-cad1abf921ea',
            template_id: 'STORY_TEMPLATE_6C',
            values: {
                bottom_sheet_bg_linear_gradient: {
                    degree: 315,
                    linear_color_stops: [
                        {
                            color: '#234646',
                        },
                        {
                            color: '#050507',
                        },
                        {
                            color: '#3B2E56',
                        },
                    ],
                },
                text_1: 'If you had to describe your January in money',
                bottom_sheet_list_view: {
                    items: [
                        {
                            icon: '',
                            title: 'Stocks & MF',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '16,000',
                        },
                        {
                            icon: '',
                            title: 'Jump',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '45,600',
                        },
                        {
                            icon: '',
                            title: 'US Stocks',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '16,000',
                        },
                        {
                            icon: '',
                            title: 'Jump',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '45,600',
                        },
                        {
                            icon: '',
                            title: 'US Stocks',
                            sub_title: {
                                text: {
                                    text: '₹823',
                                    color: '#CF8888',
                                },
                                post_icon: '',
                            },
                            value: '16,000',
                        },
                    ],
                    banner_url:
                        'https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/AddFundsBanner.png',
                    banner_action_id: 'add-fund-action',
                },
            },
        },
        {
            story_id: '3867ca36-1ab6-4e18-af31-5175656c1609',
            template_id: 'STORY_TEMPLATE_8',
            values: {
                title: "Here's how you spent last month",
                subtitle: 'When compared to March',
                image: 'https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/story_milestone_2.png',
                bg_linear_gradient: {
                    degree: 315,
                    linear_color_stops: [
                        {
                            color: '#234646',
                        },
                        {
                            color: '#050507',
                        },
                        {
                            color: '#3B2E56',
                        },
                    ],
                },
            },
        },
    ],
};

export const actualData = `{\"story_header\":{\"heading\":{\"title\":{\"plain_string\":\"AmpliFi Round Up\"},\"sub_title\":{\"plain_string\":\"\"},\"image\":{\"image_url\":\"https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/fi-minutes-header-logo.png\"}}},\"stories\":[{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-1\",\"template_id\":\"STORY_TEMPLATE_8\",\"values\":{\"bg_linear_gradient\":\"{\\\"degree\\\":45, \\\"linear_color_stops\\\":[{\\\"color\\\":\\\"#3B2E56\\\", \\\"stop_percentage\\\":20}, {\\\"color\\\":\\\"#050507\\\", \\\"stop_percentage\\\":70}, {\\\"color\\\":\\\"#234646\\\", \\\"stop_percentage\\\":100}]}\",\"image\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/cc_minutes_intro.png\",\"title\":\"{\\\"font_color\\\":\\\"#FFFFFF\\\", \\\"plain_string\\\":\\\"Let\'s look back at your rewarding year with AmpliFi ⏪\\\", \\\"standard_font_style\\\":\\\"DISPLAY_3XL\\\"}\"}},{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-2\",\"template_id\":\"STORY_TEMPLATE_8\",\"values\":{\"bg_linear_gradient\":\"{\\\"degree\\\":45, \\\"linear_color_stops\\\":[{\\\"color\\\":\\\"#234646\\\", \\\"stop_percentage\\\":20}, {\\\"color\\\":\\\"#050507\\\", \\\"stop_percentage\\\":70}, {\\\"color\\\":\\\"#3B2E56\\\", \\\"stop_percentage\\\":100}]}\",\"subtitle\":\"{\\\"font_color\\\":\\\"#FFFFFF\\\", \\\"plain_string\\\":\\\"₹2,55,500\\\", \\\"standard_font_style\\\":\\\"NUMBER_3XL\\\"}\",\"title\":\"{\\\"font_color\\\":\\\"#FFFFFF\\\", \\\"plain_string\\\":\\\"This year you spent\\\", \\\"standard_font_style\\\":\\\"DISPLAY_XL\\\"}\"}},{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-3\",\"template_id\":\"STORY_TEMPLATE_8\",\"values\":{\"bg_linear_gradient\":\"{\\\"degree\\\":45, \\\"linear_color_stops\\\":[{\\\"color\\\":\\\"#3B2E56\\\", \\\"stop_percentage\\\":20}, {\\\"color\\\":\\\"#050507\\\", \\\"stop_percentage\\\":70}, {\\\"color\\\":\\\"#234646\\\", \\\"stop_percentage\\\":100}]}\",\"subtitle\":\"{\\\"font_color\\\":\\\"#FFFFFF\\\", \\\"plain_string\\\":\\\"₹3,399\\\", \\\"standard_font_style\\\":\\\"NUMBER_3XL\\\"}\",\"title\":\"{\\\"font_color\\\":\\\"#FFFFFF\\\", \\\"plain_string\\\":\\\"And you earned even more!\\\", \\\"standard_font_style\\\":\\\"DISPLAY_XL\\\"}\"}},{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-4\",\"template_id\":\"STORY_TEMPLATE_6C\",\"values\":{\"bottom_sheet_bg_linear_gradient\":\"{\\\"degree\\\":45, \\\"linear_color_stops\\\":[{\\\"color\\\":\\\"#3B2E56\\\", \\\"stop_percentage\\\":20}, {\\\"color\\\":\\\"#050507\\\", \\\"stop_percentage\\\":70}, {\\\"color\\\":\\\"#234646\\\", \\\"stop_percentage\\\":100}]}\",\"bottom_sheet_list_view\":\"{\\\"items\\\":[{\\\"icon\\\":\\\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/offers.png\\\", \\\"title\\\":{\\\"font_color\\\":\\\"#F6F9FD\\\", \\\"plain_string\\\":\\\"Welcome Gift Cards\\\"}, \\\"value\\\":{\\\"font_color\\\":\\\"#F6F9FD\\\", \\\"plain_string\\\":\\\"₹4,250\\\"}}, {\\\"icon\\\":\\\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/fi-coins.png\\\", \\\"title\\\":{\\\"font_color\\\":\\\"#F6F9FD\\\", \\\"plain_string\\\":\\\"Fi-Coins earned\\\"}, \\\"value\\\":{\\\"font_color\\\":\\\"#F6F9FD\\\", \\\"plain_string\\\":\\\"1009.00\\\"}}, {\\\"icon\\\":\\\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/globe.png\\\", \\\"title\\\":{\\\"font_color\\\":\\\"#F6F9FD\\\", \\\"plain_string\\\":\\\"Forex refunds\\\"}, \\\"value\\\":{\\\"font_color\\\":\\\"#F6F9FD\\\", \\\"plain_string\\\":\\\"₹3,009\\\"}}, {\\\"icon\\\":\\\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/heart.png\\\", \\\"title\\\":{\\\"font_color\\\":\\\"#F6F9FD\\\", \\\"plain_string\\\":\\\"Lounge passes used\\\"}, \\\"value\\\":{\\\"font_color\\\":\\\"#F6F9FD\\\", \\\"plain_string\\\":\\\"2\\\"}}, {\\\"icon\\\":\\\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/green_rupee.png\\\", \\\"title\\\":{\\\"font_color\\\":\\\"#F6F9FD\\\", \\\"plain_string\\\":\\\"Cashback \u0026 Discounts\\\"}, \\\"value\\\":{\\\"font_color\\\":\\\"#F6F9FD\\\", \\\"plain_string\\\":\\\"₹360\\\"}}]}\",\"text_1\":\"Your AmpliFi benefits in the last year\"}},{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-6\",\"template_id\":\"STORY_TEMPLATE_8\",\"values\":{\"bg_linear_gradient\":\"{\\\"degree\\\":45, \\\"linear_color_stops\\\":[{\\\"color\\\":\\\"#234646\\\", \\\"stop_percentage\\\":20}, {\\\"color\\\":\\\"#050507\\\", \\\"stop_percentage\\\":70}, {\\\"color\\\":\\\"#3B2E56\\\", \\\"stop_percentage\\\":100}]}\",\"image\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/story_milestone_1.png\",\"title\":\"{\\\"font_color\\\":\\\"#FFFFFF\\\", \\\"plain_string\\\":\\\"You\'ve unlocked new benefits for the next year!\\\", \\\"standard_font_style\\\":\\\"DISPLAY_2XL\\\"}\"}},{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-7\",\"template_id\":\"STORY_TEMPLATE_8\",\"values\":{\"bg_linear_gradient\":\"{\\\"degree\\\":45, \\\"linear_color_stops\\\":[{\\\"color\\\":\\\"#234646\\\", \\\"stop_percentage\\\":20}, {\\\"color\\\":\\\"#050507\\\", \\\"stop_percentage\\\":70}, {\\\"color\\\":\\\"#3B2E56\\\", \\\"stop_percentage\\\":100}]}\",\"image\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/story_milestone_2.png\",\"title\":\"{\\\"font_color\\\":\\\"#FFFFFF\\\", \\\"plain_string\\\":\\\"You\'ve unlocked new benefits for the next year!\\\", \\\"standard_font_style\\\":\\\"DISPLAY_2XL\\\"}\"}}],\"client_platform\":\"ANDROID\"}`;
export const actualData2 = "{\"story_header\":{\"heading\":{\"title\":{\"plain_string\":\"AmpliFi Round Up\"},\"sub_title\":{\"plain_string\":\"\"},\"image\":{\"image_url\":\"https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/fi-minutes-header-logo.png\"}}},\"stories\":[{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-1\",\"template_id\":\"STORY_TEMPLATE_8\",\"values\":{\"bg_linear_gradient\":{\"degree\":315,\"linear_color_stops\":[{\"color\":\"#3B2E56\",\"stop_percentage\":20},{\"color\":\"#050507\",\"stop_percentage\":70},{\"color\":\"#234646\",\"stop_percentage\":100}]},\"image\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/cc_minutes_intro.png\",\"title\":{\"font_color\":\"#FFFFFF\",\"plain_string\":\"Let's look back at your rewarding year with AmpliFi ⏪\",\"standard_font_style\":\"DISPLAY_2XL\"}}},{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-2\",\"template_id\":\"STORY_TEMPLATE_8\",\"values\":{\"bg_linear_gradient\":{\"degree\":315,\"linear_color_stops\":[{\"color\":\"#234646\",\"stop_percentage\":20},{\"color\":\"#050507\",\"stop_percentage\":70},{\"color\":\"#3B2E56\",\"stop_percentage\":100}]},\"lottie\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/cc_minutes_spend_lottie.json\",\"subtitle\":{\"font_color\":\"#FFFFFF\",\"plain_string\":\"₹11,000\",\"standard_font_style\":\"NUMBER_3XL\"},\"title\":{\"font_color\":\"#FFFFFF\",\"plain_string\":\"This year you spent\",\"standard_font_style\":\"DISPLAY_XL\"}}},{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-3\",\"template_id\":\"STORY_TEMPLATE_8\",\"values\":{\"bg_linear_gradient\":{\"degree\":315,\"linear_color_stops\":[{\"color\":\"#3B2E56\",\"stop_percentage\":20},{\"color\":\"#050507\",\"stop_percentage\":70},{\"color\":\"#234646\",\"stop_percentage\":100}]},\"lottie\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/cc_minutes_earn_lottie.json\",\"subtitle\":{\"font_color\":\"#FFFFFF\",\"plain_string\":\"₹4,000\",\"standard_font_style\":\"NUMBER_3XL\"},\"title\":{\"font_color\":\"#FFFFFF\",\"plain_string\":\"And you earned even more!\",\"standard_font_style\":\"DISPLAY_XL\"}}},{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-4\",\"template_id\":\"STORY_TEMPLATE_6C\",\"values\":{\"bottom_sheet_bg_linear_gradient\":{\"degree\":315,\"linear_color_stops\":[{\"color\":\"#3B2E56\",\"stop_percentage\":20},{\"color\":\"#050507\",\"stop_percentage\":70},{\"color\":\"#234646\",\"stop_percentage\":100}]},\"bottom_sheet_list_view\":{\"items\":[{\"icon\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/fi-coins.png\",\"title\":{\"font_color\":\"#F6F9FD\",\"plain_string\":\"Fi-Coins earned\"},\"value\":{\"font_color\":\"#F6F9FD\",\"plain_string\":\"1000.00\"}},{\"icon\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/globe.png\",\"title\":{\"font_color\":\"#F6F9FD\",\"plain_string\":\"Forex refunds\"},\"value\":{\"font_color\":\"#F6F9FD\",\"plain_string\":\"₹1,000\"}},{\"icon\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/heart.png\",\"title\":{\"font_color\":\"#F6F9FD\",\"plain_string\":\"Lounge passes used\"},\"value\":{\"font_color\":\"#F6F9FD\",\"plain_string\":\"0\"}},{\"icon\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/green_rupee.png\",\"title\":{\"font_color\":\"#F6F9FD\",\"plain_string\":\"Cashback & Discounts\"},\"value\":{\"font_color\":\"#F6F9FD\",\"plain_string\":\"₹2,000\"}}]},\"text_1\":\"Your AmpliFi benefits in the last year\"}},{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-6\",\"template_id\":\"STORY_TEMPLATE_8\",\"values\":{\"bg_linear_gradient\":{\"degree\":315,\"linear_color_stops\":[{\"color\":\"#234646\",\"stop_percentage\":20},{\"color\":\"#050507\",\"stop_percentage\":70},{\"color\":\"#3B2E56\",\"stop_percentage\":100}]},\"image\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/story_milestone_1.png\",\"title\":{\"font_color\":\"#FFFFFF\",\"plain_string\":\"You've unlocked new benefits for the next year!\",\"standard_font_style\":\"DISPLAY_2XL\"}}}],\"client_platform\":\"ANDROID\"}";
export const actualData3 = `{\"story_header\":{\"heading\":{\"title\":{\"plain_string\":\"AmpliFi Round Up\"},\"sub_title\":{\"plain_string\":\"\"},\"image\":{\"image_url\":\"https://dza2kd7rioahk.cloudfront.net/assets/fi-minutes/fi-minutes-header-logo.png\"}}},\"stories\":[{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-1\",\"template_id\":\"STORY_TEMPLATE_8\",\"values\":{\"bg_linear_gradient\":\"{\\\"degree\\\":315,\\\"linear_color_stops\\\":[{\\\"color\\\":\\\"#3B2E56\\\",\\\"stop_percentage\\\":20},{\\\"color\\\":\\\"#050507\\\",\\\"stop_percentage\\\":70},{\\\"color\\\":\\\"#234646\\\",\\\"stop_percentage\\\":100}]}\",\"image\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/cc_minutes_intro.png\",\"title\":\"{\\\"font_color\\\":\\\"#FFFFFF\\\",\\\"plain_string\\\":\\\"Let\'s look back at your rewarding year with AmpliFi ⏪\\\",\\\"standard_font_style\\\":\\\"DISPLAY_2XL\\\"}\"}},{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-2\",\"template_id\":\"STORY_TEMPLATE_8\",\"values\":{\"bg_linear_gradient\":\"{\\\"degree\\\":315,\\\"linear_color_stops\\\":[{\\\"color\\\":\\\"#234646\\\",\\\"stop_percentage\\\":20},{\\\"color\\\":\\\"#050507\\\",\\\"stop_percentage\\\":70},{\\\"color\\\":\\\"#3B2E56\\\",\\\"stop_percentage\\\":100}]}\",\"lottie\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/cc_minutes_spend_lottie.json\",\"subtitle\":\"{\\\"font_color\\\":\\\"#FFFFFF\\\",\\\"plain_string\\\":\\\"₹0\\\",\\\"standard_font_style\\\":\\\"NUMBER_3XL\\\"}\",\"title\":\"{\\\"font_color\\\":\\\"#FFFFFF\\\",\\\"plain_string\\\":\\\"This year you spent\\\",\\\"standard_font_style\\\":\\\"DISPLAY_XL\\\"}\"}},{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-5\",\"template_id\":\"STORY_TEMPLATE_7\",\"values\":{\"bg_linear_gradient\":\"{\\\"degree\\\":315,\\\"linear_color_stops\\\":[{\\\"color\\\":\\\"#234646\\\",\\\"stop_percentage\\\":20},{\\\"color\\\":\\\"#050507\\\",\\\"stop_percentage\\\":70},{\\\"color\\\":\\\"#3B2E56\\\",\\\"stop_percentage\\\":100}]}\",\"image_card_list\":\"{\\\"image_cards\\\":[{\\\"image\\\":\\\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/merchant_swiggy_4x.png\\\",\\\"title\\\":{\\\"plain_string\\\":\\\"Swiggy\\\"},\\\"description\\\":{\\\"plain_string\\\":\\\"1000\\\"},\\\"description_pre_icon\\\":\\\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/coins_success.png\\\"},{\\\"image\\\":\\\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/merchant_uber_4x.png\\\",\\\"title\\\":{\\\"plain_string\\\":\\\"Uber\\\"},\\\"description\\\":{\\\"plain_string\\\":\\\"900\\\"},\\\"description_pre_icon\\\":\\\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/coins_success.png\\\"},{\\\"image\\\":\\\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/merchant_bigbasket_4x.png\\\",\\\"title\\\":{\\\"plain_string\\\":\\\"Big Basket\\\"},\\\"description\\\":{\\\"plain_string\\\":\\\"100\\\"},\\\"description_pre_icon\\\":\\\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/coins_success.png\\\"}]}\",\"text_1\":\"Here\'s how much you earned on your favourite brands\"}},{\"story_id\":\"3867ca36-1ab6-4e18-af31-5175656c-cc-6\",\"template_id\":\"STORY_TEMPLATE_8\",\"values\":{\"bg_linear_gradient\":\"{\\\"degree\\\":315,\\\"linear_color_stops\\\":[{\\\"color\\\":\\\"#234646\\\",\\\"stop_percentage\\\":20},{\\\"color\\\":\\\"#050507\\\",\\\"stop_percentage\\\":70},{\\\"color\\\":\\\"#3B2E56\\\",\\\"stop_percentage\\\":100}]}\",\"image\":\"https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/story_milestone_1.png\",\"title\":\"{\\\"font_color\\\":\\\"#FFFFFF\\\",\\\"plain_string\\\":\\\"You\'ve unlocked new benefits for the next year!\\\",\\\"standard_font_style\\\":\\\"DISPLAY_2XL\\\"}\"}}],\"client_platform\":\"ANDROID\"}`;
