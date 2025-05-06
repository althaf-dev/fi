import { Device } from '@/Themes/Device';
import styled from 'styled-components';

export const InfoContainer = styled.section`
  background-color: #f5f5f5;
`;

export const InfoImage = styled.img`
  width: 112%;
  margin: -130px 0px 0px -22px;
  @media (${Device.tab}) {
    width: 95%;
  }
  @media (${Device.desktop}) {
    width: 93%;
    margin: -130px 0px 0px -28px;
  }
`;

export const InfoContent = styled.div`
  padding: 0 20px;
  @media (${Device.tab}) {
    padding: 116px 75px 20px;
  }
  @media (${Device.desktop}) {
    padding: 116px 110px 20px;
    margin: auto;
    max-width: 1440px;
  }
`;

export const InfoTitle = styled.h2`
  color: #333;
  font-size: 20px;
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  margin-top: 20px;
`;

export const InfoDescription = styled.p`
  color: #8d8d8d;
  font-size: 16px;
  font-family: Inter, sans-serif;
  margin-top: 20px;
  margin-bottom: 30px;
  @media (${Device.tab}) {
    font-size: 24px;
    margin-top: 24px;
    margin-bottom: 60px;
  }
`;

export const InfoImageContainer = styled.div`
  width: 100%;
  @media (${Device.tab}) {
    width: 112%;
  }
  @media (${Device.desktop}) {
    width: 112%;
  }
`;
