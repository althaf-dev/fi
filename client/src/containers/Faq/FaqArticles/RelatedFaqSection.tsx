import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font } from '../../../components';
import {
    FolderTitle,
} from '../FaqStyled';

const RelatedFaqContainer = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    padding: 20px 16px;
    max-width: 320px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;

    & > div:not(:last-child) {
        margin-bottom: 20px;
    }

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        padding: 32px 191px 32px 30px;
        max-width: 850px;

        & > div:not(:last-child) {
            margin-bottom: 36px;
        }
    }
`;

const RelatedFaqTitle = styled.span`
    cursor: pointer;
`;

interface RelatedFaqResponse {
    id: string;
    title: string;
    description: string;
    descriptionText: string;
    categoryId: string;
    folderId: string;
    visibility: string;
}

interface RelatedFaqSectionProps {
    relatedFaqData: Array<RelatedFaqResponse>;
    getRelatedFAQsLink: (relatedFaq) => void;
}

const RelatedFaqSection = (props: RelatedFaqSectionProps) => {
    const { relatedFaqData, getRelatedFAQsLink } = props;

    return (
        <>
            <FolderTitle font='button' tagType='text' color='TEXT_GREY_1'>
                related faq’s
            </FolderTitle>

            <RelatedFaqContainer>
                {relatedFaqData.map((relatedFaq) => (
                    <Font tagType='text' font='h5' color='MINE_SHAFT' key={relatedFaq.id}>
                        <RelatedFaqTitle
                            onClick={() => getRelatedFAQsLink(relatedFaq)}
                        >
                            {relatedFaq.title}
                        </RelatedFaqTitle>
                    </Font>
                ))}
            </RelatedFaqContainer>
        </>
    );
};

export default RelatedFaqSection;
