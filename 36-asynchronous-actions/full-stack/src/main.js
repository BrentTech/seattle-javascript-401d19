import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

import reducer from './reducer'
import App from './component/app'
import thunk from './lib/redux-thunk.js'
import reporter from './lib/redux-reporter.js'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk,reporter),
))

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,container);
