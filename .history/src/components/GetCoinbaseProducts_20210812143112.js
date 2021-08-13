import React from "react";
import Async from "react-async";
import CoinbasePro from "coinbase-pro";

import useCoinbasePromise from "../services/useCoinbasePromise";

export default function GetCoinbaseProducts({ userId }) {
  const publicClient = new CoinbasePro.PublicClient();

  const loadPlayer = async ({ playerId }, { signal }) => {
    const res = await fetch(`/api/players/${playerId}`, { signal });
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  };

  return (
    <>
      <Async promiseFn={loadPlayer} playerId={1}>
        <Async.Pending>Loading...</Async.Pending>
        <Async.Fulfilled>
          {(data) => (
            <div>
              <strong>Player data:</strong>
              <pre>{JSON.stringify(data, null, 2)}</pre>
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
