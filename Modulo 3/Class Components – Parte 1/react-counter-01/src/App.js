import React, { Component } from 'react';
import Counter from './components/counter/counter';

export default class App extends Component {
  render() {
    return (
      // removendo o div de dentro dos parenteses
      <>
        <Counter />
        <Counter />
        <Counter />
      </>
    );
  }
}
