import styled from 'styled-components';

const CounterContent = styled.div`
    align-self: center;
    display: flex;
    margin-top: 28px;
    width: 100%;
    max-width: 324px;
    flex-direction: column;
    font: 400 20px/1.2 Inter, sans-serif;
    color: #00b899;
`;

const CounterDisplay = styled.div`
    justify-content: center;
    border-radius: 15px;
    background-color: #fff;
    display: flex;
    width: 100%;
    gap: 40px;
    overflow: hidden;
    padding: 18px 65px;
`;

const TravellerCount = styled.span`
  font-feature-settings: "liga" off, "clig" off;
  align-self: center;
  color: #313234;
  font: 600 24px/1.17 Gilroy, sans-serif;
`;

const ButtonWrapper = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #f6f9fd;
  display: flex;
  width: 28px;
  height: 28px;
  border: none;
  cursor: pointer;
`;

const ButtonText = styled.span`
  font-feature-settings: "liga" off, "clig" off;
  font-style: normal;
`;

export {
    CounterContent,
    CounterDisplay,
    TravellerCount,
    ButtonWrapper,
    ButtonText,
};
