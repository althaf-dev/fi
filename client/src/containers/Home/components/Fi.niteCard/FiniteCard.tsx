import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Device } from '../../../../Themes/Device';
import { Font } from '../../../../components/Abstract';
import FiniteInput from '../Fi.niteInput/FiniteInput';
// import { LottiePlayer } from '../../../../components';
import { callApi } from '../../../../Api';

const CardWrapper = styled.div`
    overflow: hidden;
    border-radius: 15px;

    @media ${Device.desktop} {
        border-radius: 30px;
    }
`;

const TicketSection = styled.div`
    background-color: ${(props) => props.theme.color.MINT_GREEN};
    padding: 40px;
    text-align: center;

    @media ${Device.tab} {
        padding-bottom: 30px;
    }
    @media ${Device.desktop} {
        padding: 70px;
    }
`;

const AnimationSection = styled.div`
    background-color: ${(props) => props.theme.color.FOREST_GREEN};
    padding: 30px 40px;

    @media ${Device.desktop} {
        padding: 50px 70px;
    }
`;

const Animation = styled.div`
    // @media ${Device.tab} {
    //     width: 98%;
    // }
    // @media ${Device.desktop} {
    // }
`;

interface FiniteCardProps {
    onSubmit?: (code: string) => void;
    apiInProgress?: boolean;
    onCodeChange?: (code: string) => void;
}

const FiniteCard = (props: FiniteCardProps) => {
    const [animationData, setAnimationData] = useState();

    useEffect(() => {
        callApi('/api/v1/utils/lottie-json', 'GET', 'lottie', null, {
            name: 'CODE_COMBINED',
        }).then(setAnimationData);
    }, []);

    return (
        <CardWrapper>
            <TicketSection>
                <Font font='h1' tagType='text' color='FOREST_GREEN'>
                    Unlock early access with a fi.nite code.
                </Font>
                <FiniteInput
                    onRedeem={(code: string) => props.onSubmit(code)}
                    apiInProgress={props.apiInProgress}
                    onCodeChange={(code: string) => props.onCodeChange(code)}
                />
            </TicketSection>
            <AnimationSection>
                <Animation>
                    {/* <LottiePlayer
                        animationData={animationData}
                        stop={false}
                        pause={false}
                    /> */}
                </Animation>
            </AnimationSection>
        </CardWrapper>
    );
};

FiniteCard.defaultProps = {
    onRedeem: () => {},
    onCodeChange: () => {},
};

export default FiniteCard;
