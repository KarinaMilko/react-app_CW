import React, { Component } from "react";

//CounterC({step:1})             - function
//newCounterC({step:1}).render() - class

class CounterC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  dec = () => {
    // this.state.count = this.state.count - 1;
    console.log(this.state.count);
    // this.setState({count:count-1})
    this.setState({ count: this.state.count - this.props.step });
  };

  inc = () => {
    this.setState({ count: this.state.count + this.props.step });
  };

  render() {
    return (
      <div>
        <button onClick={this.dec}>-</button>
        {this.state.count}
        <button onClick={this.inc}>+</button>
      </div>
    );
  }
}
export default CounterC;
