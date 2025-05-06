/* eslint-disable react/no-array-index-key */
/**
 * @file Brands Section
 */
import React from 'react';
import styled from 'styled-components';
import MIXINS from '@/Themes/mixins';
import { Device } from '@/Themes/Device';
import { Image } from '@/Abstract';
import PopUpComponent4X from '@/containers/CreditCardEligibility/LandingPageV2/PopUpComponent4X';
import { magnifyUrl } from '@/constants/AppConstant';
import { PNGS_URL, SVGS_URL } from '@/constants/AssetConstants';

const BrandSectionTitle = styled.div`
    color: ${(props) => props.theme.color.WHITE};
    text-align: center;
    ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 700,
        size: '24px',
        lineHeight: '34px',
    })};
        padding-bottom: 24px;

    @media ${Device.phone} {
        padding-top: 50px;
    };
    
    @media ${Device.tab} {
        ${MIXINS.FontMixin({
        weight: 600,
        size: '44px',
        lineHeight: '56px',
    })};
        padding-bottom: 36px;
        max-width: 768px;
        text-align: start;
    }

    @media ${Device.desktop} {
        ${MIXINS.FontMixin({
        size: '52px',
        weight: 600,
        lineHeight: '76px',
    })};
        padding: 0px 85px 48px;
        margin: 0 auto;
        width: 100%;
        max-width: 1440px;
        text-align: center;
        background-color: #F9ECC8;
        background: radial-gradient(#FBF3E6 0%, #F1CE9B 100%);
        -webkit-background-clip: text !important;
        -moz-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        -moz-text-fill-color: transparent !important;
    }
`;

const Wrapper = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: space-between;

        .reward-section {
            display:flex;
            flex-direction: column;
        }

        @media ${Device.tab} {
        }

        @media ${Device.desktop} {
            flex-direction: row;
            margin: 0 20px 0 20px;

            .cashback-section {
                flex-basis: 40%;
                margin-left: 26px;
            }

            .reward-section {
                display:flex;
                flex-direction: row;
                justify-content: space-between;
                flex-basis: 55%;
                margin-right: 4px;
            }
        };
`;

const RewardsTag = styled.div`

        border-radius: 12px;
        padding: 4px 8px;
        background: #E1A882;
        color: #241509;
        width: fit-content;
        font-weight: 400;
        font-size: 12px;
        line-height: 133%;
        font-family: Inter;
        margin-bottom: 15px;

    @media ${Device.desktop} {
        font-size: 18px;
    }
`;

const RewardsTitle = styled.div`
        color: #F6F9FD;
        font-size: 58px;
        font-weight: 800;
        line-height: 55px;
        font-family: Gilroy,sans-serif;
        margin-bottom: px;
