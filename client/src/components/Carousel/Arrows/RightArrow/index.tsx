/**
 * @file Right Arrow Component
 */
import React from 'react';

import { ICONS_URL_MAP } from '../../../../constants/AssetConstants';

import { Image } from '../../../Abstract';

import { RightArrowWrapper, IconHolder } from '../styled';

const RightArrow = () => (
    <RightArrowWrapper>
        <IconHolder>
            <Image loadingType='lazy' icon={ICONS_URL_MAP.WHITE_RIGHT_ARROW_V2} alt='right arrow' />
        </IconHolder>
    </RightArrowWrapper>
);

export default RightArrow;
