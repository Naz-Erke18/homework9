import React, { useContext } from "react";
import { ACTIONS } from "../TodoList/TodoList";
import styled from "styled-components";
import { TodoContext } from "../../store/TodoContext";


const  TodoListItem=({ todo})=> {
 const {dispatch, editTodoHandler} = useContext(TodoContext) 
  return (
    <Container>
      {todo.complete ? (
        <Complete>{todo.name}</Complete>
      ) : (
        <Uncompleted>{todo.name}</Uncompleted>
      )}
      <div>
        <CompletButton
          onClick={() => {
            dispatch({ type: ACTIONS.COMPLETE_TODO, payload: { id: todo.id } });
          }}
        >
       Done
        </CompletButton>
        <EditButton
          onClick={() => {
            editTodoHandler(todo.name, todo.id);
          }}
        >
      Edit
        </EditButton>
        <DeleteButton
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
          }}
        >
        Delete
        </DeleteButton>
      </div>
    </Container>
  );
}

export default TodoListItem;

const Complete = styled.div`
  font-size: 30px;
  color: #0c0c0c;
  text-decoration: line-through;
`;
const Uncompleted = styled.div`
  font-size: 30px;
  color: #f8f2f2;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  color: white;
  
  border-radius: 10px;
background-color: #c1b1b1;
  margin-right: 20px;
`;

const DeleteButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #c1b1b1;
  border-radius: 10px;
 
`;
const CompletButton = styled.button`
  padding: 10px 10px;
  width: 60px;
  color: white;
  background-color: #c1b1b1;
  border-radius: 10px;
  margin-right: 20px;
  
`;
