import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {Link, Redirect} from 'react-router-dom';
import {
    LoginWrapper,
    Logo,
    LoginBox,
    Input,
    Button
} from './style';

class Login extends PureComponent {
    render() {
        const {loginStatus, handleLogin} = this.props;
        //  判断 登录状态 ，登陆后重定向到首页
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <Link to="/">
                        <Logo imgUrl={'http://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png'}/>
                    </Link>
                    <LoginBox>
                        <Input ref={(input) => this.account = input} placeholder="账号"/>
                        <Input ref={(input) => this.password = input} type="password" placeholder="密码"/>
                        <Button onClick={() => handleLogin(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'loginStatus'])
});

const mapDispatchToProps = (dispatch) => ({
    handleLogin(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);