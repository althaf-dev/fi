import styled from 'styled-components';
import { MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    max-width: 550px;
    height: auto;
    background: #FFFFFF;
    padding: 30px;
    border-radius: 32px;
    gap: 10px;
    align-items: center;

    @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
        max-width: 100%;
        margin: 10px 0;
        padding: 20px;
         border-radius: 20px;
    }
`;

const CurrencyList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px; 
  list-style-type: none;
  align-items: center;
  overflow-x: auto;
  gap: 10px;
  scrollbar-width: none;
`;

const CurrencyItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100px;
  border: 1px solid #E6E9ED;
  text-align: center;
  border-radius: 19px;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  gap: 2px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

const ExchangeButton = styled.button`
    display:flex;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    align-items: center;
    margin: 30px auto;
    border: 2.8px solid #A8E0D3;
    background: #FFFFFF;
    &:hover {
        background-color: #A8E0D3;
    }
    cursor: pointer;

    @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
        margin: 10px auto;
        width: 60px;
        height: 60px;
    }
`;

const Image = styled.img`
    object-fit: contain;
`;

const CurrencyCode = styled.p`
`;

const CurrencyIcon = styled.span`
`;

export {
    Container,
    CurrencyList,
    CurrencyItem,
    ExchangeButton,
    Image,
    CurrencyCode,
    CurrencyIcon
};
