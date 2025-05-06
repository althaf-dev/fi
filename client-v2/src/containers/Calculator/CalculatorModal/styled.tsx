import styled from 'styled-components';

const customStylesForModal = {
    overlay: {
        backgroundColor: 'rgba(40, 40, 40, 0.8)',
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
    flex-direction: column;
`;

const Separator = styled.div`
    border: 1px solid ${(props) => props.theme.color.GAINSBORO};
    width: 100%;
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
`;

const Description = styled.div<{ componentType: string }>`
    color: ${(props) => props.theme.color.STEEL};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    padding: ${(props) => (props.componentType === 'slider_and_input' ? '27px 24px 24px' : '16px 20px')};
`;

export {
    customStylesForModal, Wrapper, Separator, Label, Description,
};
