import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Image, Flex, Font } from '../../../components';
import { Device } from '../../../Themes/Device';

const ImageWrapper = styled.div`
    width: 100px;
    height: 100px;

    @media ${Device.desktop} {
        width: 160px;
        height: 160px;
    }
`;

const FlexWrapper = styled(Flex)`
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
`;

const Wrapper = styled.div`
    width: 100%;
`;

const Text = styled(Font)``;
const TextOne = styled(Text)``;

const TextTwo = styled(Text)``;

interface TextIconSkeleton {
    subText?: string;
    text?: string;
    childIcon?: ReactNode;
    color: string;
}

const TextIconSkeleton = ({ subText, text, childIcon, color }) => {
    return (
        <Wrapper>
            <FlexWrapper>
                <Text tagType='text' font='inputVariantOne' color={color}>
                    {subText}
                </Text>
                <ImageWrapper>
                    <Image icon={childIcon} alt='Amazon' />
                </ImageWrapper>
            </FlexWrapper>
            <Text tagType='text' font='h1VariantTwo' color={color}>
                {text}
            </Text>
        </Wrapper>
    );
};

export default TextIconSkeleton;
