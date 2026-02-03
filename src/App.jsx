import { useState } from "react";
import StockForm from "./components/StockForm";
import { StockContextProvider } from './contexts/StockContext';
import StockList from './components/StockList';

function App() {
  const [stocks, setStocks] = useState([]);

  const handleAddStock = (stock) => {
    setStocks([...stocks, stock]);
  };

  return (
     <StockContextProvider>
    <div>
      <h1>Finance Dashboard</h1>

      <StockForm onAddStock={handleAddStock} />

      <h2>Stock List</h2>
      <ul>
        {stocks.map((stock, index) => (
          <li key={index}>
            {stock.symbol} — {stock.quantity} shares @ ${stock.price}
          </li>
        ))}
      </ul>
    </div>
    </StockContextProvider>
  );
}

export default App;
