import React, {Component}                          from 'react'
import {BrowserRouter as Router, Route, Redirect}  from 'react-router-dom'
import { withRouter }                              from "react-router";

import {bindActionCreators}                        from 'redux'
import {connect}                                   from 'react-redux'

import * as actions                                from './Actions'
import Main                                        from './Components/Main'

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
    }

    render() {
        return (
            <div id="App">
               <Router>
                  <Route path="/" component={Main}/>
               </Router>
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
