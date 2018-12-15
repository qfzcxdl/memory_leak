import {take, fork, call, put} from "redux-saga/effects";
import {
  FETCH_AUTH_DATA,
  willFetchAuthData,
  didFetchAuthData
} from "./MainActions";
import fetch from "../../api/fetch";

function* fetchMainSaga(payload) {
  try {
    yield put(willFetchAuthData());

    const res = yield call(fetch, "/authentication", "GET");
    console.log(payload);

    if (res.code !== 200) {
      payload.that.props.history.push("/login");
    }

    yield put(didFetchAuthData({code: res.code}));
  } catch (err) {
    console.log(err);
    // yield put(didFetchLoginData({code: 400}));
  }
}

export function* watchMainSaga() {
  while (1) {
    const {payload} = yield take(FETCH_AUTH_DATA);
    yield fork(fetchMainSaga, payload);
  }
}
