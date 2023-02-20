import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoAction } from "../../../store/todo/todoSlise";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import uuid from "react-uuid";

function TodoForm() {
  const dispatch = useDispatch();

  const [todosValue, setTodosValue] = useState("");

  const enebled = todosValue.trim().length > 0;

  const inputHandler = (event) => {
    setTodosValue(event.target.value);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();

    const todoObj = {
      id: uuid(),
      title: todosValue,
      isCompleted: false,
    };

    dispatch(todoAction.add(todoObj));

    setTodosValue("");
  };

  const deeteAll = () => {
    dispatch(todoAction.deleteAll());
    console.log("deeteAll");
  };

  return (
    <Container>
      <Form>
        <Input type="text" onChange={inputHandler} value={todosValue} />
        <Button onClick={addTodoHandler} disabled={!enebled}>
          Add
        </Button>
      </Form>
      <ButtonDeleteAll onClick={deeteAll}>Delete All</ButtonDeleteAll>
    </Container>
  );
}

export default TodoForm;

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 30px;
`;

const Form = styled.form`
  background-color: #3e3e3e;
  padding: 20px 30px;
  border-radius: 6px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const ButtonDeleteAll = styled.button`
  background-color: #cb0000;
  padding: 8px 20px;
  border: none;
  font-size: 1.5rem;
  color: white;
  border-radius: 6px;

  :hover {
    background-color: #8f0606;
  }

  :active {
    background-color: #e01313;
  }
  cursor: pointer;
`;
