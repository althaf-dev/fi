import React from 'react';

import { STEPS_DATA } from '../constants';

import {
  InstructionsContainer,
  StepsContainer,
  InstructionsDescription,
  InstructionsTitle,
} from './styles';
import StepCard from './StepCard';

const Instructions: React.FC<{}> = () => (
  <InstructionsContainer>
    <InstructionsTitle>How to apply</InstructionsTitle>
    <InstructionsDescription>Follow the below steps & you're all set!</InstructionsDescription>
    <StepsContainer>
      {
        STEPS_DATA.map((step, index) => (
          <StepCard key={index} {...step} index={index} />
        ))
      }
    </StepsContainer>
  </InstructionsContainer>
);

export default Instructions;
