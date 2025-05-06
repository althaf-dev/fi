/**
 * @file Category.tsx: Category Component for Fi Minutes
 * This component renders the Category which contains data like title, amount, etc.
 */

import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Colors from '../../../Themes/Colors';
import { WINDOW_SIZE, Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

import { Values } from '../interfaces';
import {
    InfoPill,
    IconContainer,
    TextVar15,
    TextVar16,
    TextVar17,
    LineClampText,
} from '../styled';
import { getFontWithAppliedStyle } from '../util';

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2vh 0;

    @media ${Device.high_res_phone} {
        /* using vh for adjusting smaller screen sizes (eg. iPhone SE) */
        /* here it will adjust the padding accordingly and resize to fit the screen */
        margin: 25px 0;
    }
`;

const ImageParentContainer = styled.div<{
    containerWidth: string;
    bgColor: string;
}>`
    border-radius: 100%;
    background-color: ${(props) => props.bgColor ?? Colors.SAN_MARINO};
    width: ${(props) => props.containerWidth ?? '110px'} !important;
    height: ${(props) => props.containerWidth ?? '110px'} !important;
    ${MIXINS.FlexMixin({})};

    margin: 2vh 0 1vh;

    @media ${Device.high_res_phone} {
        /* using vh for adjusting smaller screen sizes (eg. iPhone SE) */
        /* here it will adjust the padding accordingly and resize to fit the screen */
        margin: 30px 0 20px;
    }
`;

const SizedBox = styled.div`
    width: 10px;
`;

const ImageContainer = styled.img<{ imageWidth: string }>`
    width: ${(props) => props.imageWidth ?? '45px'};
    height: auto;
`;

const DetailsContainer = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column' })};
    width: 100%;
`;

const DescriptionContainer = styled.div`
    ${MIXINS.FlexMixin({})};
    margin: 4px 0;
`;

const IMAGE_BG_WIDTH_MAP = {
    0: '110px',
    1: '80px',
    2: '60px',
};

const IMAGE_BG_WIDTH_MAP_SMALL_SCREEN = {
    0: '75px',
    1: '60px',
    2: '45px',
};

const IMAGE_WIDTH_MAP = {
    0: '45px',
    1: '35px',
    2: '28px',
};

const IMAGE_WIDTH_MAP_SMALL_SCREEN = {
    0: '35px',
    1: '25px',
    2: '15px',
};

const BGCOLOR_MAP = {
    0: Colors.SAN_MARINO,
    1: Colors.TERTIARY_OCEAN,
    2: Colors.TETIARY_BERRY,
};

const Category = (props: Values): ReactElement => {
    const { storyItem, index } = props;
    const {
        header: headerObj,
        image: imageVar15,
        title: titleObj,
        description: descriptionObj,
        info: infoObj,
        description_pre_icon: descriptionPreIcon,
        bg_color: imageBgColor,
    } = storyItem || {};

    const transparent = imageBgColor === 'transparent';

    const { plain_string: titleVar16, color: titleColor, standard_font_style: titleFontStyle } = titleObj || {};
    const { fontFamily: titleFontFamily, fontSize: titleFontSize } = getFontWithAppliedStyle(titleFontStyle);

    const { plain_string: textVar15 } = headerObj || {};

    const { plain_string: descriptionVar15, color: descriptionColor, standard_font_style: descriptionFontStyle } = descriptionObj || {};
    const { fontFamily: descriptionFontFamily, fontSize: descriptionFontSize } = getFontWithAppliedStyle(descriptionFontStyle);

    const { text: textObj, post_icon: infoIcon } = infoObj || {};

    const {
        plain_string: textInfo,
        font_color: fontColor,
        bg_color: bgTextColor,
        standard_font_style: fontStyle,
    } = textObj || {};

    const { fontFamily, fontSize } = getFontWithAppliedStyle(fontStyle);

    return (
        <CategoryContainer>
            <LineClampText noOfLines={2}>
                <TextVar15 color={Colors.WHITE}>{textVar15 ?? ''}</TextVar15>
            </LineClampText>
            <ImageParentContainer
                containerWidth={
                    window.innerHeight < WINDOW_SIZE.HIGH_RES_PHONE
                        ? IMAGE_BG_WIDTH_MAP_SMALL_SCREEN[index]
                        : IMAGE_BG_WIDTH_MAP[index]
                }
                bgColor={transparent ? 'transparent' : BGCOLOR_MAP[index]}
            >
                <ImageContainer
                    imageWidth={
                        // eslint-disable-next-line no-nested-ternary
                        transparent ? (window.innerHeight < WINDOW_SIZE.HIGH_RES_PHONE
                            ? IMAGE_BG_WIDTH_MAP_SMALL_SCREEN[index]
                            : IMAGE_BG_WIDTH_MAP[index])
                            : (window.innerHeight < WINDOW_SIZE.HIGH_RES_PHONE
                                ? IMAGE_WIDTH_MAP_SMALL_SCREEN[index]
                                : IMAGE_WIDTH_MAP[index])
                    }
                    src={imageVar15}
                />
            </ImageParentContainer>
            <DetailsContainer>
                <LineClampText noOfLines={1}>
                    <TextVar16 color={titleColor} family={titleFontFamily} size={titleFontSize}>{titleVar16 ?? ''}</TextVar16>
                </LineClampText>
                <DescriptionContainer>
                    {descriptionPreIcon && (
                        <IconContainer
                            src={descriptionPreIcon}
                            width={descriptionPreIcon ? '20px' : '0'}
                            margin='0px 6px 0px 0px'
                        />
                    )}
                    <LineClampText noOfLines={1}>
                        <TextVar15 color={descriptionColor} family={descriptionFontFamily} size={descriptionFontSize}>{descriptionVar15 ?? ''}</TextVar15>
                    </LineClampText>
                    {infoObj && (
                        <InfoPill
                            bgColor={bgTextColor ? '#37383A' : bgTextColor}
                            size='small'
                        >
                            <SizedBox />
                            <LineClampText noOfLines={1}>
                                <TextVar17
                                    color={fontColor}
                                    fontSize={fontSize}
                                    fontFamily={fontFamily}
                                >
                                    {textInfo ?? ''}
                                </TextVar17>
                            </LineClampText>
                            <IconContainer
                                src={infoIcon}
                                width={infoIcon ? '20px' : '0'}
                            />
                        </InfoPill>
                    )}
                </DescriptionContainer>
            </DetailsContainer>
        </CategoryContainer>
    );
};

export default Category;
