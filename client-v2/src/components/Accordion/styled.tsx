import styled from 'styled-components';

// import { Device } from '../../Themes/Device';

import { Font } from '../Abstract';

const Container = styled.div`
    background: ${(props) => (props.theme.color.CHALK_GREY)};
    border-radius: 15px;
    cursor: pointer;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: fadeIn 800ms;
    width: 100%;

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(-8px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
`;

const Title = styled(Font)``;

const ImageHolder = styled.div`
    width: 24px;
    height: 24px;
`;

export {
    Container, Title, ImageHolder,
};
