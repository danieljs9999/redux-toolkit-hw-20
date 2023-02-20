import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isAuthOrised: false,
};

export const authSlise = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.email = action.payload;
      state.isAuthOrised = true;
    },
    logOut(state) {
      state.email = "";
      state.isAuthOrised = false;
    },
  },
});

export const authAction = authSlise.actions;
