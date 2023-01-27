import React, { useReducer } from "react";
import { useState } from "react";
import TodoListItem from "../TodoItem/TodoListItem";
import styled from "styled-components";
export const ACTIONS = {
  ADD_TODO: "add_todo",
  COMPLETE_TODO: "complete_todo",
  DELETE_TODO: "delete_todo",
};

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
const TodoList = () => {
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
  const [title, setTitle] = useState("");
  const enebled = title.length > 0;

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
  return (
    <>
      <Container>
        <Title>My todo app</Title>
        <InfoContainer>
          <form>
            <Input
              value={title}
              placeholder="..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
          <AddButton onClick={addTodoHandler} disabled={!enebled}>
            ADD
          </AddButton>
        </InfoContainer>
      </Container>

      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoListItem
              todo={todo}
              dispatch={dispatch}
              editTodoHandler={editTodoHandler}
            />
          </div>
        );
      })}
    </>
  );
};

export default TodoList;

const Container = styled.div`
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 50px;
`;
const Title = styled.div`
  color: #c1b1b1;
  font-size: 60px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 530px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  &:focus {
    background-color: #8f8888;
  }
`;

const AddButton = styled.button`
  padding: 10px 30px;
  background-color: #c1b1b1;

  color: azure;
  font-weight: 30px;
  border-radius: 20px;
  border: none;
  margin-left: 20px;
`;
