/* eslint-disable dot-notation */

const applicationLdJson = (params: any) => {
    const {
        breadcrumbSchema, orgSchema, productSchema, faqsSchema,
    } = params;
    const tagConig: any = {};

    if (orgSchema) {
        tagConig['orgSchema'] = orgSchema;
    }
    if (breadcrumbSchema) {
        tagConig['breadcrumbSchema'] = breadcrumbSchema;
    }
    if (productSchema) {
        tagConig['productSchema'] = productSchema;
    }
    if (faqsSchema) {
        tagConig['faqsSchema'] = faqsSchema;
    }
    return tagConig;
};

export default applicationLdJson;
