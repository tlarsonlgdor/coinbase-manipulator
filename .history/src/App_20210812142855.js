import React from "react";
import "./App.css";
import ManualCoinbase from "./components/ManualCoinbase";

function App() {
  return (
    <div className="wrapper">
      <h1>Coinbase Data Accessor</h1>
      <h2>Manual Calls</h2>
      <ManualCoinBase />
    </div>
  );
}

export default App;
