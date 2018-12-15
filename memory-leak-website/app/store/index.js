import mainReducer from "../pages/Main/MainReducer";
import {watchMainSaga} from "../pages/Main/MainSagas";
import loginReducer from "../pages/Login/LoginReducer";
import {watchLoginSaga} from "../pages/Login/LoginSagas";

import Store from "./store";

const reducers = {
  mainReducer,
  loginReducer
};

const sagas = [watchMainSaga, watchLoginSaga];

export default (initialState = {}) => () =>
  Store(initialState, reducers, sagas);
