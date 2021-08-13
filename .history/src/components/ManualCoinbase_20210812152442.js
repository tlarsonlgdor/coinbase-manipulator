import React, { useState } from "react";
import GetCoinbaseProducts from "./GetCoinbaseProducts";

function ManualCoinbase() {
  const [showGetCoinbaseProducts, setShowGetCoinbaseProducts] = useState(false);

  function setShowGetCoinbaseProducts() {
    showGetCoinbaseProducts = !showGetCoinbaseProducts;
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={setShowGetCoinbaseProducts}>
          {showGetCoinbaseProducts && "Get Rid of Coinbase Products"}
          {!showGetCoinbaseProducts && "Get Coinbase Products"}
        </button>
      </div>
      <div>{showGetCoinbaseProducts && <GetCoinbaseProducts />}</div>
    </>
  );
}

export default ManualCoinbase;
