/**
 * @file RenderMainCalculatorSection
 *
 * @summary A React component that renders a main calculator section based on the data passed to it as props.
 */
import React from 'react';

import { CalculatorInputsSectionVOne } from '../../Calculators/styled';
import RenderComponentBasedOnComponetType from '../RenderComponentBasedOnComponetType';

interface IRenderMainCalculatorSection {
    data: any;
}

const RenderMainCalculatorSection = (props: IRenderMainCalculatorSection) => {
    const { data } = props;

    return (
        data?.map((item) => (
            <CalculatorInputsSectionVOne key={item.input_id} componentType={item.type}>
                <RenderComponentBasedOnComponetType item={item} />
            </CalculatorInputsSectionVOne>
        ))
    );
};

export default RenderMainCalculatorSection;
