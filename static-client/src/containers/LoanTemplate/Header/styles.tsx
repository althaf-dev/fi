import styled from "styled-components";
import { MAX_WIDTH_MEDIA_SCREENS } from "../../../Themes/Device";

const HeaderWrapper = styled.section`
  display: flex;
  margin-top: 169px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  padding: 0 500px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    padding: 0 300px;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 0 50px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-family: Gilroy;
  font-size: 53px;
  font-weight: 700;
  line-height: 76px;
  text-align: center;
  background: radial-gradient(
    74.8% 775.15% at 53.19% 128.79%,
    #fbf3e6 0%,
    #9bf1f1 77.08%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 34px;
    display: flex;
    align-items: center;
    text-align: center;
    background: #ffffff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SubHeaderTitle = styled.h2`
  font-family: Gilroy;
  font-size: 22.29px;
  font-weight: 600;
  line-height: 25.48px;
  text-align: left;
  color: #9dc2d0;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-weight: 600;
    font-size: 13.7528px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #adadad;
  }
`;

const JoinWaitlistButton = styled.a`
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
  HeaderWrapper,
  HeaderContent,
  HeaderTitle,
  SubHeaderTitle,
  JoinWaitlistButton,
};
