import * as actionTypes from './actionTypes';
//  引入immutable库
import {fromJS} from 'immutable';

//  创建immutable对象(JS对象 转换 immutable对象)
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个新的对象
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.SEARCH_INFO_MOUSE_IN:
            return state.set('mouseIn', true);
        case actionTypes.SEARCH_INFO_MOUSE_OUT:
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_LIST:
            //  当要改变多个值得时候，使用merge
            return state.merge({
                //  因为使用了immutable库，immutable会把store中数据 转换成 immutable对象，存进去也要改为immutable数据
                list: fromJS(action.data),
                totalPage: fromJS(action.totalPage)
            });
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}
