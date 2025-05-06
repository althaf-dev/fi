const client = require('../grpc/usStocks/client');

const validateStockSymbol = async (stockSymbol) => {
    const rpcName = 'GetStockForSymbol';

    const payload = {
        symbol: stockSymbol.toUpperCase(),
    };

    const response = await client.makeRpcCall(payload, rpcName);

    const { stock_id } = response || {};

    if (stock_id) {
        return true;
    }
    return false;
};

module.exports = {
    validateStockSymbol,
};
