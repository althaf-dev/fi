/**
 * @file Carousel Styled
 */
import styled from 'styled-components';

import { Device } from '../../Themes/Device';

import { ScrollableContainer } from '../styled';

const Wrapper = styled.div`
    position: relative;
`;

const Container = styled(ScrollableContainer)``;

const ArrowHolder = styled.div<{ buttonVisible: boolean }>`
    display: none;

    @media ${Device.desktop} {
        display: ${(props) => (props.buttonVisible ? 'block' : 'none')};
    }
`;

export {
    Wrapper,
    Container,
    ArrowHolder,
};
