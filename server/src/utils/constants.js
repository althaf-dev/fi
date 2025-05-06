const PLATFORMS = {
    WEB: 'WEB',
    ANDROID: 'ANDROID',
    IOS: 'IOS',
};

const DUMMY_INSIGHTS_SPEND_INFO_RESPONSE = [
    {
        request_id: '1',
        spends_info: [
            {
                amount_spent: 1357,
                total_orders: 5,
                merchant: 'AMAZON',
            },
            {
                amount_spent: 2356,
                total_orders: 6,
                merchant: 'SWIGGY',
            },
            {
                amount_spent: 3579,
                total_orders: 7,
                merchant: 'ZOMATO',
            },
            {
                amount_spent: 4578,
                total_orders: 8,
                merchant: 'BIGBASKET',
            },
            {
                amount_spent: 5791,
                total_orders: 9,
                merchant: 'MYNTRA',
            },
            {
                amount_spent: 6701,
                total_orders: 10,
                merchant: 'FLIPKART',
            },
            {
                amount_spent: 5935,
                total_orders: 13,
                category: 'FOOD',
            },
            {
                amount_spent: 18427,
                total_orders: 32,
                category: 'SHOPPING',
            },
        ],
    },
];

const DUMMY_INSIGHTS_SPEND_INFO_ALL_MONTHS_RESPONSE = [
    {
        request_id: '1',
        spends_info: [
            {
                amount_spent: 9821,
                total_orders: 12,
            },
        ],
    },
    {
        request_id: '2',
        spends_info: [
            {
                amount_spent: 8732,
                total_orders: 5,
            },
        ],
    },
    {
        request_id: '3',
        spends_info: [
            {
                amount_spent: 2356,
                total_orders: 2,
            },
        ],
    },
    {
        request_id: '4',
        spends_info: [
            {
                amount_spent: 10972,
                total_orders: 15,
            },
        ],
    },
    {
        request_id: '5',
        spends_info: [
            {
                amount_spent: 4590,
                total_orders: 6,
            },
        ],
    },
    {
        request_id: '6',
        spends_info: [
            {
                amount_spent: 12459,
                total_orders: 10,
            },
        ],
    },
    {
        request_id: '7',
        spends_info: [
            {
                amount_spent: 4480,
                total_orders: 7,
            },
        ],
    },
    {
        request_id: '8',
        spends_info: [
            {
                amount_spent: 1670,
                total_orders: 2,
            },
        ],
    },
    {
        request_id: '9',
        spends_info: [
            {
                amount_spent: 4780,
                total_orders: 3,
            },
        ],
    },
    {
        request_id: '10',
        spends_info: [
            {
                amount_spent: 7780,
                total_orders: 9,
            },
        ],
    },
    {
        request_id: '11',
        spends_info: [
            {
                amount_spent: 12999,
                total_orders: 1,
            },
        ],
    },
    {
        request_id: '12',
        spends_info: [
            {
                amount_spent: 3499,
                total_orders: 1,
            },
        ],
    },
];

const protoToHtmlFileType = {
    FILE_CONTENT_TYPE_JPEG: 'image/jpeg',
    FILE_CONTENT_TYPE_PDF: 'application/pdf',
    FILE_CONTENT_TYPE_PNG: 'image/png',
    FILE_CONTENT_TYPE_UNSPECIFIED: null,
};

const htmlToProtoFileType = Object.fromEntries(
    Object.entries(protoToHtmlFileType).map(([key, value]) => [value, key]),
);

module.exports = {
    PLATFORMS,
    DUMMY_INSIGHTS_SPEND_INFO_RESPONSE,
    DUMMY_INSIGHTS_SPEND_INFO_ALL_MONTHS_RESPONSE,
    htmlToProtoFileType,
};
