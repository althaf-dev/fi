import React from 'react';

import { DescriptionContainer, DescriptionHeader, DescriptionContent } from '../styled';

interface DescriptionProps {
    title?: string;
    content: any;
}

const Description = (props: DescriptionProps) => {
    const { title, content } = props;

    return (
        <DescriptionContainer>
            {
                title ? (
                    <DescriptionHeader font='p4' tagType='text' color='MINE_SHAFT'>
                        {title}
                    </DescriptionHeader>
                ) : null
            }
            <DescriptionContent font='p' tagType='text' color='SUVA_GREY'>
                {content}
            </DescriptionContent>
        </DescriptionContainer>
    );
};

Description.defaultProps = { title: '' };

export default Description;
