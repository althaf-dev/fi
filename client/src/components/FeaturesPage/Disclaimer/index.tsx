/**
 * @file Disclaimer Content Component
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';
import { SVGS_URL } from '../../../constants/AssetConstants';
import { htmlSanitization } from '../../../utils';

import { Image, Font } from '../../Abstract';

const Section = styled.div`
    ${MIXINS.FlexMixin({})};
`;

const Container = styled.div`
    background-color: ${(props) => props.theme.color.PORCELAIN};
    ${MIXINS.FlexMixin({})};
    padding: 10px;
    border-radius: 20px;
    column-gap: 6px;

    @media ${Device.desktop} {
        column-gap: 20px;
    }
`;

const Description = styled(Font)`
    ${MIXINS.FontMixin({ weight: 600, size: '12px', lineHeight: '16px' })};
    max-width: 251px;

    @media ${Device.tab} {
        max-width: 800px;
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '20px', lineHeight: '20px' })};
        max-width: 1012px;
    }
`;

const DisclaimerIconHolder = styled.div`
    display: inline-block;
    vertical-align: middle;
    height: 24px;
    width: 24px;

    @media ${Device.desktop} {
        height: 34px;
        width: 34px;
    }
`;

const DisclaimerBody = styled.div``;

interface DisclaimerProps {
    contentText: string;
}

const Disclaimer = (props: DisclaimerProps) => {
    const { contentText } = props;

    return (
        <Section>
            <Container>
                <DisclaimerIconHolder>
                    <Image
                        objectType='contain'
                        icon={`${SVGS_URL}disclaimer.svg`}
                        alt='disclaimer-icon'
                        loadingType='lazy'
                    />
                </DisclaimerIconHolder>
                <DisclaimerBody>
                    <Description
                        tagType='text'
                        font='p6VariantOne'
                        color='STEEL'
                    >
                        <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(contentText) }}
                        />
                    </Description>
                </DisclaimerBody>
            </Container>
        </Section>
    );
};

export default React.memo(Disclaimer);
