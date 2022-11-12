import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
    // tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={()=>this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        {/* <div>
          {this.state.tags.length === 0 && <p>please create new tag</p>}
        </div>
        <div>{this.renderTag()}</div> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

//   renderTag() {
//     if (this.state.tags.length === 0) return <p>List is empty!</p>;
//     return (
//       <ul>
//         {this.state.tags.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     );
//   }

  handleIncrement = () => {
    this.setState({count: this.state.count+1});
  };

}
