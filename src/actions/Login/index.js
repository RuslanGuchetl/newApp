import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../../constants/ActionTypes'
import { createActions } from 'redux-actions';

export const {
  login
} = createActions({
  [LOGIN]: req => req,
  [LOGIN_SUCCESS]: resp => resp,
  [LOGIN_FAILURE]: error => error,
});