import React, { useState } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import {
    SectionContainer,
    TitleTextHolder,
    Bar,
    InfoOne,
} from '../TnCStyled/TnCStyled';

const FirstSectionContainer = styled(SectionContainer)`
    margin-top: -40px;

    @media ${Device.tab} {
        margin-top: -80px;
    }

    @media ${Device.desktop} {
        margin-top: -160px;
    }
`;

interface MenuSectionProps {
    onTitleClick?: (state: 1 | 2 | 3 | 4) => void;
}

const MenuSection = (props: MenuSectionProps) => {
    const [activeState, setActiveState] = useState(1);

    const onMenuClick = (state: 1 | 2 | 3 | 4) => {
        setActiveState(state);
        if (props.onTitleClick) {
            props.onTitleClick(state);
        }
    };

    return (
        <>
            <FirstSectionContainer>
                <TitleTextHolder>
                    <InfoOne
                        font='h2VariantOne'
                        tagType='text'
                        color={
                            activeState === 1 ? 'MINE_SHAFT' : 'FOREST_GREEN'
                        }
                        onClick={() => onMenuClick(1)}
                    >
                        1. What all information would be collected?
                    </InfoOne>
                    <InfoOne
                        font='h2VariantOne'
                        tagType='text'
                        color={
                            activeState === 2 ? 'MINE_SHAFT' : 'FOREST_GREEN'
                        }
                        onClick={() => onMenuClick(2)}
                    >
                        2. Why do we need this information?
                    </InfoOne>
                    <InfoOne
                        font='h2VariantOne'
                        tagType='text'
                        color={
                            activeState === 3 ? 'MINE_SHAFT' : 'FOREST_GREEN'
                        }
                        onClick={() => onMenuClick(3)}
                    >
                        3. What happens to my data?
                    </InfoOne>
                    {/* <InfoOne
                        font='h2VariantOne'
                        tagType='text'
                        color={
                            activeState === 4 ? 'MINE_SHAFT' : 'FOREST_GREEN'
                        }
                        onClick={() => onMenuClick(4)}
                    >
                        4. What rights do i have over my data?
                    </InfoOne> */}
                </TitleTextHolder>
            </FirstSectionContainer>
            <Bar />
        </>
    );
};

export default MenuSection;
