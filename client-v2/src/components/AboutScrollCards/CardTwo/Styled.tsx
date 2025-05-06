import styled from 'styled-components';
import { Device } from '../../../Themes/Device';
import { AboutCard, AboutCardTitleTextHolder } from '../Styled';

const Container = styled.div`
    background-color: ${(props) => props.theme.color.TUNDORA_2};
    border-radius: 20px;
    overflow: hidden;
`;

const StyledCard = styled(AboutCard)`
    padding-bottom: 0;
`;

const Divider = styled.div`
    background-color: ${(props) => props.theme.color.TUNDORA_2};
    width: 100%;
    height: 5px;
`;

const TitleHolder = styled(AboutCardTitleTextHolder)`
    width: 170px;

    @media ${Device.desktop} {
        width: 220px;
    }
`;

const ImageHolder = styled.div`
    width: 260px;
    height: 214px;

    @media ${Device.tab} {
        border-radius: 8px;
        width: 260px;
        height: 214px;
    }

    @media ${Device.desktop} {
        border-radius: 8px;
        width: 390px;
        height: 322px;
    }
`;

export {

    Container, StyledCard, Divider, ImageHolder, TitleHolder

};
