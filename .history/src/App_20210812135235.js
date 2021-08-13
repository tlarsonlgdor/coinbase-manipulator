import React from "react";
import "./App.css";
import ManualCoinBaseAccessor from "./components/ManualCoinBaseAccessor";

function App() {
  return (
    <div className="wrapper">
      <h1>Coinbase Data Accessor</h1>
      <h2>Manual Calls</h2>
      <ManualCoinBaseAccessor />
    </div>
  );
}

export default App;
