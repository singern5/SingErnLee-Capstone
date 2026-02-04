import { useContext } from "react";
import StockContext from "../contexts/StockContext";
import "./StockList.css";

function StockList() {
  const { stockList, isLoading, error } = useContext(StockContext);

  return (
    <div className="stock-list">
      <h2>Stock List</h2>

      {isLoading && <p className="stock-loading">Loading stock data...</p>}

      {/* Always render the list, even if there’s an error */}
      {stockList.length === 0 && !isLoading && (
        <div className="empty-state">No stocks added yet.</div>
      )}

      {stockList.length > 0 && (
        <ul>
          {stockList.map((stock) => {
            const profitLoss = (stock.currentPrice - stock.buyPrice) * stock.quantity;
            const profitClass = profitLoss >= 0 ? "positive" : "negative";

            return (
              <li key={stock.symbol} className="stock-item">
                <div className="stock-symbol">Symbol: {stock.symbol}</div>
                <div className="quantity">Quantity: {stock.quantity}</div>
                <div className="stock-buy-price">Purchase Price: {stock.buyPrice}</div>
                <div className="stock-price">Current Price: {stock.currentPrice}</div>
                <div className="stock-profit">
                  Profit/Loss: <span className={profitClass}>
                    {profitLoss >= 0 ? "+" : ""}
                    {profitLoss.toFixed(2)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* Show the error below the list */}
      {error && !isLoading && (
        <p className="stock-error">{error}</p>
      )}
    </div>
  );
}

export default StockList;
