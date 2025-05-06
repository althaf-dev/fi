const { getStringUUID } = require('../../utils/UUIDService');

// const actionAudioJson = require('../../assets/lottie/audio_action.json');
// const bouncingFiJson = require('../../assets/lottie/bouncing_fi.json');
// const codeCombinedJson = require('../../assets/lottie/code_combined.json');
// const codeDecodingJson = require('../../assets/lottie/code_decoding.json');
// const communityDesktopJson = require('../../assets/lottie/community_desktop.json');
// const communityResponsiveJson = require('../../assets/lottie/community_responsive.json');
// const confettiDesktopJson = require('../../assets/lottie/confetti_desktop.json');
// const confettiMobileJson = require('../../assets/lottie/confetti_mobile.json');
// const jargonCombinedJson = require('../../assets/lottie/jargon_combined.json');
// const jargonDesktopJson = require('../../assets/lottie/jargon_desktop.json');
// const photoDesktopJson = require('../../assets/lottie/photos_desktop.json');
// const photoResponsiveJson = require('../../assets/lottie/photos_responsive.json');
// const rewardsCombinedJson = require('../../assets/lottie/rewards_combined.json');
// const savingDesktopJson = require('../../assets/lottie/savings_desktop.json');
// const savingResponsiveJson = require('../../assets/lottie/savings_responsive.json');
// const searchDesktopJson = require('../../assets/lottie/search_desktop.json');
// const searchResponsiveJson = require('../../assets/lottie/search_responsive.json');
// const successGridJson = require('../../assets/lottie/success_grid.json');
// const emotIconsJson = require('../../assets/lottie/emoticons.json');
// const homePageLottieJson = require('../../assets/lottie/homepage-main.json');
// const fitRulesLottieJson = require('../../assets/lottie/fit_rules.json');
// const connectedAccountLottieJson = require('../../assets/lottie/connected_account.json');

const getUUID = (_, res) => {
    const data = {
        uuid: getStringUUID(),
    };

    res.status(200).send(data);
};

/*
const getLottieJSON = (req, res) => {
    const { name } = req.query;
    let lottieJson;

    switch (name) {
        case 'SEARCH_RESPONSIVE':
            lottieJson = searchResponsiveJson;
            break;

        case 'SEARCH_DESKTOP':
            lottieJson = searchDesktopJson;
            break;

        case 'PHOTOS_RESPONSIVE':
            lottieJson = photoResponsiveJson;
            break;

        case 'PHOTOS_DESKTOP':
            lottieJson = photoDesktopJson;
            break;

        case 'HOMEPAGE_LOTTIE':
            lottieJson = homePageLottieJson;
            break;

        case 'CODE_COMBINED':
            lottieJson = codeCombinedJson;
            break;

        case 'ACTION_AUDIO':
            lottieJson = actionAudioJson;
            break;

        case 'JARGON_COMBINED':
            lottieJson = jargonCombinedJson;
            break;

        case 'JARGON_DESKTOP':
            lottieJson = jargonDesktopJson;
            break;

        case 'COMMUNITY_RESPONSIVE':
            lottieJson = communityResponsiveJson;
            break;

        case 'COMMUNITY_DESKTOP':
            lottieJson = communityDesktopJson;
            break;

        case 'REWARDS_COMBINED':
            lottieJson = rewardsCombinedJson;
            break;

        case 'SAVINGS_RESPONSIVE':
            lottieJson = savingResponsiveJson;
            break;

        case 'SAVINGS_DESKTOP':
            lottieJson = savingDesktopJson;
            break;

        case 'BOUNCING_FI':
            lottieJson = bouncingFiJson;
            break;

        case 'CONFETTI_MOBILE':
            lottieJson = confettiMobileJson;
            break;

        case 'CONFETTI_DESKTOP':
            lottieJson = confettiDesktopJson;
            break;

        case 'SUCCESS_GRID':
            lottieJson = successGridJson;
            break;

        case 'CODE_DECODING':
            lottieJson = codeDecodingJson;
            break;

        case 'EMOT_ICONS':
            lottieJson = emotIconsJson;
            break;

        case 'FIT_RULES':
            lottieJson = fitRulesLottieJson;
            break;

        case 'CONNECTED_ACCOUNT':
            lottieJson = connectedAccountLottieJson;
            break;

        default:
            break;
    }

    res.status(200).send(lottieJson);
};
*/

module.exports = {
    getUUID,
    // getLottieJSON,
};
