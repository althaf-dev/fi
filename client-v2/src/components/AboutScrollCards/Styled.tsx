import styled from 'styled-components';
import { Device } from '../../Themes/Device';
import Font from '../Font/Font';

const Section = styled.div`
    margin-top: 40px;

    @media ${Device.tab} {
        margin-top: 80px;
    }
`;

const AboutCard = styled.div`
    border-radius: 20px;
    overflow: hidden;
    text-align: left;
    padding: 30px;

    @media ${Device.tab} {
        padding: 25px;
    }

    @media ${Device.desktop} {
        padding: 40px;
    }
`;

const AboutCardTag = styled.div`
    display: inline-block;
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 5px;
    padding: 10px;

    @media ${Device.tab} {
        padding: 8px 10px;
    }

    @media ${Device.desktop} {
        padding: 13px 15px 9px;
    }
`;

const AboutCardFooterTextHolder = styled.div`
    margin-top: 20px;
`;

const AboutCardTitleTextHolder = styled.div`
    margin: 20px 0;
    white-space: pre-line;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const CardHolder = styled.div`
    display: grid;
    grid-template-columns: 10px repeat(3, 260px) 10px;
    grid-gap: 30px;
    overflow-x: auto;
    margin-bottom: 40px;

    @media ${Device.tab} {
        grid-template-columns: 40px repeat(3, 260px) 40px;
        grid-gap: 40px;
    }

    @media ${Device.desktop} {
        grid-template-columns: 2px repeat(3, 390px) 2px;
        grid-gap: 60px;
    }
`;

const Wrapper = styled(Section)`
    @media ${Device.desktop} {
        padding-top: 40px;
    }
`;

const TitleHolder = styled(Font)`
    width: 320px;
    margin: auto;
    text-align: center;
    padding: 40px 20px;

    @media ${Device.tab} {
        width: 600px;
        padding: 0 0 60px;
    }
    @media ${Device.desktop} {
        width: 880px;
        padding-bottom: 100px;
    }
`;

export {
    Section,
    AboutCard,
    AboutCardTag,
    AboutCardFooterTextHolder,
    AboutCardTitleTextHolder,
    Container,
    TitleHolder,
    CardHolder,
    Wrapper,
};
