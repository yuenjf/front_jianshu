import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.data.topicList),
                articleList: fromJS(action.data.articleList),
                recommendList: fromJS(action.data.recommendList)
            });
        case actionTypes.ADD_HOME_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.data)),
                articlePage: action.nextPage,
            });
        case actionTypes.TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
}