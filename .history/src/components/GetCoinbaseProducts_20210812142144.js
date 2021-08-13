import React from "react"
import CoinbasePro from "coinbase-pro";
import useCoinbasePromise from "../services/useCoinbasePromise";


export default function GetCoinbaseProductsButton({userId}) {

    const publicClient = new CoinbasePro.PublicClient();

    const [data, response, error, isLoading] = usePromise(
        () => publicClient.getProducts().then(r => r.text()),
        []
    )

    const deleteUser = userId => {
        console.log(`Deleting user ${userId}`)
        ...
    }

    return (
        <>
            {isLoading && <p>Loading data...</p>}
            {error && <p>An error occurred</p>}
            {result && (
                <>
                    <div>{result}</div>
                    <button onClick={() => deleteUser(userId)}>
                        Delete user {userId}
                    </button>
                </>
            )}
        </>
    )
}