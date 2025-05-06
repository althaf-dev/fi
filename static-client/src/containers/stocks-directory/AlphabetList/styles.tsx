import styled from "styled-components";
import { MAX_WIDTH_MEDIA_SCREENS } from "../../../Themes/Device";
import Colors from "@/Themes/Colors";

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
  padding: 0 10px 0;
  width: 100%;

  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

export const Letter = styled.a<{ active?: boolean }>`
  color: ${(props) =>
    props.active
      ? "var(--Interactive-Dark-Primary-Action, #00b899)"
      : "var(--Content-On-Dark-High-Emphasis-50, #f6f9fd)"};
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  cursor: pointer;
  font-family: Gilroy;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  flex: 0 0 calc(100% / 18);
  margin: 20px 0;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 11.51px;
    font-weight: 600;
    line-height: 20.14px;
    text-align: left;
    margin: 10px 0;
  }
`;

export const Separator = styled.div`
  width: 0;
  height: 31px;
  border: 2px solid rgba(49, 50, 52, 1);
  margin: 20px 0;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
     border: 1px solid rgba(49, 50, 52, 1);
     height: 15px;
     margin: 10px 0;
  }
`;

