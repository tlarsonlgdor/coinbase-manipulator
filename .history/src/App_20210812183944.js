import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ManualCoinbase from "./components/ManualCoinbase";

function App() {
  return (
    <div className="wrapper">
      <h1>Coinbase Data Accessor</h1>
      <h2>Manual Calls</h2>
      <ManualCoinbase />
    </div>
  );
}

export default App;
