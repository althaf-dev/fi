/**
 * @file DataTestIDs/index.ts
 * Contains ElementTypes and data test function
 *
 */

const ElementTypes = {
    CTA: 'CTA',
    H1Text: 'H1Text',
    H2Text: 'H2Text',
    H3Text: 'H3Text',
    ParagraphText: 'ParagraphText',
    Link: 'Link',
    Card: 'Card',
    Container: 'Container',
    IconButton: 'IconButton',
    Image: 'Image',
    Carousel: 'Carousel',
    Animation: 'Animation',
    Lottie: 'Lottie',
    Video: 'Video',
};

const makeDataTestId = (screenName?: string, parentComponent?: string, elementType?: string, slug?: string) => {
    const formattedSlug = slug.replace(/[ ,'’]/g, '');
    return `${screenName}/${parentComponent}/${elementType}/${formattedSlug}`;
};

export { ElementTypes, makeDataTestId };
