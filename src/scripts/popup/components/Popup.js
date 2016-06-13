import React, { Component, PropTypes } from 'react';


class Counter extends Component {
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, state } = this.props;
    console.log('%cRender ' + this.constructor.displayName + ' component', 'background: #FFF; color: #2aa198 ', 'state', this.state, 'props', this.props);
    return (
      <p>
        Clicked: {state.counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );
  }
}

export default Counter;
