import React from "react";
import styled from "styled-components";
import Todo from "./todo/Todo";
import TodoForm from "./todoForm/TodoForm";

function RouteTodo() {
  return (
    <>
      <Container>
        <TodoForm />
        <TodoContainer>
          <Todo />
        </TodoContainer>
      </Container>
    </>
  );
}

export default RouteTodo;

const Container = styled.div`
  margin-top: 160px;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
