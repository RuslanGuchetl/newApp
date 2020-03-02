import {put, takeEvery, call} from 'redux-saga/effects';
import {login} from "../actions";
import {LOGIN_FAILURE, LOGIN_SUCCESS} from "../constants/ActionTypes";
import {api} from "../service/client";

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* loginSaga({payload}) {
    try {
        const response = yield call(api.post, '/user/authenticate', payload);
        return yield put({type: LOGIN_SUCCESS, payload: response});
    } catch (e) {
        yield put({type: LOGIN_FAILURE, payload: e})
    }
}

export function* watchLogin() {
    yield takeEvery(login, loginSaga)
}