/**
 * @file Header component for Fi minutes
 * Renders the title, subtitle and logo on left and the icon buttons like close, share on the right side
 */

import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Image } from '../../../components';
import { ICONS_URL_MAP } from '../../../constants/AssetConstants';
import MIXINS from '../../../Themes/mixins';
import { ResetButton } from '../../../Themes/styled';
import { TextContainer } from '../CommonTemplate';

import { WEB_CALLBACK_OBJECTS } from '../constants';
import { IStoryGroupData, IStoryItem } from '../interfaces';
import { callMobileClientFunction, handleShareAction } from '../utils';

const HeaderContainer = styled.div`
    ${MIXINS.FlexMixin({ justify: 'space-between' })};
    margin-bottom: 15px;
    margin-top: 5px;
    color: ${(props) => props.theme.color.WHITE};
    height: 5%;
`;

const InfoContainer = styled.div`
    ${MIXINS.FlexMixin({ justify: 'start', height: '-webkit-fill-available' })};
`;

const LogoContainer = styled.div`
    width: 42px;
    margin-right: 3px;
    z-index: 1;
`;

const InfoTextContainer = styled.div`
    ${MIXINS.FlexMixin({
        dir: 'column', align: 'flex-start', justify: 'space-evenly', height: '100%',
    })};
    position: relative;
    z-index: 1;
`;

const Title = styled.div`
    ${MIXINS.FontMixin({ weight: 600, size: '14px', lineHeight: '18px' })};
    color: ${(props) => props.theme.color.WHITE};
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const SubTitle = styled.div`
    ${MIXINS.FontMixin({ weight: 600, size: '10px', lineHeight: '12px' })};
    color: ${(props) => props.theme.color.WHITE};
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;

const IconsContainer = styled.div`
    ${MIXINS.FlexMixin({ justify: 'flex-end' })};
    padding-right: 3px;
    user-select: all;
    -webkit-user-select: all;
    -webkit-touch-callout: all;
`;

const IconItem = styled(ResetButton)`
    margin-left: 15px;
    padding: 15px 0 15px 15px;
    z-index: 1000;
`;

interface IStoryHeaderProps {
    storyData: IStoryGroupData;
    storyItem: IStoryItem;
}

const StoryHeader = (props: IStoryHeaderProps): ReactElement => {
    const { storyData, storyItem } = props;
    const {
        title: { plain_string: titleText },
        sub_title: { plain_string: subTitleText },
        image: { image_url: imageUrl },
    } = storyData.story_header.heading;

    const handleCloseIconClick = (): void => {
        const payload = WEB_CALLBACK_OBJECTS.TapOnClose;
        payload.data.storyId = storyItem.story_id;

        callMobileClientFunction(storyData.client_platform, payload);
    };

    return (
        <HeaderContainer>
            <InfoContainer>
                <LogoContainer>
                    <Image
                        loadingType='eager'
                        icon={imageUrl}
                        width={24}
                        height={22}
                        alt='Fi'
                    />
                </LogoContainer>
                <InfoTextContainer>
                    <TextContainer marginBottom='2px'>
                        <Title>{titleText}</Title>
                    </TextContainer>
                    <SubTitle>{subTitleText}</SubTitle>
                </InfoTextContainer>
            </InfoContainer>
            <IconsContainer>
                <IconItem onClick={handleShareAction(storyItem)}>
                    <Image
                        loadingType='eager'
                        icon={ICONS_URL_MAP.SHARE_WHITE}
                        alt='Share Story'
                    />
                </IconItem>
                <IconItem onClick={handleCloseIconClick}>
                    <Image
                        loadingType='eager'
                        icon={ICONS_URL_MAP.CLOSE_CROSS_WHITE}
                        alt='Close Story'
                    />
                </IconItem>
            </IconsContainer>
        </HeaderContainer>
    );
};

export default StoryHeader;
