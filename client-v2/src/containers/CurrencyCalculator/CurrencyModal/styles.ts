import styled from 'styled-components';
import { MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';

const ModalOverlay = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px); /* Blurs the background */
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensures the modal appears on top */
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  max-width: 80vw;
  max-height: 80vh;
  min-height: 80vh;
  background: #eff2f6;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001; /* Higher z-index for modal content */
  padding: 30px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    max-width: 100vw;
    position: fixed;
    bottom: 0;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px #0000001F;
  box-shadow: 0px 11px 15px 0px #00000024;
  box-shadow: 0px 6px 7px 0px #00000033;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 8px;
`;

const ListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 20px;
`;

const ListItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: ${({ selected }) => (selected ? '#e0f7fa' : '#fff')};
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  background: #eff2f6;

  &:hover {
    background: #f0f4f8;
  }
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RadioButton = styled.div<{ selected: boolean }>`
  width: 16px;
  height: 16px;
  border: 2px solid #00B899;
  border-radius: 50%;
  background: ${({ selected }) => (selected ? '#00B899' : 'transparent')};
  color: #00B899;
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrimaryText = styled.span`
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
`;

const SecondaryText = styled.span`
    font-family: Gilroy;
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
    text-align: left;
    color: #929599;
`;

export {
    ModalOverlay,
    ModalContainer,
    SearchBar,
    SearchInput,
    ListContainer,
    ListItem,
    LeftContent,
    RadioButton,
    Label,
    PrimaryText,
    SecondaryText,

};
