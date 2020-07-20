import React, {Component} from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {GlobalStyle} from "./style";
import {IconFontGlobalStyle} from "./static/iconfont/iconfont";
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <IconFontGlobalStyle/>
                <Router>
                    <Route path="/" exact component={Home}/>
                    <Route path="/detail/:id" exact component={Detail}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/write" exact component={Write}/>
                </Router>
            </Provider>
        )
    }
}

export default App;