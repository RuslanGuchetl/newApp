import {put, takeEvery, call} from 'redux-saga/effects';
import {login, loginSuccess, loginFailure} from "../actions/Login";
// import {api} from '../services/api'

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* loginSaga({payload}) {
  try {
    console.log('loginSaga payload', payload);
    yield call(delay, 500);
    return yield put(loginSuccess, payload);
    // const result = yield call(api.get, payload);
    if (result && result.isSuccess === true) {
      yield put(loginSuccess, result)
    } else {
      yield put(loginFailure, result)
    }
  } catch (e) {
    yield put(loginFailure, e)
  }
}

export function* watchLogin() {
  yield takeEvery(login, loginSaga)
}