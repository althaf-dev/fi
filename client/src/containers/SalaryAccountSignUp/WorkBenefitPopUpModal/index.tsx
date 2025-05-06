/**
 * @file Work Benefit mobile and tablet devices design
 */

import React, { useMemo } from 'react';
import styled from 'styled-components';

import { SVGS_URL } from '../../../constants/AssetConstants';
import { Image } from '../../../components';
import { Device, WINDOW_SIZE } from '../../../Themes/Device';
import { useOnChangeReducerValue, useWindowDimensions } from '../../../hooks';

import {
    groupAllWorkBenefitData,
    groupAllWorkBenefitDataForTabView,
} from '../constants';
import WorkBenefitSection from '../WorkBenefitSection';
import { onChangeSalaryAccountSignUpValue } from '../actions';

const WorkBenefitPopupContainer = styled.div`
    position: absolute;
    background: ${(props) => props.theme.color.MYSTIC};
    min-height: 100vh;
    min-width: 100vw;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WorkBenefitPopupCloseButton = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 1;

    @media ${Device.tab} {
        top: 50px;
        right: 50px;
    }
`;

const WorkBenefitPopupHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${Device.phone} {
        margin-top: 50px;
    }

    @media ${Device.tab} {
        margin-top: 0px;
    }
`;

const WorkBenefitPopUpModal = () => {
    const { width } = useWindowDimensions();

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeSalaryAccountSignUpValue,
    );

    const onCloseWorkBenefitModal = () => {
        onChangeReducerValue({ showWorkBenefitSection: false });
    };

    const workBenefitData = useMemo(
        () => (width < WINDOW_SIZE.TAB
            ? groupAllWorkBenefitData
            : groupAllWorkBenefitDataForTabView),
        [width],
    );

    return (
        <WorkBenefitPopupContainer>
            <WorkBenefitPopupCloseButton onClick={onCloseWorkBenefitModal}>
                <Image
                    icon={`${SVGS_URL}close-nav-icon.svg`}
                    alt='workBenifitListIcon'
                />
            </WorkBenefitPopupCloseButton>
            <WorkBenefitPopupHolder>
                <WorkBenefitSection
                    title={workBenefitData?.title}
                    workBenefitList={workBenefitData?.workBenefitList}
                    isMobileView
                />
            </WorkBenefitPopupHolder>
        </WorkBenefitPopupContainer>
    );
};

export default WorkBenefitPopUpModal;
