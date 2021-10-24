import { publicRequest } from "../requestMethods";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  registerFailure,
  registerStart,
  // registerSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  console.log(user);
  try {
    const res = await publicRequest.post("/register", user);
    // dispatch(registerSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(registerFailure());
    console.log(err.message);
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
};
