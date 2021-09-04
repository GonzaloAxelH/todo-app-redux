import { createStore, combineReducers } from "redux";
import {
  loadStateOfLocalStorage,
  toggleTheme,
  deleteTodo,
  addTodo,
  updateTodo,
} from "./actionCreators";

const initialState = {
  darkTheme: localStorage.getItem("themeDark") === "true" ? true : false,
  todos: loadStateOfLocalStorage(),
};

const darkTheme = (state = initialState.darkTheme, action) => { 
  if(action.type === "TOGGLE_THEME") return toggleTheme(state)
  return state;
};

const todos = (state = initialState.todos, action) => {
  let stateCopy = [...state];
  if(action.type === "ADD_TODO") return addTodo(stateCopy,action.payload)
  if(action.type === "UPDATE_TODO") return updateTodo(stateCopy,action.payload)
  if(action.type === "DELETE_TODO") return deleteTodo(stateCopy,action.payload)
  return state;
};

export default createStore(combineReducers({ darkTheme, todos }));
