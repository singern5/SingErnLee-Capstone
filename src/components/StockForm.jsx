import React, { useState } from "react";
import "./StockForm.css";

function StockForm({ onAddStock }) {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStock = {
      symbol,
      quantity: Number(quantity),
      price: Number(price),
    };

    if (onAddStock) {
      onAddStock(newStock);
    }

    // clear form after submit
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
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="text"
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
