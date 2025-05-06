import React, { useState } from "react";

import { 
  ContentGrid,
  GridItem,
  GridContainer,
  MyImageContainer,
  MyImage,
  CardContentContainer,
  CardFooterContainer,
} from '@/containers/Blog/styles';

import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import Progressbar from "@/components/ProgressBar";
import htmlSanitization from "@/utils/htmlSanitization";
import { ICONS_URL_MAP, LOGOS_URL_MAP } from "@/constants/AssetConstants";
import { APP_PLAY_STORE_URL, APP_URLS, NAVIGATION_URLS } from "@/constants/AppConstant";
import { toCDNUrl } from "@/utils/image_url_converter";

import { Font } from "@/components";

import {
  BlogPage,
  NavTitle,
  Header,
  BlogPoster,
  Container,
  ArrowLeft,
  NavText,
  NavTextUnderlined,
  Arrow,
  DropDownMenu,
  Menu,
  Poster,
  Title,
  LineBreak,
  Description,
  Timer,
  DescriptionSpan,
  FactCheckedContainer,
  PosterImage,
  BlogSubContainer,
  BlogContainer,
  SocialMediaLinks,
  SocialMediaLink,
  SocialMediaImage,
  TocTitle,
  NumberedList,
  ListItem,
  CopyLink,
  CopyImg,
  SourcesTitle,
  SourceLinks,
  SourceLink,
  SourceArrow,
  NavContainer,
  FiLogo,
  RightArrow,
  NavTitleVariant,
  RelatedBlogsContainer,
  RelatedBlogs,
  DisclaimerTitle,
  RelatedBlogsTitle,
  RelatedSubBlog,
  RelatedBlogSubImage,
  RelatedBlogGradient,
  RelatedBlogTitle,
  RelatedBlogSubTitle,
  ScrollTop,
  UpArrow,
  ButtonWrapper,
  Button,
  BlogFooter,
  CopyLinkText,
  H1SEO,
  PosterImageDesktop,
  PosterImageMobile,
} from "./styles";
import { StrapiImageRegex } from "./constants";

