import styled from "styled-components";
import { MAX_WIDTH_MEDIA_SCREENS } from "../../../Themes/Device";


const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  max-width: 100%;
  margin-top: 88px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const StockSection = styled.section`
  margin-bottom: 80px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Letter = styled.h2`
  color: var(--night-333333, #333);
  line-height: 1;
  font-family: Gilroy;
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
  text-align: left;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
  }
`;

const Count = styled.span`
  color: var(--gray-ash-b-9-b-9-b-9, #b9b9b9);
  line-height: 1;
  font-family: Gilroy;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  text-align: left;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
  }
`;

const StockItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-size: 24px;
  color: var(--night-333333, #333);
  line-height: 1;
`;

const StockItem = styled.a`
  text-decoration: underline;
  cursor: pointer;
  font-family: Gilroy;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  text-align: left;
  flex: 0 0 calc(100% / 5);

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    ont-family: Gilroy;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
     flex: 0 0 calc(100% / 1);
     padding-bottom : 10px;
     border-bottom : 2px solid #E7E7E7;
  }
`;

const Separator = styled.span`
  color: var(--Neutrals-Ash-400, #b2b5b9);
  font-family: Gilroy;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  text-align: left;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    display: none;
  }
`;

export { StyledList, StockSection, SectionHeader, Letter, Count, StockItems, StockItem, Separator };
