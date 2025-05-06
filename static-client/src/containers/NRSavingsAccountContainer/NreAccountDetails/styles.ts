import { Device, MAX_WIDTH_MEDIA_SCREENS } from "@/Themes/Device";
import styled from "styled-components";

export const NreAccountDetailsWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 100%;
    padding: 0 80px;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    padding: 0 30px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  width: 100%;
  max-width: 1208px;
  flex-direction: column;
  justify-content: flex-start;
  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    max-width: 100%;
    margin-top: 40px;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    margin-bottom: 20px;
  }
`;

export const CardBody = styled.div`
  column-gap: 20px;
  display: grid;
  margin-top: 40px;
  grid-template-columns: 50% 50%;
  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    flex-direction: column;
    grid-template-columns: 100%;
  }

   @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
     margin-top: 20px;
   }

`;

export const CountryAvailabilityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CountryAvailability = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid #00B899;
  border-radius: 20px;
  padding: 15px;
  background: #E9F7F4;
  width: 100%;


  @media ${Device.desktop} {
    width: fit-content;
  }
`;

export const CountryAvailabilityText = styled.div`  
  color: #004E2D;
  font-size: 1em;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;