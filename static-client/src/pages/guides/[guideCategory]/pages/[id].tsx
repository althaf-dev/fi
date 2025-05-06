import Colors from "@/Themes/Colors";
import { Font } from "@/components";
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import styled from "styled-components";
import Image from 'next/image';
import { Device } from "@/Themes/Device";
import { StrapiImageRegex } from "@/containers/Blog/constants";
import Head from "next/head";

const { CDN_URL } = process.env;

const AppHeaderContainer = styled.div`
    background-color: ${Colors.MINE_SHAFT};
`;
const SizedBox = styled.div<{ height?: number, width?: number }>`
    height: ${(props) => props.height || 0}px;
    width: ${(props) => props.width || 0}px;
`;
const TitleContainer = styled.div`

    text-align: center;
    background-color: ${Colors.MINE_SHAFT};

    @media ${Device.tab} {
        text-align: left;
        padding: 30px 100px;
    }

    @media ${Device.desktop} {
        padding: 100px 200px;
    }
`;

const ContentConatiner = styled.div`
    padding: 20px;
    background-color: ${Colors.CHALK_GREY};

    @media ${Device.desktop} {
        padding: 100px 200px;
    }
`;

const ContentGrid = styled.div`
    grid-column-gap: 55px;
    grid-row-gap: 55px;
    // grid-template-rows: auto auto auto;
    // grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid;

    @media ${Device.tab} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
    }

    @media ${Device.desktop} {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto auto;
    }
`;

const GridItem = styled.div`
    width: 100%;
    height: 515px;
    background-color: ${Colors.WHITE};
    border-radius: 20px;
    position: relative;
    cursor: pointer;
`;

const MyImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const MyImageContainer = styled.div`
    height: 45%;
    object-fit: cover;
`;

const CardContentContainer = styled.div`
    padding: 20px;
`;

const CardFooterContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
`;

const RelatedCategoriesContainer = styled.div`
    margin-top: 50px;
`;

const RelatedCategoriesGrid = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
`;

const RelatedCategoriesItem = styled.div`
    border-radius: 50px;
    height: 50px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
    color: ${Colors.FOREST_GREEN};

    border: 2px solid ${Colors.FOREST_GREEN};
`;

const ArrowContainer = styled.div<{ left?: string, right?: string }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${(props) => props.left && `left: ${props.left}`};
    ${(props) => props.right && `right: ${props.right}`};
`;

interface CategoryPageProps {
    guides: {
        title: string;
        duration: string;
        image: string;
        slug: string;
    }[];
    category: string;
    description: string;
    page: number;
    categorySlug: string;
    lastPage: number;
    relatedCategores: {
        name: string;
        slug: string;
    }[];
}

export default function CategoryPage(
    {
        guides,
        category,
        description,
        page,
        categorySlug,
        lastPage,
        relatedCategores
    }: CategoryPageProps 
) {
    const nextPage = Number(page) === Number(lastPage) ? null : Number(page) + 1;
    const prevPage = Number(page) === 1 ? null : Number(page) - 1;

    const onGuideClick = (guide: any) => {
        window.open(`/guides/${categorySlug}/${guide}`);
    }

    return (
        <>
        <AppHeaderContainer>
         <AppHeader />
        </AppHeaderContainer>

        <TitleContainer>
            <Font color='WHITE' tagType='h3' font='h3'>
                {category}
            </Font>
            <SizedBox height={40} />
            { description &&  <Font color='OSLO_GRAY' tagType='p' font='p'>
                {description}
            </Font>}
        </TitleContainer>

        <ContentConatiner>

            <ContentGrid>
                {guides && guides?.map((guide, index) => {
                    return (
                        <GridItem key={index} onClick={() => onGuideClick(guide?.slug)} >
                            <MyImageContainer>
                                <MyImage src={guide?.image} alt='image' width={0} height={0}  />
                            </MyImageContainer>
                            <CardContentContainer>
                                <Font color='OSLO_GRAY' tagType='h3' font='h3'>
                                    {guide?.title}
                                </Font>

                                <CardFooterContainer>
                                    <Font color='OSLO_GRAY' tagType='p' font='pSmall'>
                                        {guide?.duration} min read
                                    </Font>
                                </CardFooterContainer>
                            </CardContentContainer>
                        </GridItem>
                    )
                })}
            </ContentGrid>

            <div 
                style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 50
                }}
            >
                <Font color='OSLO_GRAY' tagType='h3' font='h3'>
                    {page} / {lastPage}
                </Font>
                <ArrowContainer right={'0px'}>
                    {nextPage && 
                        <a href={`/guides/${categorySlug}/pages/${nextPage}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill={Colors.GRAY}><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                        </a>
                    }
                </ArrowContainer>
                <ArrowContainer left={'0px'}>
                    {prevPage && 
                        <a href={`/guides/${categorySlug}/pages/${prevPage}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill={Colors.GRAY}><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                        </a>
                    }
                </ArrowContainer>
            </div>
            {relatedCategores?.length>0 && <RelatedCategoriesContainer>
                <Font color='MONOCHROME_STEEL' tagType='h1' font='h1'>
                    Related Categories
                    </Font>
                    <RelatedCategoriesGrid>
                        {relatedCategores && relatedCategores.map((category:any, index:any) => {
                            return (
                                <RelatedCategoriesItem key={index} onClick={()=>{
                                    window.open(`/guides/${category?.slug}/pages/1`)
                                }}>
                                    <Font color='FOREST_GREEN' tagType='p' font='pSmall'>
                                        {category?.name}
                                    </Font>
                                    <SizedBox width={10} />
                                    <Image src={'https://assets-global.website-files.com/61559d56514fd67c50eea39e/6492f074c67a2baf0e1f7a80_Vector.svg'} alt='image' width={15} height={15}  />
                                </RelatedCategoriesItem>
                            )
                        }
                        )}
                    </RelatedCategoriesGrid>
                </RelatedCategoriesContainer>}
        </ContentConatiner>
         <AppFooter />
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.STRAPI}/api/blog-categories?populate[0]=related_categories`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.TOKEN}`
        }  
    });
    const resJsonCategories = await res.json()
    const categories = resJsonCategories?.data.map((category:any) =>  category.attributes.slug);

    let paths = await categories.map(async (category:string, index:any) => {
        const res = await fetch(`${process.env.STRAPI}/api/blogs?fields[0]=id&filters[blog_category][slug][$eq]=${category}&pagination[pageSize]=1&pagination[page]=1`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.TOKEN}`
            }
        });
        const resJson = await res.json();
        const total = resJson.meta.pagination.total;
        const pageSize = 6;
        const pages = Math.ceil(total/pageSize);
    
        const categoryPageArray = [];
        for(let i = 1; i <= pages; i++) {
            categoryPageArray.push({
                params: {
                    guideCategory: category,
                    id: i.toString(),
                },
            })
        }
        return categoryPageArray;
    })
    paths = await Promise.all(paths);
    paths = paths.flat();

    return { paths, fallback: false }
}

