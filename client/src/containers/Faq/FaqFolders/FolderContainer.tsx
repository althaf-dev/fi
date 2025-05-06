import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Font, Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { ICONS_URL_MAP } from '../../../constants/AssetConstants';
import {
    ArrowImageHolder,
} from '../FaqStyled';
import createFAQsLinks from '../utils/createFAQsLinks';
import { CLICKED_FAQ_ARTICLE, CLICKED_FAQ_FOLDER, trackEvent } from '../../../events';
import { trackingPayload } from '../constants';

const FolderCard = styled.div<{ showAnswer?: boolean }>`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: ${(props) => (props.showAnswer ? '20px 20px 0px 0px' : '20px')};
    cursor: pointer;
    margin: ${(props) => (props.showAnswer ? '0px auto 1px' : '0px auto 16px')};
    padding: 20px 16px;
    max-width: 320px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        padding: 32px 30px;
        max-width: 850px;
        margin: ${(props) => (props.showAnswer ? '0px auto 2px' : '0px auto 20px')};
    }
`;

const FolderTitleHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ArticlesData = styled.div<{ showAnswer: boolean }>`
    background-color: ${(props) => props.theme.color.WHITE};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: ${(props) => (props.showAnswer ? 'block' : 'none')};
    margin: ${(props) => (props.showAnswer ? '0px auto 16px' : '0px auto')};
    max-width: 320px;
    padding: 20px 16px;

    & > div:not(:last-child) {
        margin-bottom: 24px;
    }

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        padding: 32px 30px;
        max-width: 850px;
        margin: ${(props) => (props.showAnswer ? '0px auto 20px' : '0px auto')};

        & > div:not(:last-child) {
            margin-bottom: 40px;
        }
    }
`;

const ArticlesList = styled.div`
    font-family: Gilroy;
    font-size: 16px;
    font-weight: 600;
    line-height: 115%;
    color: ${(props) => props.theme.color.MINE_SHAFT};

    @media ${Device.desktop} {
        font-size: 24px;
    }
`;

const ArticleTitle = styled.span`
    cursor: pointer;
    word-break: break-word;
`;

interface FolderContainerProps {
    folders: Array<any>;
    activeFolderIndex: number;
    categoryName: string;
    setActiveFolderIndex: (value: number) => void;
}

const FolderContainer = (props: FolderContainerProps) => {
    const {
        folders, activeFolderIndex, categoryName, setActiveFolderIndex,
    } = props;

    const onClickedFaqFolders = (index, folderName) => () => {
        setActiveFolderIndex(index);
        trackEvent(CLICKED_FAQ_FOLDER, { ...trackingPayload, folder_name: folderName });
    };

    const onClickedFaqArticles = (articleName) => () => {
        trackEvent(CLICKED_FAQ_ARTICLE, { ...trackingPayload, article_name: articleName });
    };

    return (
        <>
            {folders.map((folderData, index) => (
                <div key={folderData.id}>
                    <FolderCard
                        showAnswer={activeFolderIndex === index}
                        key={folderData.id}
                        onClick={onClickedFaqFolders(index, folderData.name)}
                    >
                        <FolderTitleHolder>
                            <Font tagType='text' font='h4VariantSix' color='MINE_SHAFT'>
                                {folderData.name}
                            </Font>

                            <ArrowImageHolder>
                                <Image
                                    icon={activeFolderIndex === index ? ICONS_URL_MAP.TOP_ARROW_V2 : ICONS_URL_MAP.BOTTOM_ARROW_V2}
                                    loadingType='lazy'
                                    alt='arrow icon'
                                />
                            </ArrowImageHolder>
                        </FolderTitleHolder>
                    </FolderCard>

                    {folderData.articles.length !== 0
                        ? (
                            <ArticlesData showAnswer={activeFolderIndex === index}>
                                {folderData.articles.map((articlesData) => (
                                    <ArticlesList key={articlesData.id}>
                                        <Link to={createFAQsLinks(categoryName, folderData.name, articlesData.title)}>
                                            <ArticleTitle
                                                onClick={onClickedFaqArticles(articlesData.title)}
                                            >
                                                {articlesData.title}
                                            </ArticleTitle>
                                        </Link>
                                    </ArticlesList>
                                ))}
                            </ArticlesData>
                        )
                        : null}
                </div>
            ))}
        </>
    );
};

export default FolderContainer;
