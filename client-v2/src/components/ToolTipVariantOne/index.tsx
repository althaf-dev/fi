import React, { useState, useRef } from 'react';

import { htmlSanitization } from '@/utils';

import { useClickOutside } from '../../hooks';
import { SVGS_URL } from '../../constants/AssetConstants';

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

    const toolTipRef = useRef<HTMLDivElement | null>(null);
    const toolTipImageRef = useRef<HTMLInputElement | null>(null);

    useClickOutside(toolTipRef, (event: MouseEvent | TouchEvent) => {
        const element = toolTipImageRef.current as HTMLInputElement;
        /*
         * toggle the isModalOpen state when clicking on the tooltip icon
         * else if click outside the tooltip modal then set isModalOpen state false
         */
        if (element && element.contains(event.target as Node)) {
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
