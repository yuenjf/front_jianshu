# project_jianshu

## 介绍
使用 React 实现简书项目

## 学习笔记
- styled-component

- 使用combineReducers对Reducer进行拆分,拆分后把出口文件都集合在index里面，外部引入只需引入index即可
```import {combineReducers} from 'redux';

import headerReducer from '../common/header/store/reducer';

export default combineReducers({
    header: headerReducer
})
```
    
- immutable.js 
```const newState = JSON.parse(JSON.stringify(state));
newState.focused = true;
return newState;
改为
return state.set('focused', true);
```
immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个新的对象

- PureComponent前提：使用immutabla.js，不然容易遇到坑内置了shouldComponentUpdata，性能优化
    
- 动态路由参数传递
```<Route path='/detail/:id' component={xx}/>    
   
   <Link to={'/detail/' + item.get('id')};
   
   this.props.match.params.id
```
通过axios把数据传给后端，请求对应数据
    
- react-loadable：异步组件，减少bundle的大小，使得详情页先不被打包
 使用后 this.props.match 无法获取，使用withRouter解决
   
## Error
- Error: React.Children.only expected to receive a single React element child.
  + 错误解决：CSSTransition标签只能包含一个标签

- TypeError: state.getIn is not a function
  + 情况：getIn无法使用
  + 解决：安装redux-immutable
    替换import {combineReducers} from 'redux';
    为import {combineReducers} from 'redux-immutable';
- Home.js:1375 Warning: Functions are not valid as
a React child. This may happen if you return a
 Component instead of <Component /> from render.
  Or maybe you meant to call this function rather 
  than return it.
  + 解决：调用函数时加括号**

- Error: Actions must be plain objects. Use custom middleware for async
actions.
  + 情况:action提交失败 
  + 解决:使用redux-thunk,action是可以返回一个函数,格式写错

- Error: Invariant failed: You should not use <Link> outside a <Router>
  + 情况：使用Link时出现
  + 解决：把组件放在Router内部
