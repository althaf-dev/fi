import React, { ReactNode } from 'react';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

import { PrimaryButton, Flex, Image, Font } from '../../../components';
import { useWindowDimensions } from '../../../hooks';
import { WINDOW_SIZE, Device } from '../../../Themes/Device';
import {
    SectionOne,
    QuestionWrapper,
    PageInfo,
    Wrapper,
} from '../InsightsStyled/InsightsStyled';
import Header from '../Header/Header';
// import { unlinkSpendInfoAccount } from '../saga';
// import { unlinkAccountAction } from '../actions';

import { SVGS_URL } from '../../../constants/AssetConstants';

const Container = styled.div`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    position: absolute;
    max-width: 1290px;
    width: 100%;

    @media ${Device.desktop} {
        border-radius: 30px;
        flex-direction: row;
        height: unset;
        min-height: calc(100vh - 150px);
        max-height: 750px;
        overflow: hidden;
        position: static;
    }
`;

const FooterWrapper = styled.div`
    max-width: 360px;
    width: 100%;
    margin: auto auto 0px;
    padding: 0px 24px;

    @media ${Device.desktop} {
        max-width: 549px;

        padding: 0px;
    }
`;

const PreButtonText = styled(Font)`
    padding: 0px 9px;
    margin-bottom: 24px;

    @media ${Device.desktop} {
        padding: 0px 64px 0px 0px;
        margin-bottom: 52px;
    }
`;

/*
const PostButtonText = styled(Font)`
    width: 100%;
    margin-top: 12px;
    display: flex;
    justify-content: center;
    @media ${Device.desktop} {
        margin-top: 0px;
        display: block;
    }
`;

const Email = styled.div`
    color: ${(props) => props.theme.color.FOREST_GREEN};

    @media ${Device.desktop} {
        margin-top: 4px;
    }
`;

const Unlink = styled.a`
    color: ${(props) => props.theme.color.SILVER_2};
    border-bottom: 1px solid ${(props) => props.theme.color.SILVER_2};
`;
*/

const ButtonWrapper = styled.div`
    text-align: center;
    margin-bottom: 12px;

    @media ${Device.desktop} {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        align-items: center;
        text-align: left;
        margin-bottom: 0px;
    }
`;

const ArrowWrapper = styled(Flex)`
    width: calc(100% - 8px);
    justify-content: space-between;
    margin: 45px 0 22px 8px;

    @media ${Device.desktop} {
        width: 128px;
    }
`;

const Arrow = styled.div`
    width: 30.69px;
    height: 29px;
    cursor: pointer;
`;

const ArrowRight = styled(Arrow)``;
const ArrowLeft = styled(Arrow)``;

const SectionTwo = styled(Flex)`
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 80px);
    justify-content: space-between;
    padding-top: 40px;
    @media ${Device.desktop} {
        padding: 73px 36px 36px 60px;
        flex-basis: 50%;
        background-color: ${(props) => props.theme.color.LIGHTER_GREY};
        height: inherit;
    }
`;

interface CommonInsightPageProps {
    activePageNumber: number;
    preText?: ReactNode;
    isReturning?: boolean;
    email?: string;
    qnText?: string;
    onClose?: () => void;
    nextInsight?: () => void;
    previousInsight?: () => void;
    children?: ReactNode;
    btnText?: string;
}

const CommonInsightPage = (props: CommonInsightPageProps) => {
    const { width } = useWindowDimensions();
    // const dispatch = useDispatch();
    // const history = useHistory();

    const {
        activePageNumber, qnText, preText, btnText, isReturning,
        previousInsight, nextInsight, onClose, children,
    } = props;

    return (
        <Container>
            {width > WINDOW_SIZE.DESKTOP ? (
                <SectionOne>
                    <Header onClose={onClose} />

                    <QuestionWrapper>
                        <PageInfo
                            tagType='text'
                            font='label'
                            color='TEXT_GREY_1'
                        >
                            {`${activePageNumber} OF 5`}
                        </PageInfo>

                        <Wrapper
                            font='h2VariantTwo'
                            tagType='text'
                            color='WHITE'
                        >
                            {qnText}
                        </Wrapper>
                    </QuestionWrapper>
                </SectionOne>
            ) : (
                <SectionOne>
                    <Header onClose={onClose} />
                </SectionOne>
            )}

            <SectionTwo>
                {children}

                <FooterWrapper>
                    <PreButtonText
                        color='SILVER_2'
                        tagType='text'
                        font='h3VariantThree'
                    >
                        {preText}
                    </PreButtonText>

                    <ButtonWrapper>
                        {!isReturning ? (
                            <PrimaryButton
                                label={btnText || 'NEXT INSIGHT'}
                                color='WHITE'
                                onClick={nextInsight}
                            />
                        ) : (
                            <ArrowWrapper>
                                <ArrowLeft onClick={previousInsight}>
                                    <Image
                                        icon={`${SVGS_URL}insight-left-arrow.svg`}
                                        alt='Left Icon'
                                    />
                                </ArrowLeft>
                                <ArrowRight onClick={nextInsight}>
                                    <Image
                                        icon={`${SVGS_URL}insight-right-active-arrow.svg`}
                                        alt='Right Icon'
                                    />
                                </ArrowRight>
                            </ArrowWrapper>
                        )}
                        {/* comment out to hide dummy id for WEB platform
                        <PostButtonText
                            font='labelVariantOne'
                            tagType='text'
                            color='SILVER_2'
                        >
                            <div>Insights taken from&nbsp;</div>
                            <Email>
                                {props.email}{' '}
                                <Unlink
                                    onClick={() => {
                                        dispatch(unlinkAccountAction());
                                        history.push('/waitlist');
                                    }}
                                >
                                    Unlink
                                </Unlink>
                            </Email>
                        </PostButtonText>
                        */}
                    </ButtonWrapper>
                </FooterWrapper>
            </SectionTwo>
        </Container>
    );
};

export default CommonInsightPage;
