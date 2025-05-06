import React from 'react';

import {
  CardTitle,
  CardWrapper,
  TextContent,
  CardImage,
  CardDescription,
  ImageWrapper,
} from '../styles';

interface StepCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({
  title,
  description,
  imageSrc,
  index,
}) => (
  <CardWrapper index={index}>
    {
      index % 2 === 0 ? (
        <>
          <TextContent index={index}>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </TextContent>
          <ImageWrapper index={index}>
            <CardImage src={imageSrc} alt={title} />
          </ImageWrapper>
        </>
      ) : (
        <>
          <ImageWrapper index={index}>
            <CardImage src={imageSrc} alt={title} />
          </ImageWrapper>
          <TextContent index={index}>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </TextContent>
        </>
      )
    }
  </CardWrapper>
);

export default StepCard;