/**
 * @file ContactSection
 *
 * This component contains the contact section of the loan template
 * which has the title, disclaimer and a button to get in touch
 */
import React from "react";
import {
  ContactWrapper,
  ContactContent,
  TextContent,
  ContactTitle,
  Disclaimer,
  GetInTouchButton,
} from "./styles";

interface ContactSectionProps {
  title: string;
  disclaimer: string;
  buttonText: string;
  link: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  disclaimer,
  buttonText,
  link,
}) => (
  <ContactWrapper>
    <ContactContent>
      {/*
       *Contains title and disclaimer
       */}
      <TextContent>
        <ContactTitle>{title}</ContactTitle>
        <Disclaimer>{disclaimer}</Disclaimer>
      </TextContent>
      {/*
       *Button to redirect to google form
       */}
      <GetInTouchButton href={link}>{buttonText}</GetInTouchButton>
    </ContactContent>
  </ContactWrapper>
);

export default ContactSection;
