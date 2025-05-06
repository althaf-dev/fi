/**
 * @file CalculatorInfo
 * This component renders a list of calculator links in a grid format.
 * Each calculator link includes an icon and a name.
 */

import React from 'react';
import {
    CalculatorCard, CalculatorContainer, CalculatorGrid, CalculatorIcon, CalculatorLink, CalculatorName, CalculatorTitle
} from './styles';
import { calculators, Calculator } from './constants';

interface CalculatorInfoProps {
    cal?: Calculator;
}

const CalculatorInfo: React.FC<CalculatorInfoProps> = ({ cal }) => (
    <CalculatorContainer>
        <CalculatorTitle>More calculators</CalculatorTitle>
        <CalculatorGrid>
            {(cal ? [cal] : calculators).map((calculator) => (
                <CalculatorLink key={calculator.name} as='a' href={calculator.href}>
                    <CalculatorCard>
                        <CalculatorIcon src={calculator.imgSrc} />
                        <CalculatorName>{calculator.name}</CalculatorName>
                    </CalculatorCard>
                </CalculatorLink>
            ))}
        </CalculatorGrid>
    </CalculatorContainer>
);

CalculatorInfo.defaultProps = {
    cal: undefined,
};

export default CalculatorInfo;
