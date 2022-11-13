import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    const {onReset, onDelete, counters, onIncrement}=this.props;
    return (
      <div>
        <button
          className="btn btn-sm btn-primary m-2"
          onClick={onReset}
        >
          Reset
        </button>
        {counters.map((item) => (
          <Counter
            key={item.id}
            item={item}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}
