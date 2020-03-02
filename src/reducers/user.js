import {
    LOGIN_FAILURE, LOGIN_SUCCESS,
    NULL_ERROR
} from "../constants/ActionTypes";

const initialState = {};

const user = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOGIN_SUCCESS: {
            const {token, ...user} = payload;
            return {...state, ...payload};
        }
        default: {
            return state;
        }
    }
};

export default user;
