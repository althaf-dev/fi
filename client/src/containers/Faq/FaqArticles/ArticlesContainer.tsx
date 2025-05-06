import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font } from '../../../components';
import { htmlSanitization } from '../../../utils';
// import {
//     FolderTitle,
// } from '../FaqStyled';

const ArticleContainer = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    padding: 20px 16px;
    max-width: 320px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        padding: 32px 30px;
        margin-bottom: 40px;
        max-width: 850px;
    }
`;

const AnswerDiv = styled(Font)`
    font-weight: normal !important;
    margin-top: 11px;

    a {
        color: ${(props) => props.theme.color.FOREST_GREEN};
    }
    ul,
    ol {
        padding-left: 16px;
    }

    @media ${Device.tab} {
        margin-top: 24px;

        ul,
        ol {
            padding-left: 18px;
        }
    }

    @media ${Device.desktop} {
        margin-top: 32px;
        line-height: 120% !important;

        ul,
        ol {
            padding-left: 20px;
        }
    }
`;

interface ArticlesContainerProps {
    articleTitle: string;
    articleDescription: string;
}

const ArticlesContainer = (props: ArticlesContainerProps) => {
    const { articleTitle, articleDescription } = props;

    return (
        <>
            {/* <FolderTitle font='button' tagType='text' color='TEXT_GREY_1'>
                {folderTitle}
            </FolderTitle> */}
            <ArticleContainer>
                <Font tagType='text' font='h5' color='MINE_SHAFT'>
                    {articleTitle}
                </Font>

                <AnswerDiv
                    font='input'
                    tagType='text'
                    color='SUVA_GREY'
                    dangerouslySetInnerHTML={{
                        __html: htmlSanitization(articleDescription),
                    }}
                />
            </ArticleContainer>
        </>
    );
};

export default ArticlesContainer;
