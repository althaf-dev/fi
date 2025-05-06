import styled from 'styled-components';

import { Font } from '../../../components';

const MobileCalculatorInputsSection = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border: 1px solid ${(props) => props.theme.color.COIN};
    box-shadow: 0px 0px 14px ${(props) => props.theme.color.BLACK_GRBA_10};
    border-radius: 40px;
    padding: 30px 15px;
    margin-bottom: 60px;
    position: relative;
`;

const OrderSection = styled(Font)`
    background: ${(props) => props.theme.color.IVORY};
    border: 1px solid ${(props) => props.theme.color.ONYX};
    border-radius: 20px;
    padding: 8px 16px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export { MobileCalculatorInputsSection, OrderSection };
