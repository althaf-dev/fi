import styled from 'styled-components';

import { MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';

const Container = styled.section`
  margin: 0 50px;
  max-width: 1130px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 80%;
    gap: 75px;
  }
  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    max-width: 100%;
    margin: 0;
    padding: 0 20px;
    gap: 50px;
  }
`;

const Description = styled.div`
  font-size: 1.5em;
  color: #8D8D8D;
  text-align: left;
`;

const FeaturesWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FeaturesTitle = styled.h2`
  font-size: 2em;
  color: #333333;
  text-align: center;
`;

const FeaturesDescription = styled.p`
  font-size: 1.5em;
  color: #8D8D8D;
  text-align: center;
`;

const FeaturesListWrapper = styled.div`
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const FeatureItem = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 25px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FeatureIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const FeatureDescription = styled.h3`
  font-size: 1.2em;
  text-align: left;
  color: #646464;
  font-weight: 400;
`;

export {
    Container,
    Description,
    FeaturesWrapper,
    FeaturesTitle,
    FeaturesDescription,
    FeaturesListWrapper,
    FeatureItem,
    FeatureIcon,
    FeatureDescription,
};