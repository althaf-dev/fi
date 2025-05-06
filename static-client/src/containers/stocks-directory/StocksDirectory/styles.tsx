import styled from "styled-components";
import Colors from "@/Themes/Colors";
import { MAX_WIDTH_MEDIA_SCREENS } from "../../../Themes/Device";

const StockSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 250px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 0 20px;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 230px 200px;
  padding-top: 94px;
  background-color: ${Colors.BLACK_3};

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 40px 20px;
  }
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: rgba(164, 164, 164, 1);
  text-transform: uppercase;
  letter-spacing: 0.44px;
  font: 700 16px/1.1 Gilroy, sans-serif;
  padding: 0 40px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 0 10px;
    font-family: Gilroy;
    font-size: 11.29px;
    font-weight: 700;
    line-height: 12.42px;
    letter-spacing: 0.4234183728694916px;
    text-align: left;
  }
`;

const BreadcrumbItem = styled.a``;

const BreadcrumbSeparator = styled.img`
  width: 16px;
  height: 16px;
`;

const Title = styled.h1`
  font-size: 39px;
  color: var(--monochrome-snow-fffff, #fff);
  font-weight: 600;
  margin-top: 45px;
  font-family: Gilroy;
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
  text-align: left;
  padding: 0 40px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    margin-top: 30px;
    font-family: Gilroy;
    font-size: 28.8px;
    font-weight: 600;
    line-height: 34.56px;
    text-align: left;
    padding: 0 10px;
  }
`;

export { StockSection, StyledSection, Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, Title };
