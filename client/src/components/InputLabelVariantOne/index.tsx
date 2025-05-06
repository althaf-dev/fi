import React, { memo } from 'react';

import { htmlSanitization } from '../../utils';

import ToolTip from '../ToolTipVariantOne';

import { Container, Description } from './styled';

interface InputLabelVariantOneProps {
    label: string;
    additionalInfo?: string;
}

const InputLabelVariantOne = (props: InputLabelVariantOneProps) => {
    const { label, additionalInfo } = props;

    return (
        <Container>
            <Description>
                <span
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: htmlSanitization(label) }}
                />
            </Description>

            {
                additionalInfo ? <ToolTip tooltipText={additionalInfo} /> : null
            }
        </Container>
    );
};

InputLabelVariantOne.defaultProps = {
    additionalInfo: '',
};

export default memo(InputLabelVariantOne);
