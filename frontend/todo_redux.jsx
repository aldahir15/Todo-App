import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodos, receiveTodo, fetchTodos } from './actions/todo_actions';
import configureStore from './store/store';
import Root from './components/root';
import allTodos from './reducers/selectors';
import {requestTodos} from './util/todo_api_util';


window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.allTodos = allTodos;
window.requestTodos = requestTodos;
window.fetchTodos = fetchTodos;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  console.log(store);
  store.dispatch(fetchTodos());
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}  />, root);
});
