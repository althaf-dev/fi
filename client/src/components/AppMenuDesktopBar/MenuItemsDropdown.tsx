/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Font } from '../Abstract';
import { Device } from '../../Themes/Device';

import filterUrlFromDynamicConfig from '../../utils/filterUrlFromDynamicConfig';

const Container = styled.div<{visible: boolean}>`
    @media ${Device.tab} {
        left: 16px;
        min-width: max-content;
        margin-top: 14px;
        position: absolute;
        // need z-index 10 to show menu dropdown above the home page video
        z-index: 10;
    }
`;

const Wrapper = styled.div<{visible: boolean}>`
    @media ${Device.tab} {
        background-color: ${(props) => props.theme.color.WHITE};
        border-radius: 10px;
        display: ${(props) => (props.visible ? 'block' : 'none')};
        padding: 14px 30px;
        text-align: left;
    }
`;

const MenuItemLink = styled(Link)`
    display: inline-block;
    padding: 12px 0;
    width: 100%;

    &:hover {
        color: ${(props) => props.theme.color.FOREST_GREEN};
    }
`;

const StyledLink = styled.span`
    display: inline-block;
    padding: 12px 0;
    width: 100%;

    &:hover {
        color: ${(props) => props.theme.color.FOREST_GREEN};
    }
`;

interface MenuItemsDropdownProps {
    visible: boolean;
    data: Array<any>;
    dynamicConfigInfo: any;
    onClick: () => void;
    dataTestId?: string,
}

const MenuItemsDropdown = (props: MenuItemsDropdownProps) => {
    const {
        onClick, visible, data, dynamicConfigInfo, dataTestId,
    } = props;

    return (
        <Container visible={visible}>
            <Wrapper visible={visible}>
                {
                    data.filter((filteredItem) => !filterUrlFromDynamicConfig(filteredItem.label, dynamicConfigInfo)).map((item) => (
                        <Font font='labelVariantThree' tagType='h3' color='CHARCOAL_GREY' key={item.id} onClick={onClick}>
                            {item.external ? (
                                <StyledLink data-test-id={dataTestId + item.dataTestId}>
                                    <a href={item.url}>
                                        {item.label}
                                    </a>
                                </StyledLink>
                            ) : (
                                <MenuItemLink to={item.url} data-test-id={dataTestId + item.dataTestId}>
                                    {item.label}
                                </MenuItemLink>
                            )}
                        </Font>
                    ))
                }
            </Wrapper>
        </Container>
    );
};

MenuItemsDropdown.defaultProps = {
    dataTestId: '',
};

export default MenuItemsDropdown;
