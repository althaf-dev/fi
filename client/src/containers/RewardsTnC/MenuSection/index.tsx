import React, { useState } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { ColoredSpan } from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';
import {
    Bar,
    InfoOne,
    SectionContainer,
    TitleTextHolder,
    WidthHolder,
} from '../../TnC/TnCStyled/TnCStyled';
import { TitleTextArray } from '../Constants';

const FirstSectionContainer = styled(SectionContainer)`
    margin-top: -40px;

    @media ${Device.tab} {
        margin-top: -80px;
    }

    @media ${Device.desktop} {
        margin-top: -160px;
    }
`;

const MenuInfo = styled(InfoOne)`
    cursor: default;
    margin-bottom: 15px;

    @media ${Device.tab} {
        margin-bottom: 50px;
    }

    @media ${Device.desktop} {
        margin-bottom: 40px;
    }
`;

interface MenuSectionProps {
    onTitleClick?: (index: number) => void;
}

const MenuSection = (props: MenuSectionProps) => {
    const [activeState, setActiveState] = useState(0);

    const onMenuClick = (index: number) => {
        setActiveState(index);
        if (props.onTitleClick) {
            props.onTitleClick(index);
        }
    };

    return (
        <>
            <FirstSectionContainer>
                <WidthHolder>
                    <MenuInfo font='p' tagType='text' color='SUVA_GREY'>
                        Yes, we have a cool rewards programme. But, it comes
                        with specific stipulations. Including our right to
                        discontinue offers when we choose to, stopping any user
                        from using our Rewards to engage in fraudulent actions,
                        and so on. We urge you to keep on reading, as this
                        policy applies to all the users of the Fi app or
                        Platform. Here's a one-liner description:
                        <br />
                        <br />
                        To participate (and win) in our rewards programme, you
                        must agree to our reward-specific and general
                        <a href='/T&C' target='_blank'>
                            <ColoredSpan color='FOREST_GREEN'>
                                &nbsp;T&Cs.
                            </ColoredSpan>
                        </a>
                    </MenuInfo>
                </WidthHolder>

                <TitleTextHolder>
                    {TitleTextArray.map((value: string, index: number) => (
                        <InfoOne
                            key={index}
                            font='h2VariantOne'
                            tagType='text'
                            color={
                                activeState === index
                                    ? 'MINE_SHAFT'
                                    : 'FOREST_GREEN'
                            }
                            onClick={() => onMenuClick(index)}
                        >
                            {value}
                        </InfoOne>
                    ))}
                </TitleTextHolder>
            </FirstSectionContainer>
            <Bar />
        </>
    );
};

export default MenuSection;
