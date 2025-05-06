/**
 * @file Breadcrumbs Styled
 */
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import MIXINS from '../../Themes/mixins';

const Container = styled.div`
    max-width: 767px;
    margin: 0px auto 12px;

    @media ${Device.tab} {
        max-width: 728px;
    }

    @media ${Device.desktop} {
        max-width: unset;
        margin-bottom: 20px;
    }
`;

const Section = styled.div`
    ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 700, size: '12px', lineHeight: '110%',
    })};
    color: ${(props) => props.theme.color.STEEL};
    letter-spacing: 0.45px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
    max-width: 250px;

    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 700, size: '14px', lineHeight: '110%',
    })};
        max-width: 358px;
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        font: 'Gilroy', weight: 700, size: '16px', lineHeight: '110%',
    })};
        overflow: unset;
    }
`;

const Label = styled.a`
    cursor: pointer;
    vertical-align: middle;
`;

const IconHolder = styled.span`
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0px 2px;
    vertical-align: middle;

    @media ${Device.desktop} {
        width: 16px;
        height: 16px;
    }
`;

export {
    Container, Section, Label, IconHolder,
};
