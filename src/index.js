import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StrictMode } from 'react/cjs/react.development';
import store from './store';
import './index.css';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);
