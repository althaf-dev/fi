import styled from 'styled-components';
import { Device } from '../../Themes/Device';


const Wrapper = styled.div`
    height: calc(100vh - 305.6px);
    margin: 30px;
    padding: 24px;
    border-radius: 15px;

    @media ${Device.tab} {
        height: 100%;
        margin: 0 76px 152px;
        padding: 0 76px 76px;
        border-radius: 30px;
    }
`;

const StyledContainer = styled.div<{ bgColor?: string }>`
    background-color: ${(props) => props.bgColor || props.theme.color.CHALK_GREY};
`;

const PosterContainer = styled.div`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
`;

const NotFoundContainer = styled(StyledContainer)`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
`;

const NotFoundPosterContainer = styled(PosterContainer)`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
`;

const Container = styled.div`
    background-color: ${(props) => props.theme.color.MINE_SHAFT};
`;

const ContentContainer = styled.div`
    width: 240px;
    height: 100%;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${Device.tab} {
        width: 430px;
        margin-top: 75px;
    }
`;

const ImageContainer = styled.div`
    height: 178px;

    @media ${Device.tab} {
        height: 326px;
    }
`;

const Link = styled.a`
    color: ${(props) => props.theme.color.FOREST_GREEN};
`;

export {
    Link,
    ImageContainer,
    ContentContainer,
    Container,
    NotFoundPosterContainer,
    NotFoundContainer,
    PosterContainer,
    StyledContainer,
    Wrapper,
}
