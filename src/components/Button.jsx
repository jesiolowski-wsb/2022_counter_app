import React, { Component } from "react";

class Button extends Component {
  state = { value: 0 };

  handleClick = (param) => {
    this.setState({ value: this.state.value + param });
  };

  render() {
    return (
      <>
        <div>{this.state.value}</div>
        <button onClick={() => this.handleClick(3)}>click me </button>
      </>
    );
  }
}

export default Button;
