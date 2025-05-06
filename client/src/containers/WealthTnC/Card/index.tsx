import React from 'react';

import { CardContainer, CardWrapper, DescriptionContent } from '../styled';

interface CardProps {
    content: Array<any>;
    addBottomMargin?: boolean;
}

const Card = (props: CardProps) => {
    const { content, addBottomMargin } = props;
    const isSingleCard = content.length === 1;

    return (
        <CardContainer isSingleCard={isSingleCard} addBottomMargin={addBottomMargin}>
            {
                content.map((item) => (
                    <CardWrapper key={item.id} isSingleCard={isSingleCard}>
                        <DescriptionContent font='pSmallVariantOne' tagType='text' color='TUNDORA_2'>
                            {item.content}
                        </DescriptionContent>
                    </CardWrapper>
                ))
            }
        </CardContainer>
    );
};

Card.defaultProps = {
    addBottomMargin: false,
};

export default Card;
