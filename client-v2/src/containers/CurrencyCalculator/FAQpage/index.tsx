import * as React from 'react';
import FAQSection from '../../../components/FAQv2/FAQSection/index';
// import { InfoSection } from '../InfoSection/index';
import { getFaqData } from '@/rtk/components/forexCalculatorBudget/saga';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { constructPayloadWithCommonInfo } from '@/utils/apiClient';
import { setErrorMessage } from '@/rtk/components/forexCalculatorBudget/reducer';
import CalculatorInfo from '../../../components/CalculatorInfo/index';
import {
    PageContainer, FooterSection, Disclaimer
} from './styles';
// import { content } from '../constants';

export const FAQPage = () => {
    const { faqCategory } = useAppSelector((state) => state?.forexCalculator);
    const dispatch = useAppDispatch();
    const getFAQ = () => new Promise((resolve, reject) => {
        try {
            dispatch(getFaqData(constructPayloadWithCommonInfo({
                resolve,
                reject,
            })));
        } catch (e) {
            reject(e);
        }
    });

    React.useEffect(() => {
        getFAQ().catch(() => {
            setTimeout(() => {
                dispatch(setErrorMessage({ error: '' }));
            }, 2000);
        });
    }, []);

    return (
        <PageContainer>
            {/* <ContentWrapper>
                <InfoSection
                    title='How do ATM limits work?'
                    content={content.atmLimit}             // content should be uncommented when the content is available.
                />                                  // imports should be uncommented accordingly
                <InfoSection
                    title='How does this calculator use your inputs?'
                    content={content.calcUsage}
                />
            </ContentWrapper> */}

            <FAQSection data={faqCategory} />
            <Disclaimer>
                Disclaimer: The above content is for informational purposes only and is not meant to be taken as investment,
                financial, or any other kind of advice. This is not a solicitation, recommendation, endorsement,
                or offer to buy or sell any securities or other financial instruments.
            </Disclaimer>
            <CalculatorInfo />
            <FooterSection />
        </PageContainer>
    );
};
