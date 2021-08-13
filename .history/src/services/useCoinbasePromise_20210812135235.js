import React, { useEffect, useState } from "react";

export default function useCoinbasePromise(f, deps) {
  const [data, setData] = useState();
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let subscribed = true;
    setIsLoading(true);

    f().then(
      (d) => {
        if (subscribed) {
          setIsLoading(false);
          setData(d);
        }
      },
      (r) => {
        if (subscribed) {
          setIsLoading(false);
          setResponse(r);
        }
      },
      (e) => {
        if (subscribed) {
          setIsLoading(false);
          setError(e);
        }
      }
    );

    return function cleanup() {
      subscribed = false;
    };
  }, deps || []);

  return [data, response, error, isLoading];
}
