
import React from "react";
import { useState } from "react";
import FolderContainer from "../FolderCard/index";
import { StyledSection, Title, ViewAllLink } from './styles';

interface FAQSectionProps {
  data: any;
}

const FAQSection: React.FC<FAQSectionProps> = ({ data }: any) => {
  const [ACTIVE_FOLDER_INDEX, setActiveFolderIndex] = useState(-1);
  const setActiveFolderIndexFn = (index: any) => {
    const activeFolderIndex = ACTIVE_FOLDER_INDEX === index ? -1 : index;
    setActiveFolderIndex(activeFolderIndex);
  };
  const categoryName = data?.name;
  return (
    <StyledSection>
      <Title>FAQs</Title>
      <FolderContainer
        folders={data?.folders}
        activeFolderIndex={ACTIVE_FOLDER_INDEX}
        categoryName={categoryName}
        setActiveFolderIndex={setActiveFolderIndexFn}
      />
      <ViewAllLink href={`${window.location.origin}/FAQs`}>
        VIEW ALL FAQs ↗
      </ViewAllLink>
    </StyledSection>
  );
};

export default FAQSection;
