
async function getBlogInfoFromStrapi(axios) {
    // Call an external API endpoint to get posts
    const apiUrl = `${process.env.STRAPI}/api/blogs?pagination[pageSize]=2000&populate[0]=blog_category&fields[0]=slug`;
    let posts = [];
    try {
        console.log("trying to get the list of api urls");
        const response = await axios.get(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}`,
            },
        });

        posts = response.data;
    } catch (error) {
        console.error("Error fetching Strapi post:", error.message);
    }

    // Get the paths we want to pre-render based on posts
    const paths =
        posts?.data?.map((post) => ({
            params: { id: post.attributes.slug, guideCategory: (post.attributes.blog_category?.data?.attributes.slug || 'all-things-money') },
        })) || [];

    return paths;
}


module.exports = getBlogInfoFromStrapi
