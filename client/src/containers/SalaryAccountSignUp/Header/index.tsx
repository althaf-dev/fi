/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @file Header Section For Salary Account Signup
 */

import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Image } from '../../../components';
import { LOGOS_URL_MAP, SVGS_URL } from '../../../constants/AssetConstants';
import { WINDOW_SIZE } from '../../../Themes/Device';
import { useWindowDimensions, useOnChangeReducerValue } from '../../../hooks';

import {
    Description,
    Title,
    LogoHolder,
    PrevHolder,
    HeaderHolder,
    WorkBenifitHolder,
    Container,
} from '../styled';
import { onChangeSalaryAccountSignUpValue } from '../actions';
import selectSalaryAccountSignUpReducer from '../selectors';

interface HeaderProps {
    isEntering: boolean;
    title?: string | React.ReactElement;
    description?: string | React.ReactElement;
    onClickPrevButton?: () => void;
    logoImage?: boolean;
    workBenifitListIcon?: boolean;
}
const Header = (props: HeaderProps) => {
    const {
        isEntering,
        title,
        description,
        onClickPrevButton,
        logoImage,
        workBenifitListIcon,
    } = props;

    const dispatch = useDispatch();

    const { showWorkBenefitSection } = useSelector(
        selectSalaryAccountSignUpReducer,
        shallowEqual,
    );

    const { width } = useWindowDimensions();

    const onChangeReducerValue = useOnChangeReducerValue(
        onChangeSalaryAccountSignUpValue,
    );

    const onClickWorkBenefitSection = () => {
        onChangeReducerValue({ showWorkBenefitSection: true });
    };

    useEffect(() => {
        if (width >= WINDOW_SIZE.DESKTOP && showWorkBenefitSection) {
            onChangeReducerValue({ showWorkBenefitSection: false });
        }
    }, [width, dispatch, showWorkBenefitSection]);

    return (
        <Container>
            <HeaderHolder>
                {onClickPrevButton ? (
                    <PrevHolder onClick={onClickPrevButton}>
                        <Image
                            icon={`${SVGS_URL}prevIcon.svg`}
                            alt='Fi prev Icon'
                        />
                    </PrevHolder>
                ) : null}

                {logoImage ? (
                    <LogoHolder>
                        <Image icon={LOGOS_URL_MAP.FI_LOGO} alt='logo' />
                    </LogoHolder>
                ) : null}
                {
                    !workBenifitListIcon ? (
                        <>
                            {width < WINDOW_SIZE.DESKTOP ? (
                                <WorkBenifitHolder onClick={onClickWorkBenefitSection}>
                                    <Image
                                        icon={`${SVGS_URL}work-benifit-nav.svg`}
                                        alt='workBenifitListIcon'
                                    />
                                </WorkBenifitHolder>
                            ) : null}
                        </>
                    ) : null
                }

            </HeaderHolder>

            {title ? (
                <Title
                    tagType='text'
                    font='titleVariantOne'
                    className={
                        !isEntering
                            ? 'transition transition-start-initial-bottom opacity-initial'
                            : 'transition transition-start-final opacity-final'
                    }
                >
                    {title}
                </Title>
            ) : null}

            {description ? (
                <Description
                    font='pSmallVariantEleven'
                    tagType='text'
                    color='GREY_3'
                    className={
                        !isEntering
                            ? 'transition transition-start-initial-bottom-50 opacity-initial'
                            : 'transition transition-start-final opacity-final'
                    }
                >
                    {description}
                </Description>
            ) : null}
        </Container>
    );
};

Header.defaultProps = {
    onClickPrevButton: false,
    title: false,
    description: false,
    logoImage: true,
    workBenifitListIcon: false,
};

export default Header;
