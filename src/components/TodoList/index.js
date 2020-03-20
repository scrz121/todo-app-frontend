import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const { children } = this.props;
    return (
      <section className="main">
        <input id="toggle-all" type="checkbox" className="toggle-all" />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">{children}</ul>
      </section>
    );
  }
}

export default TodoList;
