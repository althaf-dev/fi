import styled from 'styled-components';

import { Device } from '../../Themes/Device';

const customStylesForModal = {
    overlay: {
        backgroundColor: 'rgba(51, 51, 51, 1)',
        opacity: 0.95,
        zIndex: 1,
    },
    content: {
        width: '90%',
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 20,
        paddingBottom: 20,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bottom: 'auto',
        right: 'auto',
        borderRadius: 20,
        overflow: 'hidden',
        border: 'none',
    },
};

const ToolTipWrapper = styled.div`
    position: absolute;
    bottom: 0;
    display: inline-block;
    vertical-align: middle;
`;

const ToolTipIconHolder = styled.div`
    cursor: pointer;
    display: inline-block;
    height: 18px;
    width: 18px;
    vertical-align: middle;

    @media ${Device.desktop} {
        height: 24px;
        width: 24px;
    }
`;

const InformationIconHolder = styled.div`
    height: 48px;
    width: 48px;
    margin: 0px auto 16px;
`;

const Title = styled.div`
    color: ${(props) => props.theme.color.DARK_GREY};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 8px;
`;

const Description = styled.div`
    color: ${(props) => props.theme.color.WHITE};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: left;

    @media ${Device.tab} {
        font-size: 14px;
        line-height: 17px;
    }

    @media ${Device.desktop} {
        font-size: 16px;
        line-height: 19px;
    }
`;

/* ToolTip Desktop Styling Start */
const Wrapper = styled.div<{ isTableView?: boolean, isModalOpen: boolean, isCustomFlag?: boolean}>`
    display: ${(props) => (props.isModalOpen ? 'block' : 'none')};
    position: absolute;
    left: -123px;
    top: 30px;
    width: 144px;

    @media ${Device.tab} {
        top: 32px;
        left: ${(props) => (props.isTableView ? '-165px' : '-10px')};
        width: ${(props) => (props.isTableView ? '190px' : '262px')};
    }

    @media ${Device.desktop} {
        left: ${(props) => {
        if (props?.isTableView) {
            return '-164px';
        }
        if (props?.isCustomFlag) {
            return 'unset';
        }
        return '-10px';
    }};
        right: ${(props) => (props.isCustomFlag ? '8px' : 'unset')};
    }
`;

const Section = styled.div<{ isTableView?: boolean, isCustomFlag?: boolean }>`
        border-radius: 6px;
        background-color: ${(props) => props.theme.color.MINE_SHAFT};
        padding: 8px 12px;
        position: absolute;
        z-index: 1;

        &::after {
            content: '';
            position: absolute;
            bottom: 100%;
            right: 6px;
            border: 6px solid transparent;
            border-bottom-color: ${(props) => props.theme.color.MINE_SHAFT};

            @media ${Device.tab} {
                right: ${(props) => ((props.isTableView || props.isCustomFlag) ? '5px' : 'unset')};
                left: ${(props) => ((props.isTableView || props.isCustomFlag) ? 'unset' : '15px')};
                border: 8px solid transparent;
                border-bottom-color: ${(props) => props.theme.color.MINE_SHAFT};
            }
        }

        @media ${Device.desktop} {
            padding: 8px 16px;
        }
`;
/* ToolTip Desktop Styling End */

export {
    customStylesForModal, InformationIconHolder, Title, Description, Wrapper, Section,
    ToolTipIconHolder, ToolTipWrapper,
};
