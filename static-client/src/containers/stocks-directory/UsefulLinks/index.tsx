import React from "react";
import Image from "next/image";
import { popularStocks, trendingStocks } from '../constants';
import UsefulStockList from "./UsefulStockList";
import {
  FooterCardWrapper,
  ContentContainer,
  UsefulLinksSection,
  SectionTitle,
  PopularStocksWrapper,
  PopularStocksTitle,
  FooterTextWrapper,
  BoldText,
  TextWrapper
} from "./styles";

import {LOGOS_URL_MAP} from "../../../constants/AssetConstants"


const UseFulLinks: React.FC = () => {
  return (
    <FooterCardWrapper>
      <ContentContainer>
        <UsefulLinksSection>
          <SectionTitle>Useful Links</SectionTitle>
          <PopularStocksWrapper>
            <PopularStocksTitle>POPULAR STOCKS</PopularStocksTitle>
            <UsefulStockList stocks={popularStocks} />
          </PopularStocksWrapper>
          <PopularStocksWrapper>
            <PopularStocksTitle>TRENDING STOCKS</PopularStocksTitle>
            <UsefulStockList stocks={trendingStocks} />
          </PopularStocksWrapper>
        </UsefulLinksSection>
        <FooterTextWrapper>
          <TextWrapper>
            <BoldText>Fi partners with the best to secure your money</BoldText>
            <Image
              src={LOGOS_URL_MAP.ALPACA_LOGO}
              alt="Alpaca-image"
              width={20}
              height={20}
            />
          </TextWrapper>
          <TextWrapper>
            <p>
              Fi money is not a broker dealer, nor an investment advisor.
              Trading in US Stocks shall be facilitated through Stock Broker
              Alpaca LLC, 8-69928.
            </p>
            <p>
              No information published on the website is intended to be
              investment advice, portfolio management or as any form of research
              analysis, directly or indirectly. The users of the website shall
              be solely responsible for any action taken by them pursuant to the
              information contained herein, including any investment decision
              with respect to transaction in securities.
            </p>
          </TextWrapper>
        </FooterTextWrapper>
      </ContentContainer>
    </FooterCardWrapper>
  );
};

export default UseFulLinks;
