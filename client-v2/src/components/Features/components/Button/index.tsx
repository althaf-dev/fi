/**
 * @file Features Page Button Component
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../../Themes/Device';

import { PrimaryButton } from '../../../Abstract';

const ButtonHolder = styled.div`
    width: 280px;
    margin: auto;

    @media ${Device.tab} {
        width: 420px;
    }

    @media ${Device.desktop} {
        width: 452px;
    }
`;

// eslint-disable-next-line no-var
declare var window: any;

interface ButtonComponentProps {
    url?: string,
    text: string,
}

const ButtonComponent = (props: ButtonComponentProps) => {
    const { url, text } = props;

    return (
        <ButtonHolder>
            <a
                href={url || window.oneLinkCommonUrl}
                className='onelink-common-url'
                target='_blank'
                rel='noreferrer'
            >
                <PrimaryButton
                    label={text}
                    fontVariant='buttonVariantTwo'
                />
            </a>
        </ButtonHolder>
    );
};

ButtonComponent.defaultProps = {
    url: '',
};

export default ButtonComponent;
