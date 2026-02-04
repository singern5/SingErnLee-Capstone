import { useState, useContext } from "react";
import StockContext from "../contexts/StockContext";
import "./StockForm.css";

function StockForm() {
  const { addStock } = useContext(StockContext);

  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addStock({
      symbol,
      quantity: Number(quantity),
      price: Number(price)
    });

    setSymbol("");
    setQuantity("");
    setPrice("");
  };

  return (
    <form className="stock-form" onSubmit={handleSubmit}>
      <h2 className="stock-form-title">Add a Stock</h2>

      <div className="stock-form-row">
        <input
          type="text"
          placeholder="Stock Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Purchase Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit" className="stock-form-button">
          Add Stock
        </button>
      </div>
    </form>
  );
}

export default StockForm;
