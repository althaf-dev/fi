/**
 * @file CarouselVariantOne Styled
 */
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

import { ScrollableContainer } from '../../styled';

const Wrapper = styled.div`
    width: 100%;
    margin: 10px auto 0px;

    @media ${Device.desktop} {
        margin: 30px auto 0px;
    }
`;

const CardContainer = styled(ScrollableContainer)`
    display: flex;
    gap: 15px;
    padding-bottom: 10px;

    @media ${Device.desktop} {
        gap: 20px;
    }
`;

const Card = styled.div`
    border-radius: 18px;
    background: ${(props) => props.theme.color.WHITE};
    box-shadow: 0px 4px 0px ${((props) => props.theme.color.DARK_GREY_40)};;
    padding: 14px 12px 18px;
    width: 170px;
    overflow: hidden;
    margin: 0px auto;

    @media ${Device.desktop} {
        border-radius: 25px;
        padding: 20px;
        width: 190px;
    }
`;

const Link = styled.a``;

const ImageBox = styled.div`
    background: ${(props) => props.theme.color.WHITE};
    border: 1px solid ${(props) => props.theme.color.CATSKILL_WHITE};
    border-radius: 13px;
    padding: 8px;
    margin-bottom: 8px;
    width: max-content;

    @media ${Device.desktop} {
        border-radius: 19px;
        padding: 12px;
        margin-bottom: 12px;
    }
`;

const ImageHolder = styled.div`
    width: 32px;
    height: 32px;

    @media ${Device.desktop} {
        width: 42px;
        height: 42px;
    }
`;

const Title = styled.div`
    ${MIXINS.FontMixin({ weight: 600, lineHeight: '20px' })};
    color: ${(props) => props.theme.color.MINE_SHAFT};
    ${MIXINS.LineClampMixin(1)};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '24px', lineHeight: '27px' })};
    }
`;

const SubContainer = styled.div`
    ${MIXINS.FlexMixin({ justify: 'start' })};
    margin-top: 4px;

    @media ${Device.desktop} {
        margin-top: 12px;
    }
`;

const SubText = styled.div`
    ${MIXINS.FontMixin({ size: '14px', lineHeight: '18px' })};
    color: ${(props) => props.theme.color.MINE_SHAFT};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ size: '20px', lineHeight: '24px' })};
    }
`;

const TagIconHolder = styled.div`
    width: 12px;
    height: 12px;
    margin: 0px 3px;

    @media ${Device.desktop} {
        width: 15px;
        height: 15px;
    }
`;

const TagText = styled.div`
    ${MIXINS.FontMixin({ size: '12px' })};
    color: ${(props) => props.theme.color.MINE_SHAFT};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ lineHeight: '20px' })};
    }
`;

const Description = styled.div`
    ${MIXINS.FontMixin({ size: '12px' })};
    color: ${(props) => props.theme.color.BOMBAY_GREY};
    margin-top: 4px;
    ${MIXINS.LineClampMixin(1)};

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ lineHeight: '20px' })};
        margin-top: 12px;
    }
`;

export {
    Wrapper, CardContainer, Card, Link, ImageBox, ImageHolder, Title, SubContainer, SubText, TagIconHolder,
    TagText, Description,
};
