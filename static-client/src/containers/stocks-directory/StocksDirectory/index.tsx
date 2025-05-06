import React from "react";
import AlphabetList from "../AlphabetList";
import StocksList from "../StockList";
import{ Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, StockSection, StyledSection, Title } from "./styles";

interface StocksDirectoryProps {}

const StocksDirectory: React.FC<StocksDirectoryProps> = () => {
  return (
    <div>
      <StyledSection>
        <Breadcrumb>
          <BreadcrumbItem href={`${window.location.origin}/us-stocks`}>US STOCKS</BreadcrumbItem>
          <BreadcrumbSeparator
            src={`https://dza2kd7rioahk.cloudfront.net/assets/svgs/fade-right_arrow.svg`}
            alt=">"
          />
          <BreadcrumbItem>Stocks Directory</BreadcrumbItem>
        </Breadcrumb>
        <Title>Stocks Directory</Title>
        <AlphabetList />
      </StyledSection>
      <StockSection>
        <StocksList />
      </StockSection>
    </div>
  );
};

export default StocksDirectory;
