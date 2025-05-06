/**
 * @file Features Page Heading Component
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../../Themes/Device';
import { htmlSanitization } from '../../../../utils';

import { Font } from '../../../Abstract';

const Wrapper = styled.div`
    max-width: 360px;
    margin: 0px auto;

    @media ${Device.tab} {
        max-width: 688px;
        padding: 0;
    }

    @media ${Device.desktop} {
        max-width: 1150px;
        padding: 0;
    }
`;

const Title = styled(Font)`
    margin: 0px auto 20px;
    text-align: center;
`;

const Description = styled(Font)`
    margin-bottom: 30px;
    text-align: center;

    @media ${Device.desktop} {
        margin-bottom: 0;
    }
`;

interface HeadingComponentProps {
    title: string,
    description?: string,
}

const HeadingComponent = (props: HeadingComponentProps) => {
    const { title, description } = props;

    return (
        <Wrapper>
            <Title font='cardTitleVariantFive' tagType='text' color='MINE_SHAFT'>
                <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }}
                />
            </Title>
            {description ? (
                <Description font='pNormalVariant' tagType='text' color='GREY_3'>
                    <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: htmlSanitization(description) }}
                    />
                </Description>
            ) : null}
        </Wrapper>
    );
};

HeadingComponent.defaultProps = {
    description: '',
};

export default HeadingComponent;
