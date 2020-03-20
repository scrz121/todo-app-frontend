import React, { Component } from 'react';

class TodoListHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }
  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onKeyPress = e => {
    if (this.state.title) {
      const { createTodo } = this.props;
      const title = this.state.title;
      if (e.key === 'Enter') {
        createTodo({ title: title });
        this.setState({ title: '' });
      }
    }
    return;
  };
  render() {
    return (
      <header className="header">
        <h1>Todo App</h1>
        <input
          onChange={e => this.onChange(e)}
          onKeyPress={e => this.onKeyPress(e)}
          name="title"
          autoFocus="autofocus"
          autoComplete="off"
          placeholder="What needs to be done?"
          value={this.state.title}
          className="new-todo"
        />
      </header>
    );
  }
}

export default TodoListHeader;
