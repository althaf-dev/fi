import React from "react";
import { Font, Image } from "../../../components";
import {
  ArrowImageHolder,
  FolderCard,
  FolderTitleHolder,
  ArticlesData,
  ArticlesList,
  ArticleTitle,
} from "./styles";
import { ICONS_URL_MAP } from "../../../constants/AssetConstants";



interface FolderContainerProps {
  folders: Array<any>;
  activeFolderIndex: number;
  categoryName: string;
  setActiveFolderIndex: (value: number) => void;
}

const FolderContainer = (props: FolderContainerProps) => {
  const { folders=[], activeFolderIndex, categoryName, setActiveFolderIndex } =
    props;

  const onClickedFaqFolders = (index: any, folderName: any) => () => {
    setActiveFolderIndex(index);
  };

  const convertSpaceToHyphenString = (str: string) => {
    const formattedString = str.split("?")[0].trim().toLowerCase();

    if (formattedString.indexOf(" ") >= 0) {
      return encodeURIComponent(formattedString.split(" ").join("-"));
    }

    return encodeURIComponent(formattedString);
  };

  const createFAQsLinks = (
    categoryNameData: string,
    folderTitleData?: string,
    articleTitleData?: string
  ) => {
    const FAQs = "FAQs";
    let categoryName;
    if (categoryNameData) {
      categoryName = convertSpaceToHyphenString(categoryNameData);
    }

    if (folderTitleData && articleTitleData) {
      const folderTitle = convertSpaceToHyphenString(folderTitleData);
      const articleTitle = convertSpaceToHyphenString(articleTitleData);
      console.log(
        "url",
        `/${FAQs}/${categoryName}/${folderTitle}/${articleTitle}`
      );
      return `/${FAQs}/${categoryName}/${folderTitle}/${articleTitle}`;
    }

    return `/${FAQs}/${categoryName}`;
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
              <Font tagType="text" font="h4VariantSix" color="MINE_SHAFT">
                {folderData.name}
              </Font>

              <ArrowImageHolder>
                <Image
                  icon={
                    activeFolderIndex === index
                      ? ICONS_URL_MAP.TOP_ARROW_V2
                      : ICONS_URL_MAP.BOTTOM_ARROW_V2
                  }
                  loadingType="lazy"
                  alt="arrow icon"
                />
              </ArrowImageHolder>
            </FolderTitleHolder>
          </FolderCard>

          {folderData.articles.length !== 0 ? (
            <ArticlesData showAnswer={activeFolderIndex === index}>
              {folderData.articles.map((articlesData: any) => (
                <ArticlesList key={articlesData.id}>
                  <a
                    href={createFAQsLinks(
                      categoryName,
                      folderData.name,
                      articlesData.title
                    )}
                  >
                    <ArticleTitle>{articlesData.title}</ArticleTitle>
                  </a>
                </ArticlesList>
              ))}
            </ArticlesData>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default FolderContainer;
