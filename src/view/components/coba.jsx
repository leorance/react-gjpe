import React, { Component } from "react";

const index = Math.floor(Math.random() * 10) + 1;
export class coba extends Component {
  render() {
    return (
      <div>
        <p>Nomor : {index}</p>
        <>{[...Array(10)].map((x, i) => index)}</>
      </div>
    );
  }
}

export default coba;
