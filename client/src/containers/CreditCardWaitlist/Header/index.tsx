/**
 * @file Header Section For Credit Card Waitlist
 */

import React from 'react';

import { LOGOS_URL_MAP, SVGS_URL } from '../../../constants/AssetConstants';
import { PrevHolder, HeaderHolder } from '../../../components/Waitlist/styled';
import { Image } from '../../../components';
import { htmlSanitization } from '../../../utils';

import { Description, Title, LogoHolder } from '../styled';

interface HeaderProps {
    title?: string;
    description?: string | React.ReactElement;
    onClickPrevButton?: () => void;
    ctaCssId?: string;
}
const Header = (props: HeaderProps) => {
    const {
        title, description, onClickPrevButton, ctaCssId,
    } = props;

    return (
        <div>
            <HeaderHolder>
                {onClickPrevButton ? (
                    <PrevHolder onClick={onClickPrevButton} id={ctaCssId}>
                        <Image
                            icon={`${SVGS_URL}arrow-back.svg`}
                            alt='Fi prev Icon'
                        />
                    </PrevHolder>
                ) : null}
                <LogoHolder>
                    <Image icon={LOGOS_URL_MAP.FI_LOGO} alt='logo' />
                </LogoHolder>
            </HeaderHolder>

            {title ? (
                <Title
                    tagType='text'
                    font='h2'
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }}
                />

            ) : null}

            {description ? (
                <Description
                    font='pSmallVariantEleven'
                    tagType='text'
                    color='GREY_3'
                >
                    {description}
                </Description>
            ) : null}
        </div>
    );
};

Header.defaultProps = {
    onClickPrevButton: false,
    title: false,
    description: false,
    ctaCssId: '',
};

export default Header;
