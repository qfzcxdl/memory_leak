import {DID_FETCH_LOGIN_DATA} from "./LoginActions";

const INITIAL_STATE = {code: 0};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DID_FETCH_LOGIN_DATA:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default loginReducer;
