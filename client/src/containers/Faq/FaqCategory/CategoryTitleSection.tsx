import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Font, Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { ICONS_URL_MAP } from '../../../constants/AssetConstants';

const FaqSectionDescription = styled(Font)`
    margin-bottom: 12px;
    margin-top: 30px;
    max-width: 267px;
    overflow: hidden;
    padding-left: 16px;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;

    @media ${Device.desktop} {
        margin-top: 60px;
        max-width: 330px;
        overflow: unset;
        padding-left: 30px;
    }
`;

const FaqSectionTitle = styled.span`
    cursor: pointer;
    vertical-align: middle;
`;

const CategoryTitleHolder = styled.div`
    display: flex;
    align-items: center;
    max-width: 320px;
    margin: 0px auto 30px;
    padding-left: 16px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 850px;
        margin: 0px auto 40px;
        padding-left: 30px;
    }
`;

const IconImage = styled.div`
    width: 48px;
    height: 48px;
`;

const Name = styled(Font)`
    color: ${(props) => props.theme.color.NERO};
    cursor: pointer;
    margin-right: 16px;
`;

const IconHolder = styled.span`
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0px 2px;
    vertical-align: middle;

    @media ${Device.desktop} {
        width: 16px;
        height: 16px;
    }
`;

interface ParamsObject {
    [key: string]: any
}

interface CategoryTitleSectionProps {
    categoryName: string;
    categoryIcon?: string;
    folderTitle?: string;
}

const CategoryTitleSection = (props: CategoryTitleSectionProps) => {
    const { categoryName, categoryIcon, folderTitle } = props;
    const navigate = useNavigate();
    const params: ParamsObject = useParams();

    const redirectToFaqPage = () => {
        navigate('/FAQs');
    };

    const redirectToCategoryPage = () => {
        if (params.name) {
            navigate(`/FAQs/${params.name}`);
        }
    };

    const arrowImageHolder = (
        <IconHolder>
            <Image icon={ICONS_URL_MAP.FADE_RIGHT_ARROW} loadingType='lazy' alt='arrow icon' />
        </IconHolder>
    );

    return (
        <>
            <FaqSectionDescription tagType='text' font='button' color='STEEL'>
                <FaqSectionTitle
                    tabIndex={0}
                    role='button'
                    onClick={redirectToFaqPage}
                >
                    FAQ
                </FaqSectionTitle>
                {categoryName && (
                    <>
                        {arrowImageHolder}
                        <FaqSectionTitle
                            tabIndex={0}
                            role='button'
                            onClick={redirectToCategoryPage}
                        >
                            {categoryName}
                        </FaqSectionTitle>
                    </>
                )}
                {folderTitle && (
                    <>
                        {arrowImageHolder}
                        <FaqSectionTitle
                            tabIndex={0}
                            role='button'
                        >
                            {folderTitle}
                        </FaqSectionTitle>
                    </>
                )}
            </FaqSectionDescription>
            <CategoryTitleHolder>
                <Name tagType='text' font='h4VariantFive'>
                    {categoryName && folderTitle ? folderTitle : categoryName }
                </Name>
                {
                    categoryIcon ? (
                        <IconImage>
                            <Image icon={categoryIcon} loadingType='lazy' alt='category icon' />
                        </IconImage>
                    ) : null
                }
            </CategoryTitleHolder>
        </>
    );
};

CategoryTitleSection.defaultProps = {
    categoryIcon: null,
    folderTitle: '',
};

export default CategoryTitleSection;
