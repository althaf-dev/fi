import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Font } from '../../../../components/Abstract';
import { Device } from '../../../../Themes/Device';
import { ElementTypes, makeDataTestId } from '../../../../DataTestIds';

type WrapperProps = {
    title: string;
    descriptionLine1?: string;
    descriptionLine2?: string;
    descriptionLine3?: string;
    children?: ReactNode;
    screenName?: string;
    parentComponent?: string;
};

const Wrapper = styled.div`
    .padding22 {
        padding: 40px 22px 0;
    }

    .padding-default {
        padding: 40px 10px 0;
    }
`;

const SubWrapper = styled.div`
    text-align: center;
    margin: auto;
`;

const Title = styled(Font)`
    margin: auto;
    white-space: pre-wrap;

    @media ${Device.tab} {
        max-width: 530px;
    }
    @media ${Device.desktop} {
        max-width: 770px;
    }
`;

const Description = styled(Font)`
    margin: 15px auto 0px;
    max-width: 320px;

    @media ${Device.tab} {
        max-width: 510px;
    }

    @media ${Device.desktop} {
        margin: 20px auto;
        max-width: 615px;
    }
`;

const DescriptionLine = styled.span`
    display: block;

    @media ${Device.tab} {
        display: inline;
    }
`;

const AnimationWrapper = styled.div``;

const FeatureWrapper = (props: WrapperProps) => {
    const {
        title, descriptionLine1, descriptionLine2, descriptionLine3, children, screenName, parentComponent,
    } = props;

    return (
        <Wrapper>
            <SubWrapper
                className='padding-default'
                data-test-id={makeDataTestId(screenName, parentComponent, ElementTypes.Container, 'FeatureSubWrapper')}
            >
                <Title
                    font='h1'
                    tagType='h2'
                    data-test-id={makeDataTestId(screenName, 'FeatureSubWrapper', ElementTypes.H2Text, title.substring(0, 10))}
                >
                    {title}
                </Title>

                {descriptionLine1 && (
                    <Description
                        font='p'
                        tagType='h3'
                        color='MID_GREY'
                        data-test-id={makeDataTestId(screenName,
                            'FeatureSubWrapper', ElementTypes.H3Text, `${descriptionLine1.substring(0, 10)}Container`)}
                    >
                        <DescriptionLine
                            data-test-id={makeDataTestId(screenName, 'FeatureSubWrapper', ElementTypes.ParagraphText, descriptionLine1.substring(0, 10))}
                        >
                            {descriptionLine1}
                        </DescriptionLine>
                        <DescriptionLine
                            data-test-id={makeDataTestId(screenName, 'FeatureSubWrapper', ElementTypes.ParagraphText, descriptionLine2.substring(0, 10))}
                        >
                            {descriptionLine2}
                        </DescriptionLine>
                        <DescriptionLine
                            data-test-id={makeDataTestId(screenName, 'FeatureSubWrapper', ElementTypes.ParagraphText, descriptionLine3.substring(0, 10))}
                        >
                            {descriptionLine3}
                        </DescriptionLine>
                    </Description>
                )}

                <AnimationWrapper
                    data-test-id={makeDataTestId(screenName, 'FeatureSubWrapper', ElementTypes.Animation, title.substring(0, 10))}
                >
                    {children}
                </AnimationWrapper>
            </SubWrapper>
        </Wrapper>
    );
};

FeatureWrapper.defaultProps = {
    descriptionLine1: '',
    descriptionLine2: '',
    descriptionLine3: '',
    children: null,
    screenName: '',
    parentComponent: '',
};

export default FeatureWrapper;
