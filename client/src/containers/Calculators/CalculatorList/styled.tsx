import styled from 'styled-components';

import { Font } from '../../../components';
import { Device } from '../../../Themes/Device';

const ListContainer = styled.div`
    display: grid;
    gap: 20px;
    margin: 20px auto 0px;
    max-width: 328px;

    @media ${Device.tab} {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin: 40px auto 0px;
        max-width: 654px;
    }

    @media ${Device.desktop} {
        gap: 40px;
        margin: 60px auto 0px;
        max-width: 1070px;
    }
`;

const ListCardWrapper = styled.div`
    border-radius: 12px;
    background-color: ${(props) => props.theme.color.WHITE};
    cursor: pointer;
    padding: 16px;

    @media ${Device.tab} {
        border-radius: 16px;
        padding: 20px;
    }

    @media ${Device.desktop} {
        border-radius: 19px;
        padding: 40px 30px;
    }
`;

const ListIconHolder = styled.div`
    width: 32px;
    height: 32px;

    @media ${Device.tab} {
        width: 60px;
        height: 60px;
    }

    @media ${Device.desktop} {
        width: 68px;
        height: 68px;
    }
`;

const ListName = styled(Font)`
    margin: 16px auto 0px;
    overflow: hidden;
    text-align: start;
    word-break: break-word;

    @media ${Device.desktop} {
        margin: 20px auto 0px;
    }
`;

const ListDescription = styled(Font)`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
    margin-top: 4px;
    text-align: start;

    @media ${Device.desktop} {
        margin-top: 8px;
    }
`;

export {
    ListContainer,
    ListCardWrapper,
    ListIconHolder,
    ListName,
    ListDescription,
};
