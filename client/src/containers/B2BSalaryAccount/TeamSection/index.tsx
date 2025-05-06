/**
 * @file Team Section
 */
import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';

import { PersonCard } from '../../../components';

const GridHolder = styled.div<{ length: number }>`
    @media ${Device.tab} {
        display: grid;
        grid-template-columns: repeat(${(props) => props.length}, 1fr);
        gap: 52px;
        margin: 0px -40px;
        padding: 0px 40px;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    @media ${Device.desktop} {
        margin: 0px -145px;
        padding: 0px 145px;
    }
`;

interface TeamSectionProps {
    item: any;
}
const TeamSection = (props: TeamSectionProps) => {
    const { item } = props;
    const { list } = item;

    return (
        <GridHolder length={list.length}>
            {list.map((value) => (
                <PersonCard
                    key={value.name}
                    profileUrl={value.profile_url}
                    name={value.name}
                    position={value.position}
                    description={value.description}
                    previousInfo={value.previous_info}
                    fallBackImageUrl={value.fallback_image_url}
                    socialMediaUrls={value?.social_media_urls}
                    externalPage
                />
            ))}
        </GridHolder>
    );
};
export default TeamSection;
