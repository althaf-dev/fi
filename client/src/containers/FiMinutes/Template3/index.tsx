/**
 * @file Story Template 3 for Fi Minutes
 */

import React, { ReactElement, memo } from 'react';

import { ITemplateProps } from '../interfaces';
import { handleShareAction } from '../utils';
import {
    CommonTemplateContainer, CommonCenterContainer, BottomCTA, FlexEndContainer,
} from '../CommonTemplate';

const Template3 = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values } = storyItem;
    const {
        share_image: shareImage,
    } = values;

    return (
        <CommonTemplateContainer justifyContent='flex-end'>
            <CommonCenterContainer>
                <FlexEndContainer>
                    <BottomCTA
                        hasAction
                        handleActionClick={handleShareAction(storyItem)}
                        actionImg={shareImage}
                    />
                </FlexEndContainer>
            </CommonCenterContainer>
        </CommonTemplateContainer>
    );
};

export default memo(Template3);
