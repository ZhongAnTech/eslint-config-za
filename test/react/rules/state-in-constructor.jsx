/* eslint-disable */
/* eslint-enable react/state-in-constructor */
import React from 'react';

/**
 * recommend
 */
class Foo extends React.Component {
  state = { bar: 0 };

  render() {
    const { bar } = this.state;

    return <div>{bar}</div>;
  }
}

/**
 * good
 */
class Foo2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bar: 0 }
  }

  render() {
    const { bar } = this.state;

    return <div>{bar}</div>;
  }
}
