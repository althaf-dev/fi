import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Flex, Image, Font } from '../../../components';
import { Device } from '../../../Themes/Device';
import { MerchantData } from '../MerchantData/MerchantData';
import CommonInsightPage from '../CommonInsightPage/CommonInsightPage';

const Wrapper = styled(Flex)`
    padding: 0px 20px;
    width: 100%;
    margin: 0px auto;
    flex-direction: column;
    align-items: center;
`;

const BrandWrapper = styled(Flex)<{ index: number }>`
    align-items: center;
    margin-left: ${(props) => props.index * 27 + 'px'};

    &:not(:last-child) {
        margin-bottom: 16px;
    }

    .element:not(:last-child) {
        margin-right: 16px;
    }
`;

const Text = styled.div`
    color: ${(props) => props.theme.color.WHITE};
`;

const TextOne = styled(Text)`
    font-family: Gilroy;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
`;

const TextTwo = styled(Text)`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
`;

const ImageWrapper = styled.span`
    width: 32px;
    height: 32px;

    @media ${Device.desktop} {
        width: 44px;
        height: 44px;
    }
`;

const String = styled(Font)`
    display: flex;
    align-items: center;
    max-width: 427px;

    &:not(:first-child) {
        margin-top: 24px;
    }

    @media ${Device.desktop} {
        &:not(:first-child) {
            margin-top: 32px;
        }
    }
`;

interface FavMerchantsProps extends React.HTMLAttributes<HTMLElement> {
    isReturning?: boolean;
    activePageNumber?: number;
    merchantData: any[];
    email: string;
    previousInsight?: () => void;
    nextInsight?: () => void;
}

