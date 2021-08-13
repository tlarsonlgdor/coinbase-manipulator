import React from "react";
import Async from "react-async";
import CoinbasePro from "coinbase-pro";

import useCoinbasePromise from "../services/useCoinbasePromise";

export default function GetCoinbaseProducts({ userId }) {
  const publicClient = new CoinbasePro.PublicClient();
  var products = "No download yet.";

  const loadCoinbaseProducts = async () => {
    try {
      products = await publicClient.getProducts();
      return products.json();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <Async promiseFn={loadCoinbaseProducts}>
        <Async.Pending>Loading...</Async.Pending>
        <Async.Fulfilled>
          {(products) => (
            <div>
              <strong>Player data:</strong>
              <pre>{JSON.stringify(products, null, 2)}</pre>
            </div>
          )}
        </Async.Fulfilled>
        <Async.Rejected>
          {(error) => `Something went wrong: ${error.message}`}
        </Async.Rejected>
      </Async>
    </>
  );
}
