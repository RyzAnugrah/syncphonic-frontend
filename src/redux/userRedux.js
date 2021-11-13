import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    detailUser: {},
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
    userDetailStart: (state, action) => {
      state.detailUser = action.payload;
    },
    profilePutStart: (state) => {
      state.isFetching = true;
    },
    profilePutAccepted: (state) => {
      state.isFetching = false;
    },
    profilePutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    forgotPasswordStart: (state) => {
      state.isFetching = true;
    },
    forgotPasswordAccepted: (state) => {
      state.isFetching = false;
    },
    forgotPasswordFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    resetPasswordStart: (state) => {
      state.isFetching = true;
    },
    resetPasswordAccepted: (state) => {
      state.isFetching = false;
    },
    resetPasswordFailure: (state) => {
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
  userDetailStart,
  profilePutStart,
  profilePutAccepted,
  profilePutFailure,
  forgotPasswordStart,
  forgotPasswordAccepted,
  forgotPasswordFailure,
  resetPasswordStart,
  resetPasswordAccepted,
  resetPasswordFailure,
} = userSlice.actions;
export default userSlice.reducer;
