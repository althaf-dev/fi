import styled from 'styled-components';

import { Font } from '../Abstract';

const Wrapper = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    display: flex;
    align-items: center;
    z-index: 1;
    position: sticky;
    top: 0;
    box-shadow: 0 0 12px rgb(0 0 0 / 8%);
    padding: 12px 16px;
`;

const BackButtonImageHolder = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const IconImageHolder = styled.div`
    width: 32px;
    height: 32px;
    margin-left: 4px;
`;

const ContentSection = styled.div`
    margin-left: 8px;
`;

const Title = styled(Font)``;

const Description = styled(Font)``;

export {
    Wrapper, BackButtonImageHolder, IconImageHolder, Title, Description, ContentSection,
};
