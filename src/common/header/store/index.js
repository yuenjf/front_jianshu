// header的store的出口文件都集合在index，外部引入只需要import {xxx} from './store'即可
import reducer from './reducer';
import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';

export {reducer, actionTypes, actionCreators};