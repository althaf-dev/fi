/**
 * @file MobileCardSection: use to show mobile design variant one card section
 */
import React from 'react';

import { MobileCalculatorInputsSection, OrderSection } from './styled';

interface IMobileCardSectionProps {
    remaningCalculatorInputFields: Array<any>;
    fireCalcMobileSectionRef: any;
    renderComponentBasedOnComponentType: (item: any, index: number) => React.ReactElement | null;
}

const MobileCardSection = (props: IMobileCardSectionProps) => {
    const { remaningCalculatorInputFields, fireCalcMobileSectionRef, renderComponentBasedOnComponentType } = props;

    return (
        <>
            {remaningCalculatorInputFields?.map((item, index) => (
                <MobileCalculatorInputsSection ref={fireCalcMobileSectionRef[index]} key={item.id}>
                    <OrderSection font='pSmallVariantEight' tagType='p' color='MONOCHROME_STEEL'>
                        {index + 1}
                        &nbsp;of&nbsp;
                        {remaningCalculatorInputFields?.length}
                    </OrderSection>
                    {renderComponentBasedOnComponentType(item, index)}
                </MobileCalculatorInputsSection>
            ))}
        </>
    );
};

export default MobileCardSection;
