/**
 * @file Story Template 1 for Fi Minutes
 */

import React, { ReactElement, memo } from 'react';

import { Image } from '../../../components';

import { ITemplateProps } from '../interfaces';
import { handleClickAction } from '../utils';
import { LineClampText, TextVar1, TextVar2, TextVar4 } from '../styled';
import {
    CommonTemplateContainer, CommonCenterContainer, TextContainer, CenterImgContainer, BottomCTA,
} from '../CommonTemplate';

const Template1 = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values } = storyItem;
    const {
        text_1: textVar1,
        text_2: name,
        text_3: textVar2,
        text_4: textVar4,
        image_1: centreImg,
        image_2: bottomImg,
        action_id: actionId,
    } = values;

    return (
        <CommonTemplateContainer>
            <CommonCenterContainer>
                {textVar1 ? (
                    <TextContainer>
                        <LineClampText noOfLines={2}>
                            <TextVar1>{textVar1}</TextVar1>
                        </LineClampText>
                    </TextContainer>
                ) : null}
                {name ? (
                    <TextContainer>
                        <LineClampText noOfLines={2}>
                            <TextVar2>{name}</TextVar2>
                        </LineClampText>
                    </TextContainer>
                ) : null}
                {textVar2 ? (
                    <TextContainer>
                        <LineClampText noOfLines={2}>
                            <TextVar2>{textVar2}</TextVar2>
                        </LineClampText>
                    </TextContainer>
                ) : null}
                {textVar4 ? (
                    <TextContainer>
                        <LineClampText noOfLines={2}>
                            <TextVar4>{textVar4}</TextVar4>
                        </LineClampText>
                    </TextContainer>
                ) : null}
                {centreImg ? (
                    <CenterImgContainer>
                        <Image
                            loadingType='eager'
                            icon={centreImg}
                            alt='Centre Image'
                        />
                    </CenterImgContainer>
                ) : null}
            </CommonCenterContainer>
            <BottomCTA
                hasAction={!!actionId}
                handleActionClick={handleClickAction(actionId, storyItem)}
                actionImg={bottomImg}
            />
        </CommonTemplateContainer>
    );
};

export default memo(Template1);
