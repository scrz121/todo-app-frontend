import * as types from '../contants/todo';

export const fetchListTodo = params => ({
  type: types.FETCH_LIST_TODO,
  payload: { params },
});
export const fetchListTodoSuccess = data => ({
  type: types.FETCH_LIST_TODO_SUCCESS,
  payload: { data },
});
export const fetchListTodoFailed = error => ({
  type: types.FETCH_LIST_TODO_FAILED,
  payload: { error },
});
export const createTodo = todoItem => ({
  type: types.CREATE_TODO,
  payload: { todoItem },
});
export const createTodoSuccess = data => ({
  type: types.CREATE_TODO_SUCCESS,
  payload: { data },
});
export const createTodoFailed = error => ({
  type: types.CREATE_TODO_FAILED,
  payload: { error },
});
export const updateTodo = todoItem => ({
  type: types.UPDATE_TODO,
  payload: { todoItem },
});
export const updateTodoSuccess = data => ({
  type: types.UPDATE_TODO_SUCCESS,
  payload: { data },
});
export const updateTodoFailed = error => ({
  type: types.UPDATE_TODO_FAILED,
  payload: { error },
});
export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  payload: { id },
});
export const deleteTodoSuccess = data => ({
  type: types.DELETE_TODO_SUCCESS,
  payload: { data },
});
export const deleteTodoFailed = error => ({
  type: types.DELETE_TODO_FAILED,
  payload: { error },
});
export const clearCompleted = () => ({
  type: types.CLEAR_COMPLETED,
});
export const clearCompletedSuccess = data => ({
  type: types.CLEAR_COMPLETED_SUCCESS,
  payload: { data },
});
export const clearCompletedFailed = error => ({
  type: types.CLEAR_COMPLETED_FAILED,
  payload: { error },
});
export const changeFilter = bool => ({
  type: types.CHANGE_FILTER,
  payload: { bool },
});