const onGuideClick = (categorySlug: string, slug: string): void => {
  window.open(`/guides/${categorySlug}/${slug}`, '_blank');
};
function Blog(BlogData: any) {
  const {
    title,
    writtenOn,
    lastEdited,
    author,
    reading_duration,
    BlogRichText,
    headerImage,
    sources,
    category,
    CategoriesList,
    RelatedBlog,
    guideCategory,
    CDN,
    h1,
    headerImageDesktopUrlData,
    headerImageMobileUrlData,
    blogRelevantReadsData,
    thisPostCategory
  } = BlogData.data;

  const [hovered, setHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerImageDesktop = headerImageDesktopUrlData ? headerImageDesktopUrlData : headerImageMobileUrlData;
  const headerImageMobile = headerImageMobileUrlData ? headerImageMobileUrlData : headerImageDesktopUrlData;

  function copy() {
    const el = document.createElement("input");
    el.value = global?.window && window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  const HandelMenuClick = () => {
    setHovered(!hovered);
  };

  const handelScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  if(global?.window){
    window.onscroll = function () {
      scrollFunction();
    };
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  function ExtractH2(htmlContent: any) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const h2Elements = doc.querySelectorAll("h2");
    const h2Texts: any = [];
    h2Elements.forEach((h2) => {
      h2.textContent && h2Texts.push(h2.textContent.trim());
    });
    return h2Texts;
  }

  const BlogContentH2 = ExtractH2(BlogRichText);

  function RewriteIdsToH2Content(htmlContent: any) {
    // Parse the HTML content string into a DOM object
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    // Select all <h2> elements
    const h2Elements = doc.querySelectorAll("h2");

    // Loop through each <h2> element
    h2Elements.forEach((h2Element: any) => {
      // Get the content between <h2> tags
      const content = h2Element.textContent.trim();

      // Set the content as the ID for the <h2> element
      h2Element.setAttribute("id", content.replace(/\s+/g, "-").toLowerCase());
    });

    return doc.body.innerHTML;
  }

  const BlogContent = RewriteIdsToH2Content(BlogRichText);

  const htmlSanitizationOptions: any = {
    FORCE_BODY: true,
    ADD_TAGS: ["iframe"], 
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'scoped', 'target']
}

  function formatDate(inputDate: any) {
    // Convert input date string to a JavaScript Date object
    const date = new Date(inputDate);

    // Define months array
    const months = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];

    // Get day, month and year from the date object
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
  }

  const Location = global?.window && window.location.href

  return (
    <BlogPage>
      <Header>
        <AppHeader />
      </Header>
      <Progressbar />

      <BlogPoster>
        <Container>
          <NavText href={NAVIGATION_URLS.BLOG.url}>
            <ArrowLeft src={ICONS_URL_MAP.TOP_ARROW_V2} />
            GUIDES
          </NavText>
          <NavTextUnderlined
            onMouseOver={() => {
              HandelMenuClick();
            }}
          >
            { category && category.replace(/-/g, " ").toUpperCase()}
            <Arrow
              src={
                hovered
                  ? `${ICONS_URL_MAP.TOP_ARROW_V2}`
                  : `${ICONS_URL_MAP.BOTTOM_ARROW_V2}`
              }
            />
          </NavTextUnderlined>
          <DropDownMenu
            isHovered={hovered}
            onMouseLeave={() => {
              HandelMenuClick();
            }}
          >
            {CategoriesList && CategoriesList.map((categoryName: any, index: number) => (
              <Menu
                handelCategory={categoryName.Name === category}
                key={index}
                // href={`${APP_URLS.BLOG_CATEGORIES}/${categoryName.slug}`}
                href={`/guides/${categoryName.slug}/pages/1`}
              >
                {categoryName.Name.replace(/-/g, " ").toUpperCase()}
              </Menu>
            ))}
          </DropDownMenu>
        </Container>
        <Poster>
          <NavContainer>
            <FiLogo src={LOGOS_URL_MAP.FI_LOGO} />
            <RightArrow src={ICONS_URL_MAP.FADE_RIGHT_ARROW} />
            <NavTitleVariant href={"/guides"}>Guides</NavTitleVariant>
            <RightArrow src={ICONS_URL_MAP.FADE_RIGHT_ARROW} />
            <NavTitleVariant href={`/guides/${guideCategory}/pages/1`}>{category}</NavTitleVariant>
            <RightArrow src={ICONS_URL_MAP.FADE_RIGHT_ARROW} />
            <NavTitle>A Guide: {title}</NavTitle>
          </NavContainer>
          <Title>{title} </Title>
          {/*
            * H1SEO
            * This tag is used only for the SEO purpose. It is hidden from the user.
            */ }
          {h1 && <H1SEO>{h1}</H1SEO>}
          <LineBreak />
          {
            author && 
            <Description>{reading_duration} MIN • <Timer src={ICONS_URL_MAP.TIMER_ICON} /> LAST EDITED BY <DescriptionSpan href={`${APP_URLS.TEAM_MEMBER}/${author.replace(/\s+/g, "-").toLowerCase()}`}>{author.toUpperCase()} </DescriptionSpan> ON {formatDate(lastEdited)}.</Description>
          }
          {/* {fact_checked && (
            <FactCheckedContainer>
              <Timer src={ICONS_URL_MAP.GREEN_CHECK_ICON} /> FACT CHECKED
            </FactCheckedContainer>
          )} */}
          {/* will be enabled once cross checked with ethnos */}
          {(headerImage && !headerImageDesktop && !headerImageMobile) ? (<PosterImage src={headerImage} /> ) : null}
          {headerImageDesktop && <PosterImageDesktop src={headerImageDesktop} alt='header-desktop-img' />}
          {headerImageMobile && <PosterImageMobile src={headerImageMobile} alt='header-mobile-img' />} 
        </Poster>
      </BlogPoster>
      <BlogSubContainer >
        <BlogContainer>
          {author && (
            <Description>
              Written by <DescriptionSpan href = {`${APP_URLS.TEAM_MEMBER}/${author.replace(/\s+/g, "-").toLowerCase()}`}>{author}</DescriptionSpan> on {formatDate(writtenOn)}.</Description>
          )}

          <SocialMediaLinks>
            <SocialMediaLink onClick={copy}>
              <SocialMediaImage src={ICONS_URL_MAP.SHARE_ICON} />
            </SocialMediaLink>

            <SocialMediaLink
              href={`https://www.linkedin.com/sharing/share-offsite/?url="${Location}"`}
              target="_blank"
            >
              <SocialMediaImage src={ICONS_URL_MAP.LINKEDIN_LOGO_V2} />
            </SocialMediaLink>
            <SocialMediaLink
              href={`https://twitter.com/intent/tweet?url=${Location}`}
              target="_blank"
            >
              <SocialMediaImage src={ICONS_URL_MAP.X_LOGO_V2} />
            </SocialMediaLink>
          </SocialMediaLinks>
          <TocTitle>Table of contents</TocTitle>
          <NumberedList>
            {BlogContentH2.map((data: any) => (
              <ListItem key={data}>
                {
                  <a href={`#${data.replace(/\s+/g, "-").toLowerCase()}`}>
                    {data}
                  </a>
                }
              </ListItem>
            ))}
          </NumberedList>
          <LineBreak />
          <div
            className="blog"
            dangerouslySetInnerHTML={{
              __html: htmlSanitization(BlogContent, htmlSanitizationOptions),
            }}
          />
          <CopyLink onClick={copy}>
            <CopyLinkText>
            Send it to someone who might find it helpful
            </CopyLinkText>
             <CopyImg src={ICONS_URL_MAP.GREEN_SHARE_LINK} />
          </CopyLink>
          {sources && sources.display_text && (
            <>
              <SourcesTitle>Sources</SourcesTitle>
              <SourceLinks>
                {sources.map((source: any) => (
                  <SourceLink key={source.id} href={source.url} target="_blank">
                    {source.display_text}
                    <SourceArrow src={ICONS_URL_MAP.GREEN_UP_ARROW_V3} />
                  </SourceLink>
                ))}
              </SourceLinks>
            </>
          )}
          <RelatedBlogsContainer>
            <RelatedBlogs>
              <DisclaimerTitle>
                Know more. <RelatedBlogsTitle>All that you’ll ever need to learn.</RelatedBlogsTitle>
              </DisclaimerTitle>
            </RelatedBlogs>
          </RelatedBlogsContainer>
          {/* commented as per compliance team */}
          {/* <Disclaimer /> */}
        </BlogContainer>
        
      </BlogSubContainer> 
              {/* This grid container is the code for blog preview on the blog page. Scrolling at the bottom will preview relevant blog 
              related to the current blog you are reading.*/}
      <GridContainer>
        <ContentGrid> 
          {
            blogRelevantReadsData.map((item: any, index: any) => {
              const guide = item?.attributes;
              let imageUrl = "";
              let guideImageUrl = guide?.header_image?.data?.attributes?.url || "";
              let guideImageUrlDesk = guide?.header_image_desk_mob?.header_image_desktop_826_x_442?.data?.attributes?.url || "";
              let guideImageUrlMob = guide?.header_image_desk_mob?.header_image_mobile_382_x_220?.data?.attributes?.url || "";
              
              if(guideImageUrl !== ""){
                  imageUrl = guideImageUrl
              }
              else if(guideImageUrlDesk !== ""){
                 imageUrl = guideImageUrlDesk
              }
              else if(guideImageUrlMob !== ""){
                  imageUrl = guideImageUrlMob
              }
              return (
                <GridItem key={index} onClick={() => onGuideClick(thisPostCategory,guide?.slug)}>
                  <MyImageContainer>
                    <MyImage 
                      src={toCDNUrl(CDN,imageUrl,true)} 
                      alt={guide?.title || 'No title available'} 
                      width={0}
                      height={0}
                    />
                  </MyImageContainer>
                  <CardContentContainer>
                    <Font color="CHARCOAL_GREY" tagType="h3" font="h3">
                      {guide?.title || 'Untitled'}
                    </Font>
                    <CardFooterContainer>
                      <Font color="CHARCOAL_GREY" tagType="p" font="pSmall">
                        {guide?.reading_duration || 'N/A'} min read
                      </Font>
                    </CardFooterContainer>
                  </CardContentContainer>
                </GridItem>
              );
          })
        }
        </ContentGrid>
      </GridContainer>
      <ScrollTop
        onClick={() => {
          handelScrollTop();
        }}
        isScrolled={scrolled}
      >
        <UpArrow src={ICONS_URL_MAP.GREEN_UP_ARROW_V2} />
      </ScrollTop>
      <ButtonWrapper
        isScrolled={scrolled}
        href={(globalThis.window as any).oneLinkCommonUrl || APP_PLAY_STORE_URL}
        target="_blank"
      >
        <Button>Download Fi App</Button>
      </ButtonWrapper>
      <BlogFooter>
        <AppFooter backgroundColor="#F7F9FA" hideStickyFooter />
      </BlogFooter>
    </BlogPage>
  );
}
export default Blog;
