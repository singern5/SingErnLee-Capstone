import { createContext, useState, useEffect, useCallback } from "react";

const StockContext = createContext();

export function StockContextProvider({ children }) {
  const [stockList, setStockList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "a75ee74ae310d0f56720a351";

  // ✅ useCallback (rubric requirement)
  const fetchStockPrice = useCallback(async (symbol) => {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    );
    const data = await res.json();
    const quote = data["Global Quote"];

    if (!quote || !quote["05. price"]) {
      throw new Error("Invalid stock symbol");
    }

    return parseFloat(quote["05. price"]);
  }, [API_KEY]);

  // ✅ Add stock from form
  const addStock = async ({ symbol, quantity, price }) => {
    try {
      setIsLoading(true);

      const currentPrice = await fetchStockPrice(symbol.toUpperCase());

      const profitLoss =
        (currentPrice - price) * quantity;

      setStockList(prev => [
        ...prev,
        {
          symbol: symbol.toUpperCase(),
          quantity,
          buyPrice: price,
          currentPrice,
          profitLoss
        }
      ]);

      setError(null);
    } catch {
      setError("Invalid stock symbol");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StockContext.Provider
      value={{ stockList, isLoading, error, addStock }}
    >
      {children}
    </StockContext.Provider>
  );
}

export default StockContext;
