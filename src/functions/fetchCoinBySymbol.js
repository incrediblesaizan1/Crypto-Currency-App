export const fetchCoinBySymbol = async(symbol, days) => {
    const url = "https://api.coingecko.com/api/v3/coins/list";
    if(days == "3m"){
    days = 90;
    }else if(days == "1y"){
        days = 365;
    }
    try {
        let coinId;
        if(symbol === "BTC"){
            coinId = "bitcoin";
        } else {
            const response = await fetch(url);
            const coins = await response.json();
            const coin = coins.find(c => c.symbol.toLowerCase() === symbol.toLowerCase());
            if (!coin) {
                console.log(`Coin with symbol '${symbol}' not found.`);
                return null;
            }
            coinId = coin.id;
        }
        
        const marketResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
        const data = await marketResponse.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};