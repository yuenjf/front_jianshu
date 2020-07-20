import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL_DATA:
            return state.merge({
                title: fromJS(action.data.title),
                content: fromJS(action.data.content)
            });
        default:
            return state;
    }
}