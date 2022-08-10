import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.token = action.payload.token;
    },
  },
});

export const { authUser } = authSlice.actions;

export default authSlice.reducer;
