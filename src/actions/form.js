import {createActions} from 'redux-actions';

import {NULL_ERROR} from '../constants/ActionTypes'

export const {
    nullError,
} = createActions({
    [NULL_ERROR]: name => ({name}),
});