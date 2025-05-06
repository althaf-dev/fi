import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Font, Image } from '../../../components';
import { Device, WINDOW_SIZE } from '../../../Themes/Device';
import { queryParams } from '../../../utils/queryParams';
import { useWindowDimensions } from '../../../hooks';
import { PNGS_URL, SVGS_URL, LOGOS_URL_MAP } from '../../../constants/AssetConstants';

import { getEmailVerifyStatusAction } from '../actions';

const Container = styled.div`
    background-color: ${(props) => props.theme.color.SUVA_GREY};
    height: 100vh; /* Fallback */
    height: calc(var(--vh, 1vh) * 100);

    @media ${Device.desktop} {
        min-height: 960px;
    }
`;

const PosterContainer = styled.div`
    background-color: ${(props) => props.theme.color.CHARCOAL_GREY};
    height: 240px;
    padding: 0;

    @media ${Device.tab} {
        height: 360px;
    }

    @media ${Device.desktop} {
        height: 480px;
    }
`;

const LogoContainer = styled.div`
    margin: 0 auto;
    max-width: 360px;
    padding: 24px 0 0 16px;

    @media ${Device.tab} {
        max-width: 720px;
        padding: 40px 0 0;
    }

    @media ${Device.desktop} {
        max-width: 1270px;
        padding: 80px 0 0;
    }
`;

const LogoWrapper = styled.div`
    width: 40px;
    cursor: pointer;

    @media ${Device.tab} {
        width: 44px;
    }

    @media ${Device.desktop} {
        width: 52px;
    }
`;

const ContentContainer = styled.div`
    align-items: center;
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    margin: 16px auto 0;
    max-width: 360px;
    padding: 32px;

    @media ${Device.tab} {
        max-width: 720px;
        margin: 40px auto 0;
        padding: 40px 24px;
    }

    @media ${Device.desktop} {
        max-width: 1270px;
        margin: 80px auto 0;
        padding: 48px 0 40px;
    }
`;

const StatusIconWrapper = styled.div`
    width: 52px;
    height: 52px;

    @media ${Device.tab} {
        width: 70px;
        height: 70px;
    }

    @media ${Device.desktop} {
        width: 100px;
        height: 100px;
    }
`;

const Title = styled(Font)`
    margin-top: 24px;
    margin-bottom: 16px;
    text-align: center;

    @media ${Device.tab} {
        margin-top: 32px;
        margin-bottom: 20px;
    }

    @media ${Device.desktop} {
        margin-top: 42px;
        margin-bottom: 24px;
    }
`;

const Description = styled(Font)`
    margin-bottom: 60px;
    text-align: center;

    @media ${Device.tab} {
        max-width: 560px;
        margin-bottom: 40px;
    }

    @media ${Device.desktop} {
        max-width: 720px;
        margin-bottom: 40px;
    }
`;

const IllustrationWrapper = styled.div`
    width: 240px;

    @media ${Device.tab} {
        width: 300px;
    }

    @media ${Device.desktop} {
        width: 360px;
    }
`;

interface EmailVerificationProps {
    loading: boolean;
    success: boolean;
}

interface QueryParams {
    requestId?: string;
    hash?: string;
}

const EmailVerification = ({ loading, success }: EmailVerificationProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { width } = useWindowDimensions();
    const params: QueryParams = queryParams(location.search);

    useEffect(() => {
        window.scrollTo(0, 0);

        const { requestId, hash } = params;

        if (requestId && hash) {
            dispatch(getEmailVerifyStatusAction({ requestId, hash }));
        } else {
            // redirect incase request id & hash params are not present
            navigate('/');
        }
    }, []);

    // do not render anything till we get response from backend
    if (loading) {
        return null;
    }

    return (
        <Container>
            <PosterContainer>
                <LogoContainer>
                    <LogoWrapper onClick={() => navigate('/')}>
                        <Image icon={LOGOS_URL_MAP.FI_LOGO} alt='Fi Money' />
                    </LogoWrapper>
                </LogoContainer>
                <ContentContainer>
                    <StatusIconWrapper>
                        <Image
                            loadingType='lazy'
                            icon={success ? `${SVGS_URL}green-check-circle.svg` : `${SVGS_URL}red-alert-circle.svg`}
                            alt='check'
                        />
                    </StatusIconWrapper>
                    <Title font='h2' tagType='text'>
                        {success ? (
                            'You are verified'
                        ) : (
                            <>
                                Uh oh!&nbsp;
                                {width < WINDOW_SIZE.TAB ? <br /> : null}
                                Your link has expired
                            </>
                        )}
                    </Title>
                    <Description
                        font='description'
                        tagType='text'
                        color='MID_GREY'
                    >
                        {success
                            ? 'Your identity has been confirmed successfully. You can close this window now.'
                            : 'Sorry, this link was only valid for 5 minutes. If you are still on the call, please ask our agent to retrigger the email for you'}
                    </Description>
                    <IllustrationWrapper>
                        <Image
                            loadingType='lazy'
                            icon={
                                success
                                    ? `${PNGS_URL}email-verify_success.png`
                                    : `${SVGS_URL}email-verify_failure.svg`
                            }
                            alt='check'
                        />
                    </IllustrationWrapper>
                </ContentContainer>
            </PosterContainer>
        </Container>
    );
};

const mapPropsToState = ({ customerAuthReducer }) => {
    const { loading, success } = customerAuthReducer.emailVerification;

    return {
        loading,
        success,
    };
};

const connector = connect(mapPropsToState, null);

export default connector(EmailVerification);
