import styled from 'styled-components';
import { MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';

const PageContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0px 50px 250px;
  align-items: center;
  background: #EFF2F6;

  @media (${MAX_WIDTH_MEDIA_SCREENS.desktop}) {
      padding: 50px 0px 50px 4%;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 0 20px;
    padding-bottom: 50px;
  }
`;

const ContentWrapper = styled.div`
     display: flex;
     flex-direction: row;
     width: 100%;
     justify-content: flex-start;
     gap: 50px;

     @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
      flex-direction: column;
       align-items: center;
      }


     @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
        flex-direction: column;
        gap: 20px;
     }
  `;

const CurrencyConvertorInputContainer = styled.div`
     display: flex;
     flex-direction: column;
     width: 100%;
     height: auto;
     flex: 1;
     align-items: flex-start;
     padding: 0 20px;
     max-width: 600px;

     @media ${MAX_WIDTH_MEDIA_SCREENS.phone} {
         padding: 0;
     }
`;

const Condition = styled.p`
    font-family: Gilroy;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    color: #929599;
    display: flex;
    align-items: center;
    margin-left: 20px;

    @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
        font-family: Gilroy;
        font-size: 10px;
        font-weight: 500;
        line-height: 12px;
        text-align: left;
        margin-left: 0;
  }
`;

const TermsAndConditions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 0 10px;
    margin-top: 10px;
  }
`;

const Disclaimer = styled.p`
  margin-top: 20px;
`;

const VisaIcon = styled.p`
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color: #6A6D70;
    margin-top: 10px;

    @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        text-align: center;
    }
`;

const LearnMore = styled.p`
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: #929599;
    margin-top: 10px;

    @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        text-align: center;
    }
`;

const Highlight = styled.a`
  color: #00B899;
`;

const VisaLogo = styled.img`
  width: 35px;
  height: auto;
`;

const ConditionAlert = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 10px;
`;

export {
    PageContainer,
    ContentWrapper,
    CurrencyConvertorInputContainer,
    Condition,
    TermsAndConditions,
    Disclaimer,
    VisaIcon,
    LearnMore,
    Highlight,
    VisaLogo,
    ConditionAlert
};
