import Colors from "@/Themes/Colors";
import { Device } from "@/Themes/Device";
import styled from "styled-components";
import GradientImage from "../GradientImage";
import Link from "next/link";

const makeBlogUrl = (categorySlug: any, titleSlug:any) => {
  return `${window.location.origin}/guides/${categorySlug}/${titleSlug}`;
};

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${Colors.BLACK};
  font-family: "Gilroy";
  margin-top: 20px;

  @media ${Device.phone} {
    font-size: 24px;
  }

  @media ${Device.tab} {
    font-size: 36px;
  }

  @media ${Device.desktop} {
    font-size: 36px;
  }
`;
const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.GRAY};
  font-family: "Gilroy";
  margin-top: 10px;
  margin-bottom: 30px;

  @media ${Device.phone} {
    font-size: 16px;
  }

  @media ${Device.tab} {
    font-size: 24px;
  }

  @media ${Device.desktop} {
    font-size: 24px;
  }
`;
const Container = styled.div`
  margin-top: 40px;
  position: relative;
  padding-bottom: 40px;
  height: 100%;
`;

const GridContainer = styled.div<{
  templateAreas: string;
  templateRows?: string;
  templateColumns?: string;
  mobileTemplateArea?: string;
  mobileAutoRows?: string;
  autoRows?: string;
}>`
  display: grid;
  grid-template-areas: ${(props) => props.mobileTemplateArea};
  ${(props) =>
    props.mobileAutoRows && `grid-auto-rows: ${props.mobileAutoRows};`}
  ${(props) => props.templateColumns && `grid-template-columns: ${props.templateColumns};`}
    grid-auto-columns: 1fr;
  gap: 20px;

  @media ${Device.tab} {
    grid-template-areas: ${(props) => props.templateAreas};
    ${(props) => props.autoRows && `grid-auto-rows: ${props.autoRows};`}
    ${(props) => props.templateRows && `grid-template-rows: ${props.templateRows};`}
  }
`;

interface GradientStyle {
  gradientColorTop?: string;
  gradientColorBottom?: string;
  gradientDirection?: string;
  gradientTopPercentage?: string;
  gradientBottomPercentage?: string;
}

interface ImageLayoutProps {
  title: string;
  subTitle?: string;
  templateArea: string;
  mobileTemplateArea?: string;
  templateRows?: string;
  templateColumns?: string;
  mobileAutoRows?: string;
  autoRows?: string;
  data: {
    imageSrc: string;
    title: string;
    duration: string;
    gridArea?: string;
    gradientStyle?: GradientStyle;
    bigImage?: boolean;
    categorySlug: string;
    titleSlug: string;
  }[];
}
const ImageLayout = ({
  title,
  subTitle,
  templateArea,
  data,
  templateRows,
  templateColumns,
  mobileTemplateArea,
  mobileAutoRows,
  autoRows,
}: ImageLayoutProps) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <GridContainer
          templateAreas={templateArea}
          templateRows={templateRows}
          templateColumns={templateColumns}
          mobileTemplateArea={mobileTemplateArea}
          mobileAutoRows={mobileAutoRows}
          autoRows={autoRows}
        >
          {data &&
            data.map((item, index) => (
              <GradientImage
                key={index}
                src={item.imageSrc}
                description={item.title}
                timeDuration={item.duration}
                gridArea={item.gridArea}
                bigImage={item.bigImage}
                gradientStyle={item.gradientStyle}
                link={makeBlogUrl(item?.categorySlug, item?.titleSlug)}
              />
            ))}
        </GridContainer>
      </Container>
    </>
  );
};

export default ImageLayout;
