/**
 * @file Features Page Text Component
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../../Themes/Device';
import MIXINS from '../../../../Themes/mixins';
import { htmlSanitization } from '../../../../utils';

import { Font } from '../../../Abstract';

const ContentHolder = styled.div`
    max-width: 320px;
    text-align: center;

    @media ${Device.tab} {
        text-align: left;
    }

    @media ${Device.desktop} {
        max-width: 550px;
    }
`;

const Title = styled(Font)`
    margin: 0px auto 20px;
`;

const Description = styled(Font)<{ hasCta: string }>`
    margin-bottom: ${(props) => (props.hasCta ? '0px' : '30px')};

    @media ${Device.tab} {
        margin-bottom: 0px;
    }
`;

const CtaWrapper = styled(Font)`
    margin-top: 20px;
    margin-bottom: 30px;

    @media ${Device.tab} {
        margin-bottom: 0px;
    }
`;

const InfoTextHolder = styled.div`
    margin: 0px auto;
    text-align: center;
    ${MIXINS.FlexMixin({ width: '320px' })};

    @media ${Device.tab} {
        width: 768px;
    }

    @media ${Device.desktop} {
        width: 1290px;
    }
`;

interface TextComponentProps {
    title: string,
    description: string,
    cta?: string,
    infoText?: string,
}

const TextComponent = (props: TextComponentProps) => {
    const {
        title, description, cta, infoText,
    } = props;

    if (infoText) {
        return (
            <InfoTextHolder>

                <Font font='h4VariantFour' tagType='text' color='GREY_3'>
                    <div
                    // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: htmlSanitization(infoText) }}
                    />
                </Font>

            </InfoTextHolder>
        );
    }

    return (
        <ContentHolder>
            <Title font='cardTitleVariantFive' tagType='text' color='MINE_SHAFT'>
                <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }}
                />
            </Title>

            <Description font='pNormalVariant' tagType='text' color='GREY_3' hasCta={cta}>
                <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: htmlSanitization(description) }}
                />
            </Description>

            {cta && (
                <CtaWrapper font='buttonVariantThree' tagType='text' color='FOREST_GREEN'>
                    <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: htmlSanitization(cta) }}
                    />
                </CtaWrapper>
            )}
        </ContentHolder>
    );
};

TextComponent.defaultProps = {
    cta: '',
    infoText: '',
};

export default TextComponent;
