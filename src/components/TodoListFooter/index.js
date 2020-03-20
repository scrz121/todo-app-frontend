import React, { Component } from 'react';
import classnames from 'classnames';
import CountTodo from '../CountTodo';

class TodoListFooter extends Component {
  onfilterClick = params => {
    const { fetchListTodo } = this.props;
    fetchListTodo(params);
  };
  onClearCompleted = () => {
    const { clearCompleted } = this.props;
    clearCompleted();
  };
  render() {
    const { filterBy } = this.props;
    return (
      <footer className="footer">
        <CountTodo count={this.props.count} />
        <ul className="filters">
          <li>
            <button onClick={() => this.onfilterClick()} className={classnames({ selected: filterBy === null })}>
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => this.onfilterClick({ completed: false })}
              className={classnames({ selected: filterBy === false })}
            >
              Active
            </button>
          </li>
          <li>
            <button
              onClick={() => this.onfilterClick({ completed: true })}
              className={classnames({ selected: filterBy })}
            >
              Completed
            </button>
          </li>
        </ul>
        <button onClick={() => this.onClearCompleted()} className="clear-completed">
          Clear completed
        </button>
      </footer>
    );
  }
}

export default TodoListFooter;
