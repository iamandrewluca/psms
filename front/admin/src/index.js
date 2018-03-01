import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App"

import * as reducers from './reducers'
import {apiMiddleware} from "redux-api-middleware"

const historySettings = {}

if (process.env.NODE_ENV === `production`) {
  historySettings.basename = '/admin'
}

const history = createHistory(historySettings)

const middlewares = [routerMiddleware(history), thunk, apiMiddleware]

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(...middlewares)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
