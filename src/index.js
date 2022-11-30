import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';

import { BrowserRouter } from 'react-router-dom';
import testReducer from './redux/reducers/testReducer';
// combineReducers({ rootReducer, testReducer })
const store = createStore(rootReducer);
//for some reason cant combine reducers
store.subscribe(() => {
  console.log('redux store had changed!', store.getState())
  // localStorage.setItem('state', JSON.stringify(store.getState()))
})
store.dispatch({ type: 'GET_STATE' })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
