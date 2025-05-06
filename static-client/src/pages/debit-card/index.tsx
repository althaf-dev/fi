import Colors from "@/Themes/Colors";
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import DebitCardContainer from "@/containers/DebitCardContainer";
import TravelCard from "@/containers/DebitCardContainer/TravelCard";
import { DEBIT_CARD_TRACKING_PAYLOAD } from "@/containers/DebitCardContainer/constants";

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

const DebitCard = ({ blogsData, CDN_URL, FAQdata}: any) => {
    return (
        <div
            style={{
            backgroundColor: Colors.BLACK_3,
            }}
        >
            <div
                style={{
                backgroundColor: Colors.BLACK_3,
                }}
            >
                <AppHeader trackingPayload={DEBIT_CARD_TRACKING_PAYLOAD} />
            </div>
            <DebitCardContainer blogsData={formatBlogsData(CDN_URL, blogsData)} FAQData={FAQdata}/>
            <AppFooter hideStickyFooter />
        </div>
    );
  };
  export default DebitCard;

  export const getStaticProps = async () => {
    const { STRAPI, CDN_URL, DOMAIN_URL } = process.env;
    const slugs = [
        'ultimate-savings-guide-when-travelling-abroad-using-the-fi-federal-debit-card',
        'what-is-a-cross-currency-fee-in-forex-cards-how-to-avoid-it',
        'beginners-guide-to-travelling-abroad-with-zero-forex-debit-cards',
    ]
    const blogsData = await Promise.all(
        slugs.map(async (slug: string) => {
            const layoutsUrl = `${STRAPI}/api/blogs?filters[slug][$eq]=${slug}&fields[0]=title&fields[1]=reading_duration&fields[2]=slug&populate[blog_category][fields][0]=slug&populate[blog_category][fields][1]=Name&populate[header_image]=true`;
            const response = await fetch(layoutsUrl, {
                headers: {
                    Authorization: `Bearer ${process.env.TOKEN}`,
                },
            });
            const data = await response.json();
            return data;
        })
    );

    let FAQdata = {};
    try {
      const allCategory = `${DOMAIN_URL}/api/v1/faq/categories`;      
      const allCategoryDataResponse = await fetch(allCategory);
      if (!allCategoryDataResponse.ok) {
        throw new Error(`Failed to fetch categories: ${allCategoryDataResponse.statusText}`);
      }

      const allCategoryData = await allCategoryDataResponse.json();  
      const categoryId = allCategoryData?.data?.find(
        (category: any) => category.name === "Debit Card"
      ).id;

      const FAQurl = `${DOMAIN_URL}/api/v1/faq/category-details?categoryId=${categoryId}`;
      const response = await fetch(FAQurl);
      if (!response.ok) {
        throw new Error(`Failed to fetch FAQ data: ${response.statusText}`);
      }

      const data = await response.json();
      FAQdata = data?.data;
    }
    catch(error){
        console.error('Error fetching data:', error);
    }
    return {
      props: {
        CDN_URL,
        blogsData,
        FAQdata,
      },
    };
  };
