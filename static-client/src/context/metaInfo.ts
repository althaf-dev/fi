import React from 'react';

const META_INFO_CONTEXT_KEYMAP = {
    hideFooterSection: 'hideFooterSection',
    hideInAppChatLabel: 'hideInAppChatLabel',
    hidePhoneNumberLabel: 'hidePhoneNumberLabel',
    hideEmailLabel: 'hideEmailLabel',
};

const MetaInfoContext = React.createContext({
    appAssistanceData: {
        [META_INFO_CONTEXT_KEYMAP.hideFooterSection]: false,
        [META_INFO_CONTEXT_KEYMAP.hideInAppChatLabel]: false,
        [META_INFO_CONTEXT_KEYMAP.hidePhoneNumberLabel]: false,
        [META_INFO_CONTEXT_KEYMAP.hideEmailLabel]: false,
    },
});

// need to export this as babel-loader was not able to resolve it
const MetaInfoContextProvider = MetaInfoContext.Provider;
const MetaInfoContextConsumer = MetaInfoContext.Consumer;

export {
    META_INFO_CONTEXT_KEYMAP,
    MetaInfoContext,
    MetaInfoContextProvider,
    MetaInfoContextConsumer,
};
