import StockForm from "./components/StockForm";
import StockList from "./components/StockList";
import { StockContextProvider } from "./contexts/StockContext";

function App() {
  return (
    <StockContextProvider>
      <div className="app">
        <h1>Finance Dashboard</h1>

        <StockForm />
        <StockList />
      </div>
    </StockContextProvider>
  );
}

export default App;
