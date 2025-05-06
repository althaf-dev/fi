import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { SVGS_URL } from '../../../constants/AssetConstants';

import { Image, Font } from '../../Abstract';

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 15px;
    margin: 10px;
    padding: 16px;
    width: 100%;

    @media ${Device.desktop} {
        border-radius: 20px;
        padding: 28px;
    }
`;

const FolderTitleHolder = styled.span`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    `;

const ArrowImageHolder = styled.span`
    display: inline-block;
    vertical-align: middle;
`;

const FolderTitle = styled(Font)<{ showAnswer: boolean }>`
    vertical-align: middle;

    @media ${Device.desktop} {
        width: 100%;
    }
`;

const FolderTitleDescription = styled(Font)<{ showAnswer?: boolean }>`
    display: ${(props) => (props.showAnswer ? 'block' : 'none')};
    margin-top: 4px;
    animation: fadeIn 800ms;

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(-8px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
`;

interface PaymentsAccordionProps {
    index: number;
    title: string;
    content: string;
    activeIndex: number;
    setActiveIndex: (value: number) => void;
}

const PaymentsAccordion = (props: PaymentsAccordionProps) => {
    const {
        index, title, content, activeIndex, setActiveIndex,
    } = props;

    const onClickedTitle = (currentIndex) => () => {
        setActiveIndex(activeIndex === currentIndex ? -1 : currentIndex);
    };

    return (
        <Wrapper>
            <FolderTitleHolder onClick={onClickedTitle(index)}>
                <FolderTitle font='h3' color='CHARCOAL_GREY' tagType='text' showAnswer={activeIndex === index}>
                    {title}
                </FolderTitle>
                <ArrowImageHolder>
                    <Image
                        icon={activeIndex === index ? `${SVGS_URL}feature-accordion-top-arrow.svg` : `${SVGS_URL}feature-accordion-bottom-arrow.svg`}
                        loadingType='lazy'
                        alt='arrow icon'
                        height='24px'
                        width='24px'
                    />
                </ArrowImageHolder>
            </FolderTitleHolder>
            <FolderTitleDescription font='h5VariantSix' color='SUVA_GREY' tagType='text' showAnswer={activeIndex === index}>
                {content}
            </FolderTitleDescription>
        </Wrapper>
    );
};

export default PaymentsAccordion;
