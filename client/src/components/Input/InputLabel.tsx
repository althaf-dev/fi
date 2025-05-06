import styled from 'styled-components';
import { Device } from '../../Themes/Device';
import { Font } from '../Abstract';

const InputLabel = styled(Font)`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 15px;
    padding-right: 15px;
    transition: 0.1s ease;
    transform-origin: left top;
    pointer-events: none;
    font-size: 12px;

    @media ${Device.tab} {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media ${Device.desktop} {
        font-size: 16px;
    }
`;

export default InputLabel;
