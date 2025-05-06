/**
 * @file ComingSoon Card Section
 */
import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';

import { Font, Image } from '../../../components';
import { htmlSanitization } from '../../../utils';

const Container = styled.div`
    display: grid;
    grid-gap: 30px;

    @media ${Device.tab} {
        grid-gap: 30px;
    }

    @media ${Device.desktop} {
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;        
    }
`;

const Card = styled.div<{ hasComingSoonSection: boolean }>`
    background: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    width: 320px;
    margin: 0px auto;

    @media ${Device.tab} {
        width: 100%;
        padding: 20px 0px 0px 20px;
    }

    @media ${Device.desktop} {
        width: 560px;
        padding: ${(props) => (props.hasComingSoonSection ? '22px' : '64px')} 0px 62px 42px;
    }
`;

const ImageHolder = styled.div`
    width: 268px;
    height: 210px;

    @media ${Device.tab} {
        width: 162px;
        height: 162px;
    }

    @media ${Device.desktop} {
        width: 268px;
        height: 300px;
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
        width: 255px;
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
    height: 100%;
    justify-content: space-between;
`;

const CtaWrapper = styled(Font)`
    margin-top: 24px;
`;

interface ComingSoonCardSectionProps {
    item: any;
}

const ComingSoonCardSection = (props: ComingSoonCardSectionProps) => {
    const { item } = props;
    const { list } = item;

    return (
        <Container>
            {list.map((ele) => {
                const {
                    title, cta, icon, coming_soon: comingSoon,
                } = ele || {};
                const { image_src: imageSrc, fallback_image_src: fallbackImageSrc } = icon || {};

                return (
                    <Card hasComingSoonSection={comingSoon}>
                        {comingSoon ? <ComingSoonBlock>COMING SOON</ComingSoonBlock> : null}
                        <Section>
                            <div>
                                <Title font='cardTitleVariantThirteen' tagType='text' color='MINE_SHAFT'>
                                    <div
                                    // eslint-disable-next-line react/no-danger
                                        dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }}
                                    />
                                </Title>
                                {cta ? (
                                    <CtaWrapper font='buttonVariantThree' tagType='text' color='FOREST_GREEN'>
                                        <div
                                        // eslint-disable-next-line react/no-danger
                                            dangerouslySetInnerHTML={{ __html: htmlSanitization(cta) }}
                                        />
                                    </CtaWrapper>
                                ) : null}
                            </div>
                            <ImageHolder>
                                <Image
                                    icon={imageSrc}
                                    fallBackImage={fallbackImageSrc}
                                    alt='card-image'
                                    loadingType='lazy'
                                />
                            </ImageHolder>
                        </Section>
                    </Card>
                );
            })}
        </Container>
    );
};

export default ComingSoonCardSection;
