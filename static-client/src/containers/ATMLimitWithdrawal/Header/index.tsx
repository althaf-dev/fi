/**
 * @file Header
 * This component displays the header for the ATM Limit Withdrawal section, including the card name and title.
 */

import React from "react";
import { CardName, HeaderContainer, HeaderContent, HeaderTitle } from "../styles";

const Header: React.FC = () => (
  <HeaderContainer>
    <HeaderContent>
    <CardName>The Fi-Federal Debit Card</CardName>
    <HeaderTitle>Country-Wise Daily International ATM Withdrawal Limits</HeaderTitle>
    </HeaderContent>
  </HeaderContainer>
  );

export default Header;
