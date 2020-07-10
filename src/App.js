import React, { Component } from "react";

import Persons from "./containers/Persons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1
          style={{
            textAlign: "center",
            color: "white",
            boxSizing: "border-box",
            boxShadow: "0 2px 2px #ccc",
            background: "salmon",
            height: "100%",
            marginTop: "0px",
            padding: "30px",
          }}
        >
          ENTER <bold>NAME</bold> N <bold>AGE</bold>
        </h1>

        <Persons />
      </div>
    );
  }
}

export default App;
