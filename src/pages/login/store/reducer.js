import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    loginStatus: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN:
            return state.set('loginStatus', true);
        case actionTypes.LOGOUT:
            return state.set('loginStatus', false);
        default:
            return state;
    }
}