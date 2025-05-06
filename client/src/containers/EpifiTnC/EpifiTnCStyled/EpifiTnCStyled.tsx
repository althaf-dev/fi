import styled from 'styled-components';
import { Font } from '../../../components';
import { Device } from '../../../Themes/Device';

const SubTitle = styled(Font)`
    text-align: left;
    margin-top: 40px;
    margin-bottom: 20px;

    @media ${Device.tab} {
        margin-top: 60px;
        margin-bottom: 15px;
    }

    @media ${Device.desktop} {
        margin-top: 40px;
        margin-bottom: 20px;
    }
`;

const MenuContainer = styled.div<{ show?: boolean }>`
    margin-bottom: 60px;
    margin-top: 15px;
    max-width: 310px;

    @media ${Device.tab} {
        margin-bottom: 80px;
        max-width: 610px;
    }

    @media ${Device.desktop} {
        position: sticky;
        top: ${(props) => (props.show ? '180px' : '110px')};
        margin-top: -60px;
        margin-right: 50px;
    }
`;

const UnorderdList = styled.ul`
    padding-left: 15px;
    text-align: left;

    @media ${Device.desktop} {
        padding-left: 25px;
    }
`;

export { SubTitle, MenuContainer, UnorderdList };
