import { combineReducers, createStore } from "redux";
import { authSlise } from "./auth/authSlise";
import { todoSlise } from "./todo/todoSlise";

const rootReducer = combineReducers({
  [todoSlise.name]: todoSlise.reducer,
  [authSlise.name]: authSlise.reducer,
});

export const store = createStore(rootReducer);
