import { META_INFO_CONTEXT_KEYMAP } from '../../context';
import { WEBP_URL, PNGS_URL, SVGS_URL } from '../../constants/AssetConstants';

/* eslint-disable import/prefer-default-export */
const posterSectionData = {
    title: 'Contact the Fi Money customer care at:',
    sectionData: [
        {
            id: 1,
            configKey: META_INFO_CONTEXT_KEYMAP.hidePhoneNumberLabel,
            icon: `${SVGS_URL}phone.svg`,
            title: 'PHONE',
            hasCopyIcon: true,
            description: '080 47485490',
            alt: 'Contact Fi Money customer care',
        },
        {
            id: 2,
            configKey: META_INFO_CONTEXT_KEYMAP.hideEmailLabel,
            icon: `${SVGS_URL}mail.svg`,
            title: 'EMAIL',
            hasCopyIcon: true,
            description: 'help@fi.care',
            alt: 'Email Fi Money customer care',
        },
        {
            id: 3,
            configKey: META_INFO_CONTEXT_KEYMAP.hideInAppChatLabel,
            icon: `${SVGS_URL}chat.svg`,
            title: 'CHAT',
            hasCopyIcon: false,
            description: 'In-app chat',
            alt: 'Chat with Fi Money customer care',
        },
    ],
};

const threePosterBottomImageSectionData = [
    {
        id: 1,
        image: `${WEBP_URL}press.webp`,
        fallbackImage: `${PNGS_URL}press.png`,
        title: 'Press',
        description: '<div>Write to us at<br /><a style="color: #51B89A" href="mailto:press@fi.money">press@fi.money</a> for press enquiries</div>',
        alt: 'Contact Fi Money customer care at: 080 47485490',
    },
    {
        id: 2,
        image: `${WEBP_URL}work-at-fi.webp`,
        fallbackImage: `${PNGS_URL}work-at-fi.png`,
        title: 'Work at Fi',
        description: '<div>Looking to build next generation financial products? <a style="color: #51B89A; word-break: break-word;" href="https://fi.money/careers" target="_blank">Join our team</a></div>',
        alt: 'Email Fi Money customer care at help@fi.care',
    },
    {
        id: 3,
        image: `${WEBP_URL}partner-with-us.webp`,
        fallbackImage: `${PNGS_URL}partner-with-us.png`,
        title: 'Partner with us',
        description: '<div>For business partnerships, fill out this <a style="color: #51B89A" href="https://docs.google.com/forms/d/e/1FAIpQLSculBORMl53R1KpLdkISSz03muGZWsCKFUuDRykLOlGUHi-4g/viewform" target="_blank" rel="noreferrer">form</a></div>',
        alt: 'Chat with the Fi Money customer care with In-app chat',
    },
];

export {
    posterSectionData,
    threePosterBottomImageSectionData,
};
