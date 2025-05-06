import React, { useState, useEffect, useRef, memo } from 'react';

import { WINDOW_SIZE } from '../../Themes/Device';
import { useWindowDimensions, useClickOutside } from '../../hooks';
import { ICONS_URL_MAP } from '../../constants/AssetConstants';

import { Image } from '../Abstract';
import { StyledContainer } from '../styled';

import {
    Wrapper,
    LabelContainer,
    Label,
    ImageHolder,
    DropDownListContainer,
    DropDownItem,
    SearchInputWrapper,
    SearchInputSection,
    SearchInput,
    CheckIconHolder,
} from './styled';

export interface IDropDown {
    label: string;
    value: number;
    id: number;
}

interface DropDownProps {
    value: IDropDown;
    options: Array<IDropDown>;
    setNewInputValue: (newValue) => void;
    setOutputValue: (newValue) => void;
    setIsModalOpen: (value: boolean) => void;
    isModalOpen: boolean;
    hasDropDownWithSearch?: boolean;
    hasMobileDesignV1?: boolean;
}

const DropDown = (props: DropDownProps) => {
    const {
        value, options, setNewInputValue, setOutputValue, hasDropDownWithSearch, setIsModalOpen, isModalOpen,
        hasMobileDesignV1,
    } = props;

    const { width } = useWindowDimensions();

    const [showDropDown, setShowDropDown] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const dropdownRef = useRef(null);
    const inputSearchRef = useRef(null);
    const selectedItemRef = useRef(null);

    const onDropDownValueChange = (newValue) => () => {
        setNewInputValue(newValue);
        setOutputValue(newValue);
        setShowDropDown(false);
        setIsModalOpen(false);
    };

    const onInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
    };

    /**
     * Scroll to the current selected item in the dropdown
     * Need to wrap in set timeout for the scroll to work
     * https://stackoverflow.com/a/11041376
     */
    const scrollToSelectedElement = () => {
        setTimeout(() => {
            if (selectedItemRef.current) {
                // 54px is the height of 1 item in the dropdown list
                const heightOfOneItem = 54;
                let numberOfItemsAboveSelectedItem = 3;

                if (width < WINDOW_SIZE.TAB) numberOfItemsAboveSelectedItem = 2;

                const centerOffsetHeight = heightOfOneItem * numberOfItemsAboveSelectedItem;
                selectedItemRef.current.parentNode.scrollTop = selectedItemRef.current.offsetTop - (centerOffsetHeight);
            }
        }, 0);
    };

    const setShowDropdownValue = () => {
        setShowDropDown(true);
        scrollToSelectedElement();
    };

    // show the results base on the input search
    const getFilterValue = (dropdownList) => {
        const searchItems = dropdownList.filter((dropdownItem) => {
            if (searchQuery === '') {
                return true;
            }

            if (dropdownItem.label.toLowerCase().includes(searchQuery.toLowerCase())) {
                return true;
            }

            return false;
        });
        return searchItems;
    };

    const getDropdownList = (data) => {
        const isSelectedItem = value.id === data.id;

        return (
            <DropDownItem
                key={data.id}
                selectedListValue={isSelectedItem}
                hasMobileDesignV1={hasMobileDesignV1}
                ref={isSelectedItem ? selectedItemRef : null}
                onClick={onDropDownValueChange(data)}
            >
                {data.label}
                {isSelectedItem ? (
                    <CheckIconHolder>
                        <Image icon={ICONS_URL_MAP.CHECK} alt='checkIcon' loadingType='lazy' />
                    </CheckIconHolder>
                ) : null}
            </DropDownItem>
        );
    };

    const dropdownListSection = () => (
        options?.map((data) => getDropdownList(data))
    );

    const dropDownSearchSection = () => (
        <>
            <SearchInputWrapper>
                <SearchInput ref={inputSearchRef} placeholder='search' onChange={onInputChange} />
            </SearchInputWrapper>
            <SearchInputSection>
                {getFilterValue(options)?.map((data) => getDropdownList(data))}
            </SearchInputSection>
        </>
    );

    // close the dropdown when click outside
    useClickOutside(dropdownRef, () => {
        setShowDropDown(false);
    }, 'click');

    useEffect(() => {
        if (!showDropDown) {
            setSearchQuery('');
        }
    }, [showDropDown]);

    // apply focus on input search
    useEffect(() => {
        inputSearchRef?.current?.focus();
    }, [showDropDown]);

    /**
     * For mobile view, when the modal opens for dropdown we want to show the current selected element
     * To get the event when modal is opened and closed we are using useEffect and when the modal is open we scroll to the selected element
     */
    useEffect(() => {
        if (width < WINDOW_SIZE.TAB && isModalOpen) {
            scrollToSelectedElement();
        }
    }, [isModalOpen]);

    return (
        width < WINDOW_SIZE.TAB ? (
            <DropDownListContainer hasDropDownWithSearch={hasDropDownWithSearch}>
                {hasDropDownWithSearch ? (
                    dropDownSearchSection()
                ) : dropdownListSection()}
            </DropDownListContainer>
        ) : (
            <Wrapper ref={dropdownRef}>
                <StyledContainer onClick={setShowDropdownValue}>
                    <LabelContainer>
                        <Label>{value.label}</Label>
                        <ImageHolder>
                            <Image icon={ICONS_URL_MAP.DROPDOWN_BOTTOM_ARROW} alt='bottom-arrow' loadingType='lazy' />
                        </ImageHolder>
                    </LabelContainer>
                </StyledContainer>
                {showDropDown
                    ? (
                        <DropDownListContainer hasDropDownWithSearch={hasDropDownWithSearch}>
                            {hasDropDownWithSearch ? (
                                dropDownSearchSection()
                            ) : dropdownListSection()}
                        </DropDownListContainer>
                    ) : null}
            </Wrapper>
        )
    );
};

DropDown.defaultProps = {
    hasDropDownWithSearch: false,
    hasMobileDesignV1: false,
};

export default memo(DropDown);
