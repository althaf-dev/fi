import React from "react";
import styled from "styled-components";
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import Colors from "@/Themes/Colors";
import StocksDirectory from "../../../containers/stocks-directory/StocksDirectory";
import FAQSection from "../../../containers/stocks-directory/FAQSection";
import UseFulLinks from "../../../containers/stocks-directory/UsefulLinks";

interface UsStocksPageProps {}

const StockDirectoryPage: React.FC<UsStocksPageProps> = ({ FAQData }: any) => {

  return (
    <div>
      <div
        style={{
          backgroundColor: Colors.BLACK_3,
        }}
      >
        <AppHeader />
      </div>

      <StyledPage>
        <main>
          <StocksDirectory />
          <FAQSection data={FAQData} />
          <UseFulLinks />
        </main>
      </StyledPage>
      <AppFooter />
    </div>
  );
};

export const getStaticProps = async () => {
    try {
      const { DOMAIN_URL } = process.env;
      const allCategory = `${DOMAIN_URL}/api/v1/faq/categories`;      
      const allCategoryDataResponse = await fetch(allCategory);
      if (!allCategoryDataResponse.ok) {
        throw new Error(`Failed to fetch categories: ${allCategoryDataResponse.statusText}`);
      }
      
      const allCategoryData = await allCategoryDataResponse.json();  
      const categoryId = allCategoryData?.data?.find(
        // TODO: the category name is "Debit Card" which will be changed to "US Stocks"
        // added currently for development and testing purposes
        (category: any) => category.name === "US Stocks"
      )?.id;
  
      const FAQData = `${DOMAIN_URL}/api/v1/faq/category-details?categoryId=${categoryId}`;
      const response = await fetch(FAQData);
      if (!response.ok) {
        throw new Error(`Failed to fetch FAQ data: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      return {
        props: {
          FAQData: data?.data,
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
  
      // Optionally return a fallback or empty data if an error occurs
      return {
        props: {
          FAQData: null, // or some fallback data
        },
      };
    }
  };
  

const StyledPage = styled.div`
  background: var(--chalk-f5f5f5, #f5f5f5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default StockDirectoryPage;
