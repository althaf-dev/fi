/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/**
 * @file Hamburger Navbar Accordion Component
 */

/* eslint-disable no-nested-ternary */

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Device } from '@/Themes/Device';
import { ICONS_URL_MAP } from '@/constants/AssetConstants';

import { Image } from '../../Abstract';

import filterUrlFromDynamicConfig from '@/utils/filterUrlFromDynamicConfig';

const Wrapper = styled.div`
    width: 100%;
    text-align: left;

    @media ${Device.tab} {
        display: none;
    }
`;

const Container = styled.div`
    border-bottom: 2px solid ${(props) => props.theme.color.LIGHTER_GREY};
    padding: 20px 0;
`;

const NavLinkTitleHolder = styled.span`
    cursor: pointer;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
`;

const ArrowImageHolder = styled.span<{ isInternal?: boolean }>`
    display: ${(props) => (props.isInternal ? 'none' : 'inline-block')};
    vertical-align: middle;
    margin: 0 6px;
`;

const NavLinkTitle = styled.span<{ showAnswer: boolean; isFooter?: boolean }>`
    display: block;
    font-family: Gilroy, sans-serif;
    font-style: normal;
    font-weight: ${(props) => (props.isFooter ? '600' : '700')};
    font-size: ${(props) => (props.isFooter ? '16px' : '24px')};
    line-height: 120%;
    color: ${(props) => (props.isFooter ? props.theme.color.STEEL : props.theme.color.WHITE)};
`;

const NavLinkContents = styled.div<{
    showAnswer?: boolean;
    isFooter?: boolean;
}>`
    color: ${(props) => props.theme.color.WHITE};
    display: ${(props) => (props.showAnswer ? 'flex' : 'none')};
    flex-direction: column;
    font-family: Gilroy, sans-serif;
    font-size: ${(props) => (props.isFooter ? '16px' : '22px')};
    font-weight: 400;
    line-height: 140%;
    margin-top: 4px;
`;

const NavLinkSubHeadings = styled(Link)<{ isFooter?: boolean }>`
    font-family: Gilroy, sans-serif;
    text-transform: ${(props) => (props.isFooter ? 'uppercase' : 'capitalize')};
    font-weight: ${(props) => (props.isFooter ? '700' : '500')};
    display: inline-block;
`;

const SubHeading = styled.h3<{ isSubHeading?: boolean; isFooter?: boolean }>`
    color: ${(props) => (props.isSubHeading
        ? props.theme.color.GREY_2
        : props.theme.color.WHITE)};
    font-weight: ${(props) => (props.isSubHeading ? '600' : props.isFooter ? '700' : '500')};
    font-size: ${(props) => (props.isSubHeading ? '14px' : props.isFooter ? '16px' : '22px')};
    text-transform: ${(props) => (props.isFooter ? 'uppercase' : 'capitalize')};
    line-height: 16px;
    padding: ${(props) => (props.isFooter ? '4px 0' : '16px 0 8px')};
`;

const SubheadingComponent = (props: any) => {
    const { navItem, isFooter, onClick } = props;

    return navItem.external ? (
        <SubHeading key={navItem.id} isFooter={isFooter}>
            <a href={navItem.url}>{navItem.label}</a>
        </SubHeading>
    ) : (
        <SubHeading
            isSubHeading={navItem.menuItems}
            isFooter={isFooter}
        >
            {/*
         TODO:
         */}
            <Link href={navItem.url} onClick={onClick}>
                {navItem.label}
            </Link>
        </SubHeading>
    );
};

interface AppPhoneAccordionProps {
    index: number;
    data: any;
    activeIndex?: number;
    setActiveIndex: (value: number) => void;
    isFooter: boolean;
    onClick?: () => void;
    dynamicConfigInfo: any;
}

const HeaderAccordion = (props: AppPhoneAccordionProps) => {
    const {
        index, data, activeIndex, setActiveIndex, isFooter, onClick, dynamicConfigInfo,
    } = props;

    const onClickedTitle = (currentIndex: any) => () => {
        setActiveIndex(activeIndex === currentIndex ? -1 : currentIndex);
    };

    let linkElement;

    if (data.external) {
        linkElement = <a href={data.url}>{data.label}</a>;
    } else {
        // TODO
        linkElement = <Link href={data.url}>{data.label}</Link>;
    }

    return (
        <Wrapper key={data.label}>
            <Container>
                <NavLinkTitleHolder onClick={onClickedTitle(index)}>
                    <NavLinkTitle
                        showAnswer={activeIndex === index}
                        isFooter={isFooter}
                    >
                        {data.url ? linkElement : <>{data.label}</>}
                    </NavLinkTitle>

                    <ArrowImageHolder isInternal={data.url}>
                        <Image
                            icon={activeIndex === index ? ICONS_URL_MAP.WHITE_UP_ARROW : ICONS_URL_MAP.WHITE_DOWN_ARROW}
                            loadingType='lazy'
                            alt='arrow icon'
                            height='24px'
                            width='24px'
                        />
                    </ArrowImageHolder>
                </NavLinkTitleHolder>

                {data.menuItems?.map((navItem: any) => (
                    <NavLinkContents
                        key={navItem.label}
                        showAnswer={activeIndex === index}
                        isFooter={isFooter}
                    >
                        {navItem.menuItems ? (
                            (navItem.menuItems.length > 0)
                            && (
                                <SubHeading
                                    isSubHeading={navItem.menuItems}
                                    isFooter={isFooter}
                                >
                                    {navItem.label}
                                </SubHeading>
                            )
                        ) : (
                            <SubheadingComponent navItem={navItem} isFooter={isFooter} onClick={onClick} />
                        )}
                        {
                            navItem.menuItems?.filter((item: any) => !filterUrlFromDynamicConfig(item.label, dynamicConfigInfo)).map((navSubItem: any) => (
                                <NavLinkSubHeadings
                                    key={navSubItem.label}
                                    href={navSubItem.url}
                                    isFooter={isFooter}
                                    onClick={onClick}
                                >
                                    {navSubItem.label}
                                </NavLinkSubHeadings>
                            ))
                        }
                    </NavLinkContents>
                ))}
            </Container>
        </Wrapper>
    );
};

export default HeaderAccordion;
