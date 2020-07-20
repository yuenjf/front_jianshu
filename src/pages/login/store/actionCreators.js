import * as actionTypes from './actionTypes';
import axios from 'axios';

const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
            const data = res.data.data;
            if (data) {
                dispatch(changeLogin())
            } else {
                alert('登录失败');
            }
        })
    }
};

export const logout = () => ({
    type: actionTypes.LOGOUT,
});