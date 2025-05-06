import styled, { css } from 'styled-components';
import { WINDOW_SIZE } from '@/Themes/Device';

export const Image = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 16px;
`;

export const ImageButton = styled.div`
    background-color: #F7F9FA;
    border-radius: 200%;
    height: 46px;
    padding: 15px;
    cursor: pointer;
`;

export const BottomSheetContainer = styled.div<{ isVisible: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-width: 480px;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    height: 100%;
    backdrop-filter: blur(1px);
    position: fixed;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 100;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    max-height: 0;
  
    ${({ isVisible }) => isVisible && css`
      max-height: 1000px;
    `};
`;

export const MainContainer = styled.main`
    z-index: 10;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end; /* Aligns content inside MainContainer at the bottom */
    flex-grow: 1;
    margin-top: 0;
`;

export const Card = styled.section`
    border-radius: 19px 19px 0px 0px;
    background: #ECEEF0;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 28px 20px;
    overflow-y: scroll;
`;

export const ContentWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-height: 600px;
`;

export const TravelStyleHeader = styled.div`
  display: flex;
  max-width: 100%;
  gap: 20px;
  color: #313234;
  text-align: center;
  justify-content: space-between;
  font: 600 16px/1 Gilroy, sans-serif;
  position: relative;
  align-items: center;

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    justify-content: flex-start;
  }
`;

export const StyleText = styled.h2`
  font-feature-settings: "liga" off, "clig" off;
  margin: auto 0;
  width: 100%;
  font-weight: 400;
  padding-right: 56px;

  @media (max-width: ${WINDOW_SIZE.PHONE}px) {
    padding: 0;
    width: unset;
  }
`;

export const ConfirmButton = styled.button`
  font-feature-settings: "liga" off, "clig" off;
  align-self: stretch;
  flex: 1;
  min-width: 80px;
  border-radius: 20px;
  border: none;
  background: ${(props) => (props.disabled ? '#bec0c3' : '#00b899')};
  box-shadow: ${(props) => (props.disabled ? '0px 4px 0px 0px #000000' : '0px 4px 0px 0px #00866f')};
  margin-top: 24px;
  min-height: 40px;
  padding: 12px 16px;
  text-align: center;
  font: 600 16px/1 Gilroy, sans-serif;
  cursor: pointer;
  color: ${(props) => (props.disabled ? '#7b7b7c' : '#494848')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const SearchBar = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 30px;
  border: unset;
  padding: 15px;
  padding-left: 45px;
  font-size: 20px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 3%;
  top: calc(50% - 12px);
  width: 24px;
  height: 24px;
`;
