import React from "react";
import { StockListWrapper, StockItem, Divider } from "./styles";

interface Stock {
    [key: string]: string;
  }

const UsefulStockList: React.FC<{ stocks: Stock[] }> = ({ stocks }) => {
    return (
      <StockListWrapper>
        {stocks.map((stock, index) => (
          <React.Fragment key={stock.name}>
            <StockItem href={stock.url.toLowerCase()}>{stock.name}</StockItem>
            {index < stocks.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </StockListWrapper>
    );
  };

export default UsefulStockList;
