import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [],
};

export const todoSlise = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
      state.result.push(action.payload);
    },
    remove(state, action) {
      state.result = state.result.filter((elem) => elem.id !== action.payload);
    },
    toggle(state, action) {
      state.result = state.result.map((elem) => {
        if (elem.id === action.payload) {
          return { ...elem, isCompleted: !elem.isCompleted };
        }
        return elem;
      });
    },
    edit(state, action) {
      state.result = state.result.map((elem) => {
        if (elem.id === action.payload.id) {
          return {
            ...elem,
            title: action.payload.value,
          };
        }
        return elem;
      });
    },
    deleteAll(state) {
      state.result = [];
    },
  },
});

export const todoAction = todoSlise.actions;
