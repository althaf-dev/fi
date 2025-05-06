import React from 'react';
import styled from 'styled-components';
import { PersonCard } from '../../../components';
import { Device } from '../../../Themes/Device';
import { ALL_EMPLOYEE_DATA } from '../../About/AboutTeamSection/EmployData';

const GridHolder = styled.div`
    display: grid;
    grid-gap: 34px;
    max-width: 282px;
    margin: auto;

    @media ${Device.tab} {
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
        max-width: 530px;
    }

    @media ${Device.desktop} {
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 1030px;
        grid-gap: 65px;
    }

    /* Card Style */
    & > div {
        display: block;
        width: auto;

        & > div:first-child {
            width: 282px;
            height: 288px;

            @media ${Device.tab} {
                width: 240px;
                height: 222px;
            }

            @media ${Device.desktop} {
                width: 300px;
                height: 305px;
            }
        }
    }
`;

const TeamGrid = () => (
    <GridHolder>
        {ALL_EMPLOYEE_DATA.map((value) => (
            <PersonCard
                key={value.name}
                profileUrl={value.profileUrl}
                name={value.name}
                position={value.position}
                description={value.description}
                previousInfo={value.previousInfo}
                fallBackImageUrl={value.fallBackImageUrl}
                loadingType={value.loadingType}
            />
        ))}
    </GridHolder>
);

export default TeamGrid;
