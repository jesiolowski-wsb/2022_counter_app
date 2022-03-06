import React from "react";

const List = ({ items, type }) => {
  return items.map((i) => (
    <span key={i} className="badge badge-primary m-1">
      #{i} {type}
    </span>
  ));
};

export default List;
