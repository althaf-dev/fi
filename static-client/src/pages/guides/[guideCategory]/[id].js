import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Blog from "../../../containers/Blog/index";
import Head from "next/head";
import { StrapiImageRegex } from "../../../containers/Blog/constants";
import getBlogInfoFromStrapi from "../../../utils/getBlogUrls";
import formatUrl from "../../../utils/addHttpsForRedirectionUrl";
import logger from "../../../utils/logger";

export async function getStaticPaths() {

  const paths = await getBlogInfoFromStrapi(axios);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const slug = params?.id;
  const { guideCategory } = params || {};
  const apiUrl = `${process.env.STRAPI}/api/blogs?filters[slug][$eq]=${slug}&populate[3]=header_image&populate[2]=blog_author&populate[1]=meta_details&populate[4]=content.blog_banner&populate[5]=sources&pagination[pageSize]=5&populate[6]=content.image&populate[7]=blog_category&populate[8]=header_image_desk_mob&populate[9]=header_image_desk_mob.header_image_desktop_826_x_442&populate[10]=header_image_desk_mob.header_image_mobile_382_x_220&populate[11]=content.image_desk&populate[12]=content.image_mob&populate[13]=relevant_reads&populate[14]=relevant_reads.header_image&populate[15]=relevant_reads.header_image_desk_mob.header_image_desktop_826_x_442&populate[16]=header_image_desk_mob.header_image_mobile_382_x_220`;
  const CDN = `${process.env.CDN_URL}/content`;
  const categoriesApiUrl = `${process.env.STRAPI}/api/blog-categories?populate[0]=blogs`;
  
  let posts = []; 
  let categories = [];
  let relatedBlogs = [];
  let thisPostBlogCategory; 
  let blogCategorySlug = '';
  let blogRelevantReadsData = [];
  

  try {
    // Fetch post data
    const postResponse = await axios.get(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });

    posts = postResponse?.data?.data?.[0]; 

    // Retrieve blog category name
    const blogCategoryData = posts?.attributes?.blog_category?.data?.attributes;
    const blogCategory = blogCategoryData?.Name;
    const blogcatslug = blogCategoryData?.slug;   //used this to edit the relatedBlogurl which now retrives blog in the specfic category according to the filters applied
   
    blogCategorySlug = blogcatslug || ''; 
   
    thisPostBlogCategory = blogCategory;
  
    blogRelevantReadsData = posts?.attributes?.relevant_reads?.data; 
        
    const RelatedBlogApiUrl = `${process.env.STRAPI}/api/blogs?populate[0]=header_image&populate[1]=header_image_desk_mob.header_image_desktop_826_x_442&populate[2]=header_image_desk_mob.header_image_mobile_382_x_220&pagination[pageSize]=6&filters[blog_category][slug][$eq]=${blogCategorySlug}&filters[slug][$ne]=${slug}&sort[0]=category_pinning:asc&sort[1]=updatedAt:desc`;

    // Fetch related blogs
    const relatedBlogsResponse = await axios.get(RelatedBlogApiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });
    // Code to decide the blogs that are to be previewed based on two factors ( relevant reads - field in strapi for adding preferable blogs / adds blogs from that category)
    relatedBlogs = relatedBlogsResponse?.data?.data;
  
    if ((!blogRelevantReadsData || blogRelevantReadsData?.length < 3) && Array.isArray(relatedBlogs) && relatedBlogs?.length > 0) {
      // Loop through the related blogs
      for (let i = 0; i < relatedBlogs.length; i++) {
        // Check if we have enough blogs or if the length is already 3
        if (blogRelevantReadsData.length >= 3) break;
        const relatedBlog = relatedBlogs[i];
        // Check if the blog already exists in blogRelevantReadsData based on the 'slug'
        const exists = blogRelevantReadsData.some(blog => blog?.attributes?.slug === relatedBlog?.attributes?.slug);
        // If it doesn't exist in blogRelevantReadsData, add it
        if (!exists) {
          blogRelevantReadsData.push(relatedBlog);
        }
          
      }
    }
    // Limit the size to 3 if the length exceeds(Displays max 3 blogs)
    blogRelevantReadsData = blogRelevantReadsData.slice(0, 3);
    
  logger.log("🚀 Success blogs and related")
  } catch (error) {
    logger.error("Error fetching Strapi data:", error?.message);
  }

  // Throttle the next API request by 500 milliseconds (0.5 seconds)
  await new Promise(resolve => setTimeout(resolve, 500));

  try {
    // Fetch blog categories
    const categoriesResponse = await axios.get(categoriesApiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });
    
    categories = categoriesResponse?.data?.data?.filter((category) => category?.attributes?.blogs?.data?.length > 0);

    if(!categories?.find(category => category?.attributes?.slug === 'all-things-money')) {
      const allThingsMoney = await axios.get(`${process.env.STRAPI}/api/blog-categories?filters[slug][$eq]=all-things-money`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      });
      categories.push(allThingsMoney?.data?.data?.[0]);
    }
  } catch (error) {
    console.error("Error fetching Strapi categories:", error?.message);
  }

  const breadcrumbScript = {
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [{
      "@type": "ListItem", 
      "position": 1, 
      "name": "Home Page",
      "item": "https://fi.money/"  
    },{
      "@type": "ListItem", 
      "position": 2, 
      "name": "Guides",
      "item": "https://fi.money/guides"  
    },{
      "@type": "ListItem", 
      "position": 3, 
      "name": `${thisPostBlogCategory}`,
      "item": `https://fi.money/guides/${guideCategory}/pages/1` 
    },{
      "@type": "ListItem", 
      "position": 4, 
      "name": `"${posts?.attributes?.title}"`,
      "item": `"${posts?.attributes?.slug}"`  
    }]
  }

  const bannerImageUrl = posts?.attributes?.header_image?.data?.attributes?.url;
  const bannerImageCDN = `${CDN}${bannerImageUrl?.match(StrapiImageRegex)?.[1]}`;

  const blogSchemaScript = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `"${posts?.attributes?.slug}"`
    },
    "headline": `${posts?.attributes?.title}`,
    "description": `${posts?.attributes?.meta_details?.meta_description}`,
    "image": `${bannerImageCDN}`,  
    "author": {
      "@type": "Person",
      "name": `"${posts?.attributes?.blog_author?.data?.attributes?.Name}"`,
      "url": `"${posts?.attributes?.blog_author?.data?.attributes?.url}"`
    },  
    "publisher": {
      "@type": "Organization",
      "name": "Fi Money",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dza2kd7rioahk.cloudfront.net/assets/svgs/logo.svg"
      }
    },
    "datePublished": "2024-04-24"
  }

  const websiteSchemaScript = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Fi.money",
    "url": "https://fi.money/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return {
    props: {
      CDN,
      posts,
      blogRelevantReadsData,
      categories,
      relatedBlogs,
      guideCategory,
      DOMAIN_URL: process.env.DOMAIN_URL,
      breadcrumbScript,
      blogSchemaScript,
      websiteSchemaScript,
      blogCategorySlug
    },
  };
}
export default function Post({ 
  posts, 
  categories, 
  CDN, 
  relatedBlogs, 
  guideCategory, 
  DOMAIN_URL, 
  breadcrumbScript, 
  blogSchemaScript, 
  websiteSchemaScript,
  blogRelevantReadsData ,
  blogCategorySlug
}) {
  const router = useRouter();
  const { id } = router.query;

  const {
    title,
    createdAt: writtenOn,
    fact_checked,
    slug,
    updatedAt: lastEdited,
    sources,
    blog_author,
    blog_category,
    content,
    header_image,
    meta_details,
    reading_duration,
    h1,
    header_image_desk_mob,
  } = posts?.attributes || {};
  
  const { Name: category } = blog_category?.data?.attributes || "";
  const { Name: author } = blog_author?.data?.attributes || "";
  let { url: headerImageUrl } = header_image?.data?.attributes || "";
  const CategoriesList = categories?.map((data) => data?.attributes) || [];
  const { meta_title, meta_description } = meta_details || {};
  const RelatedBlogData = relatedBlogs || {};
  const { header_image_desktop_826_x_442: header_image_desktop, header_image_mobile_382_x_220: header_image_mobile } = header_image_desk_mob || {};
  const thisPostCategory = blogCategorySlug || '';
  const headerImage = headerImageUrl ? `${CDN}${headerImageUrl?.match(StrapiImageRegex)?.[1]}` : "";

  const { url: header_image_desktop_url } = header_image_desktop?.data?.attributes || "";
  const { url: header_image_mobile_url } = header_image_mobile?.data?.attributes || "";

  const headerImageDesktopUrlData = header_image_desktop_url ? `${CDN}${header_image_desktop_url?.match(StrapiImageRegex)?.[1]}` : "";
  const headerImageMobileUrlData = header_image_mobile_url ? `${CDN}${header_image_mobile_url?.match(StrapiImageRegex)?.[1]}` : "";

  function extractContent(dataArray) {
    const contentArray = [];
    for (const item of dataArray) {
      if (item && item.content) {
        contentArray.push(item.content);
      } else if (item && item.table) {
        contentArray.push(`<div class='table'>${item.table}</div>`);
      } else if (item && item.__component==="video.video" && item.url) {
        contentArray.push(
          `<div class='video'><iframe src="${item.url}" title="description"></iframe></div>`
        );
      } else if (item && item.blog_banner) {
        const bannerData = item.blog_banner?.data?.attributes;
        if (bannerData) {
          contentArray.push(`<div class='banner' style='background:${bannerData.background_color}'>
                <img  class='banner-image' src ='${bannerData?.thumbnail?.data?.attributes?.url}'/>
                    <div>
                        <div class='banner-title' style='color:${bannerData?.text_color}'>${bannerData?.title}</div>
                        <a class = 'banner-link'>
                        <a class='banner-sub-title' style='color:${bannerData?.link?.text_color}' href='${bannerData?.link?.url}'>${bannerData?.link?.display_text}
                        <img src = 'https://dza2kd7rioahk.cloudfront.net/assets/svgs/chevron-left-blue.svg' class = 'banner-arrow'/>
                        </a>
                        </div>
                    </div>
                </div>`);
        }
      } else if (
        item &&
        item.__component === "image.image" && 
        item.image &&
        item.image?.data &&
        item.image?.data?.attributes &&
        item.image?.data?.attributes?.url
      ) {
        const img = `${CDN}${
          item?.image?.data?.attributes?.url?.match(StrapiImageRegex)?.[1]
        }`;
        contentArray.push(`<img src="${img}"/>`);
      }
      else if (
        item &&
        item.__component === "image-desk-mob.image-desk-mob"
      ) {
        let desk_url = item.image_desk?.data?.attributes?.url;
        let mob_url = item.image_mob?.data?.attributes?.url;
        let desk_img = "";
        let mob_img = "";
        
        if(desk_url || mob_url) {
           desk_img = desk_url ? `${CDN}${
            desk_url?.match(StrapiImageRegex)?.[1]
          }` : `${CDN}${
            mob_url?.match(StrapiImageRegex)?.[1]
          }`;
           mob_img = mob_url ? `${CDN}${
            mob_url?.match(StrapiImageRegex)?.[1]
          }` : `${CDN}${
            desk_url?.match(StrapiImageRegex)?.[1]
          }`;
        }
        
        const url = item?.url && formatUrl(item?.url);
        contentArray.push(`<a href="${url}"><img class="image-content-desktop" src="${desk_img}"/>
          <img class="image-content-mobile" src="${mob_img}"/></a>`);
      }
      else {
        contentArray.push(null);
      }
    }
    return contentArray;
  }

  const ContentData = extractContent(content);
  const BlogRichText = ContentData.join("");
  const RelatedBlog = RelatedBlogData;
  
  const BlogData = {
    title,
    writtenOn,
    fact_checked,
    lastEdited,
    author,
    reading_duration,
    BlogRichText,
    headerImage,
    sources,
    category,
    CategoriesList,
    RelatedBlog,
    slug,
    guideCategory,
    CDN,
    DOMAIN_URL,
    h1,
    headerImageDesktopUrlData,
    headerImageMobileUrlData,
    blogRelevantReadsData,
    thisPostCategory
  };


  return (
    <div>
      <Head>
        <title>{meta_title}</title>
        <meta property="description" content={meta_description} />
        <meta property="og:title" content={meta_title} />
        <meta property="og:description" content={meta_description} />
        <meta property="og:image" content={headerImage} />
        <meta property="og:url" content={`${DOMAIN_URL}/guides/${guideCategory}/${slug}`} />
        <meta property="og:type" content="article" /> 
        <meta name="twitter:title" content={meta_title}/>
        <meta name="twitter:description" content={meta_description} />
        <meta name="twitter:image" content={headerImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${DOMAIN_URL}/guides/${guideCategory}/${slug}`} />
        <link rel="canonical" href={`${DOMAIN_URL}/guides/${guideCategory}/${slug}`} />
        <description>{meta_description}</description>
        <script type="application/ld+json">{JSON.stringify(breadcrumbScript)}</script>
        <script type="application/ld+json">{JSON.stringify(blogSchemaScript)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchemaScript)}</script>
      </Head>
      
      <Blog data={BlogData} />

    </div>
  );
}
