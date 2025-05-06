/**
 * @file flexi-interest-loan
 *
 * This is loan template for the loan offer page which has features, images
 * and redirection to the google form for the user to apply for the loan.
 */

import React from "react";
import Header from "../../containers/LoanTemplate/Header";
import ContactSection from "@/containers/LoanTemplate/Contact";
import { GalleryLayout } from "../../containers/LoanTemplate/GalleryLayout";
import { MobileLayout } from "../../containers/LoanTemplate/MobileLayout";
import {
  flexi_interest_loan_mobile_images,
  flexi_interest_loan_desktop_images,
  flexi_interest_loan_header_data,
  loan_template_contact_us_data,
} from "../../containers/LoanTemplate/constants";
import { PageWrapper, MainContent } from "../../containers/LoanTemplate/styles";

const LoanOfferPage: React.FC = () => {
  return (
    <PageWrapper>
      <MainContent>
        <Header
          title={flexi_interest_loan_header_data.title}
          buttonText={flexi_interest_loan_header_data.buttonText}
          subTitle={flexi_interest_loan_header_data.subTitle}
          link={flexi_interest_loan_header_data.link}
        />
        {/*
         *This image is for the mobile layout
         */}
        <>
          <MobileLayout images={flexi_interest_loan_mobile_images} />
        </>
        {/*
         *This image is for the desktop layout
         */}
        <>
          <GalleryLayout images={flexi_interest_loan_desktop_images} />
        </>
        {/*
         * This has contact us section which includes redirection
         */}
        <ContactSection
          title={loan_template_contact_us_data.title}
          disclaimer={loan_template_contact_us_data.disclaimer}
          buttonText={loan_template_contact_us_data.buttonText}
          link={flexi_interest_loan_header_data.link}
        />
      </MainContent>
    </PageWrapper>
  );
};

export default LoanOfferPage;
