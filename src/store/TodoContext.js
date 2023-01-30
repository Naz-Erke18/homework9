import { createContext, useReducer, useState } from "react";
import React from "react";
import { ACTIONS } from "../components/TodoList/TodoList";

export const TodoContext = createContext({})


function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.COMPLETE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}
const newTodo = (name) => {
  return {
    id: Math.random() + new Date().getMilliseconds().toString(),
    name: name,
    complete: false,
  };
};
const TodoContextProvider = ({children}) => {
      const [title, setTitle] = useState("");

  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random() + new Date().getMilliseconds().toString(),
      name: "Nika",
      complete: false,
    },
    {
      id: Math.random() + new Date().getMilliseconds().toString(),
      name: "Kurmanzhan",
      complete: false,
    },
    {
      id: Math.random() + new Date().getMilliseconds().toString(),
      name: "Aibek",
      complete: false,
    },
  ]);
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: title } });
    todos.filter((item) => item.id === todos.id);
    setTitle("");
  };

  const editTodoHandler = (name, id) => {
    setTitle(name);
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } });
  };
  
  const state = {
todos,
dispatch,
title,
setTitle,
addTodoHandler, 
editTodoHandler,
  }
    return <TodoContext.Provider value={state}>{children}</TodoContext.Provider>
    
}

export default TodoContextProvider
