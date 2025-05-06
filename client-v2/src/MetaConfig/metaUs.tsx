export const GenerateMetaInfos = (name: string, icon: string, faqArticles:[], currentPrice: number, usStockSymbol: string, symbol: string) => {
    const uppercaseStockSymbol = usStockSymbol?.toUpperCase();
    const lowerCaseSymbol = symbol?.toLowerCase();

    const metaTitle = `${name} Share Price: ${uppercaseStockSymbol} (${name}) Stock Price Today & Updates | Fi Money`;
    // eslint-disable-next-line max-len
    const metaDescription = `Buy ${name} Shares from India at ${currentPrice} (0 Commission) today. Start investing in ${name} stocks from India now with fractional investing only on Fi Money.`;
    const canonicalUrl = `/us-stocks/${lowerCaseSymbol}`;

    // eslint-disable-next-line max-len
    const keyWords = [`${name} share price,${name} stock, ${name} US, yahoo finance ${uppercaseStockSymbol}, ${uppercaseStockSymbol} stock, ${uppercaseStockSymbol} live US stock price, ${name} stock markets, US stock markets, ${name} market price, US markets watch, US stock markets today, US market watch, US stock markets, financial markets, US markets live, US stock live, US equity markets, fi.money, markets trading, US financial markets news, ${name} market cap, ${name} market capitalization`];

    const metaInfo = {
        metaTitle,
        metaDescription,
        canonicalUrl,
        keyWords,
    };

    return metaInfo;
};

export const GenerateMetaInfoStockDirectory = (alphabet: string) => {
    const metaTitle = `Filter from the best US stocks starting with '${alphabet.toUpperCase()}' | Stock Directory | Fi Money`;
    // eslint-disable-next-line max-len
    const metaDescription = `Refine and sort your choices across 2500+ US stocks, starting with '${alphabet.toUpperCase()}' on Fi Money. Simplify your research with our free online Stock Directory that enlists stocks from A to Z.`;

    const canonicalUrl = `/us-stocks/stock-directory/${alphabet}`;

    const metaInfo = {
        metaTitle,
        metaDescription,
        canonicalUrl,
    };
    return metaInfo;
};
