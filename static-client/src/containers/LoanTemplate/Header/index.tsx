/**
 * @file Header
 *
 * This file contains the header section of the  loan template
 * which has the title, subtitle and a button to redirect to the google form
 */

import React from "react";
import {
  HeaderWrapper,
  HeaderContent,
  HeaderTitle,
  SubHeaderTitle,
  JoinWaitlistButton,
} from "./styles";

interface HeaderProps {
  title: string;
  subTitle: string;
  buttonText: string;
  link: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  buttonText,
  subTitle,
  link,
}) => (
  <HeaderWrapper>
    <HeaderContent>
      {/*
       *Header and subtitle
       */}
      <HeaderTitle>{title}</HeaderTitle>
      <SubHeaderTitle>{subTitle}</SubHeaderTitle>
    </HeaderContent>
    {/*
     * Button to redirect to google form
     */}
    <JoinWaitlistButton href={link}>
      <div>{buttonText}</div>
    </JoinWaitlistButton>
  </HeaderWrapper>
);

export default Header;
