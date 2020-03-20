import axiosService from './axiosService';
import { API_ENDPOINT } from '../contants';

export const getList = (params = null) => {
  if (params) {
    return axiosService.post(`${API_ENDPOINT}/todos`, params);
  } else {
    return axiosService.post(`${API_ENDPOINT}/todos`);
  }
};
export const createTodo = todoItem => {
  return axiosService.post(`${API_ENDPOINT}/createTodo`, todoItem);
};
export const updateTodo = todoItem => {
  return axiosService.post(`${API_ENDPOINT}/updateTodo`, todoItem);
};
export const deleteTodo = id => {
  return axiosService.post(`${API_ENDPOINT}/deleteTodo`, id);
};
export const clearCompleted = () => {
  return axiosService.post(`${API_ENDPOINT}/clearcompleted`);
};
