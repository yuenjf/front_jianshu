import styled from 'styled-components';
//  图片先定义，再引入
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
  position:relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background:url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  a {
    color: #969696;
    text-decoration:none
  }
  &.left {
  float: left;
  }
  &.right {
  float: right;
  color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .magnifier {
  position:absolute;
  right: 4px;
  bottom: 4px;
  width: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;
  &.focused {
    background:#777;
    color: #fff;
  }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding:0 34px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background:#eee;
  font-size: 15px;
  color:#777;
  &::placeholder {
    color: #999;
  }
  &.focused {
  width: 240px;
  }
  /*CSSTransition*/
  &.slide-enter {
    transition: all 400ms ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 400ms ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 0; 
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background:#fff;
`;

export const SearchInfoTitle = styled.div`
  margin: 20px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.button`
  float: right;
  font-size: 12px;
  border: none;
  outline: none;
  padding: 0;
  line-height: 20px;
  background:#fff;
  color: #969696;
  &:hover {
    opacity: .7;
  }
  .spin {
    //  动画要block
    display: inline-block;
    font-size: 12px;
    width: 12px;
    transition: all 500ms ease-out;
    transform-origin:center center;
  }
`;
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: left;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background:#ec6149;
  }
`;