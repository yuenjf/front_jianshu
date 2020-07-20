import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {withRouter} from 'react-router-dom';
import Header from '../../common/header';
import {
    DetailWrapper,
    Title,
    Content
} from './style';

class Detail extends PureComponent {
    render() {
        const {title, content} = this.props;
        return (
            <Fragment>
                <Header/>
                <DetailWrapper>
                    <Title>{title}</Title>
                    <Content
                        dangerouslySetInnerHTML={{__html: content}}
                    />
                </DetailWrapper>
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetailData(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));