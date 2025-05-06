/**
 * @file InputLabelVariantOneVOne
 *
 * @summary This component is used to render a label for a credit card rewards calculator along with
 * optional additional information displayed as a tooltip.
 *
 * @description This is a modified version of InputLabelVariantOne, which was originally designed for a generic input field.
 * It has been styled specifically for use in a credit card rewards calculator.
*/

import React, { memo } from 'react';

import { htmlSanitization } from '../../utils';

import ToolTip from '../ToolTipVariantOne';

import { Container, Description } from './styled';

interface InputLabelVariantOneVersionOneProps {
    label: string;
    additionalInfo?: string;
}

const InputLabelVariantOneVOne = (props: InputLabelVariantOneVersionOneProps) => {
    const { label, additionalInfo } = props;

    return (
        <Container>
            <Description>
                <span
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: htmlSanitization(label) }}
                />
            </Description>

            {additionalInfo ? <ToolTip tooltipText={additionalInfo} /> : null}
        </Container>
    );
};

InputLabelVariantOneVOne.defaultProps = {
    additionalInfo: '',
};

export default memo(InputLabelVariantOneVOne);
