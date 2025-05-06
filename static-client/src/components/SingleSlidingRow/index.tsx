import Colors from "@/Themes/Colors";
import { Device, size } from "@/Themes/Device";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styled, { keyframes, css } from "styled-components";

interface SingleSlidingRowProps {
    title: string;
    uppercase?: boolean;
    data : {
        source: string;
        description: string;
        link: string;
    }[]
}

const Container = styled.div`
    margin-top: 60px;
    position: relative;
    padding-bottom: 40px;
    height: 100%;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: ${Colors.BLACK};
    font-family: 'Gilroy';
    margin-top: 20px;

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
const RowContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    gap: 20px;
    margin-top: 20px;
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    @media ${Device.tab} {
        margin-left: ${(props)=> {
            const width = (props?.children as any)?.length * (100 + 50) - window.innerWidth + 500;
            if (width < 0) {
                return 0;
            }
            return -120;
        }}px;
        margin-right: ${(props)=> {
            const width = (props?.children as any)?.length * (100 + 50) - window.innerWidth + 500;
            if (width < 0) {
                return 0;
            }
            return -120;
        }}px;
    }
`;

const StyledImageContainer = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 24px;
    cursor: pointer;

    @media ${Device.phone} {
        width: 100px;
        height: 100px;
    }

    @media ${Device.tab} {
        width: 120px;
        height: 120px;
    }

    @media ${Device.desktop} {
        width: 150px;
        height: 150px;
    }
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    object-fit:cover;
`;
const LinearGradientOnImage = styled.div<{gradientColorTop?:string, gradientColorBottom?:string}>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 24px;
    background: linear-gradient(0deg, ${props => props.gradientColorTop || "#18191B"} -13.24%, ${props => props.gradientColorBottom || "rgba(24, 25, 27, 0.00)"} 74.7%);
    blend-mode: multiply;
    @media ${Device.phone} {
        border-radius: 24px;
    }
`;

const BottomLeftText = styled.div<{source?:any, uppercase?:boolean}>`
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    z-index: 1;
    font-family: 'Gilroy';
    color: ${(props)=>props.source ? Colors.WHITE : Colors.BLACK};
    text-transform: ${(props)=>props.uppercase ? "uppercase" : "none"};
    word-break: break-word;
`;



export default function SingleSlidingRow({ data, title, uppercase }:SingleSlidingRowProps) {
    return (
        <Container>
            <Title>{title}</Title>
            <RowContainer id="categoryRow"
            >
                {data.map((item, index) => (
                    <Link key={index} href={item.link || ""} target="_blank" >
                        <StyledImageContainer>
                            { item.source &&  <StyledImage src={item.source} alt={item.description} width={0} height={0} />}
                            { item.source && <LinearGradientOnImage gradientColorBottom="#9DC2D029"/>}
                            { !item.source && <LinearGradientOnImage gradientColorTop="#9DC2D029" gradientColorBottom="#9DC2D029"/>}
                            <BottomLeftText source={item.source} uppercase={uppercase} >{item.description}</BottomLeftText>
                        </StyledImageContainer>
                    </Link>
                ))}
            </RowContainer>
        </Container>
    );
}
