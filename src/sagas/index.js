import { takeLatest, put, call, select } from 'redux-saga/effects';
import { getList, createTodo, updateTodo, deleteTodo, clearCompleted } from '../api/todoApi';
import * as todoTypes from '../contants/todo';
import * as todoActions from '../actions/todo';

function* fetchListTodoSaga({ payload }) {
  const { params } = payload;
  try {
    const res = yield call(getList, params);
    yield put(todoActions.fetchListTodoSuccess(res.data.reverse()));
    yield put(todoActions.changeFilter(params));
  } catch (e) {
    yield put(todoActions.fetchListTodoFailed(e));
  }
}

function* createTodoSaga({ payload }) {
  const { todoItem } = payload;
  try {
    const res = yield call(createTodo, todoItem);
    const todoState = yield select(state => state.todo);
    const { listTodo, filterBy } = todoState;
    const list = filterBy !== true ? [res.data, ...listTodo] : listTodo;
    yield put(todoActions.createTodoSuccess(list));
  } catch (e) {
    yield put(todoActions.createTodoFailed(e));
  }
}

function* updateTodoSaga({ payload }) {
  const { todoItem } = payload;
  try {
    const res = yield call(updateTodo, todoItem);
    const todoState = yield select(state => state.todo);
    const { listTodo, filterBy } = todoState;
    const index = listTodo.findIndex(t => t.id === res.data.id);
    let list = [];
    if (res.data.completed === filterBy || filterBy === null) {
      list = [...listTodo.slice(0, index), { ...res.data }, ...listTodo.slice(index + 1)];
    } else {
      list = [...listTodo.slice(0, index), ...listTodo.slice(index + 1)];
    }
    yield put(todoActions.updateTodoSuccess(list));
  } catch (e) {
    yield put(todoActions.updateTodoFailed(e));
  }
}

function* deleteTodoSaga({ payload }) {
  const { id } = payload;
  try {
    yield call(deleteTodo, { id });
    const todoState = yield select(state => state.todo);
    const { listTodo } = todoState;
    const index = listTodo.findIndex(t => t.id === id);
    const list = [...listTodo.slice(0, index), ...listTodo.slice(index + 1)];
    yield put(todoActions.deleteTodoSuccess(list));
  } catch (e) {
    yield put(todoActions.deleteTodoFailed(e));
  }
}

function* clearCompletedSaga() {
  try {
    yield call(clearCompleted);
    const todoState = yield select(state => state.todo);
    const { listTodo } = todoState;
    const list = [];
    for (let i = 0; i < listTodo.length; i++) {
      if (listTodo[i].completed === false) {
        list.push(listTodo[i]);
      }
    }
    yield put(todoActions.clearCompletedSuccess(list));
  } catch (e) {
    yield put(todoActions.clearCompletedFailed(e));
  }
}

function* rootSaga() {
  yield takeLatest(todoTypes.FETCH_LIST_TODO, fetchListTodoSaga);
  yield takeLatest(todoTypes.CREATE_TODO, createTodoSaga);
  yield takeLatest(todoTypes.UPDATE_TODO, updateTodoSaga);
  yield takeLatest(todoTypes.DELETE_TODO, deleteTodoSaga);
  yield takeLatest(todoTypes.CLEAR_COMPLETED, clearCompletedSaga);
}

export default rootSaga;
