import styled from 'styled-components';
import Colors from '@/Themes/Colors';
import { MAX_WIDTH_MEDIA_SCREENS } from '../../../Themes/Device';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px 165px 100px 280px;
  background-color: ${Colors.BLACK_3};

  @media (${MAX_WIDTH_MEDIA_SCREENS.desktop}) {
     padding: 100px 165px 100px 8%;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 40px 20px;
  }
`;

const Breadcrumb = styled.div`
  font-family: Gilroy;
  font-size: 36px;
  font-weight: 500;
  line-height: 40px;
  text-align: left;
  margin-bottom: 20px;
  color: #929599;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
     margin-bottom: 0;
  }
`;

const BreadcrumbItem = styled.a`
   @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
   font-family: Gilroy;
   font-size: 16px;
   font-weight: 400;
   line-height: 20px;
   text-align: center;
   width: 100%;
  }
`;

const BreadcrumbSeparator = styled.img`
  width: 16px;
  height: 16px;
`;

const Title = styled.h1`
  font-family: Gilroy;
  font-size: 64px;
  font-weight: 500;
  line-height: 67.2px;
  text-align: left;
  color: #FFFFFF;
  margin-bottom: 20px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h2`
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #929599;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    margin-top: 10px;
  }
`;

export {
    StyledSection, Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, Title, SubTitle
};
