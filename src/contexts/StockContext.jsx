import { createContext, useState, useEffect } from "react";

const StockContext = createContext();

export function StockContextProvider({ children }) {
  const [stockList, setStockList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "a75ee74ae310d0f56720a351";

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        const quote = data["Global Quote"];

        // ❌ Reject fake / invalid symbols
        if (
          !quote ||
          Object.keys(quote).length === 0 ||
          !quote["01. symbol"] ||
          !quote["05. price"]
        ) {
          setError("Invalid stock symbol");
          setIsLoading(false);
          return;
        }

        // ✅ Valid stock only
        setError(null);
        setStockList([quote]);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch stock data");
        setIsLoading(false);
      });
  }, []);

  return (
    <StockContext.Provider
      value={{ stockList, setStockList, isLoading, error }}
    >
      {children}
    </StockContext.Provider>
  );
}

export default StockContext;
