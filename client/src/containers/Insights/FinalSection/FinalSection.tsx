import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Font, Flex, Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { RootDispatch } from '../../../store';
import { INSIGHTS_FINISHEDINSIGHTSQUIZWL_EVENT, trackEvent } from '../../../events';
import { LOGOS_URL_MAP, SVGS_URL } from '../../../constants/AssetConstants';

import { Holder } from '../InsightsStyled/InsightsStyled';
import { updateActiveStateInsightAction } from '../actions';

const ContentContainer = styled(Flex)`
    min-height: 100vh;
    max-height: 100vh;
    max-width: 360px;

    margin: 0px auto;
    align-items: center;
    flex-direction: column;
    /* justify-content: space-between; */
    background-color: ${(props) => props.theme.color.CHARCOAL_GREY};

    @media ${Device.desktop} {
        max-width: 1290px;
        width: 100%;
        min-height: 100%;
        max-height: 100%;
        background-color: ${(props) => props.theme.color.DARKER_GREY};
        border-radius: 30px;
        position: relative;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    margin: 0px auto;

    @media ${Device.desktop} {
        max-width: 357px;
        margin-top: 28px;
    }
`;

const Content = styled.div`
    padding: 0px 23px;
    margin: auto 0px;
    max-width: 518px;
`;

const Text = styled(Font)`
    text-align: center;
`;

const Title = styled(Text)`
    margin-bottom: 16px;
`;

const Description = styled(Text)``;

/*
const Footer = styled.div`
    width: 312px;
    margin: 0px auto;

    @media ${Device.desktop} {
        width: 238px;
    }
`;

const Link = styled(Text)`
    border-bottom: 1px solid ${(props) => props.theme.color.SILVER_2};
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.color.FOREST_GREEN};
        border-bottom: 1px solid ${(props) => props.theme.color.FOREST_GREEN};
    }
`;

const LinkWrapper = styled.div`
    text-align: center;
    margin-bottom: 16px;

    @media ${Device.desktop} {
        margin-bottom: 36px;
    }
`;

const ButtonWrapper = styled.div`
    margin-bottom: 16px;

    @media ${Device.desktop} {
        margin-bottom: 36px;
    }
`;
const Button = styled(PrimaryButton)``;
*/

const CloseHolder = styled.div`
    overflow: hidden;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 16px;
    cursor: pointer;

    @media ${Device.desktop} {
        left: 48px;
        top: 48px;
        width: 52px;
        height: 52px;
    }
`;

const titleOne = (
    <>
        <div>Level Up!</div>
        <div>Congratulations 🎉</div>
    </>
);

const titleTwo = (
    <>
        <div>Not all those who </div>
        <div>wander are lost 🌏</div>
    </>
);

const descriptionOne = 'You wield command over your spending strength with finesse.';

const descriptionTwo = 'Now you know where your money went. For more GPS navigation through financial realms, try Fi.';

interface FinalSectionProps {
    answerState: boolean[];
    updateActiveStateInsightAction?: (number: number) => void;
    trackingPayload: any;
}

const FinalSection = (props: FinalSectionProps) => {
    const navigate = useNavigate();
    const { trackingPayload, answerState } = props;

    const getRightAnswers = () => {
        let index = 0;

        props.answerState.forEach((answer) => {
            if (answer) {
                index += 1;
            }
        });

        return index;
    };

    useEffect(() => {
        // when user reaches "Level Up/wander lost" screen event
        trackEvent(
            INSIGHTS_FINISHEDINSIGHTSQUIZWL_EVENT,
            trackingPayload,
        );
    }, []);

    return (
        <Holder color='dark'>
            <ContentContainer>
                <CloseHolder
                    onClick={() => {
                        props.updateActiveStateInsightAction(1);
                        navigate('/');
                    }}
                >
                    <Image
                        icon={LOGOS_URL_MAP.FI_LOGO}
                        alt='fi money'
                        objectType='contain'
                    />
                </CloseHolder>
                <ImageWrapper>
                    <Image
                        icon={`${SVGS_URL}finalsection.svg`}
                        alt='Thanks'
                        loadingType='lazy'
                    />
                </ImageWrapper>

                <Content>
                    <Title tagType='text' font='h1VariantThree' color='WHITE'>
                        {answerState && getRightAnswers() >= 4 ? titleOne : titleTwo}
                    </Title>
                    <Description tagType='text' font='input' color='SILVER_2'>
                        {answerState && getRightAnswers() >= 4 ? descriptionOne : descriptionTwo}
                    </Description>
                </Content>

                {/* <Footer>
                    <ButtonWrapper>
                        <Button label='INVITE NOW' color='WHITE' />
                    </ButtonWrapper>
                    <LinkWrapper>
                        <Link tagType='span' font='input' color='SILVER_2'>
                            Tell us how to improve
                        </Link>
                    </LinkWrapper>
                </Footer> */}
            </ContentContainer>
        </Holder>
    );
};

const mapStateToProps = ({ insightReducer }) => {
    const { answerState } = insightReducer;

    return {
        answerState,
    };
};

const mapPropsToState = (dispatch: RootDispatch) => ({
    updateActiveStateInsightAction: (payload: number) => dispatch(updateActiveStateInsightAction(payload)),
});

const connector = connect(mapStateToProps, mapPropsToState);

export default connector(FinalSection);
