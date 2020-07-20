import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import Header from '../../common/header';
// import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {BackTop} from './style';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header/>
                <HomeWrapper>
                    <HomeLeft>
                        {/*<Topic/>*/}
                        <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend/>
                        <Writer/>
                    </HomeRight>
                    {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>箭头</BackTop> : null}
                </HomeWrapper>
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getHome();
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatchToProps = (dispatch) => ({
    getHome() {
        dispatch(actionCreators.getHomeData());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);