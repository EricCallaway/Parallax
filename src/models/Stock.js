class Stock {
    constructor(symbol, name, price, change, changePercent, volume, marketCap) {
        this.symbol = symbol;
        this.name = name;
        this.price = price;
        this.change = change;
        this.changePercent = changePercent;
        this.volume = volume;
        this.marketCap = marketCap;
        this.lastUpdated = new Date();
    }

    // Method to update stock price
    updatePrice(newPrice) {
        const oldPrice = this.price;
        this.price = newPrice;
        this.change = (newPrice - oldPrice).toFixed(2);
        this.changePercent = ((this.change / oldPrice) * 100).toFixed(2);
        this.lastUpdated = new Date();
    }

    // Method to get formatted price
    getFormattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }

    // Method to get formatted change
    getFormattedChange() {
        const sign = this.change >= 0 ? '+' : '';
        return `${sign}$${this.change}`;
    }

    // Method to get change color class
    getChangeColorClass() {
        if (this.change > 0) return 'text-success';
        if (this.change < 0) return 'text-danger';
        return 'text-muted';
    }
}

module.exports = Stock;
