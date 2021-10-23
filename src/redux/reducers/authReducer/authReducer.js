import { LOGIN_REQUEST, LOGOUT_REQUEST } from "../../actions";

const initialState = {
  isLogin: true,
  userData: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLogin: true,
        userData: action.payload,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        isLogin: false,
        userData: [],
      };

    default:
      return state;
  }
};

export default authReducer;
