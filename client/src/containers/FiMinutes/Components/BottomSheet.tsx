/**
 * @file BottomSheet.tsx Bottom Sheet for Fi Minutes
 * Bottom Sheet Component for Fi Minutes containing tabulated data
 */
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

import { Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

import { IBottomCTAProps, Values } from '../interfaces';
import {
    InfoPill, IconContainer, TextVar19, TextVar17, TextVar18, FlexJSB, LineClampText, TextVar15,
} from '../styled';
import { handleClickAction } from '../utils';
import { getFontWithAppliedStyle } from '../util';

const BottomSheetContainer = styled.div<{ justifyContent: string, angle, linearColorStops }>`
    width: 100vw !important;
    height: 100% !important;
    ${(props) => !props.angle && `background-color: ${props.theme.color.CATSKILL_WHITE}`};
    ${(props) => props.angle && `background: linear-gradient(${props.angle}deg, ${props.linearColorStops.map((lc) => lc.color).join(', ')})`};
    border-radius: 25px 25px 0 0;
    padding: 2.5vh 2vh;
    margin-top: 32px;
    ${MIXINS.FlexMixin({ dir: 'column' })};
    justify-content: ${(props) => props.justifyContent};

    @media ${Device.high_res_phone} {
        padding: 30px 16px 16px;
    }
`;

const BottomSheetMainContent = styled.div`
    width: 100%;
`;

const PromoImage = styled.div<{hasAction: boolean}>`
    z-index: ${(props) => (props.hasAction ? 1000 : 1)};
    width: 100%;
    border-radius: 19px;
`;

const CTAButton = styled.div<{hasAction: boolean}>`
    z-index: ${(props) => (props.hasAction ? 1000 : 1)};
`;

const ButtonContainer = styled.button<{ bgColor?: string, padding?: string, margin?: string }>`
    border-radius: 19px;
    border: none;
    background-color: ${(props) => props.bgColor};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
`;

const ZeroStateContainer = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column' })};
`;

const BottomCTA = (props: IBottomCTAProps): ReactElement => {
    const {
        hasAction,
        handleActionClick,
        actionImg,
    } = props || {};

    return (
        <>
            {actionImg ? (
                <PromoImage hasAction={hasAction}>
                    <ButtonContainer
                        onClick={handleActionClick}
                    >
                        <Image
                            loadingType='eager'
                            icon={actionImg}
                            alt='Bottom Image'
                        />
                    </ButtonContainer>
                </PromoImage>
            ) : null}
        </>
    );
};

const ZeroStateCTA = (props: Values) => {
    const {
        hasAction,
        handleActionClick,
        buttonProps,
    } = props || {};

    const {
        plain_string: ctaButtonText,
        font_color: ctaFontColor,
        bg_color: ctaBgColor,
    } = buttonProps || {};

    if (!ctaButtonText) {
        return null;
    }

    return (
        <>
            <CTAButton hasAction={hasAction}>
                <ButtonContainer onClick={handleActionClick} bgColor={ctaBgColor} margin='24px auto' padding='8px 20px'>
                    <TextVar19 color={ctaFontColor}>{ctaButtonText}</TextVar19>
                </ButtonContainer>
            </CTAButton>
        </>
    );
};

const PromoBlock = (props: Values) => {
    const { bannerUrl, bannerActionId, storyItem } = props;

    return (
        <BottomCTA
            hasAction={!!bannerActionId}
            handleActionClick={handleClickAction(bannerActionId, storyItem)}
            actionImg={bannerUrl}
        />
    );
};

const PromoCTA = (props: Values) => {
    const { bannerActionId, storyItem, buttonProps } = props;

    return (
        <ZeroStateCTA
            hasAction={!!bannerActionId}
            handleActionClick={handleClickAction(bannerActionId, storyItem)}
            buttonProps={buttonProps}
        />
    );
};

const PromoCTATitle = styled(TextVar15)`
    margin: 30px auto 10px;
`;

const InlineContainer = styled.div`
    ${MIXINS.FlexMixin({ justify: 'space-between' })};
    /* using vh for adjusting smaller screen sizes (eg. iPhone SE) */
    /* here it will adjust the padding accordingly and resize to fit the screen */
    padding: 2.5vh 0;
    border-bottom: 1px solid #D9DEE3;

    &:nth-last-child(1) {
        border-bottom: 0;
    }

    @media ${Device.high_res_phone} {
        padding: 22px 0;
    }
`;

const InlineText = styled(LineClampText)<{icon: boolean}>`
    margin-left: ${(props) => (props.icon ? '10px' : '0')};
`;

const InlineItem = (props: Values) => {
    const { storyItem } = props;
    const {
        icon,
        title: titleObj,
        sub_title: subTitleObj,
        value: valueObj,
    } = storyItem || {};

    const {
        plain_string: textVar19,
        font_color: titleFontColor,
        standard_font_style: titleFontStyle,
    } = titleObj || {};

    const { fontFamily: titleFontFamily, fontSize: titleFontSize } = getFontWithAppliedStyle(titleFontStyle);

    const {
        plain_string: value,
        font_color: valueFontColor,
        standard_font_style: valueFontStyle,
    } = valueObj || {};

    const { fontFamily: valueFontFamily, fontSize: valueFontSize } = getFontWithAppliedStyle(valueFontStyle);

    const {
        text: textObj,
        post_icon: infoIcon,
    } = subTitleObj || {};

    const { plain_string: textInfo, font_color: fontColor } = textObj || {};

    return (
        <InlineContainer>
            <FlexJSB>
                <IconContainer src={icon} width={icon ? '28px' : '0'} height='28px' />
                <InlineText noOfLines={1} icon={icon}>
                    <TextVar19 color={titleFontColor} family={titleFontFamily} size={titleFontSize}>{ textVar19 }</TextVar19>
                </InlineText>
                <InfoPill>
                    { textObj && (
                        <LineClampText noOfLines={1}>
                            <TextVar17 color={fontColor}>{textInfo ?? ''}</TextVar17>
                        </LineClampText>
                    )}
                    {subTitleObj && <IconContainer src={infoIcon} width={icon ? '20px' : '0'} />}
                </InfoPill>
            </FlexJSB>
            <LineClampText noOfLines={1}>
                <TextVar19 color={valueFontColor} family={valueFontFamily} size={valueFontSize}>{ value }</TextVar19>
            </LineClampText>
        </InlineContainer>
    );
};

const BottomSheet = (props: any): ReactElement => {
    const {
        storyItem, clientPlatform, storyId, justifyContent, isZeroStateContainer, gradient,
    } = props;

    let gradientParsed = gradient;
    if (typeof gradient === 'string') {
        gradientParsed = JSON.parse(gradient);
    }

    const { degree: angle, linear_color_stops: linearColorStops } = gradientParsed || {};

    const [storyItemParsed] = useState(JSON.parse(storyItem));

    storyItemParsed.client_platform = clientPlatform;
    storyItemParsed.story_id = storyId;

    const {
        title: titleObj,
        subtitle: subTitleObj,
        primary_text: primaryTextVar18,
        items: itemsObj,
        footer,
        image,
        cta_button_text: ctaButtonTextObj,
        cta_button_action_id: ctaButtonActionId,
        banner_url: bannerUrl,
        banner_action_id: bannerActionId,
    } = storyItemParsed || {};

    const {
        plain_string: titleVar16,
        font_color: titleFontColor,
    } = titleObj || {};

    const {
        plain_string: titleVar19,
        font_color: subTitleFontColor,
    } = subTitleObj || {};

    const {
        text: textObj,
        post_icon: postIcon,
        pre_icon: preIcon,
    } = footer || {};

    const { plain_string: textInfo, font_color: fontColor } = textObj || {};

    return (
        <BottomSheetContainer angle={angle} linearColorStops={linearColorStops} justifyContent={justifyContent}>
            { !isZeroStateContainer ? (
                <>
                    <BottomSheetMainContent>
                        <LineClampText noOfLines={1}>
                            <TextVar19>{titleVar16}</TextVar19>
                        </LineClampText>
                        <LineClampText noOfLines={1}>
                            <TextVar18>{primaryTextVar18}</TextVar18>
                        </LineClampText>
                        {(itemsObj && itemsObj.length !== 0) && (
                            itemsObj.map((item) => <InlineItem storyItem={item} />)
                        )}
                    </BottomSheetMainContent>
                    <InfoPill>
                        {preIcon && <IconContainer src={preIcon} height='20px' margin='0 4px 0 0' />}
                        {textObj && (
                            <LineClampText noOfLines={1}>
                                <TextVar17 color={fontColor}>{textInfo ?? ''}</TextVar17>
                            </LineClampText>
                        )}
                        {postIcon && <IconContainer src={postIcon} height='20px' margin='0 0 0 4px' />}
                    </InfoPill>
                    {bannerUrl && <PromoBlock bannerUrl={bannerUrl} bannerActionId={bannerActionId} storyItem={storyItemParsed} />}
                </>
            ) : (
                <ZeroStateContainer>
                    <Image
                        loadingType='eager'
                        icon={image}
                        width='100px'
                        alt='Bottom Image'
                    />
                    <PromoCTATitle color={titleFontColor}>{ titleVar16 }</PromoCTATitle>
                    <TextVar19 color={subTitleFontColor}>{ titleVar19 }</TextVar19>

                    <PromoCTA bannerActionId={ctaButtonActionId} storyItem={storyItemParsed} buttonProps={ctaButtonTextObj} />
                </ZeroStateContainer>
            )}
        </BottomSheetContainer>
    );
};

export default BottomSheet;
