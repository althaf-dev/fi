/**
 * @file Contains React components for specific templates like Template 1, 2A, 3, etc.
 */

import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Image } from '../../../components';
import MIXINS from '../../../Themes/mixins';
import { ResetButton } from '../../../Themes/styled';

import { IBottomCTAProps } from '../interfaces';

const CenterContainer = styled.div`
    ${MIXINS.FlexMixin({ dir: 'column', height: '90%', width: '100%' })};
`;

export const CommonCenterContainer = ({ children }: any): ReactElement => (
    <CenterContainer>
        {children}
    </CenterContainer>

);

const TemplateOuterContainer = styled.div<{
    justifyContent?: string;
    angle?: string;
    linearColorStops?: [any];
}>`
    ${(props) => MIXINS.FlexMixin({
        dir: 'column',
        justify: props.justifyContent || 'space-between',
        height: 'inherit',
    })};
    position: absolute;
    width: 100vw !important;
    height: 100vh ;
    top: 0;
    left: 0;
    margin: 0;
    padding-top: 80px;

    // if angle is provided, use it
    background: ${(props) => (props.angle ? `linear-gradient(${props.angle}deg, ${props.linearColorStops.map((lc) => lc.color).join(', ')})` : 'none')};
`;

export const CommonTemplateContainer = ({
    children, justifyContent, angle, linearColorStops,
}: any): ReactElement => (
    <TemplateOuterContainer justifyContent={justifyContent} angle={angle} linearColorStops={linearColorStops}>
        {children}
    </TemplateOuterContainer>
);

const ButtonContainer = styled(ResetButton)<{ hasAction: boolean}>`
    z-index: ${(props) => (props.hasAction ? 1000 : 1)};
    margin-bottom: 30px;
    user-select: all;
    -webkit-user-select: all;
    -webkit-touch-callout: all;
`;

const BottomImgContainer = styled.div`
    width: 200px;
`;

export const BottomCTA = (props: IBottomCTAProps): ReactElement => {
    const {
        hasAction,
        handleActionClick,
        actionImg,
    } = props;

    return (
        <>
            {actionImg ? (
                <ButtonContainer
                    hasAction={hasAction}
                    onClick={handleActionClick}
                >
                    <BottomImgContainer>
                        <Image
                            loadingType='eager'
                            icon={actionImg}
                            alt='Bottom Image'
                        />
                    </BottomImgContainer>
                </ButtonContainer>
            ) : null}
        </>
    );
};

export const InlineImage = styled.div`
    min-width: 26px;
    width: 26px;
    margin-right: 5px;
`;

export const TextContainer = styled.div<{ marginBottom?: string}>`
    margin-bottom: ${(props) => (props.marginBottom || '10px')};
    position: relative;
    z-index: 1;
`;

export const CenterImgContainer = styled.div`
    width: 228px;
    margin-bottom: 10px;
`;

export const FlexEndContainer = styled(CenterContainer)`
    height: 100%;
    justify-content: flex-end;
`;

export const InlineContainer = styled.div`
    ${MIXINS.FlexMixin({})};
`;
