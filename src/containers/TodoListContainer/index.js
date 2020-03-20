import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as todoActions from '../../actions/todo';
import TodoItem from '../../components/TodoItem';
import TodoList from '../../components/TodoList';
import TodoListFooter from '../../components/TodoListFooter';
import TodoListHeader from '../../components/TodoListHeader';

class TodoListContainer extends Component {
  componentDidMount() {
    const { todoActionCreators } = this.props;
    const { fetchListTodo } = todoActionCreators;
    fetchListTodo();
  }
  renderTodoListItem = () => {
    let xhtml = null;
    const { todoActionCreators } = this.props;
    const { updateTodo, deleteTodo } = todoActionCreators;
    const { todo } = this.props;
    const { listTodo } = todo;
    xhtml = listTodo.map((todo, index) => {
      return <TodoItem key={todo.id} todoItem={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />;
    });
    return xhtml;
  };
  renderTodoList = () => {
    let xhtml = null;
    const { todo } = this.props;
    const { listTodo, filterBy } = todo;
    const { todoActionCreators } = this.props;
    const { fetchListTodo, clearCompleted } = todoActionCreators;
    if (listTodo && listTodo.length > 0) {
      xhtml = (
        <React.Fragment>
          <TodoList>{this.renderTodoListItem()}</TodoList>
          <TodoListFooter
            count={listTodo.length}
            clearCompleted={clearCompleted}
            filterBy={filterBy}
            fetchListTodo={fetchListTodo}
          />
        </React.Fragment>
      );
    }
    if (filterBy !== null && listTodo.length === 0) {
      xhtml = (
        <TodoListFooter
          count={listTodo.length}
          clearCompleted={clearCompleted}
          filterBy={filterBy}
          fetchListTodo={fetchListTodo}
        />
      );
    }
    return xhtml;
  };
  render() {
    const { todoActionCreators } = this.props;
    const { createTodo } = todoActionCreators;
    return (
      <section data-v-1d9b105c="" className="todoapp">
        <TodoListHeader createTodo={createTodo} />
        {this.renderTodoList()}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo,
});

const mapDispatchToProps = dispatch => ({
  todoActionCreators: bindActionCreators(todoActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(TodoListContainer);
