import { Font } from "@/Abstract";
import Colors from "@/Themes/Colors";
import { Device } from "@/Themes/Device";
import ExploreAllBlogs from "@/components/AllBlogs";
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import Calculators from "@/components/Calculators";
import GeneralBlogs from "@/components/GeneralBlogs";
import GradientImage from "@/components/GradientImage";
import ImageLayout from "@/components/ImageLayout";
import SingleSlidingRow from "@/components/SingleSlidingRow";
import SubscribeBox from "@/components/SubscribeBox";
import {CARD_GRADIENT} from "@/containers/Blog/constants";
import Tax from "@/components/Tax";
import { MyFont } from "@/components/styled";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const LAYOUTS = {
  SPOTLIGHT: "Spotlight",
  EDITORS: "Editors Pick",
  TAX: "Tax",
  NOT_SURE: "Not sure where to begin?",
  INVESTING_LIKE_A_PRO: "Investing Like A Pro",
  GENERAL: "General Blogs",
  FINANCE: "Finance For Dummies",
  POPULAR: "Our most popular",
  SECTION: "Section",
};

const makeBlogUrl = (categorySlug: any, blogNameSlug: any) => {
  return `${window.location.origin}/guides/${categorySlug}/${blogNameSlug}`;
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.BLACK_3};
  position: relative;
  z-index: 2;
  padding: 10px 10% 150px 10%;

  @media ${Device.phone} {
    padding: 10px 10% 150px 10%;
  }

  @media ${Device.tab} {
    padding: 100px 20% 170px 20%;
  }

  @media ${Device.desktop} {
    padding: 100px 20% 170px 20%;
  }
