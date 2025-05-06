/**
 * @file Template 7 for Fi Minutes
 */

import React, { ReactElement } from 'react';

import Colors from '../../../Themes/Colors';

import Category from '../Components/Category';

import ErrorBoundary from '../ErrorBoundary';
import { CommonCenterContainer, CommonTemplateContainer } from '../CommonTemplate';
import { ITemplateProps } from '../interfaces';
import { TextVar15, TextVar19 } from '../styled';

const Template7 = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values } = storyItem;
    const {
        text_1: textVar15,
        text_2: textVar19,
        image_card_list: imageCardList,
        bg_linear_gradient: bgLinearGradient,
    } = values;

    let bgLinearGradientParsed = bgLinearGradient;
    if (bgLinearGradient && typeof bgLinearGradient === 'string') {
        bgLinearGradientParsed = JSON.parse(bgLinearGradient);
    }

    const {
        degree: angle,
        linear_color_stops: linearColorStops,
    } = bgLinearGradientParsed || {};

    const imageCardListParsed = JSON.parse(imageCardList);

    return (
        <CommonTemplateContainer
            angle={angle}
            linearColorStops={linearColorStops}
        >
            <CommonCenterContainer>
                <ErrorBoundary><TextVar15 color={Colors.WHITE}>{textVar15}</TextVar15></ErrorBoundary>
                <ErrorBoundary><TextVar19 color={Colors.MONOCHROME_STEEL}>{textVar19}</TextVar19></ErrorBoundary>
                <div>
                    {imageCardListParsed.image_cards.map((item, index) => (
                        <ErrorBoundary>
                            <Category storyItem={item} index={index} />
                        </ErrorBoundary>
                    ))}
                </div>
            </CommonCenterContainer>
        </CommonTemplateContainer>
    );
};

export default Template7;
