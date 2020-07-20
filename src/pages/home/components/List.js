import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    LoadMore,
} from '../style';

class List extends PureComponent {
    render() {
        const {articleList, articlePage, handleMoreList} = this.props;
        return (
            <div>
                {
                    articleList.map((item) => (
                        <ListItem key={item.get('id')}>
                            <Link to={'/detail/' + item.get('id')}>
                                <img
                                    className="list-pic"
                                    src={item.get('imgUrl')}
                                    alt=""
                                />
                            </Link>
                            <ListInfo>
                                <Link to={'/detail/' + item.get('id')}>
                                    <h3 className="title">{item.get('title')}</h3>
                                </Link>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    ))
                }
                <LoadMore onClick={() => handleMoreList(articlePage)}>加载更多</LoadMore>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = (dispatch) => ({
    handleMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);