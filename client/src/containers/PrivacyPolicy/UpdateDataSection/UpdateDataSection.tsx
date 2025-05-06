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
    ColoredSpan,
} from '../PrivacyStyled/PrivacyStyled';

const UpdateDataSection = () => {
    return (
        <>
            <SectionContainer>
                <TitleTextHolder>
                    <TitleText tagType='text' font='h1'>
                        How do you update your personal data? 💻
                    </TitleText>
                </TitleTextHolder>

                <WidthHolder>
                    <CardInfo font='p' tagType='text' color='SUVA_GREY'>
                        The information contained in our records must be both
                        accurate and current. If you wish to update data about
                        you which is inaccurate or incorrect, we shall provide
                        self-help tools for you to directly review or update
                        certain aspects of your personal data in our records.
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
                                If your personal data changes during the course
                                of your engagement with us, please use these
                                self-help tools to update that data, or email us
                                at
                                <ColoredSpan color='FOREST_GREEN'>
                                    &nbsp;privacy@fi.money&nbsp;
                                </ColoredSpan>
                            </Font>
                        </PrivacyLastCard>
                    </div>

                    <div>
                        <PrivacyLastCard>
                            <Font
                                tagType='text'
                                font='pSmallVariantOne'
                                color='TUNDORA_2'
                            >
                                However, epiFi shall be entitled to refuse
                                access to personal data or information,
                                including sensitive personal data or information
                                in certain cases; for instance, where providing
                                access to such information may infringe the
                                privacy of another individual.
                            </Font>
                        </PrivacyLastCard>
                    </div>
                </CardHolder>
            </SectionContainer>
            <Bar />
        </>
    );
};

export default UpdateDataSection;
