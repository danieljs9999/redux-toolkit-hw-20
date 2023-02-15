import uuid from "react-uuid";

export const todoActionTypes = {
  ADD: "ADD",
  DELETE_ALL: "DELETE_ALL",
  REMOVE: "REMOVE",
  TOGGLE: "TOGGLE",
  EDIT: "EDIT",
};

const initialState = {
  result: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActionTypes.ADD:
      return {
        ...state,
        result: [
          ...state.result,
          { title: action.payload, id: uuid(), isCompleted: false },
        ],
      };

    case todoActionTypes.REMOVE:
      return {
        ...state,
        result: state.result.filter((elem) => elem.id !== action.payload),
      };

    case todoActionTypes.TOGGLE:
      return {
        ...state,
        result: state.result.map((elem) => {
          if (elem.id === action.payload) {
            return { ...elem, isCompleted: !elem.isCompleted };
          }
          return elem;
        }),
      };

    case todoActionTypes.EDIT:
      return {
        ...state,
        result: state.result.map((elem) => {
          if (elem.id === action.id) {
            return {
              ...elem,
              title: action.value,
            };
          }
          return elem;
        }),
      };

    case todoActionTypes.DELETE_ALL:
      return initialState;

    default:
      return state;
  }
};
