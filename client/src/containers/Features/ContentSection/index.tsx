import React, { useState } from 'react';

import { featurePageSectionObjResponse } from '../constants';
import ContentAccordion from '../ContentAccordion';

interface ContentSectionProps {
    featurePageSectionObj: featurePageSectionObjResponse
}

const ContentSection = (props: ContentSectionProps) => {
    const { featurePageSectionObj } = props;
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <ContentAccordion
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            featurePageSectionObj={featurePageSectionObj}
        />
    );
};

export default ContentSection;
