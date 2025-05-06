/**
 * @file Single Card Secion
 */
import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';

import { Font, Image } from '../../../components';
import { htmlSanitization } from '../../../utils';

const Container = styled.div`
    display: grid;
    overflow: hidden;
`;

const Card = styled.div<{ hasComingSoonSection: boolean }>`
    @media ${Device.tab} {
        padding: 20px 0px 0px 20px;
    }

    background: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    padding: ${(props) => (props.hasComingSoonSection ? '22px' : '22px')} 40px 0px 40px;
`;

const ImageHolder = styled.div<{ hasComingSoonSection: boolean }>`
    width: 268px;
    height: 210px;

    @media ${Device.tab} {
        width: 162px;
        height: 162px;
    }

    @media ${Device.desktop} {
        width: 270px;
        height: 228px;
        margin-top: ${(props) => (props.hasComingSoonSection ? '-62px' : '-100px')};
    }
`;

const Title = styled(Font)`
    text-align: center;
    width: 268px;
    text-align: left;

    @media ${Device.tab} {
        width: 274px;
    }

    @media ${Device.desktop} {
        width: 655px;
    }
`;

const ComingSoonBlock = styled.div`
    background: ${(props) => props.theme.color.LIGHT_YELLOW};
    border-radius: 20px;
    color: ${(props) => props.theme.color.TURMERIC};
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 10px;
    width: 102px;
    padding: 4px 8px;

    @media ${Device.desktop} {
        width: 180px;
        font-size: 20px;
        line-height: 24px;
        padding: 8px 16px;
    }
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

interface cardSectionProps {
    item: any;
}

const SingleCardSection = (props: cardSectionProps) => {
    const { item } = props;
    const { title, icon, coming_soon: comingSoon } = item || {};
    const { image_src: imageSrc, fallback_image_src: fallbackImageSrc } = icon || {};

    return (
        <Container>
            <Card hasComingSoonSection={comingSoon}>
                {comingSoon ? <ComingSoonBlock>COMING SOON</ComingSoonBlock> : null}
                <Section>
                    <Title font='cardTitleVariantThirteen' tagType='text' color='MINE_SHAFT'>
                        <div
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }}
                        />
                    </Title>
                    <ImageHolder hasComingSoonSection={comingSoon}>
                        <Image
                            icon={imageSrc}
                            fallBackImage={fallbackImageSrc}
                            alt='card-image'
                            loadingType='lazy'
                        />
                    </ImageHolder>
                </Section>
            </Card>
        </Container>
    );
};

export default SingleCardSection;
