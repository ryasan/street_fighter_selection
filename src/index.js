import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// theme provider
import { ThemeProvider } from 'styled-components';
import theme from './theme';
// components
import App from './App';

const WRAPPED_APP = (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(WRAPPED_APP, document.getElementById('root'));
