import styled from 'styled-components';
import { Font } from '../../../components';
import { Device } from '../../../Themes/Device';

/* FAQs Common Css Start */
const ContentHolder = styled.div`
    margin: auto;
    max-width: 320px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 850px;
    }
`;

const FolderTitle = styled(Font)`
    letter-spacing: 0.45px;
    padding-left: 16px;
    text-transform: uppercase;

    @media ${Device.desktop} {
        padding-left: 30px;
    }
`;

const ArrowImageHolder = styled.div`
    width: 20px;
    height: 20px;
    cursor: pointer;

    @media ${Device.desktop} {
        width: 24px;
        height: 24px;
    }
`;
/* FAQs Common Css End */

/* FAQs unused CSS */
/*
const CircleDiv = styled(Font)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.CHALK_GREY};

    height: 28px;
    min-width: 28px;
    border-radius: 100%;

    @media ${Device.tab} {
        height: 36px;
        min-width: 36px;
    }

    @media ${Device.desktop} {
        height: 50px;
        min-width: 50px;
    }
`;

const ArticleHolder = styled.div`
    display: flex;
    align-items: baseline;

    &:not(:first-child) {
        margin-top: 40px;
    }

    & > div:first-child {
        margin-right: 20px;
    }

    & > div:last-child {
        flex: 1;
    }

    @media ${Device.tab} {
        & > div:first-child {
            margin-right: 13px;
        }
    }

    @media ${Device.desktop} {
        &:not(:first-child) {
            margin-top: 60px;
        }

        & > div:first-child {
            margin-right: 20px;
        }
    }
`;

const HideDiv = styled(Font)`
    text-align: left;
    cursor: pointer;
    display: inline-block;
`;

const FooterInfoHolder = styled.div`
    @media ${Device.desktop} {
        margin-top: 120px;
    }
`;

const FolderDiv = styled.div<{ isActive: boolean }>`
    cursor: pointer;
    white-space: nowrap;
    padding: 10px 25px;
    border-bottom: ${(props) => (props.isActive ? `2px solid ${props.theme.color.WHITE}` : 'none')};
    color: ${(props) => (props.isActive ? props.theme.color.WHITE : 'inherit')};
`;

const FolderStickyDiv = styled.div<{ isActive: boolean }>`
    cursor: pointer;
    white-space: nowrap;
    padding: 10px 25px;
    border-bottom: ${(props) => (props.isActive
        ? `2px solid ${props.theme.color.FOREST_GREEN}`
        : 'none')};
    color: ${(props) => (props.isActive ? props.theme.color.FOREST_GREEN : 'inherit')};
`;
*/
/* End FAQs unused CSS */

export {
    ContentHolder,
    FolderTitle,
    ArrowImageHolder,
};
