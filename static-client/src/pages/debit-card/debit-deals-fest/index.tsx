import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import InternationalDealsComsView from '@/containers/InternationalDealsComsView';
import React from 'react';

const DebitDealFest = ({ blogsData, CDN_URL }: any) => (
    <div>
        <div
            style={{
            backgroundColor: "#f4f0e4",
            }}
            >    
        <AppHeader />
        </div>
        <InternationalDealsComsView blogsData={formatBlogsData(CDN_URL, blogsData)} />
        <AppFooter hideStickyFooter />
    </div>
)
const formatBlogsData = (CDN_URL: string, blogsData: any[]) => blogsData
    ?.filter((blog) => blog?.data && blog?.data.length === 1)
    ?.map((blog) => {
        const { attributes } = blog?.data[0];
        const { title, reading_duration: readingDuration, slug, blog_category: blogCategory, header_image: headerImage } = attributes || {};
        const { data: { attributes: { slug: categorySlug = '', Name: category = '' } = {} } = {} } = blogCategory || {};
        const { data: { attributes: { formats: { small: { url = '' } = {} } = {} } = {} } = {} } = headerImage || {};
        return {
            title: title,
            category,
            categorySlug,
            readingDuration,
            slug,
            headerImage: toCDNUrl(CDN_URL, url),
        };
    });

const toCDNUrl = (CDN_URL: string, url: string) => {
    if (!url) return "";
    const regexToGetGroup = /https:\/\/.*\/(.*?)(\?|$)/;
    const group = url.match(regexToGetGroup);
    return `${CDN_URL}/content/${group![1]}`;
};

export const getStaticProps = async () => {
    const { STRAPI, CDN_URL, DOMAIN_URL } = process.env;
    const slugs = [
        'ultimate-savings-guide-when-travelling-abroad-using-the-fi-federal-debit-card',
        'what-is-a-cross-currency-fee-in-forex-cards-how-to-avoid-it',
        'beginners-guide-to-travelling-abroad-with-zero-forex-debit-cards',
    ]
    try {
        const blogsData = await Promise.all(
            slugs.map(async (slug) => {
                const layoutsUrl = `${STRAPI}/api/blogs?filters[slug][$eq]=${slug}&fields[0]=title&fields[1]=reading_duration&fields[2]=slug&populate[blog_category][fields][0]=slug&populate[blog_category][fields][1]=Name&populate[header_image]=true`;
                
                console.log("Attempting to fetch:", layoutsUrl);

                const response = await fetch(layoutsUrl, {
                    headers: {
                        Authorization: `Bearer ${process.env.TOKEN}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch data. Status: ${response.status} for slug: ${slug}`);
                }

                const data = await response.json();
                return data;
            })
        );

        return {
            props: {
                CDN_URL,
                blogsData,
            },
        };
    } catch (error) {
        console.error("Error fetching blog data:");

        return {
            props: {
                CDN_URL,
                blogsData: [],
                 // Optionally pass error message to the page for displaying an error message.
            },
        };
    }
};

export default DebitDealFest;
