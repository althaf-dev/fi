import { MAX_WIDTH_MEDIA_SCREENS } from "@/Themes/Device";
import styled from "styled-components";

export const TravelCardWrapper = styled.section`
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

export const Dots = styled.div`
  display: none;
  gap: 10px;
  justify-content: center;
  @media (${MAX_WIDTH_MEDIA_SCREENS.tab}) {
    display: flex;
    width: 100%;
  }

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
     gap: 5px;
  }
`
export const Dot = styled.div<{ isActive?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.isActive ? '#A8E0D3' : '#57595D')};

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
     width: 5px;
     height: 5px;
   }
`;

export const TermsAndConditions = styled.p`
  font-feature-settings: "liga" off, "clig" off;
  max-width: 100%;
  color: var(--Content-On-Dark-Low-Emphasis-600, #6a6d70);
  text-align: center;
  margin-top: 14px;
  font: 400 12px/1 Inter, sans-serif;
`;
