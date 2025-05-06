import * as React from 'react';
import {
    InfoContainer,
    InfoTitle,
    InfoContent
}
    from './styles';

interface InfoSectionProps {
    title: string;
    content: string[];
  }

export const InfoSection: React.FC<InfoSectionProps> = ({ title, content }) => (
    <InfoContainer>
        <InfoTitle>{title}</InfoTitle>
        {content.map((item) => (
            <InfoContent>{item}</InfoContent>
        ))}
    </InfoContainer>
);
