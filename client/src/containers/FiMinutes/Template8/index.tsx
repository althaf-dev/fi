/**
 * @file Template 7 for Fi Minutes
 */

import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Colors from '../../../Themes/Colors';

import ErrorBoundary from '../ErrorBoundary';
import { CommonCenterContainer, TextContainer } from '../CommonTemplate';
import { ITemplateProps } from '../interfaces';
import { TextVar15, TextVar19 } from '../styled';
import { Image } from '../../../components';
import LottiePlayer from '../../../components/LottiePlayer';
import { getAngleLinearColorStops, getFontWithAppliedStyle } from '../util';
import MIXINS from '../../../Themes/mixins';

const SpacedBox = styled.div`
    height: 4vh;
`;

const TemplateOuterContainer = styled.div<{
    justifyContent?: string;
    angle?: string;
    linearColorStops?: [any];
}>`
    height: 100vh !important;
    width: 100vw !important;
    margin: 0px;

    position: absolute;
    top:0;
    left:0;
    padding: 60px;

    ${(props) => MIXINS.FlexMixin({
        dir: 'column',
        justify: props.justifyContent || 'space-between',
        height: 'inherit',
    })};

    // if angle is provided, use it
    background: ${(props) => (props.angle ? `linear-gradient(${props.angle}deg, ${props.linearColorStops.map((lc) => lc.color).join(', ')})` : 'none')};
`;

export const CenterImgContainer = styled.div`
    width: 100% !important;
    margin-bottom: 10px;
`;

const LottieContainer = styled.div`
    width: 100%;
`;

const Template8 = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values } = storyItem;
    const {
        title: titleTextObj,
        subtitle: subtitleTextObj,
        image: imageVar15,
        lottie: lottieVar15,
        bg_linear_gradient: bgLinearGradient,
    } = values;

    let titleTextObjParsed = titleTextObj;
    if (titleTextObj && typeof titleTextObj === 'string') {
        titleTextObjParsed = JSON.parse(titleTextObj);
    }

    let subtitleTextObjParsed = subtitleTextObj;
    if (subtitleTextObj && typeof subtitleTextObj === 'string') {
        subtitleTextObjParsed = JSON.parse(subtitleTextObj);
    }

    const { angle, linearColorStops } = getAngleLinearColorStops(bgLinearGradient);
    const { font_color: titleFontColor, plain_string: titleString, standard_font_style: titleFontStyle } = titleTextObjParsed || {};
    const { font_color: subtitleFontColor, plain_string: subtitleString, standard_font_style: subtitleFontStyle } = subtitleTextObjParsed || {};

    const { fontSize: titleFontSize, fontFamily: titleFontFamily } = getFontWithAppliedStyle(titleFontStyle);
    const { fontSize: subtitleFontSize, fontFamily: subtitleFontFamily } = getFontWithAppliedStyle(subtitleFontStyle);

    return (
        <TemplateOuterContainer
            angle={angle}
            linearColorStops={linearColorStops}
            justifyContent='space-between'
        >
            <CommonCenterContainer>
                <ErrorBoundary>
                    <TextContainer>
                        <TextVar15
                            family={titleFontFamily}
                            size={titleFontSize}
                            color={titleFontColor ?? Colors.WHITE}
                        >
                            {titleString}
                        </TextVar15>
                    </TextContainer>
                </ErrorBoundary>
                <ErrorBoundary>
                    <TextContainer>
                        <TextVar19
                            color={subtitleFontColor ?? Colors.MONOCHROME_STEEL}
                            family={subtitleFontFamily}
                            size={subtitleFontSize}
                        >
                            {subtitleString}
                        </TextVar19>
                    </TextContainer>
                </ErrorBoundary>
                <SpacedBox />
                {imageVar15 && (
                    <CenterImgContainer>
                        <Image
                            loadingType='eager'
                            icon={imageVar15}
                            alt='Centre Image'
                        />
                    </CenterImgContainer>
                )}

                {lottieVar15 && (
                    <LottieContainer>
                        <LottiePlayer
                            path={lottieVar15}
                            loop={false}
                        />
                    </LottieContainer>
                )}
            </CommonCenterContainer>
        </TemplateOuterContainer>
    );
};

export default Template8;
