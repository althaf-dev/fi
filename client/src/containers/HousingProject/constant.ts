/**
* @file Housing Project constants
*/

import { ASSETS_URL } from '../../constants/AssetConstants';

const HOUSING_PROJECTS_KEY = 'housingProjects';

const SET_HOUSING_DATA_ON_GOOGLE_SHEET = `app/${HOUSING_PROJECTS_KEY}/SET_HOUSING_DATA_ON_GOOGLE_SHEET`;

const posterCardsSectionData = [
    {
        id: 1,
        title: 'Interest-free down<br />payment assistance',
        image_src: `${ASSETS_URL}/housing-project/clock.png`,
        fallback_image_src: `${ASSETS_URL}/housing-project/clock.png`,
    },
    {
        id: 2,
        title: 'EMI as low<br />as ₹27,500',
        image_src: `${ASSETS_URL}/housing-project/rupees.png`,
        fallback_image_src: `${ASSETS_URL}/housing-project/rupees.png`,
    },
    {
        id: 3,
        title: 'Book now,<br />pay later',
        image_src: `${ASSETS_URL}/housing-project/alarm.png`,
        fallback_image_src: `${ASSETS_URL}/housing-project/alarm.png`,
    },
    {
        id: 4,
        title: 'Tax saving<br />up to ₹90,000',
        image_src: `${ASSETS_URL}/housing-project/star.png`,
        fallback_image_src: `${ASSETS_URL}/housing-project/star.png`,
    },
];

const housingDetails = {
    builderCompanyDetails: {
        comapnyName: 'Nambiar builders',
        image_src: `${ASSETS_URL}/housing-project/nambiar-builder-logo.webp`,
        fallback_image_src: `${ASSETS_URL}/housing-project/nambiar-builder-logo.png`,
    },
    builderDetails: {
        name: 'Millenia',
        propertyDetails: [
            {
                id: 1,
                image_src: `${ASSETS_URL}/housing-project/location.png`,
                fallback_image_src: `${ASSETS_URL}/housing-project/location.png`,
                title: 'Location',
                description: '2.7 Km off<br />Sarjapur Road',
            },
            {
                id: 2,
                image_src: `${ASSETS_URL}/housing-project/builtup-area.png`,
                fallback_image_src: `${ASSETS_URL}/housing-project/builtup-area.png`,
                title: 'Builtup area',
                description: 'Sizes 2 BHK<br />onwards',
            },
            {
                id: 3,
                image_src: `${ASSETS_URL}/housing-project/status.png`,
                fallback_image_src: `${ASSETS_URL}/housing-project/status.png`,
                title: 'Status',
                description: 'In Progress',
            },
            {
                id: 4,
                image_src: `${ASSETS_URL}/housing-project/possession.png`,
                fallback_image_src: `${ASSETS_URL}/housing-project/possession.png`,
                title: 'Possession',
                description: 'June 2025',
            },
        ],
        amenititesDetails: [
            {
                id: 1,
                image_src: `${ASSETS_URL}/housing-project/playing-area.png`,
                fallback_image_src: `${ASSETS_URL}/housing-project/playing-area.png`,
                title: 'Play area for kids',
            },
            {
                id: 2,
                image_src: `${ASSETS_URL}/housing-project/equipped-gym.png`,
                fallback_image_src: `${ASSETS_URL}/housing-project/equipped-gym.png`,
                title: 'Equipped Gym',
            },
            {
                id: 3,
                image_src: `${ASSETS_URL}/housing-project/party-zone.png`,
                fallback_image_src: `${ASSETS_URL}/housing-project/party-zone.png`,
                title: 'Party<br />Zone',
            },
            {
                id: 4,
                image_src: `${ASSETS_URL}/housing-project/general-store.png`,
                fallback_image_src: `${ASSETS_URL}/housing-project/general-store.png`,
                title: 'General Store',
            },
            {
                id: 5,
                image_src: `${ASSETS_URL}/housing-project/swimming-pool.png`,
                fallback_image_src: `${ASSETS_URL}/housing-project/swimming-pool.png`,
                title: 'Swimming Pool',
            },
            {
                id: 6,
                image_src: `${ASSETS_URL}/housing-project/more-amenities.png`,
                fallback_image_src: `${ASSETS_URL}/housing-project/more-amenities.png`,
                title: 'And more amenities',
            },
        ],
        mapDetails: {
            image_src: `${ASSETS_URL}/housing-project/map.webp`,
            fallback_image_src: `${ASSETS_URL}/housing-project/map.png`,
            address: 'PRM/KA/RERA/1251/308/PR/220202/004665',
            location_url: 'https://goo.gl/maps/BWeZjPnmmU2xdXAk9',
            cta_info: {
                title: 'check builder website',
                url: 'https://www.nambiarbuilders.com/millenia/?utm_source=Google&utm_medium=Search&utm_campai[…]JHSIQQy8JvFAPpWZLb2xSG1NJA92mJe6Slp2gAgt_PwxoCphIQAvD_BwE',
            },
        },
    },
};

export { posterCardsSectionData, SET_HOUSING_DATA_ON_GOOGLE_SHEET, housingDetails };