`;

const PageContentContainer = styled.div<{ paddingTop?: string }>`
  position: relative;
  width: 100%;
  background-color: ${Colors.WHITE_3};
  border-radius: 40px;
  margin-top: -80px;
  z-index: 3;
  padding: 10%;
  padding-bottom: 80px;

  @media ${Device.phone} {
    border-radius: 50px;
  }

  @media ${Device.tab} {
    border-radius: 80px;
  }

  @media ${Device.desktop} {
    padding-top: 150px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${Colors.BLACK};
  font-family: "Gilroy";

  @media ${Device.phone} {
    font-size: 24px;
  }

  @media ${Device.tab} {
    font-size: 32px;
  }

  @media ${Device.desktop} {
    font-size: 36px;
  }
`;

const GridItemWrapper = styled.div<{
  rowStart?: number;
  rowEnd?: number;
  colStart?: number;
  colEnd?: number;
  gridItem?: string;
  marginTop?: string;
}>`
  ${(props) => props.rowStart && `grid-row-start: ${props.rowStart};`}
  ${(props) => props.rowEnd && `grid-row-end: ${props.rowEnd};`}
    ${(props) => props.colStart && `grid-column-start: ${props.colStart};`}
    ${(props) => props.colEnd && `grid-column-end: ${props.colEnd};`}
    grid-area: ${(props) => props.gridItem};
  width: 100%;
  height: 100%;
  ${(props) => props.marginTop && `margin-top: ${props.marginTop};`}
`;

const GridContainerSpotlight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 130px 130px auto 130px 130px 130px;
  grid-template-areas:
    "title title"
    "big big"
    "big big"
    "title2 title2"
    ". ."
    ". .";
  gap: 10px;

  @media ${Device.tab} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 200px 200px 200px;
    grid-template-areas:
      "title title title title2 title2"
      "big big big . ."
      "big big big . ."
      "big big big . .";
    gap: 20px;
  }
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
const TrendingContentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 0px 0px 20px 20px;
  gap: 30px;
  width: 100%;
  display: none;

  @media ${Device.phone} {
    padding: 20px;
  }

  @media ${Device.tab} {
    display: flex;
    padding-top: 40px;
    padding-bottom: 40px;
    flex: 2;
    border-radius: 0px 0px 20px 0px;
  }
`;

const TrendsSummaryContainer = styled(Column)`
  padding: 30px;
  border-radius: 0px 0px 0px 20px;
  flex: 3;
  display: flex;

  @media ${Device.tab} {
    display: flex;
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

const TaxTrendsContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;

  @media ${Device.tab} {
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

const HorizontalLine = styled.div`
  background-color: ${Colors.WHITE_60};
  height: 2px;
  width: 100%;
`;

export default function Home({
  CDN_URL,
  data,
  authorsData,
  calculatorsData,
  allBlogsData,
  categoriesData,
}: any) {
  const toCDNUrl = (url: string) => {
    if (!url) return "";
    if (url.startsWith("/")) {
      return "http://localhost:1337" + url;
    }
    const regexToGetGroup = /https:\/\/.*\/(.*?)(\?|$)/;
    const group = url.match(regexToGetGroup);
    return `${CDN_URL}/content/${group![1]}`;
  };

  const layoutedBlogs = data.filter(
    (item: any) => item.attributes.layout === LAYOUTS.SECTION
  );

  categoriesData = categoriesData.filter((category: any) => {
    if (category.attributes?.banner_image?.data?.attributes?.url) {
      return category;
    }
  });

  return (
    <div>
      <div
        style={{
          backgroundColor: Colors.BLACK_3,
        }}
      >
        <AppHeader />
      </div>
      <HeaderContainer>
        <Font tagType="h1" font="h1" color="WHITE">
          Simplify all things finance
        </Font>
        <Font tagType="text" font="description" color="GRAY">
          Deeply researched blogs written by money-management experts — to answer all your finance questions.
        </Font>
      </HeaderContainer>
      <div
        style={{
          backgroundColor: Colors.WHITE_3,
        }}
      >
        <PageContentContainer>
          <GridContainerSpotlight>
            <GridItemWrapper gridItem={"title"}>
              <Title>Spotlight</Title>
            </GridItemWrapper>
            <GridItemWrapper gridItem={"title2"} marginTop={"10px"}>
              <Title>Editor&apos;s Pick</Title>
            </GridItemWrapper>
            <GridItemWrapper
              gridItem={"big"}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                const blogData = data.find(
                  (item: any) => item.attributes.layout === LAYOUTS.SPOTLIGHT
                )?.attributes.blogs.data[0];
                window.open(
                  makeBlogUrl(
                    blogData.attributes.blog_category.data.attributes.slug,
                    blogData.attributes.slug
                  )
                );
              }}
            >
              <GradientImage
                bigImage={true}
                src={toCDNUrl(
                  data.find(
                    (item: any) => item.attributes.layout === LAYOUTS.SPOTLIGHT
                  )?.attributes?.blogs?.data[0]?.attributes?.header_image?.data
                    ?.attributes?.url
                )}
                description={
                  data.find(
                    (item: any) => item.attributes.layout === LAYOUTS.SPOTLIGHT
                  )?.attributes.blogs.data[0].attributes.title
                }
                timeDuration={`${
                  data.find(
                    (item: any) => item.attributes.layout === LAYOUTS.SPOTLIGHT
                  )?.attributes.blogs.data[0].attributes.reading_duration
                } min • ${
                  data.find(
                    (item: any) => item.attributes.layout === LAYOUTS.SPOTLIGHT
                  )?.attributes.blogs.data[0].attributes.blog_author.data
                    .attributes.Name
                }`}
                gradientStyle={CARD_GRADIENT} 
              />
            </GridItemWrapper>
            {data
              .find((item: any) => item.attributes.layout === LAYOUTS.EDITORS)
              ?.attributes.blogs.data.map((blog: any, index: number) => {
                const categorySlug =
                  blog.attributes.blog_category.data.attributes.slug;
                const blogSlug = blog.attributes.slug;
                return (
                  <Link
                    href={makeBlogUrl(categorySlug, blogSlug)}
                    key={index}
                    target="_blank"
                  >
                    <GradientImage
                      src={toCDNUrl(
                        blog?.attributes?.header_image?.data?.attributes?.url
                      )}
                      description={blog.attributes.title}
                      timeDuration={`${blog.attributes.reading_duration} min • ${blog.attributes.blog_author.data.attributes.Name}`}
                      gradientStyle={CARD_GRADIENT} 
                    />
                  </Link>
                );
              })}
          </GridContainerSpotlight>
          <SingleSlidingRow
            title="Categories"
            uppercase={true}
            data={categoriesData.map((category: any) => {
              return {
                description: category.attributes.Name,
                source: toCDNUrl(
                  category.attributes?.banner_image?.data?.attributes?.url
                ),
                link: `${window.location.origin}/guides/${category.attributes.slug}/pages/1`,
              };
            })}
          />
          {data.find((item: any) => item.attributes.layout === LAYOUTS.TAX) && (
            <Tax data={data} CDN_URL={CDN_URL} />
          )}
          <Calculators
            title="Calculators"
            data={calculatorsData.map((calculator: any) => {
              return {
                icon: toCDNUrl(
                  calculator?.attributes?.icon?.data?.attributes?.url
                ),
                title: calculator.attributes.title,
                backgroundColor: calculator.attributes.background,
                textColor: calculator.attributes.text_color,
                link: `${window.location.origin}/calculators/${calculator.attributes.link}`,
              };
            })}
          />
          {layoutedBlogs.slice(0, 2).map((item: any, index: number) => {
            const str =
              item.attributes?.layouts_definition.data.attributes
                .desktop_definition;
            const splitted = str.replaceAll('"', "").split(" ");
            const positions = Array.from(
              new Set(splitted.filter((item: string) => item != "."))
            );
            return (
              <ImageLayout
                key={item.id}
                title={item.attributes.title}
                subTitle={item.attributes.subtitle}
                templateArea={`
              ${item.attributes.layouts_definition.data.attributes.desktop_definition}
            `}
                mobileTemplateArea={`
              ${item.attributes.layouts_definition.data.attributes.mobile_definition}
            `}
                templateRows="200px 200px"
                autoRows="270px"
                mobileAutoRows="130px"
                data={item.attributes.blogs.data.map(
                  (blog: any, index: number) => {
                    return {
                      imageSrc: toCDNUrl(
                        blog?.attributes?.header_image?.data?.attributes?.url
                      ),
                      title: blog.attributes.title,
                      bigImage: index == 0 ? true : false,
                      duration: `${blog.attributes.reading_duration} min • ${blog.attributes.blog_author.data.attributes.Name}`,
                      gridArea: positions[index] || null,
                      gradientStyle: item.attributes.blog_background ? {gradientColorTop: "#00B899",gradientColorBottom: "#18191B11",}: CARD_GRADIENT,
                      categorySlug:
                        blog.attributes.blog_category.data.attributes.slug,
                      titleSlug: blog.attributes.slug,
                    };
                  }
                )}
              />
            );
          })}
        </PageContentContainer>
        <SubscribeBox />
        <PageContentContainer paddingTop="10px">
          {data.find(
            (item: any) => item.attributes.layout === LAYOUTS.GENERAL
          ) && (
            <GeneralBlogs
              title={
                data.find(
                  (item: any) => item.attributes.layout === LAYOUTS.GENERAL
                )?.attributes.title
              }
              blogs={
                data.find(
                  (item: any) => item.attributes.layout === LAYOUTS.GENERAL
                )?.attributes.blogs.data
              }
              CDN_URL={CDN_URL}
              cardGradient={CARD_GRADIENT}
            />
          )}

          {layoutedBlogs.slice(2).map((item: any, index: number) => {
            const str =
              item.attributes?.layouts_definition.data.attributes
                .desktop_definition;
            const splitted = str.replaceAll('"', "").split(" ");
            const positions = Array.from(
              new Set(splitted.filter((item: string) => item != "."))
            );
            return (
              <ImageLayout
                key={item.id}
                title={item.attributes.title}
                subTitle={item.attributes.subtitle}
                templateArea={`
                  ${item.attributes.layouts_definition.data.attributes.desktop_definition}
                `}
                mobileTemplateArea={`
                  ${item.attributes.layouts_definition.data.attributes.mobile_definition}
                `}
                templateRows="200px 200px"
                mobileAutoRows="130px"
                data={item.attributes.blogs.data.map(
                  (blog: any, index: number) => {
                    return {
                      imageSrc: toCDNUrl(
                        blog.attributes.header_image.data.attributes.url
                      ),
                      title: blog.attributes.title,
                      bigImage: index == 0 ? true : false,
                      duration: `${blog.attributes.reading_duration} min • ${blog.attributes.blog_author.data.attributes.Name}`,
                      gridArea: positions[index] || null,
                      gradientStyle: item.attributes.blog_background ? {gradientColorTop: "#00B899",gradientColorBottom: "#18191B11"} : CARD_GRADIENT,                     
                      categorySlug:
                        blog.attributes.blog_category.data.attributes.slug,
                      titleSlug: blog.attributes.slug,
                    };
                  }
                )}
              />
            );
          })}

          {data.find(
            (item: any) => item.attributes.layout === LAYOUTS.POPULAR
          ) && (
            <TaxTrendsContainer backgroundColor="#8075AF">
              <SeasonTrendsHeader backgroundColor="#C4BEDA">
                <Image
                  src={`${CDN_URL}/assets/svgs/graph.svg`}
                  width={25}
                  height={25}
                  alt="trending-icon"
                />
                <SmallTitle>Our most popular</SmallTitle>
              </SeasonTrendsHeader>
              <Row>
                <TrendsSummaryContainer gap="30px">
                  {data
                    .find(
                      (item: any) => item.attributes.layout === LAYOUTS.POPULAR
                    )
                    ?.attributes.blogs.data.slice(0, 3)
                    .map((blog: any, index: number) => {
                      const categorySlug =
                        blog.attributes.blog_category.data.attributes.slug;
                      const blogSlug = blog.attributes.slug;
                      return (
                        <Link
                          href={makeBlogUrl(categorySlug, blogSlug)}
                          key={index}
                          target="_blank"
                          style={{
                            wordBreak: "break-word",
                          }}
                        >
                          <Row key={index} gap={"20px"} alignItems="center">
                            <SmallCircle>{index + 1}</SmallCircle>
                            <Column gap="10px">
                              <MyFont
                                fontSize="16px"
                                color={Colors.BLACK}
                                fontWeight={500}
                              >
                                {blog.attributes.title}
                              </MyFont>
                              <MyFont
                                fontSize="12px"
                                color={Colors.WHITE}
                                fontWeight={700}
                              >
                                {blog.attributes.reading_duration} min •{" "}
                                {
                                  blog.attributes.blog_author.data.attributes
                                    .Name
                                }
                              </MyFont>
                            </Column>
                          </Row>
                        </Link>
                      );
                    })}
                </TrendsSummaryContainer>
                <VerticalLine />
                <TrendingContentListContainer>
                  {data
                    .find(
                      (item: any) => item.attributes.layout === LAYOUTS.POPULAR
                    )
                    ?.attributes.blogs.data.slice(3)
                    .map((blog: any, index: number) => {
                      const categorySlug =
                        blog.attributes.blog_category.data.attributes.slug;
                      const blogSlug = blog.attributes.slug;
                      return (
                        <Link
                          href={makeBlogUrl(categorySlug, blogSlug)}
                          key={index}
                          target="_blank"
                          style={{
                            wordBreak: "break-word",
                          }}
                        >
                          <Row key={index} gap={"20px"} alignItems="center">
                            <SmallCircle>{index + 4}</SmallCircle>
                            <Column gap="10px">
                              <MyFont
                                fontSize="16px"
                                color={Colors.BLACK}
                                fontWeight={500}
                              >
                                {blog.attributes.title}
                              </MyFont>
                              <MyFont
                                fontSize="12px"
                                color={Colors.WHITE}
                                fontWeight={700}
                              >
                                {blog.attributes.reading_duration} min •{" "}
                                {
                                  blog.attributes.blog_author.data.attributes
                                    .Name
                                }
                              </MyFont>
                            </Column>
                          </Row>
                        </Link>
                      );
                    })}
                </TrendingContentListContainer>
              </Row>
            </TaxTrendsContainer>
          )}
          <SingleSlidingRow
            title="Authors"
            data={authorsData
              .filter((author: any) => author.attributes.image?.data != null)
              .map((author: any, index: number) => {
                return {
                  source: toCDNUrl(author.attributes.image.data.attributes.url),
                  description: author.attributes.Name,
                  link: `${window.location.origin}/blog/team-members/${author.attributes.slug}`,
                };
              })}
          />
          <ExploreAllBlogs data={allBlogsData} />
        </PageContentContainer>
      </div>
      <AppFooter />
    </div>
  );
}

export const getStaticProps = async () => 
  {
  const { CDN_URL, STRAPI } = process.env;

  const layoutsUrl = `${STRAPI}/api/blog-homes?populate[0]=blogs.blog_author&populate[1]=blogs.header_image&populate[2]=blogs.meta_details&populate[3]=layouts_definition&populate[4]=blogs.blog_category&sort=updatedAt:desc`;
  const response = await fetch(layoutsUrl, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  const data = await response.json();
  /* 
        Here the data is sorted in descending order of updatedAt
        and then the pinning blogs are getting added at the top of the list.
  */
 data?.data?.forEach((item: any)=> {
    item?.attributes?.blogs?.data.sort((a: any, b: any) => new Date(b?.attributes?.updatedAt).getTime() - new Date(a?.attributes?.updatedAt).getTime()) 
 })

  const taxData = data.data.find(
    (item: any) => item.attributes.layout === LAYOUTS.TAX
  );
  const taxBlogsIds = taxData?.attributes.blogs.data.map(
    (blog: any) => blog.id
  );
  const taxBlogsContent = await Promise.all(
    taxBlogsIds.map(async (id: any) => {
      const blogUrl = `${STRAPI}/api/blogs/${id}?populate[0]=content`;
      const blogResponse = await fetch(blogUrl, {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      });
      const blogJson = await blogResponse.json();
      return blogJson.data.attributes.content;
    })
  );
  taxData.attributes.blogs.data = taxData.attributes.blogs.data.map(
    (blog: any, index: number) => {
      return {
        ...blog,
        content: taxBlogsContent[index],
      };
    }
  );

  const authorsUrl = `${STRAPI}/api/blog-authors?populate[0]=image&pagination[pageSize]=50`;
  const authorsResponse = await fetch(authorsUrl, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  
  let authorsData = await authorsResponse.json();

  const totalAuthors = authorsData?.meta?.pagination?.total;
  
  if(totalAuthors > 50) {
    const authorsUrl = `${STRAPI}/api/blog-authors?populate[0]=image&pagination[pageSize]=${totalAuthors}`;
    const authorsResponse = await fetch(authorsUrl, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });
    authorsData = await authorsResponse.json();
  }

  const calculatorsUrl = `${STRAPI}/api/calculators?populate[1]=icon`;
  const calculatorsResponse = await fetch(calculatorsUrl, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  const calculatorsData = await calculatorsResponse.json();

  const allBlogsUrl = `${STRAPI}/api/blogs?fields[0]=title&fields[1]=reading_duration&populate[blog_author][fields][0]=Name&pagination[limit]=-1&fields[2]=slug&populate[blog_category][fields][0]=slug&fields[3]=updatedAt&sort=updatedAt:desc`;
  const allBlogsResponse = await fetch(allBlogsUrl, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  const allBlogsData = await allBlogsResponse.json();

  const categoriesUrl = `${STRAPI}/api/blog-categories?populate[1]=banner_image&filters[$or][0][show_in_home][$eq]=true&filters[$or][1][show_in_home][$null]=true`;
  const categoriesResponse = await fetch(categoriesUrl, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  const categoriesData = await categoriesResponse.json();


  return {
    props: {
      CDN_URL,
      data: data.data,
      authorsData: authorsData.data,
      calculatorsData: calculatorsData.data,
      allBlogsData: allBlogsData.data,
      categoriesData: categoriesData.data,
    },
  };
};

function hexToRgb(hex: string) {
  // Remove the leading '#' if it exists
  hex = hex.replace(/^#/, "");

  // Parse the hex components into integers
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return [r, g, b];
}

function rgbToHex(r: any, g: any, b: any) {
  // Convert each RGB component back to a hex string
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
}

function darkenColor(hex: string, factor = 0.8) {
  let [r, g, b] = hexToRgb(hex);
  r = Math.floor(r * factor);
  g = Math.floor(g * factor);
  b = Math.floor(b * factor);

  return rgbToHex(r, g, b);
}
