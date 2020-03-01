import {put, takeEvery, call} from 'redux-saga/effects';
import {login} from "../actions/Login";
import {LOGIN_FAILURE, LOGIN_SUCCESS} from "../constants/ActionTypes";
// import {api} from '../services/api'

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* loginSaga({payload}) {
  try {
    yield call(delay, 500);
    return yield put({type: LOGIN_SUCCESS, payload: payload});
    // const result = yield call(api.get, payload);
    if (result && result.isSuccess === true) {
      yield put({type: LOGIN_SUCCESS, payload: result})
    } else {
      yield put({type: LOGIN_FAILURE, payload: result})
    }
  } catch (e) {
    yield put({type: LOGIN_FAILURE, payload: e})
  }
}

export function* watchLogin() {
  yield takeEvery(login, loginSaga)
}