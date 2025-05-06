import React, { Children, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Font } from '../../../components';
import { useWindowDimensions } from '../../../hooks';
import { Device, WINDOW_SIZE } from '../../../Themes/Device';

const FixHeader = styled.div<{ isFixed?: boolean }>`
    background-color: ${(props) => props.theme.color.WHITE};
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.2));
    top: 60px;
    position: fixed;
    width: 100%;
    z-index: 1;
    transition: all 0.3s ease;
    transform: ${(props) =>
        props.isFixed ? 'translateY(0)' : 'translateY(calc(-100% - 60px))'};

    @media ${Device.tab} {
        top: 74px;
        transform: ${(props) =>
            props.isFixed ? 'translateY(0)' : 'translateY(calc(-100% - 74px))'};
    }

    @media ${Device.desktop} {
        top: 101px;
        transform: ${(props) =>
            props.isFixed
                ? 'translateY(0)'
                : 'translateY(calc(-100% - 101px))'};
    }
`;

const FolderHolder = styled(Font)`
    display: flex;
    overflow-x: auto;
    margin: auto;
    width: fit-content;
    max-width: 100%;
`;

interface StickyMenuProps {
    children: ReactNode;
}

const StickyMenu = (props: StickyMenuProps) => {
    const [sticky, setSticky] = useState({ isFixed: false, prevOffset: 0 });
    const { width } = useWindowDimensions();

    const headerFixer = () => {
        const pageOffset = window.pageYOffset;

        if (width <= WINDOW_SIZE.DESKTOP) {
            if (pageOffset < sticky.prevOffset && pageOffset >= 180) {
                setSticky({ isFixed: true, prevOffset: pageOffset });
            } else {
                setSticky({ isFixed: false, prevOffset: pageOffset });
            }
        } else {
            if (pageOffset < sticky.prevOffset && pageOffset >= 280) {
                setSticky({ isFixed: true, prevOffset: pageOffset });
            } else {
                setSticky({ isFixed: false, prevOffset: pageOffset });
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', headerFixer);
        return () => window.removeEventListener('scroll', headerFixer);
    }, [sticky]);

    return (
        <FixHeader isFixed={sticky.isFixed}>
            <FolderHolder font='button' tagType='text' color='DIM_GRAY'>
                {props.children}
            </FolderHolder>
        </FixHeader>
    );
};

export default StickyMenu;
