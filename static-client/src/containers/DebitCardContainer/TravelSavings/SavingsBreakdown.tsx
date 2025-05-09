/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";
import { amountFormatter } from "../utils";
import Config from "./data.json";
import { IDropDown } from "@/components/DropDownVariantOne";
import { MAX_WIDTH_MEDIA_SCREENS, WINDOW_SIZE } from "@/Themes/Device";

interface SavingItem {
  label: string;
  value: number;
}

interface Savings {
  breakdown: SavingItem[];
  total: number;
}

interface SavingsConfig {
  [key: string]: {
    [key: number]: Savings;
  };
}

const renderSavingsData = (
  destination: IDropDown,
  budget: IDropDown,
  isTotal?: boolean
): SavingItem[] | number => {
  const savingsData = Config.savings as SavingsConfig;
  const savings = (savingsData?.[destination?.value || ""] &&
    savingsData?.[destination?.value || ""]?.[
      (budget?.value || 0) as number
    ]) as Savings;
  if (!savings) return [];
  const { breakdown, total } = savings || {};
  if (isTotal) return total;
  return breakdown;
};

export const SavingsBreakdown: React.FC<{
  destination: IDropDown;
  budget: IDropDown;
}> = ({ destination, budget }) => {
  return (
    <BreakdownWrapper>
      <Header>
        <Title>
          Your Savings <sup>*</sup>
        </Title>
        <Divider />
      </Header>
      <SavingsList>
        {Config.savings &&
          (renderSavingsData(destination, budget) as SavingItem[]).map(
            (item, index) => (
              <SavingItem key={index}>
                <Description>{item.label}</Description>
                <Amount>
                  {amountFormatter(item.value, {}, true)}
                </Amount>
              </SavingItem>
            )
          )}
      </SavingsList>
      <TotalSavings>
        <TotalLabel>Total savings</TotalLabel>
        <TotalAmount>
          {amountFormatter(
            renderSavingsData(destination, budget, true) as number,
            {},
            true
          )}
        </TotalAmount>
      </TotalSavings>
    </BreakdownWrapper>
  );
};

const BreakdownWrapper = styled.div`
  display: flex;
  margin-top: 60px;
  width: 100%;
  flex-direction: column;
  justify-content: start;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  color: var(--Supporting-Jade-900, #004e2d);
  text-align: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font: 400 39px/1 sans-serif;
  height: 42px;
  width: 100%;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2rem;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 100%;
    font-size: 33.6px;
  }

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-size: 25px;
    line-height: 0.8;
  }
`;

const Divider = styled.div`
  font: 600 20px/1 Gilroy, sans-serif;

  &::before {
    content: "--------------------------------";

    @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
      content: "------------------------";
    }

    @media (max-width: ${WINDOW_SIZE.PHONE}px) {
      content: "--------------------";
    }
  }
`;

const SavingsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 27px 0 0;
  font: 600 20px Gilroy, sans-serif;

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-size: 14px;
  }
`;

const SavingItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  gap: 70px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    margin-bottom: 20px;
  }
`;

const Description = styled.span`
  color: var(--Supporting-Jade-700, #007a56);
  font-feature-settings: "liga" off, "clig" off;
  line-height: 25px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.1rem;
    text-align: left;
  }
`;

const Amount = styled.span`
  color: var(--Content-On-Light-High-Emphasis-850, #313234);
  text-align: right;
  font-feature-settings: "liga" off, "clig" off;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
     font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.1rem;
    text-align: right;
  }
`;

const TotalSavings = styled.div`
  display: flex;
  margin-top: 27px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font: 600 39px/1 Gilroy, sans-serif;

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    font-size: 25px;
  }
`;

const TotalLabel = styled.span`
  color: var(--Supporting-Jade-200, #6bcdb6);
  font-feature-settings: "liga" off, "clig" off;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2rem;
    text-align: left;
  }
`;

const TotalAmount = styled.span`
  color: var(--Supporting-Jade-900, #004e2d);
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2rem;
    text-align: right;
  }
`;
