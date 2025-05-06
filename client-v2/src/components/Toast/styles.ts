import styled from 'styled-components';
import { MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  z-index: 1000;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    bottom: 100px;
  }
`;

const ToastMessage = styled.p`
  margin: 0;
  font-family: Inter, sans-serif;
  font-size: 14px;
`;

export { ToastContainer, ToastMessage };
