import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// components
import App from './App';

const WRAPPED_APP = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(WRAPPED_APP, document.getElementById('root'));
