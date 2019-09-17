import React                                    from 'react'
import ReactDOM                                 from 'react-dom'
import App                                      from './App'
import rootReducer                              from './Reducers'
import { createBrowserHistory }                 from 'history'
import {Provider}                               from 'react-redux'
import {createStore, applyMiddleware, compose}  from 'redux'
import thunk                                    from 'redux-thunk'
import { ConnectedRouter, routerMiddleware }    from 'connected-react-router'

import './Assets/sass/index.scss'
import registerServiceWorker                    from './registerServiceWorker'

export const history    = createBrowserHistory()
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
   rootReducer(history),
   //preloadedState,
   composedEnhancers(
      applyMiddleware(
         routerMiddleware(history),
         thunk
      )
   )
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
