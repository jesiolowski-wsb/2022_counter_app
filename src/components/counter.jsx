import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 4,
  };

  handleIncrement = (parameter) => {
    console.log("xxx", parameter);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <span className={this.getClassNames()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.handleIncrement(4)}
        >
          increment
        </button>
      </>
    );
  }

  getClassNames() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
