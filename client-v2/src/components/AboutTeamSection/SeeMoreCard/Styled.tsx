import styled from 'styled-components';
import { Device } from '../../../Themes/Device';
import { Font } from '../..';

const StyledCard = styled.div`
    border-radius: 15px;
    background: ${(props) => props.theme.color.GREY_3};
    overflow: hidden;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;

    @media ${Device.tab} {
        & > div:first-child {
            width: 120px;
        }
    }

    @media ${Device.tab} {
        & > div:first-child {
            width: auto;
            & > div:first-child {
                width: 120px;
            }
            & > div:last-child {
                width: 200px;
            }
        }
    }
`;

const Title = styled(Font)`
    color: ${(props) => props.theme.color.FI_GREEN};
    margin-bottom: 6px;

    @media ${Device.tab} {
        margin-bottom: 10px;
    }

    @media ${Device.desktop} {
        font-size: 32px !important;
        line-height: 115% !important;
        margin-bottom: 15px;
    }
`;

const FooterLink = styled(Font)`
    border-bottom: 1px solid ${(props) => props.theme.color.WHITE};
`;

export { StyledCard, Title, FooterLink };