const FavMerchants = ({
    isReturning = false,
    activePageNumber,
    merchantData,
    email = '',
    previousInsight,
    nextInsight,
}: FavMerchantsProps) => {
    const [merchantDetailArray, setMerchantDetailArray] = useState<any>(
        MerchantData
    );

    const [noMerchantData, setNoMerchantData] = useState([]);

    useEffect(() => {
        if (merchantData && merchantData.length) {
            let merchantObject = null;
            let sortedMerchanDetailArray = [];

            merchantData.forEach((obj) => {
                merchantObject = merchantDetailArray.filter(
                    (obj2) => obj.merchant === obj2.merchant
                );
                sortedMerchanDetailArray.push(merchantObject[0]);
            });

            setMerchantDetailArray(sortedMerchanDetailArray);

            const noDataMerchantArray = MerchantData.filter(
                (n) => !sortedMerchanDetailArray.includes(n)
            );

            setNoMerchantData(noDataMerchantArray);
        }
    }, [merchantData]);

    return (
        <CommonInsightPage
            preText='Your favorite merchants in the last 3 months'
            email={email}
            isReturning={isReturning}
            qnText='Your favourites in last 90 days'
            activePageNumber={activePageNumber}
            previousInsight={previousInsight}
            nextInsight={nextInsight}
        >
            <Wrapper>
                <div>
                    {merchantData &&
                    merchantData.length &&
                    merchantData[0].totalAmount ? (
                        <String
                            color='CHALK_GREY'
                            font='h5VariantThree'
                            tagType='text'
                        >
                            {' '}
                            {
                                <ImageWrapper className='element'>
                                    <Image
                                        icon={
                                            merchantDetailArray.length &&
                                            merchantDetailArray[0].image
                                        }
                                        alt={
                                            merchantDetailArray.length &&
                                            merchantDetailArray[0].name
                                        }
                                    />
                                </ImageWrapper>
                            }
                            &nbsp;&nbsp;First at ₹
                            {merchantData &&
                                merchantData.length &&
                                merchantData[0].totalAmount}
                            &nbsp;No surprises there!
                        </String>
                    ) : (
                        ''
                    )}
                    {merchantData &&
                    merchantData.length > 1 &&
                    merchantData[1].totalAmount ? (
                        <String
                            color='CHALK_GREY'
                            font='h5VariantThree'
                            tagType='text'
                        >
                            {
                                <ImageWrapper className='element'>
                                    <Image
                                        icon={
                                            merchantDetailArray.length &&
                                            merchantDetailArray[1].image
                                        }
                                        alt={
                                            merchantDetailArray.length &&
                                            merchantDetailArray[1].name
                                        }
                                    />
                                </ImageWrapper>
                            }
                            &nbsp;&nbsp;came second at ₹
                            {merchantData &&
                                merchantData.length &&
                                merchantData[1].totalAmount}
                            . &nbsp;
                        </String>
                    ) : (
                        <String
                            color='CHALK_GREY'
                            font='h5VariantThree'
                            tagType='text'
                        >
                            {
                                <ImageWrapper className='element'>
                                    <Image
                                        icon={
                                            noMerchantData.length &&
                                            noMerchantData[0].image
                                        }
                                        alt={
                                            noMerchantData.length &&
                                            noMerchantData[0].name
                                        }
                                    />
                                </ImageWrapper>
                            }
                            &nbsp;&nbsp;Wow. Take a bow! ₹0 spent here
                        </String>
                    )}
                    {merchantData &&
                    merchantData.length > 2 &&
                    merchantData[2].totalAmount ? (
                        <String
                            color='CHALK_GREY'
                            font='h5VariantThree'
                            tagType='span'
                        >
                            {
                                <ImageWrapper className='element'>
                                    <Image
                                        icon={
                                            merchantDetailArray.length &&
                                            merchantDetailArray[2].image
                                        }
                                        alt={
                                            merchantDetailArray.length &&
                                            merchantDetailArray[2].name
                                        }
                                    />
                                </ImageWrapper>
                            }
                            &nbsp;&nbsp;took the podium at ₹
                            {merchantData &&
                                merchantData.length &&
                                merchantData[2].totalAmount}
                            . &nbsp;
                        </String>
                    ) : (
                        <String
                            color='CHALK_GREY'
                            font='h5VariantThree'
                            tagType='span'
                        >
                            {
                                <ImageWrapper className='element'>
                                    <Image
                                        icon={
                                            noMerchantData.length &&
                                            noMerchantData[2].image
                                        }
                                        alt={
                                            noMerchantData.length &&
                                            noMerchantData[2].name
                                        }
                                    />
                                </ImageWrapper>
                            }
                            &nbsp;&nbsp;Looks like you spent ₹0
                        </String>
                    )}

                    {merchantData &&
                    merchantData.length > 3 &&
                    merchantData[3].totalAmount ? (
                        <String
                            color='CHALK_GREY'
                            font='h5VariantThree'
                            tagType='span'
                        >
                            {
                                <ImageWrapper className='element'>
                                    <Image
                                        icon={
                                            merchantDetailArray.length &&
                                            merchantDetailArray[3].image
                                        }
                                        alt={
                                            merchantDetailArray.length &&
                                            merchantDetailArray[3].name
                                        }
                                    />
                                </ImageWrapper>
                            }
                            &nbsp;&nbsp; Fourth at ₹
                            {merchantData &&
                                merchantData.length &&
                                merchantData[3].totalAmount}
                            . Who can forget?
                        </String>
                    ) : (
                        ''
                    )}
                    {merchantData &&
                    merchantData.length > 4 &&
                    merchantData[4].totalAmount ? (
                        <String
                            color='CHALK_GREY'
                            font='h5VariantThree'
                            tagType='span'
                        >
                            {
                                <ImageWrapper className='element'>
                                    <Image
                                        icon={
                                            merchantDetailArray.length &&
                                            merchantDetailArray[4].image
                                        }
                                        alt={
                                            merchantDetailArray.length &&
                                            merchantDetailArray[4].name
                                        }
                                    />
                                </ImageWrapper>
                            }
                            &nbsp;&nbsp;Curiously, only ₹
                            {merchantData &&
                                merchantData.length &&
                                merchantData[4].totalAmount}
                            . Hmmm.
                        </String>
                    ) : (
                        ''
                    )}
                </div>
            </Wrapper>
        </CommonInsightPage>
    );
};

export default FavMerchants;
