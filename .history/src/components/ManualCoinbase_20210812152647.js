import React, { useState } from "react";
import GetCoinbaseProducts from "./GetCoinbaseProducts";

function ManualCoinbase() {
  const [showGetCoinbaseProducts, setShowGetCoinbaseProducts] = useState(false);

  return (
    <>
      <div className="wrapper">
        <button onClick={setShowGetCoinbaseProducts(!showGetCoinbaseProducts)}>
          {showGetCoinbaseProducts && "Get Rid of Coinbase Products"}
          {!showGetCoinbaseProducts && "Get Coinbase Products"}
        </button>
      </div>
      <div>{showGetCoinbaseProducts && <GetCoinbaseProducts />}</div>
    </>
  );
}

export default ManualCoinbase;
