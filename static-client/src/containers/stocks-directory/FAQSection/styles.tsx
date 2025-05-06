import styled from "styled-components";
import { MAX_WIDTH_MEDIA_SCREENS } from "../../../Themes/Device";
import Colors from "@/Themes/Colors";

export const StyledSection = styled.section`
  background: var(--Background-Light-Layer-1, #eff2f6);
  padding: 160px 300px;
  margin-top: 191px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 50px 20px;
    margin-top: 40px;
  }
`;

export const Title = styled.h2`
  color: var(--night-333333, #333);
  text-transform: capitalize;
  margin-bottom: 24px;
  font-family: Gilroy;
  font-size: 29.43px;
  font-weight: 600;
  line-height: 35.11px;
  text-align: left;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 28.23px;
    font-weight: 600;
    line-height: 33.87px;
    text-align: center;
  }
`;

export const FAQList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const FAQItem = styled.li`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 30px;
  margin-bottom: 20px;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

export const Question = styled.h3`
  color: #333;
  margin: 0;
  font-family: Gilroy;
  font-size: 23.55px;
  font-weight: 600;
  line-height: 27.08px;
  text-align: left;
`;

export const ExpandIcon = styled.img`
  width: 23px;
  height: 23px;
`;

export const ViewAllLink = styled.a`
  display: block;
  text-align: center;
  color: var(--colour-forest-00-b-899, #00b899);
  font-size: 24px;
  text-decoration: underline;
  margin-top: 20px;
  font-family: Inter;
  font-size: 23.55px;
  font-weight: 600;
  line-height: 32.96px;
  text-align: center;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
  }
`;
