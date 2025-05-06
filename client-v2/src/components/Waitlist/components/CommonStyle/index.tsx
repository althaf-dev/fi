// moved this from Waitlist container
import styled from 'styled-components';

import { Font, Flex } from '../../../Abstract';
import { Device } from '../../../../Themes/Device';

const ArrowWrapper = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    z-index: 10;
    @media ${Device.desktop} {
        top: 80px;
        left: 80px;
        width: 52px;
        height: 52px;
    }
`;

const CenterText = styled(Font)`
    text-align: center;
`;

const MarginAuto = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 100%;
`;

const Middle = styled(Flex)`
    justify-content: center;
    align-items: center;
`;

export { ArrowWrapper, CenterText, MarginAuto, Middle };
