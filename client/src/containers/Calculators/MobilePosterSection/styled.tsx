import styled from 'styled-components';

import { Font } from '../../../components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Title = styled(Font)`
    margin-bottom: 14px;
`;

const Description = styled(Font)`
    text-align: center;
    max-width: 315px;
    margin: 0px auto;
`;

const ButtonHolder = styled.div`
    margin-top: 70px;
`;

const ImageHolder = styled.div`
    width: 100px;
    height: 100px;
    margin-bottom: 24px;
`;

export {
    Container, Title, Description, ButtonHolder, ImageHolder,
};
