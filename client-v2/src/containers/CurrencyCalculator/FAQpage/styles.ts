import styled from 'styled-components';
import { MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';

const PageContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  justify-content: start;
  padding: 0 200px;
  margin: 100px 100px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.desktop}) {
    padding: 0 0px;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    margin: 60px 20px;
    padding: 0 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  gap: 60px;
  @media (max-width: 991px) {
    gap: 40px;
  }
`;

const FooterSection = styled.footer`
  display: flex;
  margin-top: 60px;
  width: 100%;
  flex-direction: column;
  color: var(--slate-8-d-8-d-8-d, #8d8d8d);
  justify-content: start;
  font: 500 20px/28px Inter, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Divider = styled.hr`
  background-color: #e7e7e7;
  min-height: 2px;
  width: 100%;
  border: 2px solid rgba(231, 231, 231, 1);

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
   border: 1px solid #E7E7E7;
  }
`;

const Disclaimer = styled.p`
 font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  color: #8D8D8D;
  margin: 50px 0;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Inter;
    font-size: 14px;
    line-height: 21.7px;
  }
`;

export {
    PageContainer,
    ContentWrapper,
    FooterSection,
    Divider,
    Disclaimer
};
