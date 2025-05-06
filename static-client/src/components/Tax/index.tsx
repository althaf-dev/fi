import Colors from "@/Themes/Colors";
import { Device } from "@/Themes/Device";
import Image from "next/image";
import styled from "styled-components";
import { MyFont } from "../styled";
import React from "react";

const makeBlogUrl = (slug:any) => {
  return `${window.location.origin}/guides/${slug}`;
  }

const LAYOUTS = {
    SPOTLIGHT:"Spotlight",
    EDITORS:"Editors Pick",
    TAX:"Tax",
    NOT_SURE:"Not sure where to begin?",
    INVESTING_LIKE_A_PRO:"Investing Like A Pro",
    GENERAL:"General Blogs",
    FINANCE:"Finance For Dummies",
    POPULAR:"Our most popular",
    SECTION:"Section",
  }
  

const TaxTrendsContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;


  @media ${Device.tab} {
    margin-top: 60px;
    max-height: 500px;
    margin-bottom: 80px;
  }
`;

const SeasonTrendsHeader = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px 20px 0 0;
  padding-left: 20px;
  gap: 10px;
  height: 90px;
`;

const SmallTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${Colors.BLACK};
  font-family: "Gilroy";

  @media ${Device.phone} {
    font-size: 18px;
  }

  @media ${Device.tab} {
    font-size: 24px;
  }

  @media ${Device.desktop} {
    font-size: 24px;
  }
`;

const Row = styled.div<{ gap?: string; alignItems?: string }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap || "0px"};
  width: 100%;
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
`;
const Column = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "0px"};
`;

const TrendsSummaryContainer = styled(Column)`
  padding: 30px;
  border-radius: 0px 0px 0px 20px;
  flex: 3;
  display: none;
  width: 100%;
  height: 100%;

  @media ${Device.tab} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: scroll;
    width: 200px;
    height: 320px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TrendingContentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 0px 0px 20px 20px;
  gap: 20px;
  width: 100%;

  @media ${Device.phone} {
    padding: 20px;
  }

  @media ${Device.tab} {
    padding-top: 40px;
    padding-bottom: 40px;
    flex: 2;
    border-radius: 0px 0px 20px 0px;
  }
`;

const VerticalLine = styled.div`
  background-color: ${Colors.WHITE_60};
  width: 2px;
  margin: auto;

  @media ${Device.tab} {
    height: 300px;
  }
`;

const SmallCircle = styled.div<{ color?: string }>`
  min-width: 20px;
  min-height: 20px;
  max-width: 20px;
  max-height: 20px;
  border-radius: 50%;
  background-color: ${Colors.GREY_3};
  display: flex;
  justify-content: center;
  font-size: 10px;
  font-family: "Gilroy";
  line-height: 20px;
  color: ${(props) => props.color || Colors.BLACK};
  font-weight: 600;
`;


export default function Tax ({data, CDN_URL}:any) {
    const [currIndex, setCurrIndex] = React.useState(0);
    return <TaxTrendsContainer backgroundColor="#6BCDB6">
    <SeasonTrendsHeader backgroundColor={Colors.GREEN_LIGHT}>
      <Image
        src={`${CDN_URL}/assets/svgs/trends.svg`}
        width={30}
        height={30}
        alt="trending-icon"
      />
      <SmallTitle>
        {data.find((item: any) => item.attributes.layout === LAYOUTS.TAX)?.attributes.title}
      </SmallTitle>
      <div
        style={{
          marginLeft: "auto",
          alignSelf: "stretch",
        }}
      >
      </div>
    </SeasonTrendsHeader>
    <Row>
      <TrendsSummaryContainer gap="10px" style={{
        cursor: "pointer",
      }} onClick={()=>{
        window.open(makeBlogUrl(data.find((item: any) => item.attributes.layout === LAYOUTS.TAX)?.attributes.blogs.data[currIndex].attributes.slug));
      }}>
        <MyFont fontSize="24px" color={Colors.BLACK} fontWeight={600}>
          {data.find((item: any) => item.attributes.layout === LAYOUTS.TAX)?.attributes.blogs.data[currIndex].attributes.title}
        </MyFont>
        <MyFont fontSize="12px" color={"#007A56"} fontWeight={700}>
          {data.find((item: any) => item.attributes.layout === LAYOUTS.TAX)?.attributes.blogs.data[currIndex].attributes.reading_duration} min • {data.find((item: any) => item.attributes.layout === LAYOUTS.TAX)?.attributes.blogs.data[0].attributes.blog_author.data.attributes.Name}
        </MyFont>
        <MyFont fontSize="14px" fontWeight={300}>
          {/* Commented for future Tax Description */}
          {/* {data.find((item: any) => item.attributes.layout === LAYOUTS.TAX)?.attributes.blogs.data[currIndex].attributes.meta_details.meta_description} */}
          <div style={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }} dangerouslySetInnerHTML={{__html: data.find((item: any) => item.attributes.layout === LAYOUTS.TAX)?.attributes.blogs.data[currIndex]?.content.find((cont:any) => cont.__component === "rich-text.rich-text")?.content}}></div>
        </MyFont>
      </TrendsSummaryContainer>
      <VerticalLine />
      <TrendingContentListContainer>
        {data.find((item: any) => item.attributes.layout === LAYOUTS.TAX)?.attributes.blogs.data.map((blog: any, index: number) => {
          return <Row key={index} gap={"20px"} alignItems="center" onClick={()=>{
            setCurrIndex(index);
          }}
          style={{
            cursor: "pointer",
            backgroundColor: currIndex === index ? "#A8E0D3" : "transparent",
            borderRadius: "20px",
            padding: "10px",
          }}>
            <SmallCircle>{index + 1}</SmallCircle>
            <Column gap="10px">
              <MyFont fontSize="16px" color={Colors.BLACK} fontWeight={600}>
                {blog.attributes.title}
              </MyFont>
              <MyFont fontSize="12px" color={"#007A56"} fontWeight={700}>
                {blog.attributes.reading_duration} min • {blog.attributes.blog_author.data.attributes.Name}
              </MyFont>
            </Column>
          </Row>
        })}
      </TrendingContentListContainer>
    </Row>
  </TaxTrendsContainer>
}
