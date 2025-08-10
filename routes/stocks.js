const express = require('express');
const router = express.Router();
const stocksService = require('../src/services/stocksService');

// Get all stocks
router.get('/', (req, res) => {
    const stocks = stocksService.getAllStocks();
    res.render('stocks/index', { 
        title: 'Stock Exchange - Available Stocks',
        stocks: stocks,
        searchQuery: req.query.search || ''
    });
});

// Search stocks
router.get('/search', (req, res) => {
    const query = req.query.q || '';
    const stocks = query ? stocksService.searchStocks(query) : stocksService.getAllStocks();
    
    res.render('stocks/index', { 
        title: 'Stock Exchange - Search Results',
        stocks: stocks,
        searchQuery: query
    });
});

// Get individual stock details
router.get('/:symbol', (req, res) => {
    const symbol = req.params.symbol.toUpperCase();
    const stock = stocksService.getStockBySymbol(symbol);
    
    if (!stock) {
        return res.status(404).render('error', { 
            title: 'Stock Not Found',
            message: `Stock with symbol ${symbol} not found.`
        });
    }
    
    res.render('stocks/detail', { 
        title: `Stock Exchange - ${stock.symbol}`,
        stock: stock
    });
});

// Buy stock endpoint (POST for actual transactions)
router.post('/:symbol/buy', (req, res) => {
    const symbol = req.params.symbol.toUpperCase();
    const { quantity, price } = req.body;
    
    const stock = stocksService.getStockBySymbol(symbol);
    if (!stock) {
        return res.status(404).json({ error: 'Stock not found' });
    }
    
    // Validate input
    if (!quantity || !price || quantity <= 0 || price <= 0) {
        return res.status(400).json({ error: 'Invalid quantity or price' });
    }
    
    // Calculate total cost
    const totalCost = quantity * price;
    
    // In a real application, you would:
    // 1. Check user's account balance
    // 2. Verify stock availability
    // 3. Process the transaction
    // 4. Update user's portfolio
    // 5. Update stock volume
    
    // For demo purposes, we'll just return success
    res.json({
        success: true,
        message: `Successfully purchased ${quantity} shares of ${symbol} at $${price} per share`,
        transaction: {
            symbol: symbol,
            quantity: parseInt(quantity),
            price: parseFloat(price),
            totalCost: totalCost,
            timestamp: new Date()
        }
    });
});

// Get top gainers
router.get('/top/gainers', (req, res) => {
    const limit = parseInt(req.query.limit) || 5;
    const gainers = stocksService.getTopGainers(limit);
    res.json(gainers);
});

// Get top losers
router.get('/top/losers', (req, res) => {
    const limit = parseInt(req.query.limit) || 5;
    const losers = stocksService.getTopLosers(limit);
    res.json(losers);
});

// Simulate price changes (for demo purposes)
router.post('/simulate-changes', (req, res) => {
    stocksService.simulatePriceChanges();
    res.json({ 
        success: true, 
        message: 'Stock prices updated',
        timestamp: new Date()
    });
});

module.exports = router;
