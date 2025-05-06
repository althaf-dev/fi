import React from 'react';

import { TitleContainer, TitleHeader } from '../styled';

interface TitleProps {
    content: string;
}

const Title = (props: TitleProps) => {
    const { content } = props;

    return (
        <TitleContainer>
            <TitleHeader font='h1NormalVariant' tagType='h1'>
                {content}
            </TitleHeader>
        </TitleContainer>
    );
};

export default Title;
