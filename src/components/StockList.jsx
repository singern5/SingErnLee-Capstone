import { useContext } from "react";
import StockContext from "../contexts/StockContext";
import "./StockList.css";

function StockList() {
  const { stockList, isLoading, error } = useContext(StockContext);

  return (
    <div className="stock-list">
      <h2>Stock List</h2>

      {isLoading && <p>Loading stock data...</p>}
     {error && <p className="stock-error">{error}</p>}

      {!isLoading && !error && stockList.length === 0 && (
        <div className="empty-state">No stocks added yet.</div>
      )}

      {!isLoading && !error && stockList.length > 0 && (
        <ul>
          {stockList.map((stock) => {
            const profitClass =
              stock.profitLoss >= 0 ? "positive" : "negative";

            return (
              <li key={stock.symbol} className="stock-item">
                <div className="stock-symbol">
                  Symbol: {stock.symbol}
                </div>

                <div className="quantity">
                  Quantity: {stock.quantity}
                </div>

                <div className="stock-buy-price">
                  Purchase Price: ${stock.buyPrice}
                </div>

                <div className="stock-price">
                  Current: ${stock.currentPrice}
                </div>

                <div className="stock-profit">
                  Profit/Loss:{" "}
                  <span className={profitClass}>
                    {stock.profitLoss >= 0 ? "+" : ""}
                    {stock.profitLoss.toFixed(2)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default StockList;
