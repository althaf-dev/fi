import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Font } from '../Abstract';

import {
    BottomModal,
    SectionOne,
    QuestionWrapper,
    PageInfo,
    Wrapper,
} from '../../containers/Insights/InsightsStyled/InsightsStyled';
import Header from '../../containers/Insights/Header/Header';
import { Device } from '../../Themes/Device';

const Container = styled.div`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    margin: 0px auto;
    position: absolute;
    max-width: 1290px;
    width: 100%;

    @media ${Device.desktop} {
        border-radius: 30px;
        flex-direction: row;
        min-height: 100%;
        height: calc(100vh - 150px);
        max-height: 750px;
        overflow: hidden;
        position: static;
    }
`;

const ModalContainer = styled.div`
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

interface CommonModalPageProps {
    activePageNumber?: number;
    qnText?: string;
    hintText?: string;
    type?: number;
    onClose?: () => void;
    children?: ReactNode;
    totalPages?: number;
}

const CommonModalPage = (props: CommonModalPageProps) => {
    const {
        activePageNumber, totalPages, qnText, hintText, type,
        onClose, children,
    } = props;

    return (
        <Container>
            <SectionOne>
                <Header allowRouting onClose={onClose} />

                <QuestionWrapper>
                    <PageInfo
                        tagType='text'
                        font='footerMail'
                        color='TEXT_GREY_1'
                    >
                        {`${activePageNumber} OF ${totalPages}`}
                    </PageInfo>

                    <Wrapper font='h2VariantTwo' tagType='text' color='WHITE'>
                        {qnText}
                    </Wrapper>
                </QuestionWrapper>
            </SectionOne>

            {type === 2 ? (
                children
            ) : (
                <BottomModal>
                    <ModalContainer>
                        <Font
                            tagType='text'
                            font='h5VariantFour'
                            color='MINE_SHAFT'
                        >
                            {hintText}
                        </Font>
                        {children}
                    </ModalContainer>
                </BottomModal>
            )}
        </Container>
    );
};

CommonModalPage.defaultProps = {
    activePageNumber: 1,
    totalPages: 5,
    type: 1,
    qnText: 'In the past 3 months, did you spend more shopping or ordering takeout?',
    hintText: 'Choose from the options below',
    onClose: () => {},
    children: null,
};

export default CommonModalPage;
