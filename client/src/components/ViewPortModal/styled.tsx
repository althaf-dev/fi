/**
 * View Port Modal Styling
 */
import styled from 'styled-components';

const customStylesForModal = {
    overlay: {
        backgroundColor: 'white',
        zIndex: 10,
    },
    content: {
        width: '100%',
        bottom: 0,
        padding: 0,
        left: 0,
        right: 0,
        top: 'auto',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        overflow: 'hidden',
        border: 'none',
    },
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Label = styled.div`
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 110%;
    letter-spacing: 0.45px;
    text-align: center;
    padding: 16px;
    text-align: center;
`;

export {
    customStylesForModal, Wrapper, Label,
};
