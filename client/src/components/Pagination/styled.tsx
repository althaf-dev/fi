/**
 * @file Pagination Stlyed
 */
import styled from 'styled-components';

import MIXINS from '../../Themes/mixins';

const PaginationContainer = styled.div`
    ${MIXINS.FlexMixin({})};
    margin-top: 20px;
`;

const PaginationButton = styled.button`
    ${MIXINS.FontMixin({ font: 'Inter' })};
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.color.SUVA_GREY};
    cursor: pointer;
    margin: 0px 20px;
    transition: color 0.3s;

    &:disabled {
        color: ${(props) => props.theme.color.SUVA_GREY};
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        color: ${(props) => props.theme.color.FOREST_GREEN};
    }
`;

export {
    PaginationContainer,
    PaginationButton,
};
