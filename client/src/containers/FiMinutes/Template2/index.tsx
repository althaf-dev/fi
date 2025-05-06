/**
 * @file Story Template 2 for Fi Minutes
 * Consists for 4 variants - 2A, 2B, 2C, 2D
 */

import React, { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { Image } from '../../../components';

import { ITemplateProps } from '../interfaces';
import { handleShareAction } from '../utils';
import {
    TextVar10, TextVar11, TextVar2, TextVar3, TextVar4, TextVar5, TextVar6, TextVar7, TextVar8, TextVar9, LineClampText,
} from '../styled';
import {
    CommonTemplateContainer, CommonCenterContainer, TextContainer, InlineContainer, InlineImage, BottomCTA,
} from '../CommonTemplate';
import { FI_MINUTES_URL_MAP } from '../../../constants/AssetConstants';

const Template2AComponent = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values } = storyItem;
    const {
        text_1: textVar3,
        text_2: textVar4,
        text_3: textVar11,
        image_1: inlineImage,
    } = values;

    return (
        <CommonTemplateContainer>
            <CommonCenterContainer>
                {textVar3 ? (
                    <TextContainer marginBottom='24px'>
                        <LineClampText noOfLines={3}>
                            <TextVar3>{textVar3}</TextVar3>
                        </LineClampText>
                    </TextContainer>
                ) : null}
                {textVar4 ? (
                    <TextContainer marginBottom='37px'>
                        <InlineContainer>
                            {inlineImage ? (
                                <InlineImage>
                                    <Image
                                        loadingType='eager'
                                        icon={inlineImage}
                                        alt='Inline Image'
                                    />
                                </InlineImage>
                            ) : null}
                            <LineClampText noOfLines={1}>
                                <TextVar4>{textVar4}</TextVar4>
                            </LineClampText>
                        </InlineContainer>
                    </TextContainer>
                ) : null}
                {textVar11 ? (
                    <TextContainer>
                        <LineClampText noOfLines={3}>
                            <TextVar11>{textVar11}</TextVar11>
                        </LineClampText>
                    </TextContainer>
                ) : null}
            </CommonCenterContainer>
        </CommonTemplateContainer>
    );
};
export const Template2A = memo(Template2AComponent);

const Template2BComponent = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values } = storyItem;
    const {
        text_1: textVar3,
        text_2: textVar5,
        text_3: textVar6,
        share_image: shareImage,
    } = values;

    return (
        <CommonTemplateContainer>
            <CommonCenterContainer>
                {textVar3 ? (
                    <TextContainer marginBottom='38px'>
                        <LineClampText noOfLines={3}>
                            <TextVar3>{textVar3}</TextVar3>
                        </LineClampText>
                    </TextContainer>
                ) : null}
                {textVar5 ? (
                    <TextContainer marginBottom='30px'>
                        <LineClampText noOfLines={2}>
                            <TextVar5>{textVar5}</TextVar5>
                        </LineClampText>
                    </TextContainer>
                ) : null}
                {textVar6 ? (
                    <TextContainer>
                        <LineClampText noOfLines={3}>
                            <TextVar6>{textVar6}</TextVar6>
                        </LineClampText>
                    </TextContainer>
                ) : null}
            </CommonCenterContainer>
            <BottomCTA
                hasAction
                handleActionClick={handleShareAction(storyItem)}
                actionImg={shareImage}
            />
        </CommonTemplateContainer>
    );
};

export const Template2B = memo(Template2BComponent);

const LogoImageContainer = styled.div<{ bgImage: string }>`
    height: 120px;
    width: 120px;
    position: relative;
    background-image: url(${(props) => props.bgImage});
    background-position: center;
    background-size: cover;
`;

const CentreItem = styled.div`
    position: absolute;
    left: 24px;
    top: 33px;
    right: 0;
    bottom: 0;
    display: block;
    margin: auto;
`;

const ImageItem = styled(CentreItem)`
    height: 70px;
    width: 70px;
`;

const TextItem = styled(CentreItem)`
    height: fit-content;
    width: fit-content;
`;

const Template2CComponent = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values } = storyItem;
    const {
        text_1: textVar3,
        icon_image: iconImage,
        text_2: textVar7,
        text_3: textVar11,
        text_4: textVar8,
        share_image: shareImage,
    } = values;

    return (
        <CommonTemplateContainer>
            <CommonCenterContainer>
                {textVar3 ? (
                    <TextContainer marginBottom='15px'>
                        <LineClampText noOfLines={3}>
                            <TextVar3>{textVar3}</TextVar3>
                        </LineClampText>
                    </TextContainer>
                ) : null}
                <TextContainer marginBottom='15px'>
                    <LogoImageContainer
                        bgImage={FI_MINUTES_URL_MAP.PLATE_WITH_HEART}
                    >
                        {iconImage ? (
                            <ImageItem>
                                <Image
                                    loadingType='eager'
                                    icon={iconImage}
                                    alt='Icon Image'
                                    borderRadius='50%'
                                />
                            </ImageItem>
                        ) : (
                            <TextItem>
                                <LineClampText noOfLines={1}>
                                    <TextVar8>{textVar8}</TextVar8>
                                </LineClampText>
                            </TextItem>
                        )}

                    </LogoImageContainer>
                </TextContainer>
                {textVar7 ? (
                    <TextContainer marginBottom='30px'>
                        <LineClampText noOfLines={2}>
                            <TextVar7>{textVar7}</TextVar7>
                        </LineClampText>
                    </TextContainer>
                ) : null}
                {textVar11 ? (
                    <TextContainer>
                        <LineClampText noOfLines={3}>
                            <TextVar11>{textVar11}</TextVar11>
                        </LineClampText>
                    </TextContainer>
                ) : null}
            </CommonCenterContainer>
            <BottomCTA
                hasAction
                handleActionClick={handleShareAction(storyItem)}
                actionImg={shareImage}
            />
        </CommonTemplateContainer>
    );
};

export const Template2C = memo(Template2CComponent);

const Template2DComponent = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values } = storyItem;
    const {
        text_1: textVar2,
        text_2: textVar9,
        text_3: textVar10,
        text_4: textVar11,
    } = values;

    return (
        <CommonTemplateContainer>
            <CommonCenterContainer>
                {textVar2 ? (
                    <TextContainer marginBottom='24px'>
                        <LineClampText noOfLines={2}>
                            <TextVar2>{textVar2}</TextVar2>
                        </LineClampText>
                    </TextContainer>
                ) : null}
                {textVar9 ? (
                    <TextContainer marginBottom='37px'>
                        <LineClampText noOfLines={1}>
                            <TextVar9>{textVar9}</TextVar9>
                        </LineClampText>
                    </TextContainer>
                ) : null}
                {textVar10 ? (
                    <TextContainer marginBottom='37px'>
                        <LineClampText noOfLines={1}>
                            <TextVar10>{textVar10}</TextVar10>
                        </LineClampText>
                    </TextContainer>
                ) : null}
                {textVar11 ? (
                    <TextContainer>
                        <LineClampText noOfLines={2}>
                            <TextVar11>{textVar11}</TextVar11>
                        </LineClampText>
                    </TextContainer>
                ) : null}
            </CommonCenterContainer>
        </CommonTemplateContainer>
    );
};

export const Template2D = memo(Template2DComponent);
