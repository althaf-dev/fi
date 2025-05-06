import React, { useState, useContext } from 'react';
import copy from 'copy-text-to-clipboard';
import styled from 'styled-components';

import { MetaInfoContext } from '../../../context';
import { Font, Image } from '../../../components';
import { Device } from '../../../Themes/Device';
import { ICONS_URL } from '../../../constants/AssetConstants';

const Section = styled.div`
    text-align: center;
    padding: 40px 0px 40px;

    @media ${Device.desktop} {
        padding: 60px 0px 120px;
    }
`;

const ContentHolder = styled.div`
    margin: auto;
    max-width: 320px;

    @media ${Device.tab} {
        max-width: 610px;
    }

    @media ${Device.desktop} {
        max-width: 1036px;
    }
`;

const Title = styled(Font)`
    margin: 0px auto 30px;

    @media ${Device.desktop} {
        max-width: 850px;
        margin: 0px auto 80px;
    }
`;

const Container = styled.div<{ gridLength: number }>`
    display: grid;
    grid-gap: 20px;
    max-width: 200px;
    margin: 0px auto;

    @media ${Device.tab} {
        grid-template-columns: repeat(${(props) => props.gridLength}, 1fr);
        grid-gap: 28px;
        /**
         * one Card width - 190px
         * grid-gap - 28px
        */
        max-width: ${(props) => (props.gridLength * 190) + ((props.gridLength - 1) * 28)}px;
    }

    @media ${Device.desktop} {
        grid-gap: 50px;
        /**
         * one Card width - 312px
         * grid-gap - 50px
        */
        max-width: ${(props) => (props.gridLength * 312) + ((props.gridLength - 1) * 50)}px;
    }
`;

const Card = styled.div`
    background: ${(props) => props.theme.color.MINE_SHAFT};
    border-radius: 12px;
    padding: 20px 0px;

    @media ${Device.tab} {
        border-radius: 15px;
        padding: 30px 0px;
    }

    @media ${Device.desktop} {
        border-radius: 20px;
        padding: 60px 0px;
    }
`;

const ImageHolder = styled.div`
    width: 36px;
    height: 36px;
    margin: 0px auto;

    @media ${Device.desktop} {
        width: 48px;
        height: 48px;
        margin: 0px auto;
    }
`;

const IconTitle = styled(Font)`
    letter-spacing: 0.45px;
    text-transform: uppercase;
    margin: 20px auto 12px;

    @media ${Device.desktop} {
        margin: 40px auto 12px;
    }
`;

const Description = styled(Font)`
    text-align: center;
    letter-spacing: 0.45px;
    vertical-align: middle;
    margin-right: 4px;

    @media ${Device.tab} {
        margin-right: 6px;
    }

    @media ${Device.desktop} {
        margin-right: 8px;
    }
`;

const CopyImage = styled.span`
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;

    @media ${Device.tab} {
        width: 16px;
        height: 16px;
    }

    @media ${Device.desktop} {
        width: 24px;
        height: 24px;
    }
`;

interface PosterSectionDataInterface {
    title: string;
    sectionData: { id: number, configKey: string, icon: any, title: string, hasCopyIcon: boolean, description: string, alt: string }[];
}

interface PosterSectionProps {
    data: PosterSectionDataInterface;
}

const PosterSection = (props: PosterSectionProps) => {
    const { appAssistanceData: appAssistanceMetaData } = useContext(MetaInfoContext);
    const { data } = props;
    const { title, sectionData } = data;

    const gridLength = sectionData.length;

    const [copied, setCopy] = useState({
        value: false,
        index: 0,
    });

    const setCopyText = ({ description, id }) => () => {
        copy(description);
        setCopy({ value: true, index: id });
        const timer = setTimeout(() => setCopy({ value: false, index: 0 }), 3000);
        return () => clearTimeout(timer);
    };

    return (
        <Section>
            <ContentHolder>
                <Title font='h1' tagType='h1' color='WHITE'>
                    {title}
                </Title>

                <Container gridLength={gridLength}>
                    {sectionData?.filter((item) => !appAssistanceMetaData[item.configKey])
                        .map((ele) => (
                            <Card key={ele.title}>
                                <ImageHolder>
                                    <Image
                                        icon={ele.icon}
                                        alt={ele.alt}
                                        loadingType='eager'
                                    />
                                </ImageHolder>
                                <IconTitle font='posterCardTitle' tagType='text' color='SUVA_GREY'>
                                    {ele.title}
                                </IconTitle>
                                <Description font='posterCardDescription' tagType='span' color='WHITE'>
                                    {ele.description}
                                </Description>
                                {ele.hasCopyIcon
                                    ? (
                                        <CopyImage onClick={setCopyText(ele)}>
                                            <Image
                                                loadingType='eager'
                                                icon={
                                                    copied.value && ele.id === copied.index
                                                        ? `${ICONS_URL}check-mark_white.svg`
                                                        : `${ICONS_URL}copy_white.svg`
                                                }
                                            />
                                        </CopyImage>
                                    )
                                    : null}
                            </Card>
                        ))}
                </Container>
            </ContentHolder>
        </Section>
    );
};

export default PosterSection;
