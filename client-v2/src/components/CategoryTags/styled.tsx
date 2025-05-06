/**
 * @file CategoryTags Styled
 */

import styled from 'styled-components';

import { Device } from '@/Themes/Device';
import MIXINS from '@/Themes/mixins';

import { Font } from '../../Abstract';

const Container = styled.div`
    margin-top: 10px;

    @media ${Device.tab} {
        width: 95%;
    }

    @media ${Device.desktop} {
        margin-top: 30px;
        width: 100%;
    }
`;

const ScrollableContainer = styled.div`
    overflow: auto;

    /* To hide scrollbar */
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

const CategoriesTagWrapper = styled(ScrollableContainer)`
    width: 100%;
    margin-bottom: 25px;

    @media ${Device.desktop} {
        margin-bottom: 50px;
    }
`;

const Categories = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(7, auto);
    white-space: nowrap;
`;

const CategoryPill = styled.button<{ isActive:any, index: any }>`
    border: 2px solid ${(props) => props.theme.color.FOREST_GREEN};
    padding: 6px 12px;
    border-radius: 13px;
    background: ${(props) => (props.isActive === props.index ? props.theme.color.FOREST_GREEN : 'transparent')};
    color: ${(props) => (props.isActive === props.index ? props.theme.color.WHITE : props.theme.color.FOREST_GREEN)};
    
    ${MIXINS.FontMixin({ size: '14px', weight: 600 })};

    &:hover {
        cursor: pointer;
    }

    @media ${Device.tab} {
        ${MIXINS.FontMixin({ size: '22px', weight: 600, lineHeight: '28px' })};
        border: 2px solid ${(props) => props.theme.color.FOREST_GREEN};
        padding: 10px 20px;
        border-radius: 22px;
    }
`;

const CardWrapper = styled.div`
    width: 100%;
`;

const CardsContainer = styled(ScrollableContainer)`
    ${MIXINS.FlexMixin({ justify: 'start' })};
    gap: 16px;
    padding-bottom: 5px;

    @media ${Device.desktop} {
        ${MIXINS.FlexMixin({})};
        gap: 40px;
        flex-wrap: wrap;
    }
`;

const Card = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 19px;
    box-shadow: 0px 4px 0px ${((props) => props.theme.color.DARK_GREY_40)};
    width: 160px;
    padding: 35px;
    position: relative;
    overflow: hidden;

    @media ${Device.tab} {
        width: 180px;
    }

    @media ${Device.desktop} {
        border-radius: 25px;
    }
`;

const Title = styled(Font)`
    ${MIXINS.LineClampMixin(1)};
    text-align: center;
`;

const CardImageHolder = styled.div`
    width: 32px;
    height: 32px;

    @media ${Device.desktop} {
        width: 42px;
        height: 42px;
    }
`;

const ImageBox = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border: 1px solid ${(props) => props.theme.color.CATSKILL_WHITE};
    border-radius: 13px;
    padding: 8px;
    margin: 0px auto 15px;
    width: max-content;

    @media ${Device.desktop} {
        border-radius: 19px;
        padding: 12px;
        margin: 0px auto 20px;
    }
`;

const Link = styled.a``;

export {
    Categories, CategoryPill, CardsContainer, Card, CardImageHolder, ImageBox, Title,
    Link, CardWrapper, Container, CategoriesTagWrapper,
};
