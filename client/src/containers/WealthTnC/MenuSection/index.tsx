import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Device, MAX_WIDTH_MEDIA_SCREENS } from '../../../Themes/Device';

import { DescriptionContainer, DescriptionContent } from '../styled';

const MenuSectionContainer = styled.div`
    margin-top: -40px;
    padding: 40px 0px 0px;

    @media ${Device.tab} {
        margin-top: -40px;
    }

    @media ${Device.desktop} {
        margin-top: -140px;
        padding: 80px 0 60px;
    }
`;

const MenuDescription = styled(DescriptionContent)`
    margin-bottom: 15px;
    padding: 0px 20px;

    @media (min-width: 400px) and ${MAX_WIDTH_MEDIA_SCREENS.phone} {
        padding: 0px 40px;
    }

    @media ${Device.tab} {
        margin-bottom: 50px;
        padding: 0px;
    }

    @media ${Device.desktop} {
        margin-bottom: 40px;
    }
`;

interface MenuSectionProps {
    children?: ReactNode;
}

const MenuSection = (props: MenuSectionProps) => {
    const { children } = props;

    return (
        <MenuSectionContainer>
            <DescriptionContainer>
                <MenuDescription font='p' tagType='text' color='SUVA_GREY'>
                    The T&Cs define our relationship with you – as we can only permit you to use our services if
                    you agree to follow these terms. The T&Cs also showcase the laws that apply to our company,
                    Epifi Wealth Private Limited (or Wealth).
                    <br />
                    <br />
                    For better clarity, these terms include the following topic headings:
                </MenuDescription>
            </DescriptionContainer>
            {children}
        </MenuSectionContainer>
    );
};

MenuSection.defaultProps = {
    children: null,
};

export default MenuSection;
