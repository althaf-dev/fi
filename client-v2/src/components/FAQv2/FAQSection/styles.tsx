import styled from 'styled-components';
import { MAX_WIDTH_MEDIA_SCREENS } from '../../../Themes/Device';

export const StyledSection = styled.section`
  width: 100%;
  // margin-top: 100px;     // Commented to adjust the removed content. When content is added, this can be uncommented
  margin-top:5px;           // this should be removed after the content is added
  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 0 20px;
    margin-top: 50px;
  }
`;

export const Title = styled.h2`
  color: var(--night-333333, #333);
  text-transform: capitalize;
  margin-bottom: 24px;
  font-family: Gilroy;
  font-size: 29.43px;
  font-weight: 600;
  line-height: 35.11px;
  text-align: left;
  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    font-family: Gilroy;
    font-size: 28.23px;
    font-weight: 600;
    line-height: 33.87px;
    text-align: center;
  }
`;

export const FAQList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const FAQItem = styled.li`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 30px;
  margin-bottom: 20px;
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

export const Question = styled.h3`
  color: #333;
  margin: 0;
  font-family: Gilroy;
  font-size: 23.55px;
  font-weight: 600;
  line-height: 27.08px;
  text-align: left;
`;

export const ExpandIcon = styled.img`
  width: 23px;
  height: 23px;
`;
