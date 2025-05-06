import styled from 'styled-components';

export const CardItemContainer = styled.article`
  text-align: left;
  display: flex;
  align-items: start;
  gap: 4px;
  justify-content: start;
  padding: 15px 20px;
  cursor: pointer;
  justify-content: space-between;
  &:hover {
    background: #f0f2f3;
  }
`;

export const CardItemDetails = styled.div`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  justify-content: start;
  width: 304px;
`;

export const CardItemTitle = styled.h3`
  color: #313234;
  font-feature-settings: "liga" off, "clig" off;
  font: 600 16px/1 Gilroy, sans-serif;
`;

export const CardItemDescription = styled.p`
  color: #6a6d70;
  font-feature-settings: "liga" off, "clig" off;
  margin-top: 8px;
  font: 400 14px/18px Inter, sans-serif;
`;

export const RadioContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const RadioStateLayer = styled.div`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  width: 25px;
  height: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const RadioButton = styled.span<{ checked: boolean }>`
  position: absolute;
  top: 0;
  left: calc(100% - 25px);
  height: 29px;
  width: 29px;
  background-color: #eee;
  border-radius: 50%;
  border: 2px solid #00B899;

  &:after {
    content: "";
    position: absolute;
    display: ${(props) => (props.checked ? 'block' : 'none')};
    top: 2.5px;
    left: 2.5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #00B899;
  }
}`;

export const CardList = styled.section`
  border-radius: 19px;
  background: #f7f9fa;
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
`;
