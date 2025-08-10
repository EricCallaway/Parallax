const Stock = require('../models/Stock');

// Sample stocks data
const stocks = [
    new Stock('AAPL', 'Apple Inc.', 150.25, 2.15, 1.45, 45678900, 2500000000000),
    new Stock('GOOGL', 'Alphabet Inc.', 2750.80, -15.20, -0.55, 12345600, 1800000000000),
    new Stock('MSFT', 'Microsoft Corporation', 310.45, 8.75, 2.90, 23456700, 2300000000000),
    new Stock('AMZN', 'Amazon.com Inc.', 3200.00, 45.60, 1.44, 34567800, 1600000000000),
    new Stock('TSLA', 'Tesla Inc.', 850.30, -25.40, -2.90, 56789000, 800000000000),
    new Stock('META', 'Meta Platforms Inc.', 180.75, 3.25, 1.83, 23456700, 500000000000),
    new Stock('NVDA', 'NVIDIA Corporation', 450.20, 12.80, 2.93, 34567800, 1100000000000),
    new Stock('BRK.A', 'Berkshire Hathaway Inc.', 450000.00, 2500.00, 0.56, 1200, 650000000000),
    new Stock('JPM', 'JPMorgan Chase & Co.', 145.80, -1.20, -0.82, 12345600, 450000000000),
    new Stock('V', 'Visa Inc.', 250.60, 4.80, 1.95, 9876540, 550000000000)
];

class StocksService {
    // Get all stocks
    getAllStocks() {
        return stocks;
    }

    // Get stock by symbol
    getStockBySymbol(symbol) {
        return stocks.find(stock => stock.symbol === symbol.toUpperCase());
    }

    // Update stock price (simulate market changes)
    updateStockPrice(symbol, newPrice) {
        const stock = this.getStockBySymbol(symbol);
        if (stock) {
            stock.updatePrice(newPrice);
            return stock;
        }
        return null;
    }

    // Simulate random price changes for demo
    simulatePriceChanges() {
        stocks.forEach(stock => {
            const changePercent = (Math.random() - 0.5) * 0.02; // ±1% change
            const newPrice = stock.price * (1 + changePercent);
            stock.updatePrice(newPrice);
        });
    }

    // Get stocks with search/filter
    searchStocks(query) {
        const searchTerm = query.toLowerCase();
        return stocks.filter(stock => 
            stock.symbol.toLowerCase().includes(searchTerm) ||
            stock.name.toLowerCase().includes(searchTerm)
        );
    }

    // Get top gainers
    getTopGainers(limit = 5) {
        return [...stocks]
            .sort((a, b) => b.changePercent - a.changePercent)
            .slice(0, limit);
    }

    // Get top losers
    getTopLosers(limit = 5) {
        return [...stocks]
            .sort((a, b) => a.changePercent - b.changePercent)
            .slice(0, limit);
    }
}

module.exports = new StocksService();
