/**
 * @file zero-interest-loan
 *
 * This is loan template for the loan offer page which has features, images
 * and redirection to the google form for the user to apply for the loan.
 */

import React from "react";
import Header from "../../containers/LoanTemplate/Header";
import ContactSection from "../../containers/LoanTemplate/Contact";
import { GalleryLayout } from "../../containers/LoanTemplate/GalleryLayout";
import { MobileLayout } from "../../containers/LoanTemplate/MobileLayout";
import {
  zero_interest_loan_header_data,
  zero_interest_loan_mobile_images,
  zero_interest_loan_desktop_images,
  loan_template_contact_us_data,
} from "../../containers/LoanTemplate/constants";
import { PageWrapper, MainContent } from "../../containers/LoanTemplate/styles";

const LoanOfferPage: React.FC = () => {
  return (
    <PageWrapper>
      <MainContent>
        {/*
         * Header component consist of headline and redirection link to the goole form
         */}
        <Header
          title={zero_interest_loan_header_data.title}
          buttonText={zero_interest_loan_header_data.buttonText}
          subTitle={zero_interest_loan_header_data.subTitle}
          link={zero_interest_loan_header_data.link}
        />
        {/*
         * Gallery component which shows loan features via images. This is for mobile view
         */}
        <>
          <MobileLayout images={zero_interest_loan_mobile_images} />
        </>
        {/*
         *Gallery component which shows loan features via images. This is for Desktop view
         */}
        <>
          <GalleryLayout images={zero_interest_loan_desktop_images} />
        </>
        {/*
         * This is contact us section which has redirection button to google form
         */}
        <ContactSection
          title={loan_template_contact_us_data.title}
          disclaimer={loan_template_contact_us_data.disclaimer}
          buttonText={loan_template_contact_us_data.buttonText}
          link={zero_interest_loan_header_data.link}
        />
      </MainContent>
    </PageWrapper>
  );
};

export default LoanOfferPage;
