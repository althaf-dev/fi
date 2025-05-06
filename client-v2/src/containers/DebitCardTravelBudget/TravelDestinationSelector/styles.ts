import styled from 'styled-components';

const Destination = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const DestinationName = styled.div``;

const DestinationList = styled.section`
  border-radius: 19px;
  background: #f7f9fa;
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
  overflow-y: scroll;
`;

const DestinationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: start;
  padding: 15px 20px;
  cursor: pointer;
  &:hover {
    background: #f0f2f3;
  }
`;

const DestinationFlag = styled.div`
  font-size: 24px;
`;

const DestinationTitle = styled.h3`
  overflow-wrap: anywhere;
  text-align: left;
  width: 100%;
  color: #313234;
  font-feature-settings: "liga" off, "clig" off;
  font: 600 16px/1 Gilroy, sans-serif;
`;

export {
    Destination,
    DestinationName,
    DestinationContainer,
    DestinationFlag,
    DestinationTitle,
    DestinationList
};
