import styled from 'styled-components';
import { Device } from '../../../Themes/Device';

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

export {
    Section,
    AboutCard,
    AboutCardTag,
    AboutCardFooterTextHolder,
    AboutCardTitleTextHolder,
};
