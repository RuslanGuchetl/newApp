import { all } from 'redux-saga/effects';
import { watchLogin } from './loginSaga';

export function* rootSaga() {
  yield all([
    watchLogin()
  ])
}