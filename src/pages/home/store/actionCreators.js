import * as actionTypes from './actionTypes';
import axios from 'axios';

const changeHomeData = (data) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    data
});

const addHomeList = (data, nextPage) => ({
    type: actionTypes.ADD_HOME_LIST,
    data,
    nextPage
});

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/homeData.json').then((res) => {
            const data = res.data.data;
            dispatch(changeHomeData(data));
        }).catch((err) => {
            console.log('axios 请求失败: ' + err);
        })
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const data = res.data.data;
            dispatch(addHomeList(data, page + 1));
        }).catch((err) => {
            console.log('axios 请求失败: ' + err);
        })
    }
};

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_TOP_SHOW,
    show
});