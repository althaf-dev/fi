/**
 * View Port Modal Component
 * We can use and show this Modal if Mobile and tab design is not available for a particular page
 */
import React, { useEffect, memo } from 'react';
import Modal from 'react-modal';

import { htmlSanitization } from '../../utils';

import {
    customStylesForModal,
    Wrapper,
    Label,
} from './styled';

interface ViewPortModalProps {
    isOpen: boolean;
    title: string;
}

const ViewPortModal = (props: ViewPortModalProps) => {
    const { isOpen, title } = props;

    /**
     * hide the document overflow when modal open
     * remove the document overflow when modal close
     */
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            style={customStylesForModal}
            ariaHideApp={false}
        >
            <Wrapper>
                <Label>
                    <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }}
                    />
                </Label>
            </Wrapper>
        </Modal>
    );
};

export default memo(ViewPortModal);
