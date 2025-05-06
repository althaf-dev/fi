/**
 * @file GraphSection Styled
 */
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

import { ScrollableContainer } from '../styled';

const TagsListWrapper = styled(ScrollableContainer)`
    margin-top: 16px;
    white-space: nowrap;

    @media ${Device.desktop} {
        margin-top: 30px;
    }
`;

const TopTagsList = styled(TagsListWrapper)`
    ${MIXINS.FlexMixin({ justify: 'start' })};
    gap: 12px;
`;

const BottomTagsList = styled(TagsListWrapper)`
    ${MIXINS.FlexMixin({})};
    gap: 12px;

    margin-top: 5px;
`;

const Tag = styled.button<{ isActive?: boolean }>`
    ${MIXINS.FontMixin({ weight: 600, size: '14px' })};
    background-color: ${(props) => (props.isActive ? props.theme.color.CATSKILL_WHITE : props.theme.color.WHITE)};
    border: ${(props) => (props.isActive ? 'none' : `1.5px solid ${props.theme.color.CATSKILL_WHITE}`)};
    border-radius: 12px;
    color: ${(props) => (props.isActive ? props.theme.color.MONOCHROME_CHARCOAL : props.theme.color.SHUTTLE_GRAY)};
    cursor: pointer;
    padding: 8px 12px;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({ weight: 600, size: '24px', lineHeight: '28px' })};
        border-radius: 19px;
        padding: 15px 20px;
    }
`;

const GraphContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 300px;

    @media ${Device.desktop} {
        margin-top: 35px;
        height: 400px;
    }
`;

const Description = styled.div`
    ${MIXINS.FontMixin({ font: 'Inter', weight: 400, size: '12px' })};
    color: ${(props) => props.theme.color.SHUTTLE_GRAY};
    margin-top: 20px;
    word-break: break-word;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Inter', weight: 400, size: '24px', lineHeight: '28px',
    })};
        margin-top: 30px;
    }
`;

const LabelsWrapper = styled.div`
    ${MIXINS.FlexMixin({ justify: 'start' })};
    gap: 14px;
    margin-top: 15px;

    @media ${Device.desktop} {
        gap: 20px;
        margin-top: 30px;
    }
`;

const BulletContainer = styled.span<{ bulletColor: string }>`
    background-color: ${(props) => props.bulletColor};
    border-radius: 50%;
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 4px;
    verticala-align: middle;

    @media ${Device.desktop} {
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
`;

const LabelName = styled.span`
    ${MIXINS.FontMixin({ font: 'Gilroy', weight: 600, size: '12px' })};
    color: ${(props) => props.theme.color.GREY_2};
    verticala-align: middle;

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 600, size: '24px', lineHeight: '18px',
    })};
    }
`;

export {
    TopTagsList,
    BottomTagsList,
    Tag,
    GraphContainer,
    Description,
    LabelsWrapper,
    BulletContainer,
    LabelName,
};
