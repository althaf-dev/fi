import styled from 'styled-components';

import MIXINS from '@/Themes/mixins';

const PlannerWrapper = styled.div`
    background: var(--Background-Dark-Base, #18191b);
    width: 100vw;
    height: 100vh;
`;

const PlannerContainer = styled.div`
  display: flex;
  max-width: 480px;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  padding-top: 20px;
`;

const BackButton = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 28px;
  padding-left: 14px;
  cursor: pointer;
`;

const Header = styled.header`
    background-color: #181b1b;
    display: flex;
    width: 100%;
    gap: 40px;
    color: #f6f9fd;
    padding-bottom: 20px;
    ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '10px', lineHeight: '28px',
    })};
    position: relative;
    align-items: center;
`;

const Title = styled.h1`
    font-feature-settings: "liga" off, "clig" off;
    margin: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
`;

export {
    PlannerWrapper,
    PlannerContainer,
    BackButton,
    Header,
    Title,
};
