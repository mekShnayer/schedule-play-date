import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';

import { BrowserRouter } from 'react-router-dom';
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log('redux store had changed!', store.getState())
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


reportWebVitals();
