import {DID_FETCH_AUTH_DATA} from "./MainActions";

const INITIAL_STATE = {loading: true, code: 0};

const reducer = (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case DID_FETCH_AUTH_DATA:
      newState.code = action.payload.code;
      newState.loading = false;
      break;
    default:
      return state;
  }

  return newState;
};

export default reducer;
