/**
 * @file TopSheetStickySection: Use to show sticky section on the mobile view with the Back Button
 */
import React, { memo } from 'react';
import { useRouter } from "next/navigation";

import { Image } from '../Abstract';

import {
    Wrapper, BackButtonImageHolder, IconImageHolder, Title, Description,
    ContentSection,
} from './styled';

interface ITopSheetStickySectionProps {
    backButtonImageUrl: string;
    backButtonUrl: string;
    title: string;
    iconUrl?: string;
    fallbackIconUrl?: string
    description?: string;
}

const TopSheetStickySection = (props: ITopSheetStickySectionProps) => {
    const {
        backButtonImageUrl, backButtonUrl, title, iconUrl, fallbackIconUrl, description,
    } = props;

    const router = useRouter();

    const onBackButtonClick = () => {
        router.push(backButtonUrl)
    };

    return (
        <Wrapper>
            <BackButtonImageHolder onClick={onBackButtonClick}>
                <Image icon={backButtonImageUrl} alt='back arrow' />
            </BackButtonImageHolder>
            {iconUrl ? (
                <IconImageHolder>
                    <Image icon={iconUrl} fallBackImage={fallbackIconUrl} alt='icon' />
                </IconImageHolder>
            ) : null}
            <ContentSection>
                <Title font='inputVariantOne' tagType='p' color='SHARK'>{title}</Title>
                {description ? (
                    <Description font='bottomSheetDescription' tagType='p' color='OSLO_GRAY'>{description}</Description>
                ) : null}
            </ContentSection>
        </Wrapper>
    );
};

TopSheetStickySection.defaultProps = {
    iconUrl: '',
    fallbackIconUrl: '',
    description: '',
};

export default memo(TopSheetStickySection);
