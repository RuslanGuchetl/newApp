import { combineReducers } from 'redux';
import login from './login';
import form from './form';

const rootReducer = combineReducers({
  login,
  form,
});

export default rootReducer;
