// import { publicRequest } from "../requestMethods";
import {
  logoutStart,
} from "./userRedux";

export const logout = async (dispatch) => {
  dispatch(logoutStart());
};
