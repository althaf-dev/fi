import styled from 'styled-components';
import { Device } from '../../../Themes/Device';
import { AboutCard } from '../Styled';

const StyledCard = styled(AboutCard)`
    background-color: ${(props) => props.theme.color.PATTERNS_BLUE};
`;

const ImageHolder = styled.div`
    width: 200px;
    height: 153px;

    @media ${Device.tab} {
        border-radius: 8px;
        width: 200px;
        height: 161px;
    }

    @media ${Device.desktop} {
        border-radius: 8px;
        width: 310px;
        height: 238px;
    }
`;

export { StyledCard, ImageHolder };
