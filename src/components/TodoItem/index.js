import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onEditing: false,
      title: '',
    };
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        onEditing: false,
      });
    }
  };
  onDoubleClick = () => {
    this.setState({ onEditing: true });
  };
  onCheckChange = event => {
    const { updateTodo, todoItem } = this.props;
    const target = event.target;
    const value = target.name === 'completed' ? target.checked : target.value;
    updateTodo({ ...todoItem, completed: value });
  };
  onTitleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };
  onKeyPress = e => {
    if (this.state.title) {
      const { updateTodo, todoItem } = this.props;
      const title = this.state.title;
      if (e.key === 'Enter') {
        updateTodo({ ...todoItem, title: title });
        this.setState({ title: '', onEditing: false });
      }
    }
    return;
  };
  onDeleteClick = id => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  };
  render() {
    let { todoItem } = this.props;
    return (
      <li
        onDoubleClick={() => this.onDoubleClick()}
        className={classnames('todo', { completed: todoItem.completed, editing: this.state.onEditing })}
      >
        <div className="view">
          <input
            name="completed"
            type="checkbox"
            className="toggle"
            onChange={event => this.onCheckChange(event)}
            checked={todoItem.completed}
          />
          <label> {todoItem.title} </label>
          <button onClick={() => this.onDeleteClick(todoItem.id)} className="destroy"></button>
        </div>
        <input
          onKeyPress={e => this.onKeyPress(e)}
          onChange={e => this.onTitleChange(e)}
          name="title"
          value={this.state.title}
          type="text"
          className="edit"
        />
      </li>
    );
  }
}

export default TodoItem;
