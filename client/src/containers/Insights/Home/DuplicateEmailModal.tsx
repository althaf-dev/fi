/**
 * @file Duplicate Email Modal component to show the bottom sheet to retry the gmail authentication flow incase we receive required error code from BE
 * This is getting used only for Android and iOS. We are not handling any desktop styles as of now.
 */

import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { Font, Image } from '../../../components';
import { SVGS_URL } from '../../../constants/AssetConstants';

const IconHolder = styled.div`
    width: 40px;
    height: 40px;
    margin: 0 auto;
`;

const Heading = styled(Font)`
    margin-bottom: 8px;
    margin-top: 24px;
    text-align: center;
`;

const Description = styled(Font)`
    margin-bottom: 24px;
    text-align: center;
`;

const ButtonHolder = styled.button`
    background: transparent;
    border: 1px solid ${(props) => props.theme.color.LIGHTER_GREY};
    border-radius: 6px;
    color: ${(props) => props.theme.color.FOREST_GREEN};
    font-family: 'Gilroy', sans-serif;
    font-weight: 700;
    font-size: 16px;
    float: right;
    line-height: 20px;
    margin-bottom: 16px;
    padding: 10px 20px;
`;

const customStylesForModal = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1,
    },
    content: {
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
        top: 'auto',
        border: 0,
        borderRadius: '20px 20px 0px 0px',
        padding: '20px 24px 16px',
        background: '#282828',
    },
};

interface DuplicateEmailModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DuplicateEmailModal = (props: DuplicateEmailModalProps) => {
    const { isOpen, onClose } = props;

    return (
        <Modal
            isOpen={isOpen}
            style={customStylesForModal}
            ariaHideApp={false}
        >
            <IconHolder>
                <Image icon={`${SVGS_URL}exclamation.svg`} objectType='cover' alt='exclamation icon' />
            </IconHolder>
            <Heading font='bottomSheetHeading' tagType='text' color='WHITE'>
                Email already linked to a Fi account
            </Heading>
            <Description font='bottomSheetDescription' tagType='text' color='SILVER_2'>
                The email you tried to sign-up with is already linked to another Fi account.
                Please retry with a different email that belongs to you.
            </Description>
            <ButtonHolder onClick={onClose}>
                Retry
            </ButtonHolder>
        </Modal>
    );
};

export default DuplicateEmailModal;
