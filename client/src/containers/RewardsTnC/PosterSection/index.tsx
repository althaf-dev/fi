import React from 'react';

import { PosterSection } from '../../../components';
import { WEBP_URL, PNGS_URL } from '../../../constants/AssetConstants';

const REWARDS_TNC_POSTER_WEBP_URL = `${WEBP_URL}rewards-poster.webp`;
const REWARDS_TNC_POSTER_PNG_URL = `${PNGS_URL}rewards-poster.png`;

const RewardsTnCPosterSection = () => (
    <PosterSection
        title='Rewards'
        description={(
            <>
                The Company has a rewards policy for Users of the Platform. To participate in the rewards programme of
                the Company (and win rewards) You must agree to these reward specific terms and conditions in addition
                to the general Terms and Conditions of the Company.
            </>
        )}
        mobilePoster={REWARDS_TNC_POSTER_WEBP_URL}
        desktopPoster={REWARDS_TNC_POSTER_WEBP_URL}
        fallbackMobilePoster={REWARDS_TNC_POSTER_PNG_URL}
        fallbackDesktopPoster={REWARDS_TNC_POSTER_PNG_URL}
    />
);

export default RewardsTnCPosterSection;
