import { useState } from "react";
import StockForm from "./components/StockForm";

function App() {
  const [stocks, setStocks] = useState([]);

  const handleAddStock = (stock) => {
    setStocks([...stocks, stock]);
  };

  return (
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
  );
}

export default App;
