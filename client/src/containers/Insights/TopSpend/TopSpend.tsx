import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MerchantData } from '../MerchantData/MerchantData';
import { Device } from '../../../Themes/Device';
import CommonInsightPage from '../CommonInsightPage/CommonInsightPage';
import TextIconSkeleton from '../TextIconSkeleton/TextIconSkeleton';

const Wrapper = styled.div`
    max-width: 220px;
    width: 100%;
    margin: auto;

    @media ${Device.desktop} {
        max-width: 300px;
    }
`;

interface TopSpendProps extends React.HTMLAttributes<HTMLElement> {
    topMerchantData: any;
    activePageNumber: number;
    isReturning?: boolean;
    email: string;
    nextInsight?: () => void;
    previousInsight?: () => void;
}

const TopSpend = ({
    topMerchantData,
    activePageNumber,
    isReturning = false,
    email = '',
    nextInsight,
    previousInsight,
}: TopSpendProps) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const topData = MerchantData.filter(
            (res) => res.merchant === topMerchantData.merchant
        );
        setData(topData[0]);
    }, [topMerchantData]);

    return (
        <CommonInsightPage
            preText='Did we pique your curiosity? Our crystal ball has more in store 🔮'
            email={email}
            qnText='On which brand did you spend the most in the last 90 days?'
            isReturning={isReturning}
            activePageNumber={activePageNumber}
            previousInsight={previousInsight}
            nextInsight={nextInsight}
        >
            <Wrapper>
                <TextIconSkeleton
                    subText='Top Spend '
                    text={`${data && data.name} ₹${
                        topMerchantData.totalAmount
                    }`}
                    childIcon={data && data.image}
                    color={data && data.color}
                />
            </Wrapper>
        </CommonInsightPage>
    );
};

export default TopSpend;
