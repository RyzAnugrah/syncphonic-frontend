// import { publicRequest } from "../requestMethods";
import { userRequest } from "../requestMethods";
import {
  logoutStart,
} from "./userRedux";

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    const res = await userRequest.post("/logout");
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};
