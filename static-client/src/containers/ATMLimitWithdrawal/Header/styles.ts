import styled from "styled-components";

export const SearchContainer = styled.section`
  width: 100%;
  padding: 20px 60px 20px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 64px 14px 16px;
  background: var(--Background-Light-Layer-2, #FFF);
  border-radius: 17px;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  font-size: 16px;
  line-height: 1.5;
  color: var(--Text-Primary, #000);
  outline: none;
  min-width: 0;
`;
