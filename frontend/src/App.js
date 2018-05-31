import React, {Component} from 'react'
import {Route, Redirect, withRouter} from 'react-router-dom'
import Main from './Components/Main'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './Actions'

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
    }

    render() {
        return (
            <div id="App">
                <Route exact="exact" path="/login" component={Main}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...actions
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
