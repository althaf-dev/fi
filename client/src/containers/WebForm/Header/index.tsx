/**
 * @file Header Section For Webflow
 */

import React from 'react';

import { LOGOS_URL_MAP, SVGS_URL } from '../../../constants/AssetConstants';
import { Image } from '../../../components';
import { htmlSanitization } from '../../../utils';

import {
    Description,
    Title,
    LogoHolder,
    PrevHolder,
    HeaderHolder,
    Container,
} from './styled';

interface HeaderProps {
    isEntering: boolean;
    title?: string | React.ReactElement;
    description?: string | React.ReactElement;
    onClickPrevButton?: () => void;
    logoImage?: boolean;
}
const Header = (props: HeaderProps) => {
    const {
        isEntering,
        title,
        description,
        onClickPrevButton,
        logoImage,
    } = props;

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
                    {/* Using dangerouslysetinnerhtml as backend is currently sending Bold tag from their end */}
                    {typeof description === 'string' ? <div dangerouslySetInnerHTML={{ __html: htmlSanitization(description) }} /> : description}
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
};

export default Header;
