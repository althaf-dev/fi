/**
 * Accordion Component
 */
import React, { useState, memo } from 'react';

import { SVGS_URL } from '../../constants/AssetConstants';

import { Image } from '../Abstract';

import { Container, Title, ImageHolder } from './styled';

interface IAccordionProps {
    accordionLabel: string;
    children: React.ReactNode;
    hasMobileDesignV1?: boolean;
}

const Accordion = (props: IAccordionProps) => {
    const {
        accordionLabel, children, hasMobileDesignV1,
    } = props;

    const [showAccordionContent, setShowAccordionContent] = useState(true);

    const onClick = () => {
        setShowAccordionContent(!showAccordionContent);
    };

    const getImageUrl = () => {
        if (showAccordionContent) {
            return `${SVGS_URL}feature-accordion-top-arrow.svg`;
        }

        return `${SVGS_URL}feature-accordion-bottom-arrow.svg`;
    };

    return (
        <>
            {!hasMobileDesignV1 ? (
                <Container onClick={onClick}>
                    <Title font='buttonVariantFour' tagType='h3' color='MINE_SHAFT'>{accordionLabel}</Title>
                    <ImageHolder>
                        <Image icon={getImageUrl()} alt='icon' />
                    </ImageHolder>
                </Container>
            ) : (
                null
            )}
            {showAccordionContent ? children : null}
        </>
    );
};

Accordion.defaultProps = {
    hasMobileDesignV1: false,
};

export default memo(Accordion);
