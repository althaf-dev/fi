/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div<{ internalId : string}>`    
    .title {
        margin-left: 25px;
        margin-bottom: 7px;
    }

    .dropdown {
        width: 100%;
        background-color: white;
        font-family: 'Lato', sans-serif;
        border-radius: 14px;
        position: relative;
        cursor: pointer;
        
        @include breakpoint(tablet) {
            width: 600px;
        }
        
        &__switch:checked + &__options-filter &__select {
            transform: scaleY(1);
        }
        
        &__switch:checked + &__options-filter &__filter:after {
            transform: rotate(-45deg);
        }
        
        &__options-filter {
        width: 100%;
        cursor: pointer;
      }
    
      &__filter {
        position: relative;
        display: flex;
        padding: 9px;
        color: #595959;
        background-color: #fff;
        border-radius: 30px;
        font-size: 14px;
        text-transform: uppercase;
            transition: .3s;
    
        &-selected {
          list-style: none;
          padding: 10px 20px 10px 10px;
        
    
          .placeholder {
            font-family: Gilroy;
            font-size: 14px;
            font-weight: 600;
            line-height: 14px;
            letter-spacing: 0.44999998807907104px;
            text-align: left;
            color: #878A8D;
          }
    
          .value {
            text-transform: none;
          }
    
        }
            
            &:focus {
                // border: 1px solid #918FF4;
                outline: none;
                // box-shadow: 0 0 5px 3px #918FF4;
            }
    
        &::after {
          position: absolute;
          top: 45%;
          right: 20px;
          content: '';
          width: 10px;
          height: 10px;
          border-right: 2px solid #595959;
          border-bottom: 2px solid #595959;
          transform: rotate(45deg) translateX(-45%);
          transition: .2s ease-in-out;
        }
    
      }
    
      &__select {    
        &-wrapper {
          width: 100%;
          background: #F7F9FC;
          z-index: 20;
          position: absolute;
          margin-top: -6px;
          list-style: none;
          box-sizing: border-box;
          max-height: 150px;
          transform: scaleY(0);
          border-bottom: 1px solid #00000014;
          border-bottom-left-radius: 25px;
          border-bottom-right-radius: 25px;
          overflow-y: auto;
          will-change: transform;
        }
      }
      
    
        &__select-option {
        padding: 8px 0px 4px 0px;
        background: inherit;
        border-bottom: 1px solid #fef6f6;
        transition: .3s;
        margin-left: 20px;
        list-style: none;
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #878A8D;
    
    
        &:last-of-type {
              border-bottom: 0;
        }
    
        &:hover {
          background-color: #f9f9f9;
        }
        }
    }
`;

function Dropdown(props: any) {
    const {
        options, internalId, onChange, placeholder
    } = props;

    const switchComponent = useRef<any>(null);
    const optionsWrapperRef = useRef<any>(null);
    const [selectedOption, setOption] = useState<string | null>(placeholder || 'select');

    function handleDropDown(event: any) {
        event.stopImmediatePropagation();
        const toggle = document.querySelector('.dropdown__switch') as HTMLInputElement;
        if (toggle.checked) {
            toggle.checked = false;
            optionsWrapperRef.current.style.transform = 'scaleY(0)';
        } else {
            toggle.checked = true;
            optionsWrapperRef.current.style.transform = 'scaleY(1)';
        }
    }

    const handleSelection = (event: any) => {
        setOption(event.target.innerText);
        onChange(event.target.innerText);
    };

    useEffect(() => {
        const label = document.querySelector(`.dropdown__filter-selected.css-${internalId}`);
        const optionElementList = optionsWrapperRef.current.childNodes[0].childNodes;

        optionElementList.forEach((option: any) => {
            option.addEventListener('click', () => {
                if (label) label.textContent = option.textContent;
                const toggle = document.querySelector('.dropdown__switch') as HTMLInputElement;
                toggle.checked = false;
                optionsWrapperRef.current.style.transform = 'scaleY(0)';
            });
        });

        if (switchComponent.current) {
            switchComponent.current?.addEventListener('click', handleDropDown);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleOnBlur(event: any, id: string| null) {
        if (!event.relatedTarget || (event.relatedTarget && event?.relatedTarget?.id !== `dropdown-${id}`)) {
            const toggle = document.querySelector('.dropdown__switch') as HTMLInputElement;
            if (toggle.checked) {
                toggle.checked = false;
                optionsWrapperRef.current.style.transform = 'scaleY(0)';
            }
        }
    }

    return (
        <>
            <DropdownWrapper internalId={internalId}>
                <div
                    className='dropdown'
                    onBlur={(event: any) => {
                        event.stopPropagation();
                        handleOnBlur(event, internalId);
                    }} tabIndex={0}
                    id={`dropdown-${internalId}`}
                >
                    <input type='checkbox' className='dropdown__switch' id='filter-switch' hidden />
                    <div
                        className={`dropdown__options-filter css-${internalId}`}
                    >
                        <div
                            className={`dropdown__filter css-${internalId}`}
                            ref={switchComponent}
                            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                            tabIndex={0}
                        >
                            <div
                                className={`dropdown__filter-selected css-${internalId}`}
                            >
                                <div className='value'>{selectedOption}</div>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown__select-wrapper' ref={optionsWrapperRef}>
                        <ul className='dropdown__select'>
                            {
                                options.map((item: any, index: number) => (
                                    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                                    <li className={`dropdown__select-option option-${internalId}${index}`} value={item} role='option' onClick={handleSelection} onKeyDown={() => {}}>
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </DropdownWrapper>
        </>
    );
}

export default Dropdown;
