/**
 * @file instant-approval-loan
 *
 * This is loan template for the loan offer page which has features, images
 * and redirection to the google form for the user to apply for the loan.
 */

import React from "react";
import Header from "../../containers/LoanTemplate/Header";
import ContactSection from "@/containers/LoanTemplate/Contact";
import { PageWrapper, MainContent } from "../../containers/LoanTemplate/styles";
import { GalleryLayout } from "../../containers/LoanTemplate/GalleryLayout";
import { MobileLayout } from "../../containers/LoanTemplate/MobileLayout";
import {
  instant_loan_approval_desktop_images,
  instant_loan_approval_mobile_images,
  instant_loan_approval_header_data,
  loan_template_contact_us_data,
} from "../../containers/LoanTemplate/constants";

const LoanOfferPage: React.FC = () => {
  return (
    <PageWrapper>
      <MainContent>
        {/*
         * Header component consist of headline and redirection link to the goole form
         */}
        <Header
          title={instant_loan_approval_header_data.title}
          buttonText={instant_loan_approval_header_data.buttonText}
          subTitle={instant_loan_approval_header_data.subTitle}
          link={instant_loan_approval_header_data.link}
        />
        {/*
         * Gallery component which shows loan features via images
         */}
        <>
          <MobileLayout images={instant_loan_approval_mobile_images} />
        </>
        <>
          <GalleryLayout images={instant_loan_approval_desktop_images} />
        </>
        {/* 
          * This is contact us section which has redirection button to google form
          */}
        <ContactSection
          title={loan_template_contact_us_data.title}
          disclaimer={loan_template_contact_us_data.disclaimer}
          buttonText={loan_template_contact_us_data.buttonText}
          link={instant_loan_approval_header_data.link}
        />
      </MainContent>
    </PageWrapper>
  );
};

export default LoanOfferPage;
