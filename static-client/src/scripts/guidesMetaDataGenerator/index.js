const fs = require('fs');
const path = require('path');
const axios = require('axios');
const getBlogInfoFromStrapi = require("../../utils/getBlogUrls");

const OUTPUT_DIRECTORY = path.join(__dirname, '../../../out/guides/strapi-meta-data/blogs')

const generateMetaData = async () => {
    if (!fs.existsSync(OUTPUT_DIRECTORY)) {
        fs.mkdirSync(OUTPUT_DIRECTORY, {
            recursive: true,
        });
    }

    const paths = await getBlogInfoFromStrapi(axios);

    paths.forEach( (slugMetaDa) => {
        const guideCategory = slugMetaDa.params.guideCategory;
        const blogSlugId = slugMetaDa.params.id;
        const filePath = path.join(OUTPUT_DIRECTORY, blogSlugId + '.json');

        const metaData = {
            'category_slug': guideCategory,
        };

        fs.writeFileSync(filePath, JSON.stringify(metaData), 'utf-8');
    });
};

generateMetaData().then(() => {
    console.log("Meta Data for the blogs has been generated");
});