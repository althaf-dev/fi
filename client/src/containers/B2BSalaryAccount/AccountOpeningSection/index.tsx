/**
 * @file Account Opening Section
 */
import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font, Image } from '../../../components/Abstract';
import { htmlSanitization } from '../../../utils';

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

const CardHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Card = styled.div`
    border-radius: 20px;
    background-color: ${(props) => props.theme.color.PATTERNS_BLUE};
    overflow: hidden;
    width: 555px;
    padding-top: 40px;
`;

const ImageHolder = styled.div`
    width: 394px;
    height: 440px;
    margin: 0px auto;
`;

const Title = styled(Font)`
    margin-top: 44px;
    text-align: center;
    max-width: 370px;
`;

interface AccountOpeningSectionProps {
    item: any;
}

const AccountOpeningSection = (props: AccountOpeningSectionProps) => {
    const { item } = props;
    const { list } = item;

    return (
        <GridHolder length={list.length}>
            {list.map((ele) => {
                const { title, icon } = ele || {};
                const { image_src: imageSrc, fallback_image_src: fallbackImageSrc } = icon || {};

                return (
                    <CardHolder>
                        <Card>
                            <ImageHolder>
                                <Image
                                    icon={imageSrc}
                                    alt='mobile'
                                    loadingType='lazy'
                                    fallBackImage={fallbackImageSrc}
                                />
                            </ImageHolder>
                        </Card>
                        <Title font='pSmallVariantTen' tagType='text' color='MINE_SHAFT'>
                            <div
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: htmlSanitization(title) }}
                            />
                        </Title>
                    </CardHolder>
                );
            })}
        </GridHolder>
    );
};

export default AccountOpeningSection;
