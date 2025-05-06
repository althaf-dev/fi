import Colors from "@/Themes/Colors";
import { Device } from "@/Themes/Device";
import Image from "next/image";
import styled from "styled-components";
import SingleSlidingRow from "../Calculators";

const gradientColors = [
    'linear-gradient(180deg, #C1CCE1 -5.69%, #4F71AB 106.53%)',
    'linear-gradient(180deg, #BCDCE7 -5.69%, #6294A6 106.53%)',
    'linear-gradient(180deg, #A8E0D3 -5.69%, #00B899 106.53%)',
    'linear-gradient(180deg, #F0BECE -5.69%, #D65779 106.53%)',
    'linear-gradient(180deg, #BCDCE7 -5.69%, #6294A6 106.53%)'
]

const GridContainerCategories = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        ". . . .";
    gap: 20px;
    width: 100vw;
    margin-top: 10px;
    margin-left: -20px;


    @media ${Device.tab} {
        margin-left: 0px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }
`;
const GridContainerCategoriesNext = styled(GridContainerCategories)`
    margin-left: -100px;

    @media ${Device.tab} {
        margin-left: -230px;
    }
`


const StyledImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 24px;
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: 24px;
`;

const GradientLay = styled.div<{background:string}>`
    position: absolute;
    opacity: 0.7;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${props => props.background};
    // mix-blend-mode: hard-light;
    border-radius: 24px;
`;

const LightGray50Percent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.1;
    background:  black 50%;
    mix-blend-mode: hard-light;
    border-radius: 24px;
`;

const StyledImageText = styled.div`
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    font-family: 'Gilroy';

    @media ${Device.phone} {
        font-size: 12px;
    }

    @media ${Device.tab} {
        font-size: 16px;
    }
`;

const StyledImageTextContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    @media ${Device.tab} {
        align-items: flex-start;
        justify-content: flex-end;
        padding: 20px;
        text-align: left;
    }
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

const Container = styled.div`
    margin-top: 40px;
`;

interface TwoSameRowsProps {
    title: string;
    data: {
        src: string;
        description: string;
    }[];
};
export default function TwoSameRows({ data, title }:TwoSameRowsProps) {
    return (
        <Container>  
            <Title>{title}</Title>
            <GridContainerCategories>
                {data.map((item, index) => 
                    <StyledImageContainer key={index}>
                        <StyledImage src={item.src} alt={item.description} width={0} height={0} />
                        <GradientLay background={gradientColors[index%gradientColors.length]}/>
                        <LightGray50Percent/>
                        <StyledImageTextContainer>
                            <StyledImageText>{item.description}</StyledImageText>
                        </StyledImageTextContainer>
                    </StyledImageContainer>
                )}
            </GridContainerCategories>
            <GridContainerCategoriesNext>
                {data.map((item, index) => 
                    <StyledImageContainer key={index}>
                    <StyledImage src={item.src} alt={item.description} width={0} height={0} />
                    <GradientLay background={gradientColors[index%gradientColors.length]}/>
                    <LightGray50Percent/>
                    <StyledImageTextContainer>
                        <StyledImageText>{item.description}</StyledImageText>
                    </StyledImageTextContainer>
                </StyledImageContainer>
                )}
            </GridContainerCategoriesNext>
        </Container>
    );
}
