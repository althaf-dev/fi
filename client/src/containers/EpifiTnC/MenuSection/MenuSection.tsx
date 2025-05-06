import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Font } from '../../../components/Abstract';

import { Device } from '../../../Themes/Device';
import { TitleTextHolder } from '../../TnC/TnCStyled/TnCStyled';

const SectionContainerOne = styled.div`
    padding: 20px 20px 0px;

    @media ${Device.tab} {
        padding: 80px 0px 0px;
    }

    @media ${Device.desktop} {
        padding: 100px 0px 0px;
    }
`;

const FirstSectionContainer = styled(SectionContainerOne)`
    margin-top: -40px;

    @media ${Device.tab} {
        margin-top: -80px;
    }

    @media ${Device.desktop} {
        margin-top: -160px;
    }
`;

const MenuInfo = styled(Font)`
    margin-bottom: 60px;
    text-align: left;

    @media ${Device.tab} {
        margin-bottom: 80px;
    }

    @media ${Device.desktop} {
        margin-bottom: 100px;
    }
`;

interface MenuSectionProps {
    children?: ReactNode;
}

const MenuSection = (props: MenuSectionProps) => {
    const { children } = props;
    return (
        <>
            <FirstSectionContainer>
                <TitleTextHolder>
                    <span>
                        <MenuInfo font='p' tagType='text' color='SUVA_GREY'>
                            The T&Cs defines our relationship with you – as we can
                            only permit you to use our services if you agree to
                            follow these terms. The T&Cs also showcase the laws
                            that apply to our company, Epifi Technologies Private
                            Limited (or &apos;Fi&apos;).
                            <br />
                            For better clarity, these terms include the following
                            topic headings:
                        </MenuInfo>
                    </span>
                    {children}
                </TitleTextHolder>
            </FirstSectionContainer>
        </>
    );
};

MenuSection.defaultProps = { children: null };

export default MenuSection;
