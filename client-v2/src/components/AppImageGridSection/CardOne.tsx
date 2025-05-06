import React from 'react';
import styled from 'styled-components';

import { Font } from '..';
import { Device } from '../../Themes/Device';

const StyledCard = styled(Font)`
    height: 100%;
    width: 100%;
    padding: 30px;
    background-color: ${(props) => props.theme.color.MINE_SHAFT};

    @media ${Device.tab} {
        padding: 40px 25px;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
    }

    @media ${Device.desktop} {
        padding: 40px;
    }
`;

interface CardOneProps {
    gridType?: 1 | 2;
}

const CardOne = (props: CardOneProps) => (
    <StyledCard font='h2VariantTwo' color='WHITE' tagType='text'>
        {props.gridType === 1
            ? 'We’ve got people talking'
            : 'A Banking Experience, with you at its centre'}
    </StyledCard>
);

CardOne.defaultProps = {
    gridType: 1,
};

export default CardOne;
