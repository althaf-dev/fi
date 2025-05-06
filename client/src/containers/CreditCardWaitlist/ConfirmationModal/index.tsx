/**
 * @file Confirmation modal to show the user about successful addition to waitlist
 */

import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';

import { Image, PrimaryButton } from '../../../components/Abstract';
import { PNGS_URL } from '../../../constants/AssetConstants';
import { NAVIGATION_URLS } from '../../../constants/AppConstant';
import { WINDOW_SIZE, Device } from '../../../Themes/Device';
import { useWindowDimensions } from '../../../hooks';
import MIXINS from '../../../Themes/mixins';

import { selectCreditCardWaitlistReducer } from '../selectors';
import { Description, Title } from '../styled';
import { setModalValue } from '../actions';
import { CONFIRMATION_MODAL_DATA } from '../constants';

// eslint-disable-next-line no-var
declare var window: any;

const customStylesForModal = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        zIndex: 10,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 0,
        bottom: 0,
        transform: 'translate(-50%, -50%)',
        width: 320,
        height: 'fit-content',
        borderRadius: 30,
        padding: 30,
        boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(40, 40, 40)',
        border: 0,
    },
};

const customStylesForModalDesktop = {
    overlay: customStylesForModal.overlay,
    content: {
        ...customStylesForModal.content,
        width: 460,
        height: 500,
        padding: 40,
    },
};

const IconContainer = styled.div`
    margin-left: auto;
`;

const IconBox = styled.div`
    display: inline-block;
    cursor: pointer;
    width: 30px;
    height: 30px;

    @media ${Device.desktop} {
        width: 40px;
        height: 40px;
    }
`;

const ContentContainer = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column' })}; 
    padding: 0 20px;
    gap: 15px;
`;

const ButtonHolder = styled.div`
    width: 100%;
`;

const ModalImageHolder = styled.div`
    width: 66px;
    height: 66px;

    @media ${Device.tab} {
        width: 160px;
        height: 160px;
    }
`;

const ConfirmationModal = () => {
    const { width } = useWindowDimensions();

    const dispatch = useDispatch();

    const { isModalOpen } = useSelector(selectCreditCardWaitlistReducer, shallowEqual);
    // const { isExistingUser } = useSelector(selectUserDetails, shallowEqual); // need to enable once BE is ready

    /**
     * Disabled now because we need to show only one modal for both existing and non-existing user.
     * Once BE is ready, need separate modal for the existing and new user.
     */

    // This state is for the new user
    // const [modalContent, setModalContent] = useState({
    //     image: CONFIRMATION_MODAL_DATA.IMAGE_NEW_USER,
    //     title: CONFIRMATION_MODAL_DATA.TITLE_NEW_USER,
    //     description: CONFIRMATION_MODAL_DATA.DESCRIPTION_NEW_USER,
    //     buttonLabel: CONFIRMATION_MODAL_DATA.BUTTON_LABEL_NEW_USER,
    // });

    const onClickClose = () => {
        dispatch(setModalValue({ isModalOpen: false }));

        window.location.href = NAVIGATION_URLS.CREDIT_CARD_WAITLIST.url;
    };

    // Update modalContent if the user is isExistingUser
    // useEffect(() => {
    //     if (isExistingUser) {
    //         setModalContent({
    //             image: CONFIRMATION_MODAL_DATA.IMAGE_EXISTING_USER,
    //             title: CONFIRMATION_MODAL_DATA.TITLE_EXISTING_USER,
    //             description: CONFIRMATION_MODAL_DATA.DESCRIPTION_EXISTING_USER,
    //             buttonLabel: CONFIRMATION_MODAL_DATA.BUTTON_LABEL_EXISTING_USER,
    //         });
    //     }
    // }, [isExistingUser]);

    // For now we are are showing the existing user modal for both existing and the new user
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [modalContent, setModalContent] = useState({
        image: CONFIRMATION_MODAL_DATA.IMAGE_EXISTING_USER,
        title: CONFIRMATION_MODAL_DATA.TITLE_EXISTING_USER,
        description: CONFIRMATION_MODAL_DATA.DESCRIPTION_EXISTING_USER,
        buttonLabel: CONFIRMATION_MODAL_DATA.BUTTON_LABEL_EXISTING_USER,
    });

    return (
        <Modal
            isOpen={isModalOpen}
            style={
                width < WINDOW_SIZE.DESKTOP
                    ? customStylesForModal
                    : customStylesForModalDesktop
            }
            ariaHideApp={false}
        >
            <IconContainer>
                <IconBox onClick={onClickClose}>
                    <Image icon={`${PNGS_URL}close-icon.png`} alt='Close icon' />
                </IconBox>
            </IconContainer>
            <ContentContainer>
                <ModalImageHolder>
                    <Image icon={`${PNGS_URL}${modalContent.image}`} alt='Partying Face' />
                </ModalImageHolder>
                <Title
                    tagType='text'
                    font='h5VariantThree'
                >
                    {modalContent.title}
                </Title>
                <Description
                    font='labelVariantSixteen'
                    tagType='text'
                    color='GREY_3'
                >
                    {modalContent.description}
                </Description>
                <ButtonHolder>
                    <a href={window.oneLinkCommonUrl} id='confirmation-cta' target='_blank' rel='noreferrer'>
                        <PrimaryButton
                            fontVariant='buttonVariantFive'
                            label={modalContent.buttonLabel}
                            disabled={false}
                            borderRadius='12px'
                            disableTransForm
                            disableBgColor='LIGHT_SEA_GREEN'
                            disableFontColor='BOMBAY'
                        />
                    </a>
                </ButtonHolder>
            </ContentContainer>
        </Modal>
    );
};

export default ConfirmationModal;
