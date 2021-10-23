import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";

const rootReducers = combineReducers({
  auth: authReducer,
});

export default rootReducers;
