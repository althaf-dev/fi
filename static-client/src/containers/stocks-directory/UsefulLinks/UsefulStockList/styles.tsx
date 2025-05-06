import styled from "styled-components";
import { MAX_WIDTH_MEDIA_SCREENS } from "../../../../Themes/Device";

const StockListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: var(--Content-On-Light-High-Emphasis-850, #313234);
  line-height: 2;
  margin-top: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    gap: 10px;
    padding-right: 30px;
  }
`;

const StockItem = styled.a`
  font-feature-settings: "liga" off, "clig" off;
  text-decoration-line: underline;
  align-self: stretch;
  margin: auto 0;
  cursor: pointer;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 11.51px;
    font-weight: 600;
    line-height: 20.14px;
    text-align: left;
  }
`;

const Divider = styled.div`
  background-color: #eff2f6;
  align-self: stretch;
  width: 0;
  height: 35px;
  margin: auto 0;
  border: 2px solid rgba(239, 242, 246, 1);

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    height: 15px;
    border: 0.96px solid #eff2f6;
  }
`;

export { StockListWrapper, StockItem, Divider };
