/**
 * @file CountryLimits
 * This component displays a list of countries with their ATM withdrawal limits.
 * It includes a search bar to filter countries by name.
 *
 * CountryLimits component displays a list of countries with their ATM withdrawal limits.
 *
 * @param {CountryLimitsProps} props - The props for the component.
 * @param {any} props.countryLimitData - An array of country limit data objects.
 * @returns {JSX.Element} The rendered CountryLimits component.
 */
import React from 'react';
import { formatAmount } from '../utils';
import { CountryName, Divider, CountryContainer, CountryNotFound, CountryLimitContainer, TitleContainer, Title, ContentWrapper, CountryList, CountryRow, CountryInfo, FlagImage, LimitValue  } from './styles';


interface CountryData {
  country_name: string;
  country_flag: string;
  atm_limit: string;
}

interface CountryLimitsProps {
  countryLimitData: any;
  searchTerm: string;
}

const CountryLimits: React.FC<CountryLimitsProps> = ({ countryLimitData, searchTerm }) => {
  const countryData: CountryData[] = countryLimitData.map((country: any) => ({
    ...country,
    atm_limit: formatAmount(country?.atm_limit?.units, country?.atm_limit?.currency_code),
  }));

  const filteredCountries = countryData.filter(country =>
    country.country_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CountryLimitContainer role="main">
      <TitleContainer>
        <Title>DAILY LIMITS IN ALL COUNTRIES</Title>
      </TitleContainer>
      
      <CountryContainer>
        <ContentWrapper>
          {filteredCountries.length > 0 ? (
            <CountryList>
              {filteredCountries?.map((country, index) => (
                <React.Fragment key={`${country?.country_name}-${index}`}>
                  <CountryRow>
                    <CountryInfo>
                      <FlagImage>{country?.country_flag}</FlagImage>
                      <CountryName>{country?.country_name}</CountryName>
                    </CountryInfo>
                    <LimitValue>{country?.atm_limit}</LimitValue>
                  </CountryRow>
                  {index < filteredCountries.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </CountryList>
          ) : (
            <CountryNotFound>No search found</CountryNotFound>
          )}
        </ContentWrapper>
      </CountryContainer>
    </CountryLimitContainer>
  );
};

export default CountryLimits;
