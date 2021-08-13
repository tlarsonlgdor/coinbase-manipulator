import React, { Component } from "react";
import CoinbasePro from "coinbase-pro";

class ManualCoinbase extends Component {
  constructor(props) {
    super(props);
    this.publicClient = new CoinbasePro.PublicClient();
    this.state = {
      coinbaseProductsObject: "Nothing Loaded",
      messages: "ManualCoinbase in loaded",
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  getCoinbaseProducts() {
    return this.publicClient
      .getProducts()
      .then((data) => {
        JSON.stringify(data);
      })
      .catch((error) => {
        JSON.stringify(error);
      });
  }

  getProducts = async () => {
    try {
      this.setState({
        coinbaseProductsObject: await this.getCoinbaseProducts(),
      });
      console.log("CoinbaseProductsObject call was successful");
      return "CoinbaseProductsObject call was successful";
    } catch {
      console.log("CoinbaseProductsObject call was not successful");
      return "CoinbaseProductsObject call was not successful";
    }
  };

  handleGetCoinbaseProducts() {
    this.setState({});
  }

  render() {
    return (
      <div>
        <div>
          <h6>Messages: {this.state.messages}</h6>
        </div>
        <div>
          <h6>Data Returned: {this.state.coinbaseProductsObject}</h6>
        </div>
      </div>
    );
  }
}

export default ManualCoinbase;
