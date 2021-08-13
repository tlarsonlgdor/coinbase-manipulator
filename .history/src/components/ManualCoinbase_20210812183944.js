import React, { Component } from "react";
import CoinbasePro from "coinbase-pro";

class ManualCoinbase extends Component {

  constructor(props) {
      super(props);
      this.publicClient = new CoinbasePro.PublicClient();
    this.state = { coinbaseProductsObject = {},
coinbaseProductsArray = [] }
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <form>

      </form>
    )
  }
}

export default ManualCoinbase;
