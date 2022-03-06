import React, { Component } from "react";

class List extends Component {
  render() {
    return this.props.items.map((i) => (
      <span key={i} className="badge badge-success m-1">
        #{i}
      </span>
    ));
  }
}

export default List;
