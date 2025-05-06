import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import CommonInsightPage from '../CommonInsightPage/CommonInsightPage';
import TextIconSkeleton from '../TextIconSkeleton/TextIconSkeleton';
import { MerchantData } from '../MerchantData/MerchantData';

const Wrapper = styled.div`
    max-width: 225px;
    width: 100%;
    margin: auto;

    @media ${Device.desktop} {
        max-width: 360px;
    }
`;

interface AmazonOrdersProps extends React.HTMLAttributes<HTMLElement> {
    data: any;
    activePageNumber: number;
    answer: number;
    isReturning?: boolean;
    email: string;
    nextInsight?: () => void;
}

const getMerchantData = (id) => {
    const merchant = MerchantData.filter((res) => res.merchant === id);

    return merchant[0];
};

const getMerchantString = (id: string, flag: boolean, isReturning: boolean) => {
    switch (id) {
        case 'AMAZON':
            return (
                <>
                    {!isReturning && (
                        <>
                            {flag ? (
                                <span>Awesome guess ⭐</span>
                            ) : (
                                <div>Nice try 🎯 </div>
                            )}
                        </>
                    )}
                    <span>
                        A particular Washington-based entrepreneur told us to
                        thank you, on his behalf!
                    </span>
                </>
            );
        case 'SWIGGY':
            return (
                <>
                    {!isReturning && (
                        <>
                            {flag ? (
                                <div>Lucky guess👏</div>
                            ) : (
                                <div>Nice try 🎯 </div>
                            )}
                        </>
                    )}
                    <div>
                        Does Swiggy's delivery executive pop up on your Facebook
                        friend suggestions?
                    </div>
                </>
            );
        case 'ZOMATO':
            return (
                <>
                    {!isReturning && (
                        <>
                            {flag ? (
                                <div>Someone's good at math✨</div>
                            ) : (
                                <div>Nice try 🎯 </div>
                            )}
                        </>
                    )}
                    <div>
                        Are you on a first-name basis with Zomato's delivery
                        partner?
                    </div>
                </>
            );
        case 'BIGBASKET':
            return (
                <>
                    {!isReturning && (
                        <>
                            {flag ? (
                                <div>An educated guess 📖</div>
                            ) : (
                                <div>Nice try 🎯 </div>
                            )}
                        </>
                    )}
                    <div>Stocking up on those grocery must-haves, eh?</div>
                </>
            );
        case 'MYNTRA':
            return (
                <>
                    {!isReturning && (
                        <>
                            {flag ? (
                                <div>Great guess 💯</div>
                            ) : (
                                <div>Nice try 🎯 </div>
                            )}
                        </>
                    )}
                    <div>
                        Looks like Myntra parcels keep piling up at your
                        doorstep.
                    </div>
                </>
            );
        case 'FLIPKART':
            return (
                <>
                    {!isReturning && (
                        <>
                            {flag ? (
                                <div> Impressive guess 🤔</div>
                            ) : (
                                <div>Nice try 🎯 </div>
                            )}
                        </>
                    )}
                    <div>
                        Looks like Flipkart parcels keep piling up at your
                        doorstep.
                    </div>
                </>
            );

        default:
            return (
                <>
                    !isReturning && <div>Nice try 🎯 </div>
                </>
            );
    }
};

const AmazonOrders = ({
    data,
    answer,
    isReturning = false,
    email = '',
    activePageNumber,
    nextInsight,
}: AmazonOrdersProps) => {
    const [merchant, setMerchant] = useState(null);
    useEffect(() => {
        if (data && data.merchant) {
            setMerchant(getMerchantData(data.merchant));
        }
    }, [data]);

    return (
        <CommonInsightPage
            preText={
                !isReturning
                    ? data && data.totalOrders === answer
                        ? getMerchantString(data.merchant, true, false)
                        : data && getMerchantString(data.merchant, false, false)
                    : getMerchantString(data.merchant, true, true)
            }
            qnText={`In the past 3 months, how many orders did you place on ${
                merchant && merchant.name
            }?`}
            isReturning={isReturning}
            email={email}
            nextInsight={nextInsight}
            activePageNumber={activePageNumber}
        >
            <Wrapper>
                <TextIconSkeleton
                    subText=''
                    text={
                        data &&
                        `${merchant && merchant.name} ${data.totalOrders}${
                            data.totalOrders > 1 ? ' orders' : ' order'
                        }`
                    }
                    childIcon={merchant && merchant.image}
                    color={merchant && merchant.color}
                ></TextIconSkeleton>
            </Wrapper>
        </CommonInsightPage>
    );
};

export default AmazonOrders;
