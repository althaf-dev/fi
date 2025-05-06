import React, { useState, useRef } from 'react';

import { SVGS_URL } from '../../constants/AssetConstants';
import { useClickOutside } from '../../hooks';
import { htmlSanitization } from '../../utils';

import { Image } from '../Abstract';

import {
    ToolTipWrapper,
    ToolTipIconHolder,
    Wrapper,
    Section,
    Description,
} from './styled';

interface ToolTipProps {
    tooltipText: string
    isTableView?: boolean;
    isCustomFlag?: boolean;
}

const ToolTip = (props: ToolTipProps) => {
    const { tooltipText, isTableView, isCustomFlag } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toolTipRef = useRef(null);
    const toolTipImageRef = useRef(null);

    useClickOutside(toolTipRef, (event: MouseEvent | TouchEvent) => {
        const element = toolTipImageRef.current;
        /*
         * toggle the isModalOpen state when clicking on the tooltip icon
         * else if click outside the tooltip modal then set isModalOpen state false
         */
        if (element.contains(event.target)) {
            setIsModalOpen((prev) => !prev);
        } else {
            setIsModalOpen(false);
        }
    }, 'click');

    return (
        <ToolTipWrapper>
            <ToolTipIconHolder ref={toolTipImageRef}>
                <Image icon={`${SVGS_URL}disclaimer.svg`} alt='disclaimer-icon' loadingType='lazy' />
            </ToolTipIconHolder>
            <Wrapper
                ref={(node) => {
                    toolTipRef.current = node;
                }}
                isTableView={isTableView}
                isModalOpen={isModalOpen}
                isCustomFlag={isCustomFlag}
            >
                <Section isTableView={isTableView} isCustomFlag={isCustomFlag}>
                    <Description>
                        <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(tooltipText) }}
                        />
                    </Description>
                </Section>
            </Wrapper>
        </ToolTipWrapper>
    );
};

ToolTip.defaultProps = {
    isTableView: false,
    isCustomFlag: false,
};

export default ToolTip;
