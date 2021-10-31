import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: (state) => {
      state.currentUser = null;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerAccepted: (state) => {
      state.isFetching = false;
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = false;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  registerStart,
  registerAccepted,
  registerSuccess,
  registerFailure,
} = userSlice.actions;
export default userSlice.reducer;
