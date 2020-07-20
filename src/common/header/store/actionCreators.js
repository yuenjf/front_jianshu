import * as actionTypes from './actionTypes';
import axios from 'axios';

//  获取handerList
const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data,
    totalPage: Math.ceil(data.length / 10)
});

//  搜索框聚焦
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

//  搜索框失焦
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

export const searchInfoMouseIn = () => ({
    type: actionTypes.SEARCH_INFO_MOUSE_IN
});

export const searchInfoMouseOut = () => ({
    type: actionTypes.SEARCH_INFO_MOUSE_OUT
});

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});

//  redux—thunk axios获取list
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch((err) => {
            console.log('axios 获取失败：' + err);
        })
    }
};