/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';

const CircularProgressBarContainer = styled.div<{ backgroundColor: string, stickySection?: boolean, isTableType: boolean }>`
    background-color: ${(props) => (props.stickySection ? 'unset' : props.backgroundColor)};
    border-radius: 29px;
    display: flex;
    flex-direction: column;
    margin: ${(props) => (props.stickySection && props.isTableType ? '34px auto 0px' : props.stickySection && !props.isTableType ? '30px auto 0px' : '40px auto 0px')};

    @media ${Device.tab} {
        width: 660px;
        margin-top: 48px;
    }

    @media ${Device.desktop} {
        margin: 0px;
        padding: 40px 0px 40px;
        width: 475px;
    }
`;

const CircleContainer = styled.div`
    @media ${Device.desktop} {
        padding-top: 40px;
    }
`;

const VisualsContainer = styled.div<{ stickySection?: boolean }>`
    background: ${(props) => (props.stickySection ? props.theme.color.LIGHT_GREY : props.theme.color.PORCELAIN)};
    border-radius: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 175px;
    margin: ${(props) => (props.stickySection ? '0px auto 30px' : '0px auto 24px')};
    padding: 4px;

    @media ${Device.tab} {
        margin: 0px auto 42px;
    }

    @media ${Device.desktop} {
        background: ${(props) => props.theme.color.PORCELAIN};
        margin: 50px auto 0px;
        // order: -1;
    }
`;

const StickyVisualSection = styled.div<{ activeGraphLabelId: boolean }>`
    cursor: pointer;
    color: ${(props) => (props.activeGraphLabelId ? props.theme.color.WHITE : props.theme.color.GREY_3)};
    box-shadow: ${(props) => (props.activeGraphLabelId ? '0px 4px 5px rgba(0, 0, 0, 0.05), 0px 1px 10px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.08)' : 'unset')};
    border-radius: ${(props) => (props.activeGraphLabelId ? '11px' : '0')};
    background-color: ${(props) => (props.activeGraphLabelId ? props.theme.color.LIGHTER_GREY : 'unset')};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    padding: 5px 12px;
    text-transform: capitalize;
`;

const VisualsSection = styled.div<{ activeGraphLabelId: boolean }>`
    cursor: pointer;
    color: ${(props) => (props.activeGraphLabelId ? props.theme.color.MINE_SHAFT : props.theme.color.GREY_2)};
    box-shadow: ${(props) => (props.activeGraphLabelId ? '0px 4px 5px rgba(0, 0, 0, 0.05), 0px 1px 10px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.08)' : 'unset')};
    border-radius: ${(props) => (props.activeGraphLabelId ? '11px' : '0')};
    background-color: ${(props) => (props.activeGraphLabelId ? props.theme.color.WHITE : 'unset')};
    border-radius: ${(props) => (props.activeGraphLabelId ? '13px' : '0')};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    padding: 5px 12px;
    text-transform: capitalize;

    @media ${Device.tab} {
        font-size: 20px;
        line-height: 20px;
        padding: 8px 12px;
    }

    @media ${Device.desktop} {
        color: ${(props) => props.theme.color.MINE_SHAFT};
        background-color: ${(props) => (props.activeGraphLabelId ? props.theme.color.WHITE : 'unset')};
        border-radius: ${(props) => (props.activeGraphLabelId ? '13px' : '0')};
        padding: 8px 12px;
        font-size: 16px;
    }
`;

const OutputSentence = styled.div`
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: 0.45px;
    padding: 24px 20px;
    text-align: center;

    @media ${Device.tab} { 
        padding: 40px 103px 40px;
        font-size: 32px;
        line-height: 38px;
    }

    @media ${Device.desktop} {
        font-size: 30px;
        line-height: 36px;
        padding: 0px 40px 8px;
        text-align: start;
        // order: 3;
    }
`;

const StickyGraphBottomInputFields = styled.div`
    margin-bottom: 40px;
    padding: 0px 24px;

    @media ${Device.tab} {
        padding: 0px 40px;
    }

    @media ${Device.desktop} {
        margin-top: 40px;
        margin-bottom: 0px;
    }
`;

const GraphContainer = styled.div<{ graphType: string }>`
    position: relative;
    width: ${(props) => (props.graphType === 'doughnut' ? '206px' : '260px')};
    height: ${(props) => (props.graphType === 'doughnut' ? '206px' : '271px')};
    margin: 0px auto;

    @media ${Device.tab} {
        width: ${(props) => (props.graphType === 'doughnut' ? '268px' : '424px')};
        height: ${(props) => (props.graphType === 'doughnut' ? '268px' : '406px')};
    }

    @media ${Device.desktop} {
        width: ${(props) => (props.graphType === 'doughnut' ? '296px' : '377px')};
        height: ${(props) => (props.graphType === 'doughnut' ? '296px' : '372px')};
    }
`;

export {
    CircularProgressBarContainer, CircleContainer, VisualsContainer, StickyVisualSection, VisualsSection, OutputSentence,
    StickyGraphBottomInputFields, GraphContainer,
};
