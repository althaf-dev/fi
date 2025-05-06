import styled from "styled-components";
import GradientImage from "../GradientImage";
import { MyFont, Title } from "../styled";
import { Device } from "@/Themes/Device";
import Image from "next/image";
import Colors from "@/Themes/Colors";
import Link from "next/link";

const makeBlogUrl = (categorySlug:any, titleSlug: any) => {
  if(categorySlug === undefined || titleSlug === undefined) {
    console.log("categorySlug or titleSlug is undefined");
    return `${window.location.origin}/guides`;
  }
  return `${window.location.origin}/guides/${categorySlug}/${titleSlug}`;
}

const Desktop = styled.div`
  display: none;
  @media ${Device.tab} {
    display: block;
  }
`;

const Mobile = styled.div`
  display: block;
  @media ${Device.tab} {
    display: none;
  }
`;
const GeneralBlogs = ({ title, CDN_URL, blogs, cardGradient }: any) => {
  const toCDNUrl = (url: string) => {
    const regexToGetGroup = /https:\/\/.*\/(.*?)(\?|$)/;
    const group = url?.match(regexToGetGroup);
    return !group ? '' : `${CDN_URL}/content/${group![1]}`;
  };
  return (
    <div style={{
      marginBottom: "80px",
    }} >
      <Desktop>
        <Title>{title}</Title>
        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gap: "20px",
            gridTemplateRows: "200px 200px 200px 200px",
            gridTemplateAreas: `
                        "sb1 sb1 sb1 sb2 sb2"
                        "sb1 sb1 sb1 sb2 sb2"
                        "b b b sb2 sb2"
                        ". . . b2 b2"
                    `,
          }}
        >
          {blogs.map((blog: any, index: Number) => {
            return (
              <Link href={makeBlogUrl(blog?.attributes?.blog_category?.data?.attributes?.slug, blog?.attributes?.slug)} key={blog.id} target="_blank"
              style={{
                gridArea:
                  index == 0
                    ? "sb1"
                    : index == 1
                    ? "sb2"
                    : index == 2
                    ? "b"
                    : index == 3
                    ? "b2"
                    : "",
                textDecoration: "none",
              }}
              >
              <GradientImage
                key={blog.id}
                description={blog.attributes.title}
                timeDuration={`${blog.attributes.reading_duration} min • ${blog.attributes.blog_author.data.attributes.Name}`}
                src={toCDNUrl(blog?.attributes?.header_image?.data?.attributes?.url)}
                gridArea={
                  index == 0
                    ? "sb1"
                    : index == 1
                    ? "sb2"
                    : index == 2
                    ? "b"
                    : index == 3
                    ? "b2"
                    : ""
                }
                gradientStyle={cardGradient}
              />
              </Link>
            );
          })}
        </div>
      </Desktop>

      <Mobile>
        <Title>General Blogs</Title>
        <div
          style={{
            marginTop: "20px",
            gap: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          { blogs[0] && <Link href={makeBlogUrl(blogs[0]?.attributes?.blog_category?.data?.attributes?.slug, blogs[0]?.attributes?.slug)} target="_blank">
           <GradientImage
            description={blogs[0].attributes.title}
            timeDuration={`${blogs[0].attributes.reading_duration}min • ${blogs[0].attributes.blog_author.data.attributes.Name}`}
            src={toCDNUrl(blogs[0]?.attributes?.header_image?.data?.attributes?.url)}
            gradientStyle={cardGradient}
          />
          </Link>
          }

          {blogs.map((blog: any, index: Number) => {
            return <Link href={makeBlogUrl(blog?.attributes?.blog_category?.data?.attributes?.slug ,blog?.attributes?.slug)} target="_blank"
            key={blog.id}
            style={{
              display: "flex",
              gap: "10px",
              flexDirection: "row",
            }}
          >
            <Image
              src={toCDNUrl(blog?.attributes?.header_image?.data?.attributes?.url)}
              alt='plant'
              width={100}
              height={100}
              style={{
                borderRadius: "20px",
              }}
            />
            <div
              style={{
                fontSize: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                fontFamily: "Gilroy",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <MyFont fontSize='16px' color={Colors.BLACK}>
                {blog.attributes.title}
              </MyFont>
              <MyFont fontSize='12px' color={Colors.GREY_2}>
                {`${blog.attributes.reading_duration} min read`}
              </MyFont>
            </div>
            </Link>
          })}
        </div>
      </Mobile>
    </div>
  );
};

export default GeneralBlogs;
