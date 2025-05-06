import styled from 'styled-components';

const DateSelectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the DateSelectors */
    width: 100%;
    margin-bottom: auto; /* Ensure it stays above the Confirm button */
    margin-top: 24px;
`;

const DateSelectorContainer = styled.div`
    display: inline-block;
    position: relative;
    border-radius: 15px;
    background: #fff;
    overflow: hidden;
    margin-bottom: 20px;
    text-align: left;
    height: 60px;
    width: 100%;
`;

const Date = styled.div`
    position: absolute;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    padding: 14px 16px;
    gap: 20px;
`;

const DateIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 8px auto 0;
`;

const DateInfo = styled.div`
  align-self: stretch;
  display: flex;
  width: 192px;
  flex-direction: column;
  justify-content: start;
  margin: auto 0;
`;

const DateInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: calc(100vw - 40px);
  height: 100%;
  opacity: 0;
  cursor: pointer;
  box-sizing: border-box;
  
  &::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;

const DateType = styled.span`
  color: #b2b5b9;
  font-feature-settings: "liga" off, "clig" off;
  font-size: 10px;
  line-height: 1.2;
`;

const SelectedDate = styled.span`
    font-feature-settings: "liga" off, "clig" off;
    align-self: stretch;
    margin-top: 4px;
    font-size: 16px;
    color: #313234;
    line-height: 1;
    white-space: nowrap;z
    overflow: hidden;
    text-overflow: ellipsis;
`;

const DateSelectionError = styled.div`
    color: #ff0000;
    font-size: 12px;
    margin-top: 4px;
`;

export {
    DateSelectionWrapper,
    DateSelectorContainer,
    Date,
    DateIcon,
    DateInfo,
    DateInput,
    DateType,
    SelectedDate,
    DateSelectionError,
};
