import Colors from "@/Themes/Colors";
import { Device } from "@/Themes/Device";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ImageContainer = styled.div<{gridArea?:string}>`
    position: relative;
    width: 100%;
    height: 100%;
    grid-area: ${(props) => props.gridArea};
    aspect-ratio: 1/1;
`;

const LinearGradientOnImage = styled.div<{gradientDirection?:string, gradientColorTop?:string, gradientTopPercentage?:string, gradientColorBottom?:string, gradientBottomPercentage?:string}>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 24px;
    background: linear-gradient(${props => props.gradientDirection || "0deg"}, ${props => props.gradientColorTop || "#18191B"} ${props => props.gradientTopPercentage || "-13.24%"}, ${props => props.gradientColorBottom || "rgba(24, 25, 27, 0.00)"} ${props => props.gradientBottomPercentage || "74.7%"});
    @media ${Device.phone} {
        border-radius: 15px;
    }
`;


const BigImage = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    object-fit: cover;

    @media ${Device.phone} {
        border-radius: 15px;
    }
`;

const TextOnImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    justify-content: flex-end;
    gap: 10px;
    color: ${Colors.WHITE};
    font-family: 'Gilroy';
    font-size: 12px;
    
    @media ${Device.tab} {
        padding: 25px;
    }
`;
const ImageDescription = styled.p<{ color:string; bigImage?:boolean}>`
    display: -webkit-box;
    font-size: ${(props) => props.bigImage ? '16px' : '14px'};
    font-weight: 600;
    color: ${(props) => props.color};
    max-height: 2.4em;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;

    @media ${Device.phone} {
        font-size: ${(props) => props.bigImage ? '16px' : '14px'};
    }

    @media ${Device.tab} {
        font-size: ${(props) => props.bigImage ? '28px' : '20px'};
    }
`;

const ImageTimeDuration = styled.p`
    font-size: 10px;
    color: ${Colors.WHITE};

    @media ${Device.tab} {
        font-size: 14px;
    }
`;

const Title = styled.div`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
    color: ${Colors.BLACK};
    font-family: 'Gilroy';

    @media ${Device.phone} {
        font-size: 24px;
    }

    @media ${Device.tab} {
        font-size: 32px;
    }

    @media ${Device.desktop} {
        font-size: 32px;
    }
`;

interface GradientStyle {
    gradientDirection?: string;
    gradientColorTop?: string;
    gradientTopPercentage?: string;
    gradientColorBottom?: string;
    gradientBottomPercentage?: string;
}

interface GradientImageProps {
    rowStart?:number;
    rowEnd?:number;
    colStart?:number;
    colEnd?:number;
    src:string,
    description:string,
    timeDuration:string,
    bigImage?:boolean,
    gridArea?:string;
    gradientStyle?:GradientStyle;
    link?:string
}

export default function GradientImage({gridArea, src, description, timeDuration, bigImage, gradientStyle, link}:GradientImageProps) {
    const {gradientColorBottom, gradientColorTop, gradientDirection, gradientTopPercentage, gradientBottomPercentage} = gradientStyle || {};
    return (
        <ImageContainer gridArea={gridArea}>
            { link ? <Link href={link} target="_blank">
                    <BigImage src={src} alt={"image"} width={0} height={0}/>
                    <LinearGradientOnImage gradientColorTop={gradientColorTop} gradientColorBottom={gradientColorBottom} gradientDirection={gradientDirection} gradientTopPercentage={gradientTopPercentage} gradientBottomPercentage={gradientBottomPercentage} />
                    <TextOnImageContainer>
                        <ImageDescription bigImage={bigImage} color="WHITE">{description}</ImageDescription>
                        <ImageTimeDuration >{timeDuration}</ImageTimeDuration>
                    </TextOnImageContainer>
                </Link> 
                    : 
                <>
                    <BigImage src={src} alt={"image"} width={0} height={0}/>
                    <LinearGradientOnImage gradientColorTop={gradientColorTop} gradientColorBottom={gradientColorBottom} gradientDirection={gradientDirection} gradientTopPercentage={gradientTopPercentage} gradientBottomPercentage={gradientBottomPercentage}/>
                    <TextOnImageContainer>
                        <ImageDescription bigImage={bigImage} color="WHITE">{description}</ImageDescription>
                        <ImageTimeDuration >{timeDuration}</ImageTimeDuration>
                    </TextOnImageContainer>
                </>
            }
        </ImageContainer>
    )
}
