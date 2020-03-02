import { combineReducers } from 'redux';
import login from './login';
import form from './form';
import user from './user';

const rootReducer = combineReducers({
  login,
  form,
  user,
});

export default rootReducer;
