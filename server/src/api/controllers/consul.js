const { getConsulKVInfo } = require('../../utils/consul');

const DEFAULT_META_INFO_CONSUL_VALUES = {
    navigation: {
        hideCalculators: false,
        hideMutualFundsFeaturePage: false,
        hideJumpFeaturePage: false,
        hideConnectedAccountsFeaturePage: false,
        hidePaymentsFeaturePage: false,
        hideAskFiFeaturePage: false,
        hideInstantLoanFeaturePage: false,
        hideCreditCardWaitlistPage: false,
    },
    fiMinutes: {
        storyInterval: {
            ANDROID: 15000,
            IOS: 7500,
        },
    },
    housingOffers: {
        limitedTimeOffer: '31 Dec, 2022',
    },
    wealth: {
        tnc: {
            complaintData: {
                latestMonthData: {
                    title: 'Data for the month ending - May 2022',
                    headData: [
                        {
                            name: 'Received From',
                        },
                        {
                            name: 'Pending at the end of last month',
                        },
                        {
                            name: 'Received',
                        },
                        {
                            name: 'Resolved',
                        },
                        {
                            name: 'Total pending',
                        },
                        {
                            name: 'Pending complaints > 3 months',
                        },
                        {
                            name: 'Average resolution time (in days)',
                        },
                    ],
                    rowData: [
                        [
                            {
                                value: 'Directly from investors',
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                        ],
                        [
                            {
                                value: 'SEBI (Scores)',
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                        ],
                        [
                            {
                                value: 'Other Sources (if any)',
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                        ],
                        [
                            {
                                value: 'Grand Total',
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                        ],
                    ],
                },
                monthlyDisposalData: {
                    title: 'Trend of monthly disposal of complaints',
                    headData: [
                        {
                            name: 'Month',
                        },
                        {
                            name: 'Carried forward from previous month',
                        },
                        {
                            name: 'Received',
                        },
                        {
                            name: 'Resolved',
                        },
                        {
                            name: 'Pending',
                        },
                    ],
                    rowData: [
                        [
                            {
                                value: 'April, 2022',
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                        ],
                        [
                            {
                                value: 'May, 2022',
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                        ],
                        [
                            {
                                value: 'Grand Total',
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                        ],
                    ],
                },
                annualDisposalData: {
                    title: 'Trend of annual disposal of complaints',
                    headData: [
                        {
                            name: 'Year',
                        },
                        {
                            name: 'Carried forward from previous year',
                        },
                        {
                            name: 'Received',
                        },
                        {
                            name: 'Resolved',
                        },
                        {
                            name: 'Pending',
                        },
                    ],
                    rowData: [
                        [
                            {
                                value: '2020-21',
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                        ],
                        [
                            {
                                value: 'Grand Total',
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                            {
                                value: 0,
                            },
                        ],
                    ],
                },
                disclosureData: {
                    title: 'Disclosure',
                    headData: [
                        {
                            name: 'Sr. no',
                        },
                        {
                            name: 'Financial Year',
                        },
                        {
                            name: 'Compliance Audit Status',
                        },
                        {
                            name: 'Remarks, If any',
                        },
                    ],
                    rowData: [
                        [
                            {
                                value: 1,
                            },
                            {
                                value: 'FY 2020-21',
                            },
                            {
                                value: 'Conducted',
                            },
                            {
                                value: 'N.A.',
                            },
                        ],
                        [
                            {
                                value: 2,
                            },
                            {
                                value: 'FY 2021-22',
                            },
                            {
                                value: 'Conducted',
                            },
                            {
                                value: 'N.A.',
                            },
                        ],
                        [
                            {
                                value: 3,
                            },
                            {
                                value: 'FY 2022-23',
                            },
                            {
                                value: 'Conducted',
                            },
                            {
                                value: 'N.A.',
                            },
                        ],
                        [
                            {
                                value: 4,
                            },
                            {
                                value: 'FY 2023-24',
                            },
                            {
                                value: 'Conducted',
                            },
                            {
                                value: 'N.A.',
                            },
                        ],
                    ],
                },
            },
        },
    },
};

const getDefaultPathConsulValues = (path) => {
    switch (path) {
        case 'meta-info': {
            return DEFAULT_META_INFO_CONSUL_VALUES;
        }
        default:
            return null;
    }
};

const getDynamicConsulData = async (req, res, next) => {
    try {
        const { path = '' } = req.query;
        const consulInfo = await getConsulKVInfo(path);

        res.send(consulInfo || getDefaultPathConsulValues(path));
    } catch (err) {
        next({
            description: err.message,
            message: 'Failed to fetch consul info data',
            ctrl: 'consulInfo',
            fn: 'getDynamicConsulData',
        });
    }
};

module.exports = {
    getDynamicConsulData,
};
