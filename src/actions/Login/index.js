import * as types from '../../constants/ActionTypes'
import { createActions } from 'redux-actions';

export const {
  login,
  loginSuccess,
  loginFailure
} = createActions({
  LOGIN: req => req,
  LOGIN_SUCCESS: req => req,
  LOGIN_FAILURE: req => req,
});