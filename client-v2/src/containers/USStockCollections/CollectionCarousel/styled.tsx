/**
 * @file Collection Carousel Styled
 */
import styled from 'styled-components';

import { Device } from '@/Themes/Device';
import MIXINS from '@/Themes/mixins';

const CardWrapper = styled.div`
    display: flex;
`;

const Card = styled.div<{ isSelected: boolean }>`
    ${MIXINS.FlexMixin({ dir: 'column', width: '118px', height: '136px' })};
    background: ${(props) => (props.isSelected
        ? 'radial-gradient(100% 100% at 50% 0%, #727272 0%, #363636 100%)'
        : props.theme.color.MINE_SHAFT)};
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 7px;
    flex-shrink: 0;
    transition: transform 0.2s ease, background 0.2s ease;
    transform: ${(props) => (props.isSelected ? 'scale(1)' : 'scale(0.8)')};

    @media ${Device.desktop} {
        ${MIXINS.FlexMixin({ dir: 'column', width: '175px', height: '205px' })};
        padding: 20px 14px;
    }
`;

const ImageHolder = styled.div`
    width: 40px;
    height: 40px;
    margin: 0px auto 15px;

    @media ${Device.desktop} {
        width: 60px;
        height: 60px;
    }
`;

const Title = styled.h1<{ isSelected: boolean }>`
    ${(props) => MIXINS.FontMixin({
        weight: 600,
        size: props.isSelected ? '16px' : '14px',
        lineHeight: props.isSelected ? '20px' : '18px',
    })};
    ${MIXINS.LineClampMixin(2)};
    color: ${(props) => (props.isSelected ? props.theme.color.WHITE : props.theme.color.OSLO_GRAY)};
    text-align: center;
    word-wrap: break-word;
    transition: color 0.2s ease;

    @media ${Device.desktop} {
        ${(props) => MIXINS.FontMixin({ weight: 600, size: props.isSelected ? '24px' : '20px', lineHeight: props.isSelected ? '28px' : '24px' })};
    }
`;

export {
    CardWrapper,
    Card,
    ImageHolder,
    Title,
};
