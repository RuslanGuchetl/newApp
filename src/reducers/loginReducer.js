import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../constants/ActionTypes";

const initialState = {
  error: false,
  errorMessage: null,
  isFetching: false,
  status: 'ready'
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        error: false,
        errorMessage: null,
        isFetching: true,
        status: 'running',
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        status: 'ready'
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        error: true,
        errorMessage: action.payload.message || 'Login failed',
        isFetching: false,
        status: 'failed'
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
