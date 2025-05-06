/**
 * @file Carousel Styled
 */
import styled from 'styled-components';

import { Device } from '@/Themes/Device';

const ScrollableContainer = styled.div`
    overflow: auto;

    /* To hide scrollbar */
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

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
