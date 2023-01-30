import React, { useContext } from "react";
import TodoListItem from "../TodoItem/TodoListItem";
import styled from "styled-components";
import { TodoContext } from "../../store/TodoContext";
export const ACTIONS = {
  ADD_TODO: "add_todo",
  COMPLETE_TODO: "complete_todo",
  DELETE_TODO: "delete_todo",
};

const TodoList = () => {
  const {dispatch, todos , title, setTitle , addTodoHandler, editTodoHandler} = useContext(TodoContext)
  
  const enebled = title.length > 0;

  
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
