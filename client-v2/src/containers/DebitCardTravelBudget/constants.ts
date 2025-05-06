export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const WEB_CALLBACK_OBJECTS = {
    backButtonClicked: {
        eventName: 'BackButtonClicked',
    },
    shareButtonClicked: {
        eventName: 'ShareButtonClicked',
    },
    deeplinkRedirection: {
        eventName: 'DeeplinkRedirection',
    },
};

export const DC_TRAVEL_BUDGET_FN_NAME = 'ctaClickHandler';
export const DC_TRAVEL_BUDGET_WINDOW_OBJECT_NAME = 'javascriptInterface';

export const travelOptions = [
    {
        title: {
            label: 'Economic',
            value: 'ECONOMIC',
        },
        description: 'Economy flight tickets, quality mid-range accommodation, practical transportation options, and a variety of culinary experiences.',
    },
    {
        title: {
            label: 'Luxury',
            value: 'LUXURY',
        },
        description: 'Premium flight tickets, luxurious 5-star accommodations, exclusive transportation, and gourmet culinary encounters.',
    },
    {
        title: {
            label: 'Backpacking',
            value: 'BACKPACKING',
        },
        description: 'Economy flight tickets, basic shared accommodations, public transit options, and authentic local dining experiences.',
    },
];

export const DATE_LOCAL_STRING_CONFIG: { locale: string, options: Intl.DateTimeFormatOptions} = {
    locale: 'en-GB',
    options: {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    },
};

export const TIME_IN_MILLISECONDS = 1000;
