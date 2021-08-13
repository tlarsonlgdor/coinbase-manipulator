import React, { Component, useReducer, useState } from "react";
import GetCoinbaseProducts from "./GetCoinbaseProducts";

function ManualCoinbase() {
  const [show, toggle] = useReducer((state) => !state, true);

  return (
    <div className="wrapper">
      <button onClick={deleteUser}>Delete user {userId}</button>
    </div>
  );
}

export default ManualCoinbase;
