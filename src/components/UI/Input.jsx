import React from "react";
import styled from "styled-components";

function Input({ onChange, value, type, placeholder, children, id }) {
  return (
    <>
      <Label htmlFor={id}>{children}</Label>
      <InputStyle
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;

const Label = styled.label`
  font-size: 1.7rem;
  font-weight: 500;
`;

const InputStyle = styled.input`
  padding: 6px 10px;
  font-size: 1.5rem;
  border-radius: 6px;
  outline: none;
  border: none;
  width: 100%;

  :focus {
    border: none;
    background-color: #e3e3e3;
  }
`;
