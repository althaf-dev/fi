/**
 * @file atm-limit/index.tsx
 * This file contains the getStaticProps function which fetches ATM limit and FAQ data.
 */

import React from 'react';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import ATMLimitWithdrawal from '@/containers/ATMLimitWithdrawal';

interface ATMLimitProps {
  countryLimitData: any[];
  FAQData: any;
}

const ATMLimit: React.FC<ATMLimitProps> = ({ countryLimitData, FAQData }) => (
  <div>
    <div
      style={{
        backgroundColor: "#18191b",
      }}
    >
      <AppHeader />
    </div>
    <ATMLimitWithdrawal 
      countryLimitData={countryLimitData} 
      FAQData={FAQData}
    />
    <AppFooter hideStickyFooter />
  </div>
);

export const getStaticProps = async () => {
  const { DOMAIN_URL } = process.env;
  let countryLimitData = [];
  let FAQData = {};

  try {
    const allCountry = `${DOMAIN_URL}/api/v1/travel/country-data`;
    const allCountryDataResponse = await fetch(allCountry);
    if (!allCountryDataResponse.ok) {
      throw new Error(`Failed to fetch country data: ${allCountryDataResponse.statusText}`);
    }
    const allCountryData = await allCountryDataResponse.json();
    countryLimitData = allCountryData?.data?.atm_limits || [];
    const allCategory = `${DOMAIN_URL}/api/v1/faq/categories`;
    const allCategoryDataResponse = await fetch(allCategory);
    if (!allCategoryDataResponse.ok) {
      throw new Error(`Failed to fetch categories: ${allCategoryDataResponse.statusText}`);
    }
    const allCategoryData = await allCategoryDataResponse.json();
    const categoryId = allCategoryData?.data?.find(
      (category: any) => category.name === "Debit Card"
    )?.id;

    if (categoryId) {
      const FAQurl = `${DOMAIN_URL}/api/v1/faq/category-details?categoryId=${categoryId}`;
      const response = await fetch(FAQurl);
      if (!response.ok) {
        throw new Error(`Failed to fetch FAQ data: ${response.statusText}`);
      }
      const data = await response.json();
      FAQData = data?.data || {};
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return {
    props: {
      countryLimitData,
      FAQData,
    },
  };
};

export default ATMLimit;
