/**
 * @file Left Arrow Component
 */
import React from 'react';

import { ICONS_URL_MAP } from '@/constants/AssetConstants';

import { Image } from '@/Abstract';

import { LeftArrowWrapper, IconHolder } from '../styled';

const LeftArrow = () => (
    <LeftArrowWrapper>
        <IconHolder>
            <Image loadingType='lazy' icon={ICONS_URL_MAP.WHITE_LEFT_ARROW} alt='left arrow' />
        </IconHolder>
    </LeftArrowWrapper>
);

export default LeftArrow;
