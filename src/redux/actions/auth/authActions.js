import { LOGIN_REQUEST, LOGOUT_REQUEST } from "./authTypes";

export const loginRequest = (userData = []) => {
  return {
    type: LOGIN_REQUEST,
    payload: userData,
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};
