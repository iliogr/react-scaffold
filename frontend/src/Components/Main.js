import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../Actions'

class Main extends Component {

    componentWillMount = () => {
    }

    render() {
        return (
            <div id="Main">
                hi
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...actions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
