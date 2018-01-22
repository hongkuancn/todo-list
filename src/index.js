import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { BrowserRouter as Router } from 'react-router-dom';

import './bootstrap.min.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  // <Router>
    <Provider store={store}>
      <App />
    </Provider>,
  // </Router>,
  document.getElementById('root'));
registerServiceWorker();
