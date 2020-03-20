import * as types from '../contants/todo';
import { toastSuccess, toastError } from '../helpers/toastHelper';
let initState = {
  listTodo: [],
  filterBy: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_LIST_TODO: {
      return { ...state };
    }
    case types.FETCH_LIST_TODO_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTodo: data,
      };
    }
    case types.FETCH_LIST_TODO_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTodo: [],
      };
    }
    case types.CREATE_TODO: {
      return { ...state };
    }
    case types.CREATE_TODO_SUCCESS: {
      const { data } = action.payload;
      toastSuccess('Thêm mới thành công!');
      return { ...state, listTodo: [...data] };
    }
    case types.CREATE_TODO_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    case types.UPDATE_TODO: {
      return { ...state };
    }
    case types.UPDATE_TODO_SUCCESS: {
      const { data } = action.payload;
      return { ...state, listTodo: [...data] };
    }
    case types.UPDATE_TODO_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    case types.DELETE_TODO: {
      return { ...state };
    }
    case types.DELETE_TODO_SUCCESS: {
      const { data } = action.payload;
      toastSuccess('Xóa thành công!');
      return { ...state, listTodo: [...data] };
    }
    case types.DELETE_TODO_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    case types.CLEAR_COMPLETED: {
      return { ...state };
    }
    case types.CLEAR_COMPLETED_SUCCESS: {
      const { data } = action.payload;
      toastSuccess('Đã xóa các công việc đã hoàn thành !');
      return { ...state, listTodo: [...data] };
    }
    case types.CLEAR_COMPLETED_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state };
    }
    case types.CHANGE_FILTER: {
      const { bool } = action.payload;
      if (bool) {
        const b = bool.completed;
        return { ...state, filterBy: b };
      }
      return { ...state, filterBy: null };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
