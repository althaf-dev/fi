/**
 * @file TextLabelWithIcon: Text Label With Icon Component
 */
import React, { memo } from 'react';
import styled from 'styled-components';

import { htmlSanitization } from '../../utils';

import { Font, Image } from '../Abstract';

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.color.CHALK_GREY};
    border-radius: 20px;
    padding: 20px;
    display: flex;
    align-items: end;
`;

const Title = styled(Font)`
    margin-left: 13px;
    text-transform: capitalize;
`;

const ImageHolder = styled.div`
    width: 38px;
    height: 38px;
`;

interface TextLabelProps {
    title: string;
    iconUrl: string;
    fallbackIconUrl: string;
}

const TextLabelWithIcon = (props: TextLabelProps) => {
    const { title, iconUrl, fallbackIconUrl } = props;

    return (
        <Wrapper>
            <ImageHolder>
                <Image
                    icon={iconUrl}
                    alt='card-image'
                    loadingType='lazy'
                    fallBackImage={fallbackIconUrl}
                />
            </ImageHolder>
            <Title font='labelVariantFifteen' tagType='text' color='MINE_SHAFT' dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }} />
        </Wrapper>
    );
};

export default memo(TextLabelWithIcon);
