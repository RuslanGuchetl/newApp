import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../constants/ActionTypes";
import {STATUSES} from "../constants/api";

const initialState = {
    status: 'ready'
};

const login = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOGIN: {
            return {
                ...state,
                status: STATUSES.RUNNING,
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                status: STATUSES.READY
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                status: STATUSES.ERROR
            };
        }
        default: {
            return state;
        }
    }
};

export default login;
