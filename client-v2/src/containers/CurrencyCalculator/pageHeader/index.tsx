import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, StyledSection, Title, SubTitle
} from './styles';

interface CurrencyCalculatorHeaderProps {}

const CurrencyCalculatorHeader: React.FC<CurrencyCalculatorHeaderProps> = () => (
    <div>
        <StyledSection>
            <Breadcrumb>
                <BreadcrumbItem>The Fi-Federal Debit Card</BreadcrumbItem>
            </Breadcrumb>
            <Title>Currency Convertor</Title>
            <SubTitle>Helpful in currency conversion for international travel</SubTitle>
        </StyledSection>
    </div>
);

export default CurrencyCalculatorHeader;
