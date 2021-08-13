import React, { Component } from "react";
import CoinbasePro from "coinbase-pro";

class ManualCoinbase extends Component {
  constructor(props) {
    super(props);
    this.publicClient = new CoinbasePro.PublicClient();
    this.state = {
      coinbaseProductsObject: [],
      messages: "ManualCoinbase class is loaded",
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  getCoinbaseProducts() {
    this.publicClient
      .getProducts()
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
  }

  getProducts = async () => {
    try {
      let response = await this.getCoinbaseProducts();
      if (Array.isArray(response)) {
        this.setState({
          coinbaseProductsObject: response,
        });
        console.log("CoinbaseProductsObject call was successful");
        return "CoinbaseProductsObject call was successful";
      } else {
        console.log(
          "CoinbaseProductsObject call was not successful. It's not an array...error is: " +
            response
        );
        return (
          "CoinbaseProductsObject call was not successful. It's not an array...error is: " +
          response
        );
      }
    } catch (error) {
      console.log(
        "CoinbaseProductsObject call was not successful. Error is: " + error
      );
      return (
        "CoinbaseProductsObject call was not successful. Error is: " + error
      );
    }
  };

  handleGetCoinbaseProducts = async () => {
    let response = await this.getProducts();
    this.setState({ messages: response });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleGetCoinbaseProducts}>
            Get Coinbase Products
          </button>
        </div>
        <div>
          <h6>Messages: {this.state.messages}</h6>
        </div>
        <div>
          <h6>Data Returned:</h6>
          <div>
            {this.state.coinbaseProductsObject.length > 0 && (
              <ul>
                {this.state.coinbaseProductsObject.map((productObject) => {
                  return <li>JSON.stringify(productObject)</li>;
                })}
              </ul>
            )}
            {this.state.coinbaseProductsObject.length <= 0 &&
              "Coinbase Products array is empty..."}
          </div>
        </div>
      </div>
    );
  }
}

export default ManualCoinbase;
