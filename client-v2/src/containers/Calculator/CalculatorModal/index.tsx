import React, { useEffect, memo } from 'react';
import Modal from 'react-modal';

import {
    customStylesForModal,
    Wrapper,
    Separator,
    Label,
} from './styled';

interface CalculatorModalProps {
    isOpen: boolean;
    onClose: () => void;
    calculatorItem: any;
    calculatorInputFields: any;
    renderComponentBasedOnComponentType: (item: any) => React.ReactNode;
}

const CalculatorModal = (props: CalculatorModalProps) => {
    const {
        isOpen, onClose, calculatorItem, calculatorInputFields, renderComponentBasedOnComponentType,
    } = props;

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
            onRequestClose={onClose}
        >
            <Wrapper>
                <Label>
                    {calculatorItem.label}
                </Label>
                <Separator />
                {calculatorInputFields
                    .filter((item:any) => calculatorItem.input_id === item.input_id)
                    .map((item:any) => (
                        <div key={item.input_id}>
                            {renderComponentBasedOnComponentType(item)}
                        </div>
                    ))}
            </Wrapper>
        </Modal>
    );
};

export default memo(CalculatorModal);
