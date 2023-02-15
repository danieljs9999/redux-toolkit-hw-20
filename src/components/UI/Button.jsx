import React from "react";
import styled from "styled-components";

function Button({ children, onClick, disabled }) {
  return (
    <ButtonStyle onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
}

export default Button;

const ButtonStyle = styled.button`
  background-color: blue;
  padding: 8px 20px;
  border: none;
  font-size: 1.5rem;
  color: white;
  border-radius: 6px;

  :hover {
    background-color: #0303c4;
  }

  :active {
    background-color: #1414da;
  }

  :disabled {
    background-color: #2b2be3;
  }
  cursor: pointer;
`;
