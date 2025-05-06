/**
 * @file Story Template 4 for Fi Minutes
 * Consists for 2 variants - 4A, 4B
 */

import React, { memo, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

import { helpers } from '../../../utils';
import MIXINS from '../../../Themes/mixins';
import { Image } from '../../../components';

import { ITemplateProps } from '../interfaces';
import {
    TextVar11, TextVar12, TextVar13, TextVar14, TextVar5, TextVar7A, LineClampText,
} from '../styled';
import {
    CommonTemplateContainer, CommonCenterContainer, BottomCTA, TextContainer,
} from '../CommonTemplate';
import { handleShareAction } from '../utils';
import { TEMPLATE_IDS } from '../constants';

const ItemContainer = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column' })};
`;

const ImageContainer = styled.div<{imageWidth: string}>`
    width: ${(props) => props.imageWidth};
    margin-bottom: 10px;
`;

const IMAGE_WIDTH_MAP = {
    0: '67px',
    1: '33px',
    2: '33px',
};

interface IRenderTitleProps {
    title: string;
    index: number;
    templateId: string;
}

const RenderTitle = (props: IRenderTitleProps): ReactElement => {
    const { title, index, templateId } = props;

    switch (index) {
        case 0: {
            if (templateId === TEMPLATE_IDS.TEMPLATE_4A) {
                return <TextVar5>{title}</TextVar5>;
            }

            // TEMPLATE_4B
            return <TextVar7A>{title}</TextVar7A>;
        }

        case 1: {
            return <TextVar13>{title}</TextVar13>;
        }

        case 2: {
            return <TextVar14>{title}</TextVar14>;
        }

        default: {
            return <TextVar14>{title}</TextVar14>;
        }
    }
};

interface IItem {
    title: string;
    // eslint-disable-next-line camelcase
    sub_title: string;
    image: string;
}

interface IRenderItemProps {
    singleItem: IItem;
    index: number;
    allItems: IItem[];
    templateId: string;
}

const RenderItem = (props: IRenderItemProps): ReactElement => {
    const {
        singleItem, index, allItems, templateId,
    } = props;
    const { title, sub_title: subTitle, image } = singleItem;

    let marginBottom = '25px';
    let lineClamp = 1;

    // Keep line clap as 2 for only the 1st item
    if (index === 0) {
        lineClamp = 1;
    }

    // last item
    if (allItems.length - 1 === index) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        marginBottom = '5px';
    }

    return (
        <TextContainer marginBottom='0px'>
            <ItemContainer>
                <ImageContainer imageWidth={IMAGE_WIDTH_MAP[index]}>
                    <Image
                        loadingType='eager'
                        icon={image}
                        alt='Icon Image'
                    />
                </ImageContainer>
                <TextContainer>
                    <LineClampText noOfLines={lineClamp}>
                        <RenderTitle
                            title={title}
                            index={index}
                            templateId={templateId}
                        />
                    </LineClampText>
                </TextContainer>
                {subTitle ? (
                    <TextContainer>
                        <LineClampText noOfLines={1}>
                            <TextVar11>{subTitle}</TextVar11>
                        </LineClampText>
                    </TextContainer>
                ) : null}
            </ItemContainer>
        </TextContainer>
    );
};

const RenderItemContainer = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column', justify: 'space-evenly', height: '80%' })};
`;

const Template4 = (props: ITemplateProps): ReactElement => {
    const { storyItem } = props;
    const { values, template_id: templateId } = storyItem;
    const {
        text_1: textVar12,
        items: stringifiedItems,
        share_image: shareImage,
    } = values;

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(JSON.parse(stringifiedItems));
    }, [stringifiedItems]);

    if (helpers.isNilOrEmpty(items)) return null;

    return (
        <CommonTemplateContainer>
            <CommonCenterContainer>
                {textVar12 ? (
                    <TextContainer marginBottom='20px'>
                        <TextVar12>{textVar12}</TextVar12>
                    </TextContainer>
                ) : null}
                <RenderItemContainer>
                    {items.map((singleItem, index, allItems) => (
                        <RenderItem
                            key={singleItem.title}
                            singleItem={singleItem}
                            index={index}
                            allItems={allItems}
                            templateId={templateId}
                        />
                    ))}
                </RenderItemContainer>
            </CommonCenterContainer>
            <BottomCTA
                hasAction
                handleActionClick={handleShareAction(storyItem)}
                actionImg={shareImage}
            />
        </CommonTemplateContainer>
    );
};

export default memo(Template4);
