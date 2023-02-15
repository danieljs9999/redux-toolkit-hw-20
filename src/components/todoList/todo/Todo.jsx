import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoList from "./TodoList";

function Todo() {
  const result = useSelector((state) => state.todo.result);

  return (
    <Container>
      <Ul className={result.length === 0 ? "" : "backgroundColor"}>
        {result.map((item) => (
          <TodoList key={item.id} item={item} />
        ))}
      </Ul>
    </Container>
  );
}

export default Todo;

const Container = styled.div`
  .backgroundColor {
    background-color: #00009c;
  }
  margin-top: 40px;
`;

const Ul = styled.ul`
  padding: 20px 30px;
  border-radius: 6px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
