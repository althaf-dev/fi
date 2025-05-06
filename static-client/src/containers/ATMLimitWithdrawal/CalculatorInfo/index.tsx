/**
 * @file CalculatorInfo
 * This component renders a list of calculator links in a grid format.
 * Each calculator link includes an icon and a name.
 */

import React from 'react';
import { CalculatorCard, CalculatorContainer, CalculatorGrid, CalculatorIcon, CalculatorLink, CalculatorName, CalculatorTitle } from '../styles';
import { calculators } from '../constants';

const CalculatorInfo: React.FC = () => (
    <CalculatorContainer>
      <CalculatorTitle>More calculators</CalculatorTitle>
      <CalculatorGrid>
        {calculators.map((calculator, index) => (
          <CalculatorLink key={index} as="a" href={calculator.href}>
            <CalculatorCard>
              <CalculatorIcon src={calculator.imgSrc} />
              <CalculatorName>{calculator.name}</CalculatorName>
            </CalculatorCard>
          </CalculatorLink>
        ))}
      </CalculatorGrid>
    </CalculatorContainer>
  );

export default CalculatorInfo;
