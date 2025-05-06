/* Generic component to create the meta tags required for the social media previews */

import Head from "next/head";
import React from "react";
import { StrapiImageRegex } from "@/containers/Blog/constants";

interface MetaDetails {
  meta_description: string;
  meta_title: string;
}

interface HeaderImage {
  data: {
    attributes: {
      url: string;
    };
  };
}

interface Posts {
  attributes: {
    slug: string;
    meta_details: MetaDetails;
    header_image: HeaderImage;
  };
}

interface MetaProps {
  DOMAIN_URL: string;
  guideCategory: string;
  posts: Posts;
  CDN:string;
}

const defaultHeaderImage = {
  data: {
    attributes: {
      url: "",
    },
  },
};
const defaultMeta = {
  meta_description: `Fi is an Indian financial app with features 
  that help you get better with your money`,
  meta_title: `Fi.Money - Top Money Management app in India
  | Track your spends & investments`,
};

const defaultPosts = {
  attributes: {
    slug: "",
    meta_details: defaultMeta,
    header_image: defaultHeaderImage,
  },
};

function Meta({ DOMAIN_URL, guideCategory, posts, CDN }: MetaProps) {
  const { header_image, slug, meta_details } =
    posts?.attributes || defaultPosts;
  const { meta_description, meta_title } = meta_details || defaultMeta;
  const URL = `${DOMAIN_URL}/guides/${guideCategory}/${slug}`;
  const { url:headerImageUrl } = header_image?.data?.attributes || ""
  const headerImage = headerImageUrl ? `${CDN}${headerImageUrl?.match(StrapiImageRegex)?.[1]}` : "";


  return (
    <Head>
      <meta property="description" content={meta_description} />
      <meta property="og:title" content={meta_title} />
      <meta property="og:description" content={meta_description} />
      <meta property="og:image" content={headerImage} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={meta_title} />
      <meta name="twitter:description" content={meta_description} />
      <meta name="twitter:image" content={headerImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={URL} />
    </Head>
  );
}

Meta.defaultProps = {
  DOMAIN_URL: "",
  guideCategory: "",
  posts: defaultPosts,
  CDN: "",
};

export default Meta;
