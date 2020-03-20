import React, { Component } from 'react';

class CountTodo extends Component {
  render() {
    return (
      <span className="todo-count">
        <strong> {this.props.count} </strong> items left{' '}
      </span>
    );
  }
}
export default CountTodo;
