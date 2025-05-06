import React from "react";
import USStockJSON from "../../../assets/JSON/us-stocks.json";
import { getStocksData } from "../../../utils/stocks-directory";
import {
  StyledList,
  StockSection,
  SectionHeader,
  Letter,
  Count,
  StockItems,
  StockItem,
  Separator,
} from "./styles";

interface StocksListProps {}

const { stocksData } = getStocksData(Object.keys(USStockJSON));

const stocksDatakeys = Object.keys(stocksData).sort();

const StocksList: React.FC<StocksListProps> = () => {
  return (
    <StyledList>
      {stocksDatakeys.map((alphabet, index) => (
        <StockSection key={index}>
          <SectionHeader id={alphabet.toUpperCase()}>
            <Letter>{alphabet}</Letter>
            <Count>{stocksData[alphabet]?.length} STOCKS</Count>
          </SectionHeader>
          <StockItems>
            {stocksData[alphabet].map((stock: any, stockIndex: any) => (
              <React.Fragment key={stockIndex}>
                <StockItem
                  href={`${
                    window.location.origin
                  }/us-stocks/${stock.toLowerCase()}`}
                >
                  {USStockJSON[stock as keyof typeof USStockJSON]}
                </StockItem>
                {stockIndex < stocksData[alphabet]?.length - 1 && (
                  <Separator>|</Separator>
                )}
              </React.Fragment>
            ))}
          </StockItems>
        </StockSection>
      ))}
    </StyledList>
  );
};

export default StocksList;
