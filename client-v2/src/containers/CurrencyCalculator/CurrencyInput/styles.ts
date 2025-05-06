import styled from 'styled-components';
import { MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;

    @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
       max-width: 100%;
    }
`;

const Container = styled.div`
  justify-content: center;
  border-radius: 16px;
  border: 1px solid var(--Neutrals-Fog-200, #e6e9ed);
  background: var(--Neutrals-Snow-00, #fff);
  display: flex;
  margin-top: 8px;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  padding: 22px 12px;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px 100px;
  justify-content: space-between;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
      gap: 0px;
  }
`;

const AmountText = styled.input`
  align-self: stretch;
  margin: auto 0;
  padding: 2px 4px;
  all: unset; 
  flex: 1;
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    max-width: 60%;
    font-family: Gilroy;
  }
`;

const CurrencyWrapper = styled.button`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 24px;
  color: var(--Interactive-Light-Primary-Action, #00b899);
  text-align: center;
  line-height: 1;
  justify-content: start;
  margin: auto 0;
  all: unset; 
  cursor: pointer;
  flex: 1;
`;

const CurrencyGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const CurrencyCode = styled.div`
    font-family: Gilroy;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    color: #00B899;
`;

const CurrencyIcon = styled.span`
    font-size: 24px;
`;

const CurrencyLabelContainer = styled.div`
     display: flex;
     justify-content: space-between;
`;

const InputLabel = styled.span`
    font-family: Gilroy;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #929599;

    @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    }
  `;

const CurrencyNameLabel = styled.span`
    font-family: Gilroy;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.5px;
    text-align: right;
    color: #313234;

`;

const DropdownIcon = styled.img`
    width: 15px;
    height: 15px;
`;

export {
    InputContainer,
    Container,
    AmountWrapper,
    AmountText,
    CurrencyWrapper,
    CurrencyGroup,
    CurrencyCode,
    CurrencyIcon,
    CurrencyLabelContainer,
    InputLabel,
    CurrencyNameLabel,
    DropdownIcon
};
