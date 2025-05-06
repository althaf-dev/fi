import styled from 'styled-components';
import { Font } from '../../../components';
import { Device } from '../../../Themes/Device';

const ContentHolder = styled.div`
    margin: auto;
    max-width: 320px;
    @media ${Device.tab} {
        max-width: 610px;
    }
    @media ${Device.desktop} {
        max-width: 850px;
    }
`;

const FolderTitle = styled(Font)`
    letter-spacing: 0.45px;
    padding-left: 16px;
    text-transform: uppercase;
    @media ${Device.desktop} {
        padding-left: 30px;
    }
`;

const ArrowImageHolder = styled.div`
    width: 20px;
    height: 20px;
    cursor: pointer;
    @media ${Device.desktop} {
        width: 24px;
        height: 24px;
    }
`;


const FolderCard = styled.div<{ showAnswer?: boolean }>`
  background-color: ${(props) => props.theme.color.WHITE};
  border-radius: ${(props) =>
    props.showAnswer ? "20px 20px 0px 0px" : "20px"};
  cursor: pointer;
  margin: ${(props) => (props.showAnswer ? "0px auto 1px" : "0px auto 16px")};
  padding: 20px 16px;
  max-width: 320px;
  @media ${Device.tab} {
    max-width: 610px;
  }
  @media ${Device.desktop} {
    padding: 32px 30px;
    max-width: 100%;
    margin: ${(props) => (props.showAnswer ? "0px auto 2px" : "0px auto 20px")};
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
  display: ${(props) => (props.showAnswer ? "block" : "none")};
  margin: ${(props) => (props.showAnswer ? "0px auto 16px" : "0px auto")};
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
    max-width: 100%;
    margin: ${(props) => (props.showAnswer ? "0px auto 20px" : "0px auto")};
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
  font-family: Gilroy;
  font-size: 23.55px;
  font-weight: 600;
  line-height: 27.08px;
  text-align: left;
  @media ${Device.phone} {
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 17.84px;
    text-align: left;
  }
`;


export {
    ContentHolder,
    FolderTitle,
    ArrowImageHolder,
    FolderCard,
    FolderTitleHolder,
    ArticlesData,
    ArticlesList,
    ArticleTitle,
};