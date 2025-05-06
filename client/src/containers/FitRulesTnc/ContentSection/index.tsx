import React from 'react';

import { htmlSanitization } from '../../../utils';

import {
    Title, Heading, Description,
} from '../styled';
import { fitRulesTncContentType } from '../constants';

interface ContentSectionProps {
    content : fitRulesTncContentType;
}

const ContentSection = (props: ContentSectionProps) => {
    const { content } = props;

    return (
        <>
            {content.map((data) => (
                <>
                    {data.title && <Title>{data.title}</Title>}
                    <Heading>{data.heading}</Heading>
                    {data.description && data.description.map((descriptionData, index) => (
                        <Description
                            lastContent={data.description.length - 1 === index}
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(descriptionData.content) }}
                        />
                    ))}
                </>
            ))}
        </>
    );
};

export default ContentSection;
