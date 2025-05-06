/**
 * @file Template 5 for Fi minutes
 * Story consists of information like horoscope of 2023
 */

import React, { ReactElement, memo } from 'react';
import styled from 'styled-components';

import MIXINS from '../../../Themes/mixins';
import { Image } from '../../../components';

import { ITemplateProps } from '../interfaces';
import { handleShareAction } from '../utils';
import {
    CommonTemplateContainer, CommonCenterContainer, BottomCTA, TextContainer,
} from '../CommonTemplate';
import { TextVar1A } from '../styled';

const CardImageContainer = styled.div<{ bgImage: string }>`
    ${MIXINS.FlexMixin({ dir: 'column', justify: 'flex-start' })};
    height: 587px;
    width: 350px;
    position: relative;
    background-image: url(${(props) => props.bgImage});
    background-position: center;
    background-size: cover;
`;

const ImageItem = styled.div`
    width: 163px;
    margin: 45px 0 60px;
`;

const TextOuterContainer = styled.div`
    max-width: 270px;
    height: 220px;
    overflow: hidden;
`;

const Template5 = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values } = storyItem;
    const {
        centre_image: centreImage,
        box_image: boxImg,
        text_1: text1Var1,
        text_2: text2Var1,
        text_3: text3Var1,
        share_image: shareImage,
    } = values;

    return (
        <CommonTemplateContainer>
            <CommonCenterContainer>
                <CardImageContainer bgImage={boxImg}>
                    <ImageItem>
                        <Image
                            loadingType='eager'
                            icon={centreImage}
                            alt='Icon Image'
                        />
                    </ImageItem>
                    <TextOuterContainer>
                        <TextContainer marginBottom='15px'>
                            <TextVar1A>{text1Var1}</TextVar1A>
                        </TextContainer>
                        <TextContainer marginBottom='15px'>
                            <TextVar1A>{text2Var1}</TextVar1A>
                        </TextContainer>
                        <TextContainer marginBottom='15px'>
                            <TextVar1A>{text3Var1}</TextVar1A>
                        </TextContainer>
                    </TextOuterContainer>
                </CardImageContainer>
            </CommonCenterContainer>
            <BottomCTA
                hasAction
                handleActionClick={handleShareAction(storyItem)}
                actionImg={shareImage}
            />
        </CommonTemplateContainer>
    );
};

export default memo(Template5);
