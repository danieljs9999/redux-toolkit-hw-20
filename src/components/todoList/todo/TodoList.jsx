import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActionTypes } from "../../../store/todo/todoReducer";
import { BsCheck, BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

function TodoList({ item }) {
  const dispatch = useDispatch();

  const [editTode, setEditTode] = useState(false);
  const [editValue, setEditValue] = useState("");

  const removeTodo = () => {
    dispatch({ type: todoActionTypes.REMOVE, payload: item.id });
  };

  const toggleTodo = () => {
    dispatch({ type: todoActionTypes.TOGGLE, payload: item.id });
  };

  const editTodo = () => {
    setEditTode(true);
    setEditValue(item.title);
  };

  const saveHandler = () => {
    dispatch({
      type: todoActionTypes.EDIT,
      id: item.id,
      value: editValue,
    });
    setEditTode(false);
  };

  const editOnChange = (event) => {
    setEditValue(event.target.value);
  };

  return (
    <LiList>
      {editTode ? (
        <ConteinerEdit>
          <Input type="text" value={editValue} onChange={editOnChange} />
          <Button onClick={saveHandler}>Save</Button>
        </ConteinerEdit>
      ) : (
        <>
          <Conteiner onClick={() => toggleTodo(item.id)}>
            <InputCheckbox
              className={`${item.isCompleted ? "isCompleted" : "true"}`}
            >
              <BsCheck />
            </InputCheckbox>
            <P className={`${item.isCompleted ? "pToggle" : "p"}`}>
              {item.title}
            </P>
          </Conteiner>

          <ButtonConteiner>
            <DeleteButton>
              <BsTrash onClick={removeTodo} />
            </DeleteButton>

            <EditButton>
              <BiEditAlt onClick={() => editTodo(item.id, item.title)} />
            </EditButton>
          </ButtonConteiner>
        </>
      )}
    </LiList>
  );
}

export default TodoList;

const LiList = styled.li`
  list-style: none;
  padding: 5px 0px 5px 20px;
  border-radius: 10px;
  background-color: #000;

  display: flex;
  justify-content: space-between;
`;

const ConteinerEdit = styled.div`
  padding: 20px;
  border-radius: 6px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const InputCheckbox = styled.div`
  margin: 0px 20px 0px 0px;
  width: 28px;
  height: 28px;
  font-size: 5rem;
  border-radius: 8px;
  border: 2px solid #ff284b;
  background-color: #ff284b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Conteiner = styled.button`
  display: flex;
  align-items: center;
  background-color: #000;

  border: none;
  font-size: 1.5rem;

  .pToggle {
    color: #9f9f9f;
    font-size: 1.45rem;
    text-decoration: line-through;
  }
  .p {
    color: white;
  }

  .isCompleted {
    background-color: #ff284b;
  }

  .true {
    background-color: #000;
  }
`;

const P = styled.p`
  width: 400px;
  display: flex;
`;

const ButtonConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 5px 26px;
`;

const DeleteButton = styled.div`
  color: #323232;
  font-size: 26px;

  &:hover {
    color: #ff0000;
  }
  &:active {
    color: #920000;
  }
`;

const EditButton = styled.div`
  color: #323232;
  font-size: 26px;

  &:hover {
    color: #0026ff;
  }
  &:active {
    color: #242424;
  }
`;
