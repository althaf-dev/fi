import React from 'react';

import { Font } from '../../../components/Abstract';
import {
    Bar,
    CardInfo,
    PrivacyLastCard,
    SectionContainer,
    TitleText,
    TitleTextHolder,
    WidthHolder,
    CardHolder,
    PrivacyCard,
    CardFooterInfo,
} from '../PrivacyStyled/PrivacyStyled';

const DataRetainSection = () => {
    return (
        <>
            <SectionContainer>
                <TitleTextHolder>
                    <TitleText tagType='text' font='h1'>
                        How long do we retain your personal data? ⏳
                    </TitleText>
                </TitleTextHolder>

                <WidthHolder>
                    <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                        As long as you have an account with us, your personal
                        data remains safeguarded by us. Upon permanent account
                        deactivation, the information remains retained for 12-24
                        months before deletion, anonymization or archival.
                    </CardInfo>
                </WidthHolder>

                <CardHolder>
                    <div>
                        <PrivacyLastCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                The Company will keep your personal data for as
                                long as is needed to carry out the purposes
                                we've described above, or as otherwise required
                                by law. Generally, this means we will keep your
                                personal data as long as your account is active
                                or as needed to provide our services.
                            </Font>
                        </PrivacyLastCard>
                    </div>

                    <div>
                        <PrivacyCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                We shall retain and use the information
                                collected by us as necessary to comply with our
                                legal obligations, resolve disputes or for other
                                business purposes. If you cancel/ deactivate/
                                unsubscribe your account with us, we are not
                                under any obligation to retain your information.
                            </Font>
                        </PrivacyCard>

                        <PrivacyLastCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                However, we may retain your information for
                                twenty-four (24) months after you cancel/
                                deactivate/ unsubscribe your account with us, as
                                our business practice.
                            </Font>
                        </PrivacyLastCard>
                    </div>
                </CardHolder>

                <WidthHolder>
                    <CardFooterInfo font='p' tagType='text' color='SUVA_GREY'>
                        Where we have no continuing legitimate business need to
                        process your personal data, we will either delete or
                        anonymize it or, if this is not possible (for example,
                        because your personal data has been stored in backup
                        archives), then we will securely store your personal
                        data and isolate it from any further processing until
                        deletion is possible.
                    </CardFooterInfo>
                </WidthHolder>
            </SectionContainer>
            <Bar />
        </>
    );
};

export default DataRetainSection;
