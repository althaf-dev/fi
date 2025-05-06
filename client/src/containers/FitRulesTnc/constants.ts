/* eslint-disable import/prefer-default-export */
type fitRulesTncContentType = {
    heading: string;
    title?: string;
    description?: {
        content: string;
    }[],
}[];

const TermsOfUseContent: fitRulesTncContentType = [
    {
        title: '📜 Terms of Use',
        heading: 'Fi Savings League helps you AutoSave money with fun cricket FIT rules.',
        description: [
            {
                content: 'To participate in the Fi Savings League rewards programme of the Company, you agree to these terms & conditions, and the general terms & conditions of the Company (collectively referred to as T&C). By accepting our terms, you also give consent for usage and display of your name within the app, social media, etc.',
            },
            {
                content: 'The T&Cs form a binding legal agreement between you and the Company. Please note that this is a discretionary programme and the Company reserves the right, at its sole discretion, to disqualify any user who does not meet the offer requirements or to discontinue/change any offer term/reward programme at any time.',
            },
        ],
    },
];

const FitRulesTncContentArray = [
    TermsOfUseContent,
];

export {
    FitRulesTncContentArray,
    fitRulesTncContentType,
};
