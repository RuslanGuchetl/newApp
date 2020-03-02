import {put, takeEvery, call} from 'redux-saga/effects';
import {login} from "../actions";
import {LOGIN_FAILURE, LOGIN_SUCCESS} from "../constants/ActionTypes";
import {api} from "../service/client";

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* loginSaga({payload}) {
    const {cb, ...params} = payload;
    try {
        const response = yield call(api.post, '/user/authenticate', params);
        return yield put({type: LOGIN_SUCCESS, payload: response});
        if(cb) {
            cb();
        }
    } catch (e) {
        yield put({type: LOGIN_FAILURE, payload: e})
    }
}

export function* watchLogin() {
    yield takeEvery(login, loginSaga)
}