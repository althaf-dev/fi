/**
 * @file ATMLimitWithdrawal
 * This component displays ATM withdrawal limits and related information
 */
import React, { useState } from "react";
import Header from '@/containers/ATMLimitWithdrawal/Header';
import InfoSection from '@/containers/ATMLimitWithdrawal/InfoSection';
import CalculatorInfo from '@/containers/ATMLimitWithdrawal/CalculatorInfo';
import { Container } from "./styles";
import DailyLimitsCountry from "./DailyLimitsCountry";
import { AnimatedSearchBar } from "./AnimatedSearchBar";
import FAQSection from "../DebitCardContainer/FAQSection";

interface ATMWithdrawalLimitProps {
  countryLimitData: any[];
  FAQData: any;
}

const ATMLimitWithdrawal: React.FC<ATMWithdrawalLimitProps> = ({ 
  countryLimitData,
  FAQData 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container>
      <Header />
      <AnimatedSearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <DailyLimitsCountry 
        countryLimitData={countryLimitData} 
        searchTerm={searchTerm} 
      />
      {Object.keys(FAQData || {}).length !== 0 ? <FAQSection data={FAQData} /> : null}
      <CalculatorInfo />
    </Container>
  );
};

export default ATMLimitWithdrawal;
