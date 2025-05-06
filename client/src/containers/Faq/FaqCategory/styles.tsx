import styled from 'styled-components';

import { Font } from '../../../components';
import { Device } from '../../../Themes/Device';

const CategoryContainer = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;
    margin: 16px auto 0px;
    max-width: 328px;

    @media ${Device.tab} {
        gap: 32px;
        margin: 32px auto 0px;
        max-width: 648px;
    }

    @media ${Device.desktop} {
        gap: 32px;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 60px auto 0px;
        max-width: 1114px;
    }
`;

const CategoryCardWrapper = styled.div`
    border-radius: 12px;
    background-color: ${(props) => props.theme.color.WHITE};
    cursor: pointer;
    overflow: hidden;
    padding: 20px 8px;
    text-align: center;
    width: 156px;
    height: 136px;

    @media ${Device.tab} {
        border-radius: 16px;
        padding: 32px 20px;
        width: 308px;
        height: 192px;
    }

    @media ${Device.desktop} {
        border-radius: 20px;
        padding: 42px 40px;
        width: 350px;
        height: 264px;
    }
`;

const CategoryIconHolder = styled.div`
    width: 36px;
    height: 36px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 48px;
        height: 48px;
    }

    @media ${Device.desktop} {
        width: 60px;
        height: 60px;
    }
`;

const CategoryName = styled(Font)`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin: 8px auto 10px;
    overflow: hidden;
    width: 140px;

    @media ${Device.tab} {
        margin: 12px auto 16px;
        width: 268px;
    }

    @media ${Device.desktop} {
        margin: 24px auto 20px;
        width: 270px;
        word-break: break-word;
        -webkit-line-clamp: inherit;
    }
`;

const CategoryDescription = styled(Font)`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 140px;
    word-break: break-word;

    @media ${Device.tab} {
        width: 268px;
    }

    @media ${Device.desktop} {
        width: 270px;
    }
`;

export {
    CategoryContainer,
    CategoryCardWrapper,
    CategoryIconHolder,
    CategoryName,
    CategoryDescription,
};
