interface StockData {
    [key: string]: string[];
  }
  
  
export const getStocksData = (stocks: string[]): any => {
    const stocksData: StockData = {};
    stocks.forEach((stock: string) => {
      const firstLetter = stock[0].toUpperCase();
      if (stocksData[firstLetter]) {
        stocksData[firstLetter].push(stock);
      } else {
        stocksData[firstLetter] = [stock];
      }
    });
    return { stocksData };
  };

export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
