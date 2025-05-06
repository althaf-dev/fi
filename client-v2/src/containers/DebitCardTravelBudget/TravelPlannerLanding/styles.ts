import styled from 'styled-components';
import { Image } from '../BottomSheet/styles';

const MainContent = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: scroll;

  &::-webkit-scrollbar {
      display: none !important;
  }
`;

const PageDivider = styled.hr`
  background-color: #313234;
  align-self: center;
  margin-top: 51px;
  width: calc(100% - 40px);
  max-width: 100%;
  height: 1px;
  border: none;
`;

const CalculatorContainer = styled.section`
  align-self: center;
  display: flex;
  margin-top: 32px;
  width: 100%;
  max-width: 332px;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.h1`
  font-feature-settings: "liga" off, "clig" off;
  color: var(--Content-On-Dark-High-Emphasis-50, #f6f9fd);
  letter-spacing: -0.84px;
  font: 700 28px/1 Gilroy, sans-serif;
`;

const Subtitle = styled.p`
  color: var(--Content-On-Dark-Medium-Emphasis-500, #929599);
  font-feature-settings: "liga" off, "clig" off;
  margin-top: 8px;
  font: 400 14px/1 Inter, sans-serif;
`;

const DestinationInput = styled.div`
  border-radius: 15px;
  background: var(--Background-Dark-Layer-2, #313234);
  margin-top: 32px;
  padding: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Label = styled.label`
  color: var(--Content-On-Dark-Medium-Emphasis-500, #929599);
  font-feature-settings: "liga" off, "clig" off;
  font: 600 16px/1 Gilroy, sans-serif;
`;

const DropdownIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
`;

const CalculateButton = styled.button`
  font-feature-settings: "liga" off, "clig" off;
  border-radius: var(--xl-20, 20px);
  background-color: ${(props) => (props.disabled ? '#bec0c3' : '#00b899')};
  box-shadow: ${(props) => (props.disabled ? '0px 4px 0px 0px #000000' : '0px 4px 0px 0px #00866f')};
  color: ${(props) => (props.disabled ? '#7b7b7c' : '#494848')};
  margin-top: 24px;
  padding: 12px 16px;
  text-align: center;
  font: 600 14px/1 Gilroy, sans-serif;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const ItemDivider = styled.hr`
  background-color: #eceef0;
  height: 1px;
  border: 1px solid rgba(236, 238, 240, 1);
`;

const CheckImage = styled(Image)`
  width: 24px;
`;

const PopularDestinationsContainer = styled.section`
  align-self: center;
  display: flex;
  margin-top: 48px;
  width: 100%;
  max-width: 332px;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  color: var(--Content-On-Dark-High-Emphasis-50, #f6f9fd);
  font-feature-settings: "liga" off, "clig" off;
  font: 600 20px/1.2 Gilroy, sans-serif;
`;

const PopularDestinationList = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const PopularDestinationCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 160px;
  cursor: pointer;
`;

const PopularDestinationImage = styled.img`
  border-radius: 16px;
  aspect-ratio: 1.08;
  object-fit: cover;
`;

const PopularDestinationInfo = styled.div`
  display: flex;
  margin-top: 8px;
  flex-direction: column;
  gap: 5px;
`;

const PopularDestinationName = styled.h3`
  color: var(--Content-On-Dark-High-Emphasis-50, #f6f9fd);
  font-feature-settings: "liga" off, "clig" off;
  font: 600 16px/1 Gilroy, sans-serif;
`;

const PopularDestinationPrice = styled.p`
  color: var(--Content-On-Dark-Medium-Emphasis-500, #929599);
  font-feature-settings: "liga" off, "clig" off;
  font: 400 12px/1 Inter, sans-serif;
`;

export {
    MainContent,
    PageDivider,
    CalculatorContainer,
    Header,
    Title,
    Subtitle,
    DestinationInput,
    InputWrapper,
    Label,
    DropdownIcon,
    CalculateButton,
    CheckImage,
    ItemDivider,
    PopularDestinationsContainer,
    SectionTitle,
    PopularDestinationList,
    PopularDestinationCard,
    PopularDestinationImage,
    PopularDestinationInfo,
    PopularDestinationName,
    PopularDestinationPrice,
};
