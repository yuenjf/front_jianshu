import * as actionTypes from './actionTypes';
import axios from 'axios';

const changeDetailData = (data) => ({
    type: actionTypes.CHANGE_DETAIL_DATA,
    data
});

export const getDetailData = (id) => {
    return (dispatch) => {
        axios.get('/api/detailData.json?id=' + id).then((res) => {
            const data = res.data.data;
            dispatch(changeDetailData(data));
        }).catch((err) => {
            console.log('axios 请求失败' + err);
        })
    }
};