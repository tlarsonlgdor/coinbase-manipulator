import React, { Component, useReducer, useState } from "react";
import GetCoinbaseProducts from "./GetCoinbaseProducts";

function ManualCoinbase() {
  const [showGetCoinbaseProducts, toggleShowGetCoinbaseProducts] = useReducer(
    (state) => !state,
    true
  );

  return (
    <>
      <div className="wrapper">
        <button onClick={toggleShowGetCoinbaseProducts}>
          Get Coinbase Products
        </button>
      </div>
      <div>{showGetCoinbaseProducts && <GetCoinbaseProducts />}</div>
    </>
  );
}

export default ManualCoinbase;
