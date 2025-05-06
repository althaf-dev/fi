import React, { useState } from 'react';
import styled from 'styled-components';

import { PrimaryButton, Image, Flex, Font } from '../../../components';

import { Device, WINDOW_SIZE } from '../../../Themes/Device';
import CommonModalPage from '../../../components/CommonModalPage/CommonModalPage';
import { MerchantData } from '../MerchantData/MerchantData';
import { useWindowDimensions } from '../../../hooks';

const ContentWrapper = styled.div`
    width: 296px;
    margin: 0px auto;

    @media ${Device.desktop} {
        padding: 56px 36px 36px;
        flex-basis: 50%;
        width: 50%;
        background: #383838;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Button = styled.div`
    margin: 82px 0 24px;
    @media ${Device.desktop} {
        width: 225px;
        margin: auto 0 0 auto;
    }
`;

const IconsHolder = styled(Flex)`
    align-items: center;
`;

const IconHolder = styled.div`
    width: 80px;
    height: 80px;

    &:not(:last-child) {
        margin-right: 16px;
    }

    @media ${Device.desktop} {
        width: 130px;
        height: 130px;

        &:not(:last-child) {
            margin-right: 26px;
        }
    }
`;

const IconsHolderOne = styled(IconsHolder)`
    justify-content: flex-end;
    margin-bottom: 16px;

    @media ${Device.desktop} {
        margin-bottom: 26px;
    }
`;

const IconsHolderTwo = styled(IconsHolder)``;

const Merchants = styled.div`
    @media ${Device.desktop} {
        margin: 140px auto auto;
        width: 481px;
    }
`;

interface SwipeSectionProps {
    activePageNumber?: number;
    onClose?: () => void;
    onContinue?: (cardtype: number) => void;
}

const SwipeSection = (props: SwipeSectionProps) => {
    const { width } = useWindowDimensions();

    return (
        <CommonModalPage
            qnText='Your favourites in last 90 days'
            activePageNumber={props.activePageNumber}
            onClose={props.onClose}
            type={2}
        >
            <ContentWrapper>
                {width > WINDOW_SIZE.DESKTOP && (
                    <Font tagType='text' font='h4VariantOne' color='SILVER_2'>
                        Tap continue to reveal
                    </Font>
                )}
                <Merchants>
                    <IconsHolderOne>
                        {MerchantData.slice(0, 3).map((item, index) => (
                            <IconHolder key={index}>
                                <Image icon={item.image} alt={item.name} />
                            </IconHolder>
                        ))}
                    </IconsHolderOne>
                    <IconsHolderTwo>
                        {MerchantData.slice(3).map((item, index) => (
                            <IconHolder key={index}>
                                <Image icon={item.image} alt={item.name} />
                            </IconHolder>
                        ))}
                    </IconsHolderTwo>
                </Merchants>
                <Button>
                    <PrimaryButton
                        label='CONTINUE'
                        disabled={false}
                        onClick={() => props.onContinue(1)}
                    />
                </Button>
            </ContentWrapper>
        </CommonModalPage>
    );
};

SwipeSection.defaultProps = {
    onClose: () => {},
    onContinue: () => {},
};

export default SwipeSection;
