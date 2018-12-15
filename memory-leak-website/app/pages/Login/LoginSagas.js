import {take, fork, call, put} from "redux-saga/effects";
import {
  FETCH_LOGIN_DATA,
  willFetchLoginData,
  didFetchLoginData
} from "./LoginActions";
import fetch from "../../api/fetch";

function* fetchLoginSaga(payload) {
  try {
    yield put(willFetchLoginData());
    const res = yield call(fetch, "/login", "POST", {type: "Login", payload});

    if (res.code !== 200) {
      throw Error("fail to login");
    }

    localStorage.setItem("token", res.token);
    window.store.dispatch({
      type: "DID_FETCH_AUTH_DATA",
      payload: {
        code: 200
      }
    });
    yield put(didFetchLoginData({code: res.code}));
  } catch (err) {
    console.log(err);
    alert("登录失败");
    yield put(didFetchLoginData({code: 400}));
  }
}
export function* watchLoginSaga() {
  while (1) {
    const {payload} = yield take(FETCH_LOGIN_DATA);
    yield fork(fetchLoginSaga, payload);
  }
}
