import { useContext } from 'react';
import StockContext from '../contexts/StockContext';

function StockList() {
  if (isLoading) {
    return <p>Loading stock data...</p>;
  }
   if (stockList.length === 0) {
    return <p>No stocks available.</p>;
  }

  return (
    <div className="stock-list">
      <h2>Watchlist</h2>
      <ul>
        {stockList.map((stock) => (
          // Use the stock symbol as the unique key [9]
          <li key={stock['01. symbol']}>
            <strong>{stock['01. symbol']}</strong>: ${stock['05. price']}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockList;