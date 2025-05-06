import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Flex, Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { MerchantData } from '../MerchantData/MerchantData';
import CommonInsightPage from '../CommonInsightPage/CommonInsightPage';
import TextIconSkeleton from '../TextIconSkeleton/TextIconSkeleton';

const Wrapper = styled.div`
    padding: 0px 20px;
    width: 100%;
    margin: 0px auto;
`;

const TopImage = styled.div`
    min-width: 100px;
    height: 100px;

    @media ${Device.desktop} {
        min-width: 148px;
        height: 148px;
    }
`;

const SecondImage = styled.div`
    width: 72px;
    height: 72px;
    margin-right: 16px;
    margin-top: 5px;

    @media ${Device.desktop} {
        width: 116px;
        height: 116px;
        margin-right: 36px;
    }
`;
const SingleWrapper = styled.div`
    max-width: 220px;
    width: 100%;
    margin: auto;

    @media ${Device.desktop} {
        max-width: 300px;
    }
`;

const Text = styled.div<{ type: string }>`
    color: ${(props) =>
        props.type === 'FOOD'
            ? props.theme.color.PINK
            : props.theme.color.PASTEL_BLUE};
    font-style: normal;
`;

const SubText = styled(Text)`
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    @media ${Device.desktop} {
        font-size: 20px;
        line-height: 26px;
    }
`;

const TextOne = styled(Text)`
    font-family: Gilroy;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;

    @media ${Device.desktop} {
        font-size: 64px;
        line-height: 77px;
    }
`;

const TextTwo = styled(Text)`
    font-family: Gilroy;
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;

    @media ${Device.desktop} {
        font-size: 42px;
        line-height: 54px;
    }
`;

const Brand = styled(Flex)`
    max-width: 280px;
    margin: 0px auto;
    @media ${Device.desktop} {
        max-width: 418px;
    }
`;
const TopBrand = styled(Brand)`
    justify-content: space-between;
    margin-bottom: 60px;
`;

const preTextOne = (
    <>
        <div>Ordering In is right</div>
        <div>That was easy, wasn't it?</div>
    </>
);

const preTextTwo = (
    <>
        <div>Shopping is right! </div>
        <div>That was easy, wasn't it?</div>
    </>
);

const preTextThree = (value: string, category: string) => {
    return `You spent ₹${value} on these ${
        category === 'FOOD' ? 'food' : 'shopping'
    } apps in the last 3 months`;
};

const preTextErrorOne = 'Nice try! But, you spent more on Ordering In.';

const preTextErrorTwo = 'Nice try! But, you spent more on Shopping.';

interface SplurgeOnProps extends React.HTMLAttributes<HTMLElement> {
    category: any;
    merchantData: any[];
    isCorrectAnswer?: boolean;
    isReturning?: boolean;
    activePageNumber: number;
    email: string;
    previousInsight?: () => void;
    nextInsight?: () => void;
}

const SplurgeOn = ({
    category,
    merchantData,
    isCorrectAnswer,
    activePageNumber,
    isReturning = false,
    email = '',
    previousInsight,
    nextInsight,
}: SplurgeOnProps) => {
    const [topData, setTopData] = useState(null);
    const [secondData, setSecondData] = useState(null);

    useEffect(() => {
        if (merchantData && merchantData.length) {
            getMappedMerchantData();
        }
    }, [merchantData]);

    const getMappedMerchantData = () => {
        const top = MerchantData.filter(
            (res) => res.merchant === merchantData[0].merchant
        );

        setTopData(top[0]);
        if (merchantData && merchantData.length > 1) {
            const second = MerchantData.filter(
                (res) => res.merchant === merchantData[1].merchant
            );
            setSecondData(second[0]);
        }
    };

    return (
        <CommonInsightPage
            preText={
                !isReturning
                    ? isCorrectAnswer
                        ? category.category === 'FOOD'
                            ? preTextOne
                            : preTextTwo
                        : category.category === 'FOOD'
                        ? preTextErrorOne
                        : preTextErrorTwo
                    : preTextThree(
                          category && category.totalAmount,
                          category && category.catetory
                      )
            }
            email={email}
            qnText='What did you splurge on the most, in the last 3 months?'
            isReturning={isReturning}
            activePageNumber={activePageNumber}
            previousInsight={previousInsight}
            nextInsight={nextInsight}
        >
            {category ? (
                <Wrapper>
                    {merchantData && merchantData.length > 1 ? (
                        <>
                            <TopBrand>
                                <div>
                                    <SubText type={category.category}>
                                        You’re lovin’
                                    </SubText>
                                    <TextOne type={category.category}>
                                        {topData && topData.name} ₹
                                        {merchantData[0].totalAmount}
                                    </TextOne>
                                </div>
                                <TopImage>
                                    <Image
                                        icon={topData && topData.image}
                                        alt={topData && topData.name}
                                    />
                                </TopImage>
                            </TopBrand>
                            {merchantData.length >= 2 && (
                                <Brand>
                                    <SecondImage>
                                        <Image
                                            icon={
                                                secondData && secondData.image
                                            }
                                            alt={secondData && secondData.name}
                                        />
                                    </SecondImage>
                                    <div>
                                        <SubText type={category.category}>
                                            Trailed by
                                        </SubText>
                                        <TextTwo type={category.category}>
                                            {secondData && secondData.name}
                                            <br /> ₹
                                            {merchantData[1].totalAmount}
                                        </TextTwo>
                                    </div>
                                </Brand>
                            )}
                        </>
                    ) : (
                        <SingleWrapper>
                            <TextIconSkeleton
                                subText='You’re lovin’'
                                text={`${topData && topData.name} ₹
                                ${merchantData[0].totalAmount} `}
                                childIcon={topData && topData.image}
                                color={topData && topData.color}
                            />
                        </SingleWrapper>
                    )}
                </Wrapper>
            ) : (
                <></>
            )}
        </CommonInsightPage>
    );
};

export default SplurgeOn;
