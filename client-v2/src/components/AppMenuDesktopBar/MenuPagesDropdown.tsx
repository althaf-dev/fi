/* eslint-disable max-len */
/**
 * @file App Navbar Multiple Pages Dropdown Component
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from '@/utils/router';

import { Font } from '../Abstract';
import { Device } from '../../Themes/Device';

import filterUrlFromDynamicConfig from '../../utils/filterUrlFromDynamicConfig';

const Container = styled.div<{ visible: boolean }>`
  cursor: default;
  width: auto;

  @media ${Device.tab} {
    left: 50%;
    transform: translateX(-50%);
    margin-top: 14px;
    position: absolute;
    // need z-index 10 to show menu dropdown above the home page video
    z-index: 10;
    text-transform: none;
  }

  @media ${Device.desktop} {
    left: 35%;
    transform: translateX(-35%);
  }
`;

const Wrapper = styled.div<{ visible: boolean; isCards: boolean }>`
    @media ${Device.tab} {
        background-color: ${(props) => props.theme.color.WHITE};
        border-radius: 10px;
        display: ${(props) => (props.visible ? 'grid' : 'none')};
        padding: 14px 30px;
        text-align: left;

        grid-template-columns: ${(props) => (props.isCards ? 'repeat(2, 1fr)' : 'repeat(3, min-content)')}
        grid-template-rows: repeat(2, auto);
        grid-column-gap: 20px;
        grid-row-gap: 10px;
    }
`;

const MenuItemLink = styled.span`
  display: inline-block;
  padding: 12px 0;
  width: 100%;
  color: ${(props) => props.theme.color.STEEL};
`;

const StyledLink = styled(Link)<{ isCards: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  width: 100%;
  text-transform: uppercase;
  word-break: ${(props) => (props.isCards ? 'normal' : 'break-all')};

  &:hover {
    color: ${(props) => props.theme.color.FOREST_GREEN};
  }
`;

const StyledFont = styled(Font)`
  &:hover {
    color: ${(props) => props.theme.color.FOREST_GREEN};
  }
`;

const PagesContainer = styled.div`
  width: 210px;
`;

interface MenuPagesDropdownProps {
  visible: boolean;
  data: Array<any>;
  dynamicConfigInfo?: any;
  onClick: () => void;
  dataTestId?: string;
  isCards?: boolean;
}

const MenuPagesDropdown = (props: MenuPagesDropdownProps) => {
    const {
        visible, data, dynamicConfigInfo, onClick, dataTestId, isCards
    } = props;

    return (
        <Container visible={visible}>
            <Wrapper visible={visible} isCards={!!isCards}>
                {data.map((item) => (
                    <PagesContainer key={item.id}>
                        <Font font='labelVariantThree' tagType='text' color='CHARCOAL_GREY'>
                            {item.menuItems.length > 0 && item?.url ? (
                                <MenuItemLink>
                                    {item?.external ? (
                                        <a href={item?.url}>{item?.label}</a>
                                    ) : (
                                        <Link href={item?.url}>{item.label}</Link>
                                    )}
                                </MenuItemLink>
                            ) : (
                                <MenuItemLink>{item?.label}</MenuItemLink>
                            )}

                            {item.menuItems
                && item.menuItems
                    .filter(
                        (filteredItem: any) => !filterUrlFromDynamicConfig(
                            filteredItem.label,
                            dynamicConfigInfo
                        )
                    )
                    .map((featureItem: any) => (
                        <StyledFont
                            font='labelVariantThree'
                            tagType='text'
                            key={featureItem.id}
                            onClick={onClick}
                        >
                            <StyledLink
                                isCards={!!isCards}
                                href={featureItem.url}
                                data-test-id={dataTestId + featureItem.dataTestId}
                            >
                                {featureItem.label}
                            </StyledLink>
                        </StyledFont>
                    ))}
                        </Font>
                    </PagesContainer>
                ))}
            </Wrapper>
        </Container>
    );
};

MenuPagesDropdown.defaultProps = {
    dynamicConfigInfo: {},
    dataTestId: '',
    isCards: false,
};

export default MenuPagesDropdown;
