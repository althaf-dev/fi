import styled from "styled-components";
import { MAX_WIDTH_MEDIA_SCREENS } from "../../../Themes/Device";

const ContactWrapper = styled.section`
  background-color: rgba(29, 39, 45, 1);
  display: flex;
  margin-top: 80px;
  min-height: 203px;
  width: 100%;
  flex-direction: column;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  justify-content: center;
  padding: 25px 38px;
  align-items: center;
`;

const ContactContent = styled.div`
  display: flex;
  max-width: 100%;
  width: 336px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TextContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 330px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-feature-settings: "liga" off, "clig" off;
  font-size: 16px;
  color: #9dc2d0;
  line-height: 20px;
  font-weight: 400;

  @media ${MAX_WIDTH_MEDIA_SCREENS.phone} {
    width: 135px;
    height: 40px;
  }
`;

const Disclaimer = styled.p`
  color: var(--Gray-Text, #949ba5);
  font-feature-settings: "liga" off, "clig" off;
  font-size: 14px;
  line-height: 18px;
  margin-top: 6px;
  font-weight: 400;
`;

const GetInTouchButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  position: relative;
  z-index: 1;
  background: linear-gradient(
    90deg,
    #3bc1ff 0%,
    #bfecd6 33.33%,
    #24ffd3 66.67%,
    #4fd98f 100%
  );
  background-clip: padding-box;
  margin-top: 24px;
  border: 2px solid transparent;
  border-radius: 100px;
  font-size: 14px;
  color: var(--White, #fff);
  line-height: 1;
  padding: 6px 2px;
  cursor: pointer;
  text-align: center;
  height: 32px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: 2px;
    border-radius: inherit;
    background: #000;
  }
`;

export {
    ContactWrapper,
    ContactContent,
    TextContent,
    ContactTitle,
    Disclaimer,
    GetInTouchButton,
}
