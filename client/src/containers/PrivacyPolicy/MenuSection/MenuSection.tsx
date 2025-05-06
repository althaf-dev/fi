import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import {
    TitleTextHolder,
    InfoThree,
} from '../PrivacyStyled/PrivacyStyled';

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
    margin-top: -20px;

    @media ${Device.tab} {
        margin-top: -60px;
    }

    @media ${Device.desktop} {
        margin-top: -160px;
    }
`;

interface MenuSectionProps {
    titleText?: string;
    children?: ReactNode;
}

const MenuSection = (props: MenuSectionProps) => {
    const { titleText, children } = props;
    return (
        <>
            <FirstSectionContainer>
                <TitleTextHolder>
                    <span>
                        <InfoThree font='p' tagType='text' color='SUVA_GREY'>
                            {titleText}
                        </InfoThree>
                    </span>
                    {children}
                </TitleTextHolder>
            </FirstSectionContainer>
            {/* <Bar /> */}
        </>
    );
};

MenuSection.defaultProps = {
    titleText: `We aim for the highest standards of safety, security and confidentiality
    when using your data, and this policy describes how we collect and use your information
    and discusses this in detail in the below mentioned sections:`,
    children: null,
};

export default MenuSection;
