import styled from 'styled-components';
import { MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';

const InfoContainer = styled.section`
  border-radius: 0px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const InfoTitle = styled.h2`
  font-family: Gilroy;
  font-size: 30px;
  font-weight: 600;
  line-height: 35.79px;
  text-align: left;
  margin-bottom: 40px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
   font-family: Gilroy;
   font-size: 20px;
   font-weight: 600;
   line-height: 23.86px;
   text-align: left;
  }
`;

const InfoContent = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 33.6px;
  text-align: left;
  color: #8D8D8D;
  margin: 20px 0;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24.8px;
  text-align: left;
  margin: 10px 0;
  }
`;

export {
    InfoContainer,
    InfoTitle,
    InfoContent
};
