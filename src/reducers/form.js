import {
    LOGIN_FAILURE,
    NULL_ERROR
} from "../constants/ActionTypes";

const initialState = {
    errors: {},
    message: null,
};

const login = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOGIN_FAILURE: {
            return {
                ...state,
                errors: payload,
            };
        }
        case NULL_ERROR: {
            return {
                ...state,
                errors: {...state.errors, [payload.name]: null},
            };
        }
        default: {
            return state;
        }
    }
};

export default login;
