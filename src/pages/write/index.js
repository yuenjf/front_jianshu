import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        //  判断 登录状态 ，用户登录了跳转，没登录跳转登录页面
        if (loginStatus) {
            return (
                <div>写文章页面</div>
            )
        } else {
            return <Redirect to='/login'/>
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'loginStatus'])
});

export default connect(mapStateToProps, null)(Write);