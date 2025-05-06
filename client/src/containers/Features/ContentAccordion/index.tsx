import React from 'react';
import styled from 'styled-components';

import { Font, Image } from '../../../components';
import { Device } from '../../../Themes/Device';

import arrowDownFade from '../../../assets/svgs/arrow-down_fade.svg';
import arrowUpDark from '../../../assets/svgs/arrow-up_dark.svg';

import { featurePageSectionObjResponse, trackingPayload } from '../constants';
import { trackEvent, CLICKED_FEATURES_HEADLINE } from '../../../events';

const Wrapper = styled.div`
    margin-top: 20px;

    @media ${Device.tab} {
        margin-top: 24px;
    }

    @media ${Device.desktop} {
        margin-top: 0px;

        &:not(:last-child) {
            margin-bottom: 32px;
        }
    }
`;

const Title = styled.div`
    color: ${(props) => props.theme.color.DARK_GREY};
    font-family: Gilroy;
    font-weight: 600;
    font-size: 30px;
    line-height: 120%;
    margin-bottom: 32px;

    @media ${Device.tab} {
        font-weight: normal;
        font-size: 44px;
        line-height: 110%;
        margin-bottom: 40px;   
    }

    @media ${Device.desktop} {
        font-size: 48px;
        line-height: 105%;
        margin-bottom: 32px;
    }
`;

const FolderTitleHolder = styled.span`
    color: ${(props) => props.theme.color.DARK_GREY};
    cursor: pointer;
`;

const ArrowImageHolder = styled.span`
    display: inline-block;
    height: 8px;
    width: 12px;
    vertical-align: middle;

    @media ${Device.tab} {
        height: 12px;
        width: 14px;
    }

    @media ${Device.desktop} {
        height: 10px;
    }
`;

const FolderTitle = styled.span<{showAnswer: boolean}>`
    color: ${(props) => (props.showAnswer ? props.theme.color.DARK_GREY : props.theme.color.SUVA_GREY)};
    font-family: Gilroy;
    font-weight: 600;
    font-size: 24px;
    line-height: 155%;
    margin-right: 6px;
    vertical-align: middle;

    @media ${Device.tab} {
        font-size: 26px;
        line-height: 140%;
        margin-right: 12px;
    }

    @media ${Device.desktop} {
        font-size: 30px;
        line-height: 140%;
    }
`;

const FolderTitleDescription = styled.div<{ showAnswer?: boolean }>`
    color: ${(props) => (props.showAnswer && props.theme.color.DARK_GREY)};
    display: ${(props) => (props.showAnswer ? 'block' : 'none')};
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    max-width: 312px;
    margin-top: 4px;
    margin-left: auto;
    margin-right: auto;

    @media ${Device.tab} {
        font-size: 20px;
        max-width: 464px;
        margin-top: 4px;
    }

    @media ${Device.desktop} {
        margin-top: 7px;
    }
`;

interface ContentAccordionProps {
    featurePageSectionObj: featurePageSectionObjResponse,
    activeIndex: number,
    setActiveIndex: (value: number) => void;
    children?: React.ReactNode;
}

const ContentAccordion = (props: ContentAccordionProps) => {
    const {
        featurePageSectionObj, activeIndex, setActiveIndex, children,
    } = props;

    const onClickedTitle = (headlineName, index, categoryName) => () => {
        setActiveIndex(activeIndex === index ? -1 : index);

        trackEvent(CLICKED_FEATURES_HEADLINE, {
            ...trackingPayload,
            headline_name: headlineName,
            category_name: categoryName,
            auto_expanded: false,
        });
    };

    return (
        <div>
            <Title>
                <Font tagType='text' font='h2VariantTwo'>
                    {featurePageSectionObj.title}
                </Font>
            </Title>
            {children}
            {featurePageSectionObj.FI_DATA.map((data, index) => (
                <Wrapper key={data.id}>
                    <FolderTitleHolder
                        key={data.id}
                        onClick={onClickedTitle(data.title, index, featurePageSectionObj.title)}
                    >
                        <FolderTitle showAnswer={activeIndex === index}>
                            {data.title}
                        </FolderTitle>
                        <ArrowImageHolder>
                            <Image
                                icon={activeIndex === index ? arrowUpDark : arrowDownFade}
                                loadingType='lazy'
                                alt='arrow icon'
                            />
                        </ArrowImageHolder>
                    </FolderTitleHolder>
                    <FolderTitleDescription showAnswer={activeIndex === index}>
                        {data.description}
                    </FolderTitleDescription>
                </Wrapper>
            ))}
        </div>
    );
};

ContentAccordion.defaultProps = {
    children: null,
};

export default ContentAccordion;
