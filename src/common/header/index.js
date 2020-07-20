import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    Addition,
    Button
} from './style';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: false
        }
    }

    render() {
        const {focused, list, handleInputFocus, handleInputBlur, loginStatus, handleLogout} = this.props;
        return (
            <div>
                <HeaderWrapper>
                    <Link to="/">
                        <Logo/>
                    </Link>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        {
                            loginStatus ? <NavItem onClick={handleLogout} className='right'>退出</NavItem> :
                                <NavItem className='right'><Link to="/login">登录</Link></NavItem>
                        }
                        <NavItem className='right'>
                            <span className="iconfont">&#xe636;</span>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={400}
                                classNames="slide"
                            >
                                <NavSearch
                                    className={focused ? 'focused' : ''}
                                    onFocus={() => handleInputFocus(list)}
                                    onBlur={handleInputBlur}
                                >
                                </NavSearch>
                            </CSSTransition>
                            <span
                                className={focused ? 'focused iconfont magnifier' : 'iconfont magnifier'}>&#xe62d;</span>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className='reg'>注册</Button>
                        <Link to='/write'>
                            <Button className='writing'>
                                <span className="iconfont">&#xe600;</span>
                                写文章
                            </Button>
                        </Link>
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }

    getListArea() {
        const {focused, mouseIn, list, page, totalPage, handleSearchInfoMouseIn, handleSearchInfoMouseOut, handleChangePage} = this.props;
        //  immutable的数组不能直接用list[x]调用，用toJS 转换 普通数组
        const newList = list.toJS();
        const pageList = [];
        //  判断当newList有值得时候才循环，不然初始化 newList为空的时候 就自动循环10遍，获取不到数据导致key值为undefined
        if (newList.length) {
            //  控制输出10item
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleSearchInfoMouseIn}
                    onMouseLeave={handleSearchInfoMouseOut}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(spinIcon) => {
                                this.spinIcon = spinIcon
                            }} className="iconfont spin">&#xe601;</span>
                            换一换
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => ({
    //  使用get方法获取immutable对象中的值(两种写法)
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    loginStatus: state.getIn(['login', 'loginStatus'])
});

const mapDispatchToProps = (dispatch) => ({
    handleInputFocus(list) {
        dispatch(actionCreators.searchFocus());
        //  等价于 if(list.size === 0){dispatch(actionCreators.getList());}
        //  判断list为空的时候，通过axios获取数据，有数据后不获取
        (list.size === 0) && dispatch(actionCreators.getList());
    },
    handleInputBlur() {
        dispatch(actionCreators.searchBlur());
    },
    handleSearchInfoMouseIn() {
        dispatch(actionCreators.searchInfoMouseIn());
    },
    handleSearchInfoMouseOut() {
        dispatch(actionCreators.searchInfoMouseOut());
    },
    handleChangePage(page, totalPage, spinIcon) {
        let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
        if (originAngle) {
            originAngle = parseInt(originAngle);
        } else {
            originAngle = 0;
        }
        spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;
        //  判断当前页 是否小于 总共页，<当前页+1，=当前页置1
        if (page < totalPage) {
            dispatch(actionCreators.changePage(page + 1));
        } else {
            dispatch(actionCreators.changePage(1));
        }
    },
    handleLogout() {
        //  登录相关的代码，写在login里
        dispatch(loginActionCreators.logout())
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);