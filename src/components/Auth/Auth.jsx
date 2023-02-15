import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authActionTypes } from "../../store/auth/authReducer";
import Button from "../UI/Button";
import Input from "../UI/Input";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const inputChandler = (name) => {
    return (event) => {
      setFormState((prevState) => ({
        ...prevState,
        [name]: event.target.value,
      }));
    };
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      formState.email === "user@gmail.com" &&
      formState.password === "654321"
    ) {
      dispatch({
        type: authActionTypes.LOG_IN,
        payload: formState.email,
      });
    }
    navigate("/todo");
  };

  const enebled =
    formState.email.includes("user@gmail.com") &&
    formState.password.includes("654321");

  return (
    <Form onSubmit={submitHandler}>
      <InputContainer>
        <div>
          <Input
            type="email"
            placeholder="user@gmail.com"
            onChange={inputChandler("email")}
            value={formState.email}
            children="Email"
            id="Email"
          />
        </div>

        <div>
          <Input
            type="password"
            placeholder="654321"
            onChange={inputChandler("password")}
            value={formState.password}
            children="Password"
            id="password"
          />
        </div>
      </InputContainer>
      <Button disabled={!enebled}>Login</Button>
    </Form>
  );
}

export default Auth;

const Form = styled.form`
  background-color: #898989;
  padding: 20px 30px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 6px;
  width: 500px;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  p {
    padding-bottom: 20px;
    font-size: 1.7rem;
    font-weight: 500;
  }
`;
