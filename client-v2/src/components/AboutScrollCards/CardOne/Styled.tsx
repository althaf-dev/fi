import styled from 'styled-components';
import { Device } from '../../../Themes/Device';
import { AboutCard } from '../Styled';
import Font from '../../Font/Font';

const StyledCard = styled(AboutCard)`
    background-color: ${(props) => props.theme.color.PATTERNS_BLUE_TWO};
`;

const ImageWrapper = styled.div`
    border-radius: 5px;
    overflow: hidden;
    width: 200px;
    height: 80px;

    @media ${Device.tab} {
        border-radius: 8px;
        width: 210px;
        height: 84px;
    }

    @media ${Device.desktop} {
        border-radius: 8px;
        width: 310px;
        height: 124px;
    }
`;

const Text = styled(Font)`
    max-width: 170px;

    @media ${Device.desktop} {
        max-width: 250px;
    }
`;
export { StyledCard, ImageWrapper, Text };
