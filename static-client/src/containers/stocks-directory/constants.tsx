interface Stock {
  [key: string]: string;
}

const popularStocks: Stock[] = [
  { name: "Tesla", url: "TSLA" },
  { name: "Spotify Technology", url: "SPOT" },
  { name: "Nike", url: "NKE" },
  { name: "Netflix", url: "NFLX" },
  { name: "Microsoft", url: "MSFT" },
  { name: "Apple", url: "AAPL" },
  { name: "Amazon.com", url: "AMZN" },
  { name: "Alphabet Class A", url: "GOOGL" },
];

const trendingStocks: Stock[] = [
    { name: "Fluence Energy", url: "FLNC" },
    { name: "Microsoft", url: "MSFT" },
    { name: "Docebo", url: "DCBO" },
    { name: "Denison Mines", url: "DNN" },
    { name: "Cenovus Energy", url: "CVE" },
    { name: "Cameco", url: "CCJ" },
    { name: "Pan American Silver", url: "PAAS" },
    { name: "Amazon.com", url: "AMZN" },
    { name: "Itron", url: "ITRI" },
    { name: "Intellia Therapeutics", url: "NTLA" },
    { name: "Hudbay Minerals", url: "HBM" }
]

export { popularStocks, trendingStocks };
