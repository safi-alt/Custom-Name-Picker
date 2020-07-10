import React, { Component } from "react";

import "./AddPerson.css";

class AddPerson extends Component {
  state = {
    name: "",
    age: "",
  };

  nameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  ageChangeHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  render() {
    return (
      <div className="AddPerson">
        <input
          style={{
            textAlign: "center",
            border: "1px solid green",
            boxSizing: "border-box",
            boxShadow: "0 2px 2px #ccc",
            margin: "20px",
            textDecoration: "bold",
          }}
          type="text"
          placeholder="Name"
          onChange={this.nameChangeHandler}
          value={this.state.name}
        />
        <input
          style={{
            textAlign: "center",
            border: "1px solid green",
            boxSizing: "border-box",
            boxShadow: "0 2px 2px #ccc",
            margin: "20px",
            textDecoration: "bold",
          }}
          type="Number"
          placeholder="Age"
          onChange={this.ageChangeHandler}
          value={this.state.age}
        />
        <button
          style={{
            textAlign: "center",
            border: "1px solid yellow",
            boxSizing: "border-box",
            boxShadow: "0 2px 2px #ccc",
            margin: "20px",
            textDecoration: "bold",
          }}
          onClick={() =>
            this.props.personAdded(this.state.name, this.state.age)
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}

export default AddPerson;
