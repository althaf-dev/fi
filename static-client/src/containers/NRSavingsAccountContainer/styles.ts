import { Font } from '@/components/Abstract';
import { Device, MAX_WIDTH_MEDIA_SCREENS } from '@/Themes/Device';
import styled from 'styled-components';

const NRSavingsAccountContainerWrapper = styled.div`
    font-size: 10px;
    background-color: #EFF2F6;

    @media ${Device.phone} {
        font-size: 12px;
    }

    @media ${Device.tab} {
        font-size: 14px;
    }

    @media ${Device.desktop} {
        font-size: 16px;
    }

    @media ${Device.big} {
        font-size: 18px;
    }
`;

const InstructionsNoteContainer = styled.div`
    background-color: #E9F7F4;
    border: 2px solid #00B899;
    border-radius: 30px;
    padding: 20px;
    width: 80%;

    @media ${Device.tab} {
        padding: 40px;
    }

    @media ${Device.desktop} {
        width: 100%;
        max-width: 1130px;
    }
`;

const InstructionsNoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const InstructionsNoteTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const InstructionsNoteIcon = styled.img`
    width: 20px;
    height: 20px;
`;

const InstructionsNoteTitle = styled.h2`
    font-size: 1.5em;
    font-weight: 600;
    font-family: Gilroy, sans-serif;
    color: #004E2D;

`;

const InstructionsNoteDescription = styled.p`
    font-size: 1em;
    font-family: Gilroy, sans-serif;
    color: #004E2D;
    line-height: 1.5;

    @media ${Device.tab} {
        line-height: 2;
    }
`;

const FeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;

    @media ${Device.desktop} {
        width: 100%;
        max-width: 1130px;
    }
`;

const FeesTitle = styled.h2`
    font-size: 2.5em;
    font-weight: 600;
    font-family: Gilroy, sans-serif;
    color: #333333;
    text-align: center;

    @media ${Device.desktop} {
        font-size: 3em;
    }
`;

const FeesList = styled.ol`
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style-position: inside;
    list-style: none;
    counter-reset: item;
`;

const FeesListItem = styled.li`
    background-color: #FFFFFF;
    padding: 15px;
    border-radius: 30px;
    font-size: 1.5em;
    counter-increment: item;
    font-family: Gilroy, sans-serif;
    color: #333333;
    line-height: 1;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    & > div {
        flex-grow: 1;

        & > span {
            color: #00B899;
            font-weight: 400;
        }
    }

    & > img {
        width: 16px;
        height: 16px;

        @media ${Device.phone} {
            width: 20px;
            height: 20px;
        }

        @media ${Device.tab} {
            width: 25px;
            height: 25px;
        }

        @media ${Device.desktop} {
            width: 32px;
            height: 32px;
        }
    }

    @media ${Device.tab} {
        padding: 25px;
        gap: 15px;
        line-height: 1.3;
    }

    @media ${Device.desktop} {
        font-size: 2em;
        gap: 20px;
        line-height: 1.5;
    }

    

    &::before {
        content: counter(item);
        font-weight: 400;
        border-radius: 50%;
        color: #00B899;
        background-color: #ECEEF0;
        text-align: center;
        display: inline-block;
        line-height: 3em;
        height: 3em;
        aspect-ratio: 1 / 1;

        @media ${Device.desktop} {
            line-height: 2em;
            height: 2em;
        }
    }
`;

const Details = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  gap: 90px;
  align-items: center;

  @media (${MAX_WIDTH_MEDIA_SCREENS.phone}) {
    border-radius: 60px 60px 0px 0px;
    padding: 60px 0;
    gap: 50px;
  }
`;

const AccountContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  padding: 50px 0;
  background-color: #dcf3ee;
`;

const Content = styled.div`
  background-color: #f5f5f5;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`;

const StickyFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 5%;
  z-index: 3;

  @media (${Device.tab}) {
    padding: 16px 40px;
  }

  @media (${Device.desktop}) {
    display: none;
  }
`;

const ShadowGreenButton = styled(Font)`
  background-color: ${(props) => props.theme.color.FOREST_GREEN};
  border-radius: 20px;
  border: none;
  color: ${(props) => props.theme.color.WHITE};
  height: 44px;
  outline: none;
  padding: 14px 20px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 4px 0px 0px #00866F;


  @media (${Device.tab}) {
    height: 48px;
  }
`;

export {
    NRSavingsAccountContainerWrapper,
    InstructionsNoteContainer,
    InstructionsNoteWrapper,
    InstructionsNoteTitleWrapper,
    InstructionsNoteIcon,
    InstructionsNoteTitle,
    InstructionsNoteDescription,
    FeesContainer,
    FeesTitle,
    FeesList,
    FeesListItem,
    Details,
    AccountContent,
    Content,
    StickyFooter,
    ShadowGreenButton,
};