`;

const CashBackCard = styled.div`

    .outer-container {
        display: flex;
        flex-direction: row;
        padding: 35px 30px;
        border-radius: 58px;
        border: 1px solid #F1CE9B;
        background: linear-gradient(183deg, #201207 1.42%, rgba(32, 18, 7, 0.00) 96.8%);
        
        border-bottom-right-radius:25px;
        border-bottom-left-radius: 25px;
        border-bottom: none;
    }

    .title {
        font-family: Gilroy;
        font-size: 68px;
        font-weight: 800;
        line-height: 110px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
    }

    .details-col {
        flex-basis: 50%;
    }

    .poster-col {
        flex-basis: 50%;
    }

    .details-col .detail {
        width: 147px;
    }

    .view-details .modal {
        display: block;
    }

    .view-details .sub-title {
        color: #F1CE9B;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
    }

    .text-reward {
        color: #FFFFFF;
        font-family: Gilroy;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        display: inline;
    }

    .reward-sub-title {
        color: #FFFFFF;
        font-family: Gilroy;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        display: inline;
    }

    @media ${Device.tab} {
    
        .reward-section {
            flex-direction: column;
        }

        .poster-col {
            display: block;
        }

        .view-details .sub-title {
            display: block;
        }

        .poster img {
            object-fit: contain;
            height: 255px;
        }

        .detail .text-reward {
            color: #F6F9FD;
            font-size: 58px;
            font-weight: 800;
            line-height: 55px;
            font-family: Gilroy,sans-serif;
        }

        .detail .reward-sub-title {
            font-size: 24px;
            font-weight: 600;
            line-height: 32px;
            color: #F6F9FD;
            margin-bottom: 20px;
        }

    }

    @media ${Device.desktop} {
        width: 487px;
        
        border-bottom: none;
        border-bottom-right-radius: 58px;
        border-bottom-left-radius: 58px;

        .outer-container {
            flex-direction: row;
            justify-content: space-between;
            height: 330px;
        }

        .view-details {
            position: relative;
            width: 100%;
            margin-top: -75px;
            margin-left: 31px;
        }

        .poster-col {
            display: block;
        }

        .poster img {
            object-fit: contain;
            height: 210px;
        }

        .title {
            font-family: Gilroy;
            font-size: 98px;
            font-weight: 800;
            line-height: 110px;
            letter-spacing: 0em;
            text-align: left;
            color: #ffffff;
        }

        .detail .text-reward {
            color: #FFFFFF;
            font-family: Gilroy;
            font-size: 24px;
            font-weight: 600;
            line-height: 28px;
            letter-spacing: 0em;
            text-align: left;
            display: block;
            width: 100%;
        }

        .reward-sub-title {
            color: #FFFFFF;
            font-family: Gilroy;
            font-size: 24px;
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            display: inline;
        }

        .view-details .sub-title {
            display: none;
        }

        .poster-col {
            display: block;
        }

        .details-col .detail {
            width: 100%;
        }

        .view-details .modal {
            display: block;
            position:relative;
            margin-top: 10px;
            width: 100%;
        }

    }
`;

const RewardsSection1 = styled.div`
        height: 160px;
        width: 160px;
        margin: 31px 0px 20px 0px;
        padding: 16px 24px;
        border-radius: 32px;
        border: 1px solid #F1CE9B;
        background: linear-gradient(183deg, #201207 1.42%, rgba(32, 18, 7, 0.00) 96.8%);
        border-bottom: none;

        .title {
            color: #F6F9FD;
            font-size: 32px;
            font-weight: 800;
            line-height: 30px;
            font-family: Gilroy,sans-serif;
        }

        .text-reward {
            color: #FFFFFF;
            font-family: Gilroy;
            font-size: 32px;
            font-weight: 800;
            line-height: 30px;
            letter-spacing: 0em;
            text-align: left;
            display: block;
        }

        .reward-sub-title {
            color: #FFFFFF;
            font-family: Gilroy;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            display: inline;
        }

        .reward-description {
            display: none;
        }

        .reward-upcoming {
            // border-left: 2px solid transparent;
            &-tag {
                color: #E1A882;
                border: 1px solid #E1A882;
                display: inline-block;
                padding: 2px 5px 2px 5px;
                border-radius: 15px;
                line-height: 16px;
                gap: 4px;
                font-family: Inter;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                letter-spacing: 0px;
                text-align: left;
            }
    
            &-sub-heading {
                font-family: Gilroy;
                font-size: 14px;
                font-weight: 1000;
                line-height: 18px;
                letter-spacing: 0em;
                text-align: left;
                color: #F6F9FD;
                margin-top: 5px;
            }
    
            &-heading {
                font-family: Gilroy;
                font-size: 32px;
                font-weight: 800;
                line-height: 32px;
                letter-spacing: 0em;
                text-align: left;
                color: #F6F9FD;
            }
    
        }

        @media ${Device.tab} {

            height: 250px;
            width: 250px;
            margin: 60px 0px 20px 0px;
            padding: 16px 32px;
            border-radius: 32px;
            border: 1px solid #F1CE9B;
            background: linear-gradient(183deg, #201207 1.42%, rgba(32, 18, 7, 0.00) 96.8%);
            border-bottom: none;
    
            .title {
                color: #F6F9FD;
                font-size: 60px;
                font-weight: 800;
                line-height: 40px;
                font-family: Gilroy,sans-serif;
            }
    
            .text-reward {
                color: #FFFFFF;
                font-family: Gilroy;
                font-size: 55px;
                font-weight: 800;
                line-height: 55px;
                letter-spacing: 0em;
                text-align: left;
                display: block;
            }
    
            .reward-sub-title {
                color: #FFFFFF;
                font-family: Gilroy;
                font-size: 25px;
                font-weight: 600;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: left;
                display: inline;
            }
    
            .reward-description {
                display: none;
            }
    
            .reward-upcoming {
                &-tag {
                    color: #E1A882;
                    border: 1px solid #E1A882;
                    display: inline-block;
                    padding: 2px 5px 2px 5px;
                    border-radius: 15px;
                    font-size: 12px;
                    line-height: 16px;
                    gap: 4px;
                }
        
                &-sub-heading {
                    font-family: Gilroy;
                    font-size: 20px;
                    font-weight: 1000;
                    line-height: 18px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: #F6F9FD;
                    margin-top: 5px;
                }
        
                &-heading {
                    font-family: Gilroy;
                    font-size: 55px;
                    font-weight: 800;
                    line-height: 55px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: #F6F9FD;
                }
            }
        }

        @media ${Device.desktop} {
            width: 320px;
            margin: 0px 0px 20px 0px;
            height: 330px;
            border-radius: 58px;
            padding: 34px 32px;

            .title {
                font-size: 58px;
                font-weight: 800;
                line-height: 55px;
                font-family: Gilroy,sans-serif;
            }
    
            .text-reward {
                color: #FFFFFF;
                font-family: Gilroy;
                font-size: 58px;
                font-weight: 600;
                line-height: 55px;
                letter-spacing: 0em;
                text-align: left;
                display: block;
            }
    
            .reward-sub-title {
                color: #FFFFFF;
                font-family: Gilroy;
                font-size: 24px;
                font-weight: 600;
                line-height: 20px;
                letter-spacing: 0em;
                text-align: left;
                display: block;
            }


            .reward-description {
                display:block;
                font-size: 20px;
                font-weight: 700;
                line-height: 32px;
                background: radial-gradient(2061.25% 87.63% at 50.52% 50%, #FBF3E6 0%, #F3D3A5 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-top: 15px;
                font-family: Inter;
            }
        }
`;

const RewardsSection = styled.div`

        display: flex;
        flex-direction: row;
        border-radius: 58px;
        border: 1px solid #F1CE9B;
        background: linear-gradient(183deg, #201207 1.42%, rgba(32, 18, 7, 0.00) 96.8%);
        border-bottom: none;
        padding: 35px 30px;

        .details-col {
            flex-basis: 50%;
        }

        .poster-col {
            flex-basis: 50%;
        }

        .details-col .detail {
            width: 147px;
        }

        .view-details .modal {
            display: none;
        }

        .view-details .sub-title {
            color: #F1CE9B;
            font-family: Inter;
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
            margin-top: 12px;
        }

        .text-reward {
            color: #FFFFFF;
            font-family: Gilroy;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            display: inline;
        }

        .reward-sub-title {
            color: #FFFFFF;
            font-family: Gilroy;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            display: inline;
        }


        @media ${Device.tab} {
            flex-direction: row;
            height: 322px;

            .reward-section {
                flex-direction: column;
            }

            .poster-col {
                display: block;
            }

            .view-details .sub-title {
                display: block;
            }

            .poster img {
                object-fit: contain;
                height: 255px;
            }

            .detail .text-reward {
                color: #F6F9FD;
                font-size: 58px;
                font-weight: 800;
                line-height: 55px;
                font-family: Gilroy,sans-serif;
            }

            .detail .reward-sub-title {
                font-size: 24px;
                font-weight: 600;
                line-height: 32px;
                color: #F6F9FD;
                margin-bottom: 20px;
            }

        }

        @media ${Device.desktop} {
            flex-direction: column;
            justify-content: space-between;
            width: 320px;
            height: 330px;
            .poster-col {
                display: none;
            }

            .text-reward {
                color: #FFFFFF;
                font-family: Gilroy;
                font-size: 58px;
                font-weight: 800;
                line-height: 55px;
                letter-spacing: 0em;
                text-align: left;
                display: block;
                width: 100%;
            }

            .reward-sub-title {
                color: #FFFFFF;
                font-family: Gilroy;
                font-size: 24px;
                font-weight: 600;
                line-height: 20px;
                letter-spacing: 0em;
                text-align: left;
                display: inline-block;
                margin-top: 22px;
            }

            .view-details .sub-title {
                display: none;
            }

            .poster-col {
                display: none;
            }

            .details-col .detail {
                width: 100%;
            }

            .view-details .modal {
                display: block;
                position:relative;
                width: 100%;
            }

        }
`;

const BrandSectionContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 90%;
        padding-bottom: 62px;
        justify-content: space-between
        gap: 10%;
        max-width: 360px;

        @media ${Device.tab} {
            width: 80%;
            max-width: 768px;
            padding-bottom: 70px;
        }
        
        @media ${Device.desktop} {
            padding-bottom: 131px;
            width: 100%;
            max-width: 1440px;
            padding-left: 85px;
            padding-right: 85px;
        }
`;

const ViewDetailsText = styled.div`
        position: relative;
        bottom: 45px;
        left: 40px;
        display: none;

        @media ${Device.tab} {
            display: block;
            margin-top: 15px;
        }
        
        @media ${Device.desktop} {
            bottom: 25px;
            left: 0px;
            top: 0px;
            position: relative;
        }
`;

const ViewDetailsMobileView = styled.div`
    @media ${Device.phone} {
        width: 100%;

        .details-cards {
            margin: 30px auto 20px;
            padding: 10px 20px 10px 20px;
            border-radius: 19px;
        }

        .header-text {
            color: #FBF3E6;
            text-align: center;
            font-family: Gilroy;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
            margin: 0px auto 20px;
        }

        .content {
            display: flex;
            flex-direction: column;
        }

        .subContainer {
            display: flex;
            flex-direction: row;
            padding-bottom: 25px;
            }

        .imageWrapper {
            width: 48px;
            height: 48px;
            margin-right: 15px;
        }

        .textContainer {
                display: flex;
                flex-direction: column;
                justify-content: center;
        }

        .title {
            font-family: Gilroy;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            font-size: 14px;
            background: #F6F9FD;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-align: left;
        }

        .sub-title {
            color: #F1CE9B;
            font-size: 12px;
            font-weight: 400;
            text-align: left;
            font-family: Inter;
        }

    }

    @media ${Device.tab} {
        .header-text {
            margin: 8px auto 20px;
        }

        .title {
            font-size: 19.6px;
        }

        .sub-title {
            font-size: 16.8px;
        }

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .details-pop-up {
            display: none;
        }

        .details-cards {
            display: block;
        }
    }

    @media ${Device.desktop} {
        position: relative;
        width: 100%;
        .header-text {
            margin: 40px auto 20px;
        }

        .title {
            font-size: 19.6px;
        }

        .sub-title {
            font-size: 16.8px;
        }

        .details-pop-up {
            display: block;
        }

        .details-cards {
            display: none;
        }
    }
`;

const RewardsPopupContent = styled.div`
display: flex;
padding: 40px 50px;

.col-1 {
    display: flex;
    flex-direction: column;
    width: 44%;

    &-title {
        font-family: Gilroy;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        font-size: 14px;
        background: #F6F9FD;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: left;
        font-size: 166.37px;
    }

    &-sub-title {
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        text-align: left;
        font-family: Gilray;
        font-size: 38px;
    }
}


.line-seprator {
    width: 2px;
    background: linear-gradient(90deg, #25130B 0%, #F1CE9B 40%, #25130B 90%);
    margin: 16px 0;
}

.col-2 {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 70px;
    margin-top: 20px;

    &-sub-title {
        color: #fff;
        font-size: 38px;
        font-weight: 600;
        text-align: left;
        font-family: Gilray;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    &-secondary-text {
        color: #FBF3E6;
        font-size: 24px;
        font-weight: 400;
        text-align: left;
        font-family: Inter;
    }
}
`;

const CashbackPopupContent = styled.div`

.card-title {
    display: block;
    width: 100%;
    text-align: center;
    font-family: Gilroy;
    font-size: 32px;
    font-weight: 600;
    line-height: 52px;
    letter-spacing: 0em;
    text-align: center;
    color: #FBF3E6;
    margin-top: 40px;
}

.card-body-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 1000px;
}

.col {
    flex-basis: 50%;
}

.details {
    display: flex;
    flex-direction: row;
    padding-bottom: 25px;
    margin-left: 39px;
    margin-top: 35px;

    &-image {
        width: 48px;
        height: 48px;
        margin-right: 15px;
    }

    &-heading {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &-title {
        font-family: Gilroy;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        font-size: 14px;
        background: #F6F9FD;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: left;
        font-size: 19.6px;
    }

    &-sub-title {
        color: #F1CE9B;
        font-size: 12px;
        font-weight: 400;
        text-align: left;
        font-family: Inter;
        font-size: 16.8px;
    }
}
`;

const RewardSection2Container = styled.div<any>`

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media ${Device.desktop} {
        .reward-upcoming {
            display: none;
        }
    }
`;

interface IBrandData {
  brandLogosMobile?: string;
  brandLogosDesktop?: string;
  title?: string;
  description?: string;
  subDescription?: string;
}

const cardDetails = {
    card1: {
        baseText: 'View details',
        className: 'MagnifiEligibility',
        headingText: '20% cashback weekend offer details',
        mobileHeadingText: 'How it works',
        cardDetails: {
            tag: 'WEEKENDS SPENDS',
            title: '20%',
            subTitle: 'cashback on your favourite brands',
            imgSrc: magnifyUrl('eligibility-rewards-logos.png'),
        },
        data: [
            {
                title: '20% off up to ₹100, 2 times a month',
                subtitle: 'Valid for min. order value of ₹400',
                imageUrl: `${PNGS_URL}magnifi-food-swiggy.png`
            },
            {
                title: '20% off up to ₹100, once a month',
                subtitle: 'Valid for min. 2 tickets. Min. order value of ₹400',
                imageUrl: `${PNGS_URL}magnifi-paytm.png`
            },
            {
                title: '20% off up to ₹100, once a month',
                subtitle: 'Valid for min. order value of ₹500',
                imageUrl: `${PNGS_URL}magnifi-blinkit-icon.png`
            }
        ]
    },
};

const BrandSection = (props: { brandData: IBrandData }) => {
    const { brandData } = props;
    return (
        <BrandSectionContainer>
            <BrandSectionTitle>{brandData.title}</BrandSectionTitle>
            <Wrapper>
                <div className='cashback-section'>
                    <CashBackCard>
                        <div className='outer-container'>
                            <div className='details-col'>
                                <div className='detail'>
                                    <RewardsTag>{cardDetails?.card1?.cardDetails?.tag}</RewardsTag>
                                    <div className='title'>{cardDetails?.card1?.cardDetails?.title}</div>
                                    <div className='text-reward'>
                                        {cardDetails?.card1?.cardDetails?.subTitle}
                                    </div>
                                </div>
                            </div>
                            <div className='poster-col'>
                                <div className='poster'>
                                    <Image
                                        icon={cardDetails?.card1?.cardDetails?.imgSrc}
                                        alt='Cashback Image'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='view-details'>
                            <ViewDetailsMobileView>
                                <div className='details-cards'>
                                    <div className='header-text'>{cardDetails.card1.mobileHeadingText}</div>
                                    <div className='content'>
                                        {cardDetails.card1.data?.map((item, index) => (
                                            <div className='subContainer' key={index}>
                                                <div className='imageWrapper'>
                                                    <Image
                                                        icon={item.imageUrl}
                                                        alt='card-image'
                                                        loadingType='lazy'
                                                        fallBackImage={`${SVGS_URL}magnifi-close-icon.svg`}
                                                    />
                                                </div>
                                                <div className='textContainer'>
                                                    <div className='title'>{item.title}</div>
                                                    <div className='sub-title'>{item.subtitle}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='details-pop-up'>
                                    <ViewDetailsText>
                                        <PopUpComponent4X
                                            baseText='View details'
                                            className='MagnifiEligibility4x'
                                            iconUrl={magnifyUrl('magnifi-right-arrow.svg')}
                                            style={{
                                                translate: 'translate(-23%, -50%)'
                                            }}
                                        >
                                            <CashbackPopupContent>
                                                <div className='card-title'>{cardDetails.card1.headingText}</div>
                                                <div className='card-body-container'>
                                                    <div className='card-body'>
                                                        {cardDetails.card1.data?.map((item, index) => (
                                                            <div className='col' key={index}>
                                                                <div className='details'>
                                                                    <div className='details-image'>
                                                                        <Image
                                                                            icon={item.imageUrl}
                                                                            alt='card-image'
                                                                            loadingType='lazy'
                                                                            fallBackImage={`${SVGS_URL}magnifi-close-icon.svg`}
                                                                        />
                                                                    </div>
                                                                    <div className='details-heading'>
                                                                        <div className='details-title'>{item.title}</div>
                                                                        <div className='details-sub-title'>{item.subtitle}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </CashbackPopupContent>
                                        </PopUpComponent4X>
                                    </ViewDetailsText>
                                </div>
                            </ViewDetailsMobileView>

                        </div>
                    </CashBackCard>
                </div>
                <div className='reward-section'>
                    <RewardsSection>
                        <div className='details-col'>
                            <div className='detail'>
                                <RewardsTag>ON WEEKENDS</RewardsTag>
                                <RewardsTitle>4x </RewardsTitle>
                                <div className='text-reward'>rewards </div>
                                <div className='reward-sub-title'>on select brands</div>
                                <div className='view-details'>
                                    <div className='modal'>
                                        <PopUpComponent4X
                                            baseText='View details'
                                            className='MagnifiEligibility4x'
                                            iconUrl={magnifyUrl('magnifi-right-arrow.svg')}
                                            style={{
                                                translate: 'translate(-57%, -50%)'
                                            }}
                                        >
                                            <RewardsPopupContent>
                                                <div className='col-1'>
                                                    <div className='col-1-title'>4x</div>
                                                    <div className='col-1-sub-title'>
                                                        reward points
                                                        <br />
                                                        every weekend
                                                    </div>
                                                </div>
                                                <div className='line-seprator' />
                                                <div className='col-2'>
                                                    <Image width='auto' height='auto' icon={`${PNGS_URL}magnifi-logo-rewards.png`} alt='card-image' loadingType='lazy' />
                                                    <div className='col-2-sub-title'>Flipkart, Uber, Makemytrip and Urban Company</div>
                                                    <div className='col-2-secondary-text'>Get 20 Fi-Coins for every ₹100 spent</div>
                                                </div>
                                            </RewardsPopupContent>

                                        </PopUpComponent4X>
                                    </div>
                                    <div className='sub-title'>Flipkart, Urban Company, Uber and MakeMyTrip</div>
                                </div>
                            </div>
                        </div>
                        <div className='poster-col'>
                            <div className='poster'>
                                <Image
                                    icon={magnifyUrl('eligibility-rewards-logos.png')}
                                    alt='Cashback Image'
                                />
                            </div>
                        </div>
                    </RewardsSection>
                    <RewardSection2Container>
                        <div className='reward'>
                            <RewardsSection1>
                                <RewardsTag>EVERYDAY</RewardsTag>
                                <div className='title'>1x</div>
                                <div className='text-reward'>rewards</div>
                                <div className='reward-sub-title'> on all spends</div>
                                <div className='reward-description'>Including rent & fuel</div>
                            </RewardsSection1>
                        </div>
                        <div className='reward-upcoming'>
                            <RewardsSection1>
                                <div className='reward-upcoming-tag'>Coming soon</div>
                                <div className='reward-upcoming-sub-heading'>Convert your</div>
                                <div className='reward-upcoming-heading'>spends to EMIs</div>
                            </RewardsSection1>
                        </div>
                    </RewardSection2Container>
                </div>
            </Wrapper>
        </BrandSectionContainer>
    );
};

export default BrandSection;
