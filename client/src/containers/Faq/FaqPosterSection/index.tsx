import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Font } from '../../../components';
import { Device } from '../../../Themes/Device';

const ContentHolder = styled.div`
    text-align: center;
    margin: auto;
    padding-top: 35px;
    padding-bottom: 40px;
    max-width: 320px;

    @media ${Device.tab} {
        padding-top: 50px;
        padding-bottom: 50px;
        max-width: 610px;
    }

    @media ${Device.desktop} {
        padding-top: 40px;
        padding-bottom: 90px;
        max-width: 900px;
    }
`;

const FolderHolder = styled(Font)`
    display: flex;
    overflow-x: auto;
    margin: auto;
    width: fit-content;
    max-width: 100%;
`;

interface FaqPosterSectionProps {
    children?: ReactNode;
}

const FaqPosterSection = (props: FaqPosterSectionProps) => {
    const { children } = props;

    return (
        <>
            <ContentHolder>
                <Font font='h1' tagType='h1' color='WHITE'>
                    Frequently Asked Questions
                </Font>
            </ContentHolder>
            {
                children ? (
                    <FolderHolder font='button' tagType='text' color='SILVER_2'>
                        {children}
                    </FolderHolder>
                ) : null
            }
        </>
    );
};

FaqPosterSection.defaultProps = {
    children: null,
};

export default FaqPosterSection;
