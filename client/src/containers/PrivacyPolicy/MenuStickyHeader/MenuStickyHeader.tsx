import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Font, Image } from '../../../components';
import { ICONS_URL_MAP } from '../../../constants/AssetConstants';

import { TitleTextHolder } from '../PrivacyStyled/PrivacyStyled';

const FixHeader = styled.div<{ isFixed?: boolean }>`
    background-color: ${(props) => props.theme.color.WHITE};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    top: 101px;
    z-index: 1;

    transition: all 0.3s ease;

    transform: ${(props: any) =>
        props.isFixed ? 'translateY(0)' : 'translateY(calc(-100% - 101px))'};
`;

const ActionHolder = styled.div<{ isOpen: boolean }>`
    padding: 56px 80px 80px 80px;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    & > * {
        visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
    }
`;

const ActionButton = styled.div`
    padding: 24px;
    margin: auto;
    text-align: center;
`;

const TextHolder = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ImageHolder = styled.div<{ isOpen: boolean }>`
    width: 16px;
    height: 16px;
    transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

interface MenuStickyHeaderProps {
    titleText?: string;
    children: ReactNode;
}
const MenuStickyHeader = (props: MenuStickyHeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState({ isFixed: false, prevOffset: 0 });

    const headerFixer = () => {
        if (isOpen) {
            setIsOpen(false);
        }

        const pageOffset = window.pageYOffset;

        if (pageOffset < sticky.prevOffset) {
            if (pageOffset === 0) {
                setSticky({ isFixed: false, prevOffset: pageOffset });
            } else {
                setSticky({ isFixed: true, prevOffset: pageOffset });
            }
        } else {
            setSticky({ isFixed: false, prevOffset: pageOffset });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', headerFixer);
        return () => window.removeEventListener('scroll', headerFixer);
    }, [sticky]);

    const onMenuToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <FixHeader isFixed={sticky.isFixed}>
            <ActionButton>
                <TextHolder>
                    <Font
                        tagType='span'
                        font='button'
                        color='FOREST_GREEN'
                        onClick={onMenuToggle}
                    >
                        {props.titleText}&nbsp;
                    </Font>
                    <ImageHolder 
                        isOpen={isOpen}
                        onClick={onMenuToggle}
                    >
                        <Image icon={ICONS_URL_MAP.BOTTOM_ARROW} alt='arrow icon' />
                    </ImageHolder>
                </TextHolder>
            </ActionButton>

            <ActionHolder isOpen={isOpen}>
                <TitleTextHolder>{props.children}</TitleTextHolder>
            </ActionHolder>
        </FixHeader>
    );
};

MenuStickyHeader.defaultProps = {
    titleText: 'PRIVACY POLICY • CONTENT',
};

export default MenuStickyHeader;