export async function getStaticProps(props: any) {
    const { params } = props;
    const res = await fetch(`${process.env.STRAPI}/api/blogs?populate[0]=blog_category&filters[blog_category][slug][$eq]=${params.guideCategory}&pagination[pageSize]=6&pagination[page]=${params.id}&populate[1]=header_image&populate[2]=header_image_desk_mob.header_image_desktop_826_x_442&populate[3]=header_image_desk_mob.header_image_mobile_382_x_220&sort[0]=category_pinning:asc&sort[1]=updatedAt:desc`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.TOKEN}`
        }
    })
    const guideRes = res && await res?.json()
    
    const guides = guideRes?.data?.map((guide: any) => {
        let imageurl = null;
    
        const guideImageUrl = guide.attributes.header_image?.data?.attributes?.url || "";
        const guideImageUrlDesk = guide.attributes.header_image_desk_mob?.header_image_desktop_826_x_442?.data?.attributes?.url || "";
        const guideImageUrlMob = guide.attributes.header_image_desk_mob?.header_image_mobile_382_x_220?.data?.attributes?.url || "";
    
        if (guideImageUrl) {
            const regexMatch = guideImageUrl.match(StrapiImageRegex);
            if (regexMatch) {
                imageurl = `${CDN_URL}/content${regexMatch[1]}`;
            }
        } else if (guideImageUrlDesk) {
            const regexMatch = guideImageUrlDesk.match(StrapiImageRegex);
            if (regexMatch) {
                imageurl = `${CDN_URL}/content${regexMatch[1]}`;
            }
        } else if (guideImageUrlMob) {
            const regexMatch = guideImageUrlMob.match(StrapiImageRegex);
            if (regexMatch) {
                imageurl = `${CDN_URL}/content${regexMatch[1]}`;
            }
        }
    
        return {
            title: guide.attributes.title,
            duration: guide.attributes.reading_duration,
            image: imageurl || "",
            slug: guide.attributes.slug
        };
    });

    const sanitizedGuides = guides.filter((guide: { title: string; slug: string; image: string }) => guide.title && guide.slug && guide.image);
    
    const category = guideRes?.data[0]?.attributes?.blog_category?.data?.attributes?.Name;
    const lastPage = guideRes.meta.pagination.pageCount;
    
    const resCategory = await fetch(`${process.env.STRAPI}/api/blog-categories?populate[0]=related_categories&filters[slug][$eq]=${params?.guideCategory}`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.TOKEN}`
        }  
    });
    const resJsonCategory = await resCategory.json();
    const description = resJsonCategory?.data[0].attributes?.description || null;
    const relatedCategores = resJsonCategory?.data[0]?.attributes?.related_categories?.data.map((category:any) => ({
        name: category?.attributes?.Name,
        slug: category?.attributes?.slug
    })) || [];

    return { 
        props: { 
            guides: sanitizedGuides, 
            category, 
            description,
            page: params?.id,
            categorySlug: params?.guideCategory,
            lastPage,
            relatedCategores: relatedCategores
        }
    }
}