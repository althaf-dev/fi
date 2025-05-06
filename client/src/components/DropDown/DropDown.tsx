import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import { ICONS_URL_MAP } from '../../constants/AssetConstants';

// base components
import { Font, Image } from '../Abstract';
import InputLabel from '../Input/InputLabel';
import StyledInput from '../Input/StyledInput';

const OptionInputHolder = styled.div<{ showOption: boolean }>`
    width: 100%;
    border-radius: 10px;
    position: relative;
    margin-bottom: 20px;

    & > input {
        border-bottom-left-radius: ${(props) => (props.showOption ? '0' : '10px')};
        border-bottom-right-radius: ${(props) => (props.showOption ? '0' : '10px')};
    }

    & > div {
        display: ${(props) => (props.showOption ? 'flex' : 'none')};
    }
`;

const OptionLabel = styled(InputLabel)<{ showOption: boolean, value: string }>`
    padding-left: 15px;
    top: ${(props) => props.showOption ? '30px' : '50%'};

    @media ${Device.tab} {
        top: ${(props) => props.showOption ? '45px' : '50%'};
    }
`;

// #doubt - is this the best way to hide cursor caret
const OptionInput = styled(StyledInput)`
    border-radius: 10px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    color: transparent;
    text-shadow: 0 0 0 ${(props) => props.theme.color.CHARCOAL_GREY};
    padding: 12px 35px 12px 15px;

    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    :focus {
        outline: none;
    }
`;

const OptionTag = styled(Font)`
    display: inline-block;
    margin: 15px 15px 0 15px;
    width: 100%;
    white-space: nowrap;
    cursor: pointer;
    :hover {
        color: ${(props) => props.theme.color.FOREST_GREEN};
    }
`;

const OptionValue = styled.span`
    cursor: pointer;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    :hover {
        color: ${(props) => props.theme.color.FOREST_GREEN};
    }
`;

const OptionHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14);
    border-top: 1px solid ${(props) => props.theme.color.GAINSBORO};
    background-color: ${(props) => props.theme.color.WHITE};
    /* New Style */
    position: absolute;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-bottom: 20px;
    overflow-y: auto;
    max-height: 155px;
    /* New Style End */

    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }

    @media ${Device.tab} {
        max-height: 200px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    z-index: 2;
`;

const ImageHolder = styled.span<{ showOption: boolean }>`
    cursor: pointer;
    display: block !important;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 45%;
    // 100% (container width) - 16px (image width) - 15px (right padding)
    left: calc(100% - 31px); 
    transform: ${(props) => (props.showOption ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

type CompanyNameInputProps = React.HTMLAttributes<HTMLElement> & {
    onSelected?: (isSelected: boolean, companyName: string) => void;
    isDisabled?: boolean;
    options: Array<string>;
    onEnterClick?: () => void;
    defaultValue: string;
    trackingData?: any;
    autoFocus?: boolean;
    hideButton: (value: boolean) => void;
    testId?: string;
};


const DropDown = (props: CompanyNameInputProps) => {
    const [showOption, setShowOption] = useState(false);
    const [selectedValue, setSelectedValue] = useState(props.defaultValue || '');

    // when a particular option is clicked
    const onOptionSelect = (value: string) => {
        setShowOption(false);
        setSelectedValue(value);
        props.onSelected(true, value);
    };

    // show / hide option event
    useEffect(() => {
        if (showOption) {
            props.hideButton(true);
            return;
        }
        props.hideButton(false);
    }, [showOption]);

    // toggle show / hide options
    const onOptionToggle = () => {
        if (props.isDisabled) return;
        setShowOption(!showOption);
    };

    return (
        <Wrapper>
            <OptionInputHolder showOption={props.options.length && showOption}>
                <OptionInput
                    font='input'
                    tagType='input'
                    autoFocus={props.autoFocus}
                    placeholder=' '
                    disabled={props.isDisabled}
                    value={selectedValue}
                    title={selectedValue}
                    onChange={() => null}
                    // onBlur={() => setTimeout(() => setShowOption(false), 100)}
                    id={props.testId}
                    onClick={onOptionToggle}
                />

                <OptionLabel showOption={showOption} value={selectedValue} font='label' tagType='label' color='GREY_3'>
                    What do you do?
                </OptionLabel>

                <ImageHolder
                    className={props.isDisabled ? 'opacity-initial' : 'opacity-final'}
                    showOption={showOption}
                    onClick={onOptionToggle}
                >
                    <Image icon={ICONS_URL_MAP.BOTTOM_ARROW} alt='image' />
                </ImageHolder>

                { showOption && (
                    <OptionHolder>
                        {props.options.map((value, index) => (
                            <OptionTag
                                key={index}
                                font='options'
                                tagType='text'
                                color='CHARCOAL_GREY'
                                onClick={() => onOptionSelect(value)}
                            >
                                <OptionValue title={value}>
                                    {value}
                                </OptionValue>
                            </OptionTag>
                        ))}
                    </OptionHolder>
                )}
            </OptionInputHolder>
        </Wrapper>
    );
};

DropDown.defaultProps = {
    onSelected: () => {},
    isDisabled: false,
};

export default DropDown;
