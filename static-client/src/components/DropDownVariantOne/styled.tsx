import styled from 'styled-components';

import { Device } from '../../Themes/Device';

const Wrapper = styled.span`
    position: relative;
`;

const LabelContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.span`
    @media ${Device.tab} {
        max-width: 250px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    @media ${Device.desktop} {
        max-width: 160px;
    }
`;

const CheckIconHolder = styled.div`
    width: 24px;
    height: 24px;
    margin-left: 15px;
`;

const ImageHolder = styled.div`
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-left: 10px;

    @media ${Device.tab} {
        margin-left: 8px;
    }
`;

const DropDownListContainer = styled.div<{ hasDropDownWithSearch: boolean }>`
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.45px;
    max-height: ${(props) => (!props.hasDropDownWithSearch ? `${218}px` : 'auto')};
    overflow-y: auto;
    z-index: 1;

    @media ${Device.tab} {
        background-color: ${(props) => props.theme.color.WHITE};
        box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.15), 0px 19px 30px rgba(0, 0, 0, 0.1), 0px 7px 30px rgba(0, 0, 0, 0.08);
        border-radius: 8px;
        font-size: 24px;
        line-height: 29px;
        max-height: ${(props) => (!props.hasDropDownWithSearch ? `${180}px` : 'auto')};
        max-width: 320px;
        top: 0px;
        right: 0px;
        position: absolute;
    }
`;

const DropDownItem = styled.div<{ selectedListValue: boolean, hasMobileDesignV1?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    cursor: pointer;
    background-color: ${(props) => (props.selectedListValue ? props.theme.color.CHALK_GREY : null)};
    border-radius: ${(props) => (props.hasMobileDesignV1 ? '19px' : 'unset')};

    @media ${Device.tab} {
        padding: 12px 30px;
        boder-radius: unset;
    }

    &:hover {
        background-color: ${(props) => props.theme.color.CHALK_GREY};
    }
`;

const SearchInputWrapper = styled.div`
    padding: 16px 20px 8px;

    @media ${Device.tab} {
        padding: 20px 30px 8px;
    }
`;

const SearchInputSection = styled.div`
    position: relative; // required for scroll to selected element in dropdown list to work
    max-height: 218px;
    overflow-y: auto;

    @media ${Device.tab} {
        max-height: 336px;
    }
`;

const SearchInput = styled.input`
    border: none;
    background-color: ${(props) => props.theme.color.CHALK_GREY};
    border-radius: 15px;
    caret-color: ${(props) => props.theme.color.DARK_GREEN};
    cursor: pointer;
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.45px;
    width: 100%;
    outline: none;
    padding: 12px;
    text-transform: capitalize;

    ::placeholder {
        color: ${(props) => props.theme.color.SILVER_2};
    }

    @media ${Device.tab} {
        background-color: ${(props) => props.theme.color.WHITE};
        border-radius: 8px;
        border: 1px solid ${(props) => props.theme.color.GAINSBORO};
        font-size: 24px;
        line-height: 29px;
        width: 270px;
    }
`;

export {
    Wrapper, ImageHolder, CheckIconHolder, DropDownListContainer, DropDownItem, SearchInputWrapper,
    SearchInputSection, SearchInput, LabelContainer, Label,
};
