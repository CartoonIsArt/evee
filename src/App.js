import React, { Component } from 'react';
import './App.css';
import Nav from './containers/Nav'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

import Sider from './containers/Sider'
import Dashboard from './containers/Dashboard'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  /*
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  */
  //reducers,
  applyMiddleware(middleware),
  applyMiddleware(thunk),
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div style={{ background: '#dfdfdf' }}>
            <Nav />
            <div style={{display: 'flex'}}>
              <Sider />
              <div className="Container">
                <Route exact path="/" component={Dashboard} />
              </div>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
